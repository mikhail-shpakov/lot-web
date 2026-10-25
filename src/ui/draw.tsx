import { useEffect, useRef, useState } from 'preact/hooks'
import { type Birth, heirPossible } from '../domain/life'
import { areaOf, AREAS, ERAS, fits, Wish } from '../domain/world'
import { Stage } from './art'
import { Btn, buzz, Card, Chip, Dialog, Gap, Label, Rule, TopBar, useHome } from './kit'
import type { Words } from './words'

const ease = (t: number) => 1 - Math.pow(1 - t, 3)

/** Plays the draw: the sack shakes, then the tag rises out of it. Runs only for a lot drawn a moment ago. */
function useDraw(key: string | null, fresh: boolean, heir: boolean) {
  const [shake, setShake] = useState(0)
  const [rise, setRise] = useState(key ? 1 : 0)
  const [shown, setShown] = useState(key != null)
  const frame = useRef(0)
  useEffect(() => {
    cancelAnimationFrame(frame.current)
    if (!key || !fresh) { setShake(0); setRise(key ? 1 : 0); setShown(key != null); return }
    setShown(false)
    setRise(0)
    const shakes = heir ? [] : [-6, 5, -4, 3, -1.5, 0]
    const steps = shakes.map((a, i) => ({ a, ms: i === 0 ? 120 : 140 }))
    const shakeMs = steps.reduce((s, x) => s + x.ms, 0)
    const start = performance.now()
    const tick = (now: number) => {
      const t = now - start
      if (t < shakeMs) {
        let acc = 0
        let from = 0
        for (const s of steps) {
          if (t < acc + s.ms) { setShake(from + (s.a - from) * ease((t - acc) / s.ms)); break }
          acc += s.ms
          from = s.a
        }
      } else {
        setShake(0)
        if (t - shakeMs < 20) buzz(30)
        const u = Math.min((t - shakeMs) / 1100, 1)
        setRise(ease(u))
        if (u >= 1) { setShown(true); return }
      }
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [key])
  return { shake, rise, shown }
}

/** The sack: pull a lot, watch the tag rise, read who you are. */
export function DrawScreen({ onDraw, onBook, onSettings }: { onDraw: (heirOf: number | null) => void; onBook: () => void; onSettings: () => void }) {
  const { s, w, repo } = useHome()
  const cur = s.cur
  const page = s.page
  const key = cur ? `${cur.seed}:${cur.drawnAt}` : null
  const { shake, rise, shown } = useDraw(key, cur != null && Date.now() - cur.drawnAt < 4000, cur?.heirOf != null)
  const [ask, setAsk] = useState(false)
  const birth = page?.birth
  const tag = birth ? w.tag(birth) : null
  const ended = page?.end != null
  const last = cur?.lifeId != null ? s.byId.get(cur.lifeId) : undefined
  const heir = last != null && heirPossible(last.year, last.kids)
  const witness = s.settings.witness
  const setWitness = (v: boolean) => repo.settings((x) => ({ ...x, witness: v }))

  return (
    <div class="col">
      <TopBar title={w.t('Жребий', 'Lot')} sub={w.t('Ты — один из ста семнадцати миллиардов людей, когда-либо живших на Земле. Кем именно — решит жребий.',
        'You are one of the 117 billion people who have ever lived. Which one, the lot decides.')}
        end={<button type="button" class="icon-btn" aria-label={w.t('Настройки', 'Settings')} onClick={onSettings}><Gear /></button>} />
      <div style={{ padding: '0 24px' }}><Stage shake={shake} rise={rise} tag={tag} seed={cur ? BigInt(cur.seed) : 0n} /></div>
      <div class="pad">
        {page == null || ended ? (
          <>
            {last != null && page != null && <><Reveal b={page.birth} w={w} ended /><Gap h={8} /></>}
            {heir && <><Btn onClick={() => onDraw(last!.id)}>{w.t('Тянуть жребий правнука', "Draw a great-grandchild's lot")}</Btn><Gap h={8} /></>}
            <Btn kind={heir ? 'ghost' : 'ink'} onClick={() => { buzz(10); onDraw(null) }}>{w.t('Тянуть жребий', 'Draw a lot')}</Btn>
            <Gap />
            <WishPanel />
            <Gap />
            <div class="flow">
              <Chip on={!witness} onClick={() => setWitness(false)}>{w.t('жить и выбирать', 'live and choose')}</Chip>
              <Chip on={witness} onClick={() => setWitness(true)}>{w.t('быть свидетелем', 'be a witness')}</Chip>
            </div>
            <p class="small" style={{ marginTop: '6px' }}>{witness ? w.t('Свидетель не выбирает: за него решает судьба. Ты только читаешь.', 'A witness does not choose: fate decides. You only read.')
              : w.t('На развилках выбираешь ты — из тех дверей, что открыты для тебя.', 'At each fork you choose, from the doors that are open to you.')}</p>
          </>
        ) : shown && (
          <div style={{ animation: 'appear .5s ease-out both' }}>
            <Reveal b={page.birth} w={w} ended={false} />
            <Gap />
            <Btn onClick={onBook}>{page.entries.length <= 2 ? w.t('Открыть книгу', 'Open the book') : w.t('Читать дальше', 'Read on')}</Btn>
            <Gap h={8} />
            <Btn kind="ghost" onClick={() => setAsk(true)}>{w.t('Тянуть другой жребий', 'Draw another lot')}</Btn>
            <Gap />
            <WishPanel />
          </div>
        )}
        <Gap h={18} />
        {s.lives.length > 0 && <>
          <Rule />
          <p class="small" style={{ margin: '10px 0' }}>{w.t(`Прожито жизней: ${s.lives.length} · лет на всех: ${s.lives.reduce((a, l) => a + l.death, 0)}`,
            `Lives lived: ${s.lives.length} · years in all: ${s.lives.reduce((a, l) => a + l.death, 0)}`)}</p>
        </>}
        <Gap />
      </div>
      {ask && page && (
        <Dialog title={w.t('Оставить эту жизнь?', 'Leave this life?')} actions={<>
          <button type="button" class="link-btn" style={{ color: 'var(--ink)' }} onClick={() => setAsk(false)}>{w.t('Читать дальше', 'Read on')}</button>
          <button type="button" class="link-btn red" onClick={() => { setAsk(false); onDraw(null) }}>{w.t('Тянуть другой', 'Draw another')}</button>
        </>}>
          {w.t(`${w.x(page.birth.name)} останется недочитанной книгой: в архив, атлас и сундук она не попадёт.`,
            `${w.x(page.birth.name)} will stay an unfinished book: it won't go to the archive, the atlas or the chest.`)}
        </Dialog>
      )}
    </div>
  )
}

const Gear = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
)

function asked(wish: Wish, w: Words) {
  return [
    wish.eraI != null ? w.x(ERAS[wish.eraI].name) : null,
    wish.area != null ? (areaOf(wish.area) ? w.x(areaOf(wish.area)!.name) : null) : null,
    wish.sex != null ? (wish.sex === 'M' ? w.t('мальчик', 'a boy') : w.t('девочка', 'a girl')) : null,
  ].filter((x): x is string => x != null)
}

/**
 * The optional wish before the draw: an era, a part of the world, a sex. Folded away by default, and the folded line says what
 * is asked. Combinations that never existed (Russia in the Stone Age) are greyed out.
 */
function WishPanel() {
  const { s, w, repo } = useHome()
  const wish = s.wish
  const [open, setOpen] = useState(false)
  const set = (f: (x: Wish) => Wish) => repo.settings((x) => ({ ...x, wish: f(Wish.decode(x.wish)).encode() }))
  const a = asked(wish, w)
  return (
    <>
      <button type="button" class="wish-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span class="bold" style={{ flex: 1 }}>{a.length === 0 ? w.t('Жребий из всех людей', 'A lot from everyone') : w.t('Жребий: ', 'Lot: ') + a.join(' · ')}</span>
        <span class="small red">{open ? w.t('свернуть', 'fold') : w.t('выбрать', 'choose')}</span>
      </button>
      {open && <>
        <p class="small" style={{ margin: '0 0 6px' }}>{w.t('Можно сузить жребий. Внутри выбранного он тянет по тем же честным весам.', 'You can narrow the lot. Within what you choose it keeps the same fair weights.')}</p>
        <Label style={{ margin: '6px 0 4px' }}>{w.t('Эпоха', 'Era')}</Label>
        <div class="flow">
          <Chip on={wish.eraI == null} onClick={() => set((x) => x.copy({ eraI: null }))}>{w.t('любая', 'any')}</Chip>
          {ERAS.map((e) => <Chip key={e.i} on={wish.eraI === e.i} disabled={!fits(e.i, wish.area)} onClick={() => set((x) => x.copy({ eraI: e.i }))}>{w.x(e.name)}</Chip>)}
        </div>
        <Label style={{ margin: '10px 0 4px' }}>{w.t('Где', 'Where')}</Label>
        <div class="flow">
          <Chip on={wish.area == null} onClick={() => set((x) => x.copy({ area: null }))}>{w.t('где угодно', 'anywhere')}</Chip>
          {AREAS.map((ar) => <Chip key={ar.key} on={wish.area === ar.key} disabled={!fits(wish.eraI, ar.key)} onClick={() => set((x) => x.copy({ area: ar.key }))}>{w.x(ar.name)}</Chip>)}
        </div>
        <Label style={{ margin: '10px 0 4px' }}>{w.t('Кем родиться', 'Born as')}</Label>
        <div class="flow">
          <Chip on={wish.sex == null} onClick={() => set((x) => x.copy({ sex: null }))}>{w.t('как выпадет', 'as it falls')}</Chip>
          <Chip on={wish.sex === 'M'} onClick={() => set((x) => x.copy({ sex: 'M' }))}>{w.t('мальчиком', 'a boy')}</Chip>
          <Chip on={wish.sex === 'F'} onClick={() => set((x) => x.copy({ sex: 'F' }))}>{w.t('девочкой', 'a girl')}</Chip>
        </div>
        {!wish.any && <button type="button" class="more" style={{ fontWeight: 400, fontSize: '13px', padding: '12px 0 4px' }} onClick={() => set(() => new Wish())}>{w.t('Сбросить', 'Clear')}</button>}
      </>}
    </>
  )
}

/** Who the lot made you, and how likely that was. */
export function Reveal({ b, w, ended }: { b: Birth; w: Words; ended: boolean }) {
  const { s } = useHome()
  const wish = s.cur ? Wish.decode(s.cur.wish) : new Wish()
  const before = s.lives.filter((l) => l.eraI === b.era.i).length
  return (
    <Card>
      <Label>{`${w.x(b.era.name)} · ${w.x(b.era.span)}`}</Label>
      <div class="title" style={{ marginTop: '4px' }}>{w.x(b.name)}</div>
      <p style={{ margin: '4px 0 0' }}>{w.born(b)}</p>
      {!wish.any && b.heir == null && <p class="italic" style={{ margin: '4px 0 0' }}>{w.t('Жребий из выбранного: ', 'A lot from your choice: ') + asked(wish, w).join(' · ')}</p>}
      {b.heir && <p class="italic" style={{ margin: '4px 0 0' }}>{w.t(`Жребий правнука: ${b.heir.name.ru}, ${w.gen(b.heir.gen + 1)}.`, `A great-grandchild's lot: ${b.heir.name.en}, ${w.gen(b.heir.gen + 1)}.`)}</p>}
      {ended ? (
        s.page?.end && <p class="bold" style={{ margin: '6px 0 0' }}>{w.t(`Прожито: ${w.lived(s.page.end.age)}.`, `Lived: ${w.lived(s.page.end.age)}.`)}</p>
      ) : (
        <>
          <div class="odds">
            <Odd value={w.pct(b.share)} label={w.t('всех живших — такие, как ты', 'of everyone who ever lived were like you')} />
            <Odd value={w.people(b.share)} label={w.t('родились в такой же доле', 'were born to the same lot')} />
            <Odd value={w.pct(b.survive5)} label={w.t('детей здесь доживают до пяти', 'of children here live to five')} />
            <Odd value={w.pct(b.literacy)} label={w.t('вокруг умеют читать', 'of the people around can read')} />
          </div>
          {before > 0 && <p class="small" style={{ margin: '10px 0 0' }}>{w.t(`В эту эпоху ты рождаешься уже не впервые: до этого ${w.n(before, 'раз', 'раза', 'раз', '', '')}.`,
            `You have been born in this era ${before === 1 ? 'once' : `${before} times`} before.`)}</p>}
        </>
      )}
    </Card>
  )
}

const Odd = ({ value, label }: { value: string; label: string }) => (
  <div class="odd"><Rule /><div class="big">{value}</div><div class="small">{label}</div></div>
)
