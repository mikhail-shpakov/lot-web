import { useEffect, useRef, useState } from 'preact/hooks'
import { lifeBridge, lifeEpitaph, lifeName } from '../data/repo'
import type { LifeRow } from '../data/store'
import { type Choice, type Entry, heirPossible } from '../domain/life'
import { thingOf } from '../domain/things'
import { region, Tx } from '../domain/world'
import { Thing } from './art'
import { Btn, Card, Chip, Gap, Label, Rule, Sheet, TopBar, useHome } from './kit'
import { cap, type Words } from './words'

/** The register of the life being lived: an entry per page turned, a fork with its doors, and at the end an epitaph. */
export function BookScreen({ onDraw, onArchive, scroller }: { onDraw: (heirOf: number | null) => void; onArchive: () => void; scroller: () => HTMLElement | null }) {
  const { s, w, repo } = useHome()
  const page = s.page
  const cur = s.cur
  // Entries written since the screen opened run in ink; the rest are already dry.
  const [dry, setDry] = useState(page?.entries.length ?? 0)
  const seed = cur?.seed
  useEffect(() => { setDry(s.page?.entries.length ?? 0) }, [seed])
  useEffect(() => {
    const el = scroller()
    if (el) requestAnimationFrame(() => el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' }))
  }, [page?.entries.length, page?.pending, page?.end])

  if (page == null || cur == null) {
    return (
      <div class="col">
        <TopBar title={w.t('Книга', 'The book')} />
        <p class="italic center" style={{ padding: '40px 30px' }}>{w.t('Книга пуста. Сначала вытяни жребий.', 'The book is empty. Draw a lot first.')}</p>
        <div class="pad"><Btn onClick={() => onDraw(null)}>{w.t('К мешку', 'To the sack')}</Btn></div>
      </div>
    )
  }
  const row = cur.lifeId != null ? s.byId.get(cur.lifeId) : undefined
  const gen = row?.gen ?? (page.birth.heir?.gen ?? 0) + 1
  const b = page.birth
  return (
    <div class="col" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <TopBar title={w.t('Книга', 'The book')} end={s.lives.length > 0 ? <Chip on={false} onClick={onArchive}>{w.t('Все книги', 'All books')}</Chip> : undefined} />
      <Register name={b.name} year={b.year} endAge={page.end?.age ?? null} place={b.region.name} gen={gen} witness={cur.witness} entries={page.entries} w={w} dry={dry} />
      {page.pending && <ChoiceCard ch={page.pending} w={w} onPick={(i) => { setDry(page.entries.length); repo.pick(i) }} />}
      {page.end && <>
        {row && <EndCard row={row} />}
        <div class="pad">
          {row && heirPossible(row.year, row.kids) && <><Gap h={4} /><Btn onClick={() => onDraw(row.id)}>{w.t('Тянуть жребий правнука', "Draw a great-grandchild's lot")}</Btn></>}
          <Gap h={8} />
          <Btn kind={row && heirPossible(row.year, row.kids) ? 'ghost' : 'ink'} onClick={() => onDraw(null)}>{w.t('Новый жребий', 'A new lot')}</Btn>
        </div>
      </>}
      <div style={{ flex: 1, minHeight: '12px' }} />
      {page.canTurn && <div class="bottom-bar" style={{ position: 'sticky', bottom: 0 }}>
        <Btn onClick={() => { setDry(page.entries.length); repo.turn() }}>{w.t('Дальше', 'Turn the page')}</Btn>
      </div>}
    </div>
  )
}

const inkMs = (e: Entry, w: Words) => 900 + w.x(e.text).length * 12

/** The parish-book page: a ruled sheet, the name at the top, ages in red, entries in the registrar's hand. */
export function Register({ name, year, endAge, place, gen, witness, entries, w, dry = Infinity }: {
  name: Tx; year: number; endAge: number | null; place: Tx; gen: number; witness: boolean; entries: Entry[]; w: Words; dry?: number
}) {
  // The pen finishes one entry before it starts the next.
  let wait = 0
  return (
    <div class="register">
      <div class="register-head">
        <h2 class="heading">{w.x(name)}</h2>
        <div class="small">{[w.year(year) + (endAge != null ? ' – ' + w.year(year + endAge) : ''), w.x(place),
          gen > 1 ? w.gen(gen) : null, witness ? w.t('свидетель', 'witness') : null].filter(Boolean).join(' · ')}</div>
      </div>
      <Rule dark />
      {entries.map((e, i) => {
        const fresh = i >= dry
        const ms = inkMs(e, w)
        const style = fresh ? { '--ms': `${ms}ms`, '--wait': `${wait}ms` } : undefined
        if (fresh) wait += ms + 150
        const tone = e.mark === 'HIST' || e.mark === 'MEET' ? 'hist' : e.mark === 'DEATH' ? 'death' : ''
        return (
          <div key={i} class={`entry ${e.mark === 'DEATH' ? 'death-rule' : ''}`}>
            <div class={`entry-age ${fresh ? 'ink' : ''}`} style={style}>{e.age}</div>
            <div class={`entry-text entry-lines ${tone} ${fresh ? 'ink' : ''}`} style={style}>{(e.mark === 'MEET' ? '✦ ' : '') + w.x(e.text)}</div>
          </div>
        )
      })}
    </div>
  )
}

/** A fork: the open doors to choose from, and the shut ones with the reason they are shut. */
function ChoiceCard({ ch, w, onPick }: { ch: Choice; w: Words; onPick: (i: number) => void }) {
  const [picked, setPicked] = useState(false)
  // A fork appears where the "turn the page" button just was: a second quick tap must not pick its first door.
  const [armed, setArmed] = useState(false)
  const t = useRef(0)
  useEffect(() => {
    setPicked(false); setArmed(false)
    t.current = window.setTimeout(() => setArmed(true), 700)
    return () => clearTimeout(t.current)
  }, [ch])
  return (
    <div class="choice appear">
      <h3 class="heading">{w.x(ch.q)}</h3>
      {ch.doors.map((d, i) => (
        <button key={i} type="button" class={`door ${d.open ? '' : 'shut'}`} disabled={!d.open || picked}
          onClick={() => { if (!armed || picked) return; setPicked(true); onPick(i) }}>
          <div class="door-text">{w.x(d.text)}</div>
          {d.why && <div class="door-why">{w.x(d.why)}</div>}
        </button>
      ))}
    </div>
  )
}

/** The end of a life: the epitaph, the thing that goes to the chest, and a question for the one reading. */
export function EndCard({ row, onThing }: { row: LifeRow; onThing?: (id: number) => void }) {
  const { s, w, repo, toast } = useHome()
  const thing = s.thing(row.thingId)
  const holders = s.holders(row.thingId)
  const [text, setText] = useState(row.answer)
  useEffect(() => setText(row.answer), [row.id])
  const n = holders.findIndex((l) => l.id === row.id) + 1
  return (
    <div class="endcard">
      <Label>{w.t('Эпитафия', 'Epitaph')}</Label>
      <div class="epitaph">{w.x(lifeEpitaph(row))}</div>
      {thing && <>
        <Rule />
        <button type="button" class="thing-row" style={{ cursor: onThing ? 'pointer' : 'default' }} onClick={() => onThing?.(thing.id)}>
          <Thing shape={thingOf(thing.key).shape} size={56} />
          <div class="meta">
            <Label>{w.t('В сундук', 'To the chest')}</Label>
            <div class="bold">{cap(w.x(thingOf(thing.key).name))}</div>
            <div class="small">{n <= 1 ? w.t('первый владелец', 'first holder') : w.t(`${n}-й владелец: вещь перешла по наследству`, `holder no. ${n}: handed down`)}</div>
          </div>
        </button>
      </>}
      <Rule />
      <div style={{ textAlign: 'left' }}>
        <Label>{w.t('Вопрос тебе', 'A question for you')}</Label>
        <p class="italic" style={{ color: 'var(--ink)', margin: '6px 0 8px' }}>{w.x(lifeBridge(row))}</p>
        <textarea class="field" rows={2} maxLength={400} value={text} placeholder={w.t('Можно не отвечать…', "You don't have to answer…")}
          onInput={(e) => setText((e.target as HTMLTextAreaElement).value)} />
        {text.trim() !== row.answer && <>
          <Gap h={8} />
          <Btn kind="soft" onClick={() => { repo.answer(row.id, text); toast(w.t('Записано. Тетрадка — в атласе.', 'Written down. The notebook is in the atlas.')) }}>
            {w.t('Записать в тетрадку', 'Write it in the notebook')}
          </Btn>
        </>}
      </div>
    </div>
  )
}

/** Every life lived, newest first. */
export function ArchiveSheet({ onLife, onClose }: { onLife: (id: number) => void; onClose: () => void }) {
  const { s, w } = useHome()
  return (
    <Sheet title={w.t('Все книги', 'All books')} onClose={onClose} closeLabel={w.t('Закрыть', 'Close')}>
      <p class="small" style={{ margin: '0 0 8px' }}>{w.t('Каждую можно перечитать: жизнь записана целиком.', 'Each can be read again: the whole life is kept.')}</p>
      {[...s.lives].reverse().map((l) => (
        <div key={l.id} style={{ marginBottom: '8px' }}>
          <Card onClick={() => onLife(l.id)}>
            <div class="bold">{w.x(lifeName(l))}</div>
            <div class="small">{`${w.year(l.year)} – ${w.year(l.year + l.death)} · ${w.x(region(l.region, l.eraI).name)}` + (l.gen > 1 ? ` · ${w.gen(l.gen)}` : '')}</div>
            <div class="write sm" style={{ marginTop: '4px' }}>{w.x(lifeEpitaph(l))}</div>
          </Card>
        </div>
      ))}
    </Sheet>
  )
}

/** One archived life, read again as it was written. */
export function ReadSheet({ id, onThing, onClose }: { id: number; onThing: (id: number) => void; onClose: () => void }) {
  const { s, w, repo } = useHome()
  const row = s.byId.get(id)
  if (!row) return null
  return (
    <Sheet title={w.t('Книга', 'The book')} onClose={onClose} closeLabel={w.t('Закрыть', 'Close')}>
      <div style={{ margin: '0 -12px' }}>
        <Register name={lifeName(row)} year={row.year} endAge={row.death} place={region(row.region, row.eraI).name} gen={row.gen} witness={row.witness} entries={repo.book(row)} w={w} />
        <EndCard row={row} onThing={onThing} />
      </div>
      <Gap h={16} />
    </Sheet>
  )
}
