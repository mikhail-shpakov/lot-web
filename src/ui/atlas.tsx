import { useState } from 'preact/hooks'
import { lifeBridge, lifeName } from '../data/repo'
import type { Hist } from '../domain/content'
import { eraOf, ERAS, region, TOTAL } from '../domain/world'
import { type Pin, WorldMap } from './art'
import { Gap, Rule, TopBar, useHome } from './kit'

/** The slider is slow through the Stone Age and fine-grained near now, where the years are crowded with people. */
function toYear(u: number): number {
  if (u < 0.3) return Math.trunc(-50000 + 42000 * u / 0.3)
  if (u < 0.55) return Math.trunc(-8000 + 9000 * (u - 0.3) / 0.25)
  if (u < 0.8) return Math.trunc(1000 + 800 * (u - 0.55) / 0.25)
  return Math.trunc(1800 + 226 * (u - 0.8) / 0.2)
}

/** Where you were born across the ages, how your lots compare with everyone ever born, the people met, and your own answers. */
export function AtlasScreen({ onLife }: { onLife: (id: number) => void }) {
  const { s, w, repo } = useHome()
  const lives = s.lives
  const [u, setU] = useState(1)
  const [picked, setPicked] = useState<number | null>(null)
  const [all, setAll] = useState(false)
  const until = toYear(u)
  const shown = lives.filter((l) => u >= 1 || l.year <= until)
  const pins: Pin[] = shown.map((l) => {
    const r = region(l.region, l.eraI)
    return { lon: r.lon, lat: r.lat, color: ERAS[l.eraI].color, infant: l.death < 5, jitter: l.id, on: l.id === picked, id: l.id }
  })
  const pick = shown.find((l) => l.id === picked)

  const n = Math.max(lives.length, 1)
  const max = Math.max(...ERAS.map((e) => e.births / TOTAL))
  const hist = repo.content.hist
  const seen = s.seen
  const said = (e: Hist) => w.x(e.text.g(seen.get(e.id)?.sex ?? 'M'))
  // The encounters: people later written about, met in passing; the unmet ones wait as a count.
  const meets = hist.filter((h) => h.meet)
  const met = meets.filter((h) => seen.has(h.id)).sort((a, b) => a.mid - b.mid)
  const lived = hist.filter((h) => seen.has(h.id) && !h.meet).sort((a, b) => a.mid - b.mid)
  const answered = lives.filter((l) => l.answer.trim() !== '').reverse()

  return (
    <div class="col">
      <TopBar title={w.t('Атлас', 'Atlas')} sub={lives.length === 0 ? w.t('Здесь появятся места твоих рождений.', 'Your birthplaces will appear here.')
        : w.t(`Жизней: ${lives.length}. Каждая точка — место рождения.`, `Lives: ${lives.length}. Each dot is a birthplace.`)} />
      <div class="map"><WorldMap pins={pins} onPick={setPicked} /></div>
      {pick && (
        <button type="button" class="note-pick" onClick={() => onLife(pick.id)}>
          <span class="dot" style={{ background: ERAS[pick.eraI].color }} />
          <span style={{ marginLeft: '10px', flex: 1 }}>
            <div class="bold">{w.x(lifeName(pick))}</div>
            <div class="small">{`${w.year(pick.year)} – ${w.year(pick.year + pick.death)} · ${w.x(ERAS[pick.eraI].name)} · ${w.x(region(pick.region, pick.eraI).name)}`}</div>
          </span>
          <span class="small red" style={{ marginLeft: '8px' }}>{w.t('Книга ›', 'Book ›')}</span>
        </button>
      )}
      <div class="slider-row">
        <span class="small">{u >= 1 ? w.t('все жизни', 'all lives') : w.t('до ', 'until ') + w.year(until)}</span>
        <input type="range" class="time" min={0} max={1000} value={Math.round(u * 1000)} style={{ '--u': `${u * 100}%` }}
          aria-label={w.t('Время', 'Time')} onInput={(e) => setU(Number((e.target as HTMLInputElement).value) / 1000)} />
      </div>

      <div class="pad">
        <Gap h={14} />
        <h2 class="heading">{w.t('Перепись', 'Census')}</h2>
        <p class="small" style={{ margin: 0 }}>{w.t('Твои жребии рядом с настоящим распределением всех, кто когда-либо родился.', 'Your lots next to the real spread of everyone ever born.')}</p>
        <Gap h={8} />
        <div class="small" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '12px', height: '8px', background: 'var(--paperLo)' }} />{w.t('все люди', 'everyone')}
          <span style={{ width: '12px', height: '5px', background: 'var(--red)', marginLeft: '12px' }} />{w.t('твои жребии', 'your lots')}
        </div>
        {ERAS.map((e) => {
          const mine = lives.filter((l) => l.eraI === e.i).length
          return (
            <div key={e.i} class="census-row">
              <span class="dot" style={{ width: '8px', height: '8px', background: e.color }} />
              <span class="census-name">{w.x(e.name)}</span>
              <span class="census-bar">
                <span class="census-all" style={{ width: `${e.births / TOTAL / max * 100}%` }} />
                <span class="census-mine" style={{ width: `${Math.min(mine / n / max, 1) * 100}%` }} />
              </span>
              <span class="census-n">{mine}</span>
            </div>
          )
        })}
        {lives.length > 0 && <p class="small" style={{ margin: '6px 0 0' }}>{w.t(
          `Не дожили до пяти лет: ${lives.filter((l) => l.death < 5).length} из ${lives.length}. Видели море: ${lives.filter((l) => l.sawSea).length}. Умели читать: ${lives.filter((l) => l.lit).length}.`,
          `Died before five: ${lives.filter((l) => l.death < 5).length} of ${lives.length}. Saw the sea: ${lives.filter((l) => l.sawSea).length}. Could read: ${lives.filter((l) => l.lit).length}.`)}</p>}

        <Gap h={18} />
        <h2 class="heading">{w.t(`Встречи · ${met.length} из ${meets.length}`, `Encounters · ${met.length} of ${meets.length}`)}</h2>
        <p class="small" style={{ margin: 0 }}>{w.t('Те, о ком потом писали книги, — увиденные мимоходом. Остальные ждут в других веках и странах.',
          'People later written about, seen in passing. The rest wait in other centuries and lands.')}</p>
        {met.map((e) => { const l = seen.get(e.id)!; return <Note key={e.id} head={`${w.x(lifeName(l))}, ${w.year(l.year)}`} body={said(e)} onClick={() => onLife(l.id)} /> })}

        <Gap h={18} />
        <h2 class="heading">{w.t(`Летопись · ${seen.size} из ${hist.length}`, `Chronicle · ${seen.size} of ${hist.length}`)}</h2>
        <p class="small" style={{ margin: 0 }}>{w.t('Настоящие события, которые застали твои жизни.', 'Real events your lives have lived through.')}</p>
        <Gap h={6} />
        {ERAS.map((e) => {
          const inEra = hist.filter((h) => eraOf(h.mid).i === e.i)
          if (inEra.length === 0) return null
          return (
            <div key={e.i} style={{ display: 'flex', alignItems: 'center', padding: '3px 0' }}>
              <span class="dot" style={{ width: '8px', height: '8px', background: e.color }} />
              <span class="small" style={{ color: 'var(--ink)', marginLeft: '6px', flex: 1 }}>{w.x(e.name)}</span>
              <span class="small">{`${inEra.filter((h) => seen.has(h.id)).length} / ${inEra.length}`}</span>
            </div>
          )
        })}
        {(all ? lived : lived.slice(0, 6)).map((e) => {
          const l = seen.get(e.id)!
          return <Note key={e.id} head={w.year(e.from) + (e.to !== e.from ? ' – ' + w.year(e.to) : '') + ' · ' + w.x(lifeName(l))} body={said(e)} onClick={() => onLife(l.id)} />
        })}
        {lived.length > 6 && <button type="button" class="more" onClick={() => setAll(!all)}>{all ? w.t('Свернуть', 'Show less') : w.t(`Вся летопись (${lived.length})`, `The whole chronicle (${lived.length})`)}</button>}

        <Gap h={18} />
        <h2 class="heading">{w.t('Тетрадка', 'Notebook')}</h2>
        <p class="small" style={{ margin: 0 }}>{w.t('Ответы на вопросы, которые жизни задали тебе.', 'Your answers to the questions the lives asked you.')}</p>
        {answered.length === 0 && <p class="italic" style={{ margin: '10px 0' }}>{w.t('Пока пусто.', 'Nothing yet.')}</p>}
        {answered.map((l) => <Note key={l.id} head={`${w.x(lifeBridge(l))} — ${w.x(lifeName(l))}, ${w.year(l.year)}`} body={l.answer} onClick={() => onLife(l.id)} />)}
        <Gap h={24} />
      </div>
    </div>
  )
}

function Note({ head, body, onClick }: { head: string; body: string; onClick: () => void }) {
  return (
    <button type="button" class="note" onClick={onClick}>
      <div class="small italic">{head}</div>
      <div class="write">{body}</div>
      <Rule />
    </button>
  )
}
