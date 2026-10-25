import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import type { Repo, State } from '../data/repo'
import { Stage } from './art'
import { AtlasScreen } from './atlas'
import { ArchiveSheet, BookScreen, ReadSheet } from './book'
import { ChestScreen, ThingSheet } from './chest'
import { DrawScreen } from './draw'
import { Btn, Gap, type Home, HomeCtx, useHome } from './kit'
import { SettingsSheet } from './settings'
import { Words } from './words'

type Tab = 'draw' | 'book' | 'chest' | 'atlas'
type Overlay = { k: 'settings' } | { k: 'archive' } | { k: 'read'; id: number } | { k: 'thing'; id: number }

const browserRu = () => (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase().startsWith('ru')

export function App({ repo }: { repo: Repo }) {
  const [s, setS] = useState<State>(repo.state)
  useEffect(() => repo.subscribe(setS), [repo])
  const ru = s.settings.lang ? s.settings.lang === 'ru' : browserRu()
  const w = new Words(ru)
  useEffect(() => { document.documentElement.lang = ru ? 'ru' : 'en'; document.title = ru ? 'Жребий' : 'Lot' }, [ru])

  const [toastText, setToast] = useState<string | null>(null)
  const timer = useRef(0)
  const toast = useCallback((t: string) => { setToast(t); clearTimeout(timer.current); timer.current = window.setTimeout(() => setToast(null), 3000) }, [])
  const home: Home = { s, w, repo, toast }

  const [tab, setTab] = useState<Tab>(s.page && s.page.end == null ? 'book' : 'draw')
  const [overlays, setOverlays] = useState<Overlay[]>([])
  const push = (o: Overlay) => setOverlays((x) => [...x, o])
  const pop = useCallback(() => setOverlays((x) => x.slice(0, -1)), [])
  const screen = useRef<HTMLDivElement>(null)
  const go = (t: Tab) => { setTab(t); screen.current?.scrollTo({ top: 0 }) }

  /** A new lot, or a great-grandchild's: watched being drawn on the first tab. */
  const draw = (heirOf: number | null) => {
    go('draw')
    repo.draw(s.settings.witness, heirOf, s.wish)
  }

  if (!s.settings.onboarded) return <HomeCtx.Provider value={home}><Onboarding /></HomeCtx.Provider>

  const o = overlays[overlays.length - 1]
  return (
    <HomeCtx.Provider value={home}>
      <div class={`shell paper ${s.settings.hand ? 'hand' : 'print'}`}>
        <div class="screen" ref={screen}>
          {tab === 'draw' && <DrawScreen onDraw={draw} onBook={() => go('book')} onSettings={() => push({ k: 'settings' })} />}
          {tab === 'book' && <BookScreen onDraw={draw} onArchive={() => push({ k: 'archive' })} scroller={() => screen.current} />}
          {tab === 'chest' && <ChestScreen onThing={(id) => push({ k: 'thing', id })} />}
          {tab === 'atlas' && <AtlasScreen onLife={(id) => push({ k: 'read', id })} />}
        </div>
        <nav class="tabbar"><div class="tabbar-in">
          {([['draw', 'Жребий', 'Lot'], ['book', 'Книга', 'Book'], ['chest', 'Сундук', 'Chest'], ['atlas', 'Атлас', 'Atlas']] as const).map(([t, r, e]) => (
            <button key={t} type="button" class={`tab ${tab === t ? 'on' : ''}`} aria-current={tab === t ? 'page' : undefined} onClick={() => go(t)}>{w.t(r, e)}</button>
          ))}
        </div></nav>
        {o?.k === 'settings' && <SettingsSheet onClose={pop} />}
        {o?.k === 'archive' && <ArchiveSheet onLife={(id) => push({ k: 'read', id })} onClose={pop} />}
        {o?.k === 'read' && <ReadSheet id={o.id} onThing={(id) => push({ k: 'thing', id })} onClose={pop} />}
        {o?.k === 'thing' && <ThingSheet id={o.id} onLife={(id) => push({ k: 'read', id })} onClose={pop} />}
        {toastText && <div class="toast" role="status" onClick={() => setToast(null)}>{toastText}</div>}
      </div>
    </HomeCtx.Provider>
  )
}

/** Two pages: the sack and the 117 billion, then how a life is read. */
function Onboarding() {
  const [page, setPage] = useState(0)
  const { w, repo } = useHome()
  return (
    <div class="shell paper">
      <div class="screen">
        <div class="col" style={{ padding: '18px 22px' }}>
          {page === 0 ? <>
            <Stage shake={0} rise={1} seed={3n} height={280}
              tag={{ year: w.t('ок. 1350', 'c. 1350'), place: w.t('Китай', 'China'), family: w.t('в семье крестьян', 'born to peasants'), sex: w.t('девочка', 'a girl') }} />
            <Gap />
            <h1 class="title">{w.t('Один из ста семнадцати миллиардов', 'One of 117 billion')}</h1>
            <Gap h={8} />
            <p>{w.t('Столько людей, по оценкам, родилось на Земле за всю её историю. Мешок вытягивает тебе одного из них — честно, с весами эпох, мест и сословий.',
              'That is roughly how many people have ever been born. The sack draws you one of them, fairly, weighted by era, place and station.')}</p>
            <p>{w.t('Поэтому чаще всего ты родишься крестьянином задолго до 1800 года. Почти половина не доживёт до пяти. Дожить до старости — уже удача.',
              'So most often you are born a peasant long before 1800. Nearly half do not live to five. Reaching old age is luck already.')}</p>
            <Gap h={12} />
            <Btn onClick={() => setPage(1)}>{w.t('Дальше', 'Next')}</Btn>
            <Gap h={10} />
            <div class="flow" style={{ justifyContent: 'center' }}>
              <button type="button" class="link-btn small" style={{ fontWeight: 400 }} onClick={() => repo.settings((x) => ({ ...x, lang: w.ru ? 'en' : 'ru' }))}>{w.ru ? 'English' : 'Русский'}</button>
            </div>
          </> : <>
            <h1 class="title">{w.t('Как читается жизнь', 'How a life is read')}</h1>
            <Gap h={14} />
            {[
              [w.t('Книга', 'The book'), w.t('Жизнь записывается в метрическую книгу. Каждое «дальше» — несколько лет: детство, работа, свадьба, беды, старость. Настоящая история приходит сбоку — слухами, ценой хлеба, войском у околицы.',
                'A life is written into a parish register. Each page turned is a few years: childhood, work, marriage, hard times, old age. Real history arrives from the side: as rumours, the price of bread, an army at the edge of the village.')],
              [w.t('Двери', 'Doors'), w.t('На развилках видны все двери, но часть закрыта — и написано почему. «Девочек грамоте не учат». «Ты не свободен уйти». Неравенство без нотаций.',
                'At each fork every door is shown, but some are shut, and it says why. "Girls are not taught their letters." "You are not free to leave." Inequality, without a lecture.')],
              [w.t('Сундук и правнуки', 'The chest and the great-grandchildren'), w.t('Каждая жизнь оставляет вещь. Можно вытянуть жребий правнука: он унаследует фамилию, место, достаток — и ту же вещь, на которой копятся поколения.',
                'Each life leaves a thing. You can draw a great-grandchild\'s lot: they inherit the name, the place, the family\'s means, and the same thing, gathering generations.')],
              [w.t('Вопрос тебе', 'A question for you'), w.t('В конце жизнь задаёт один тихий вопрос — про тебя сегодняшнего. Ответы складываются в тетрадку в атласе.',
                'At the end a life asks one quiet question, about you today. The answers gather in a notebook in the atlas.')],
            ].map(([h, b]) => <div key={h}><h2 class="heading">{h}</h2><p style={{ margin: '2px 0 12px' }}>{b}</p></div>)}
            <Gap />
            <Btn onClick={() => repo.settings((x) => ({ ...x, onboarded: true }))}>{w.t('К мешку', 'To the sack')}</Btn>
          </>}
        </div>
      </div>
    </div>
  )
}
