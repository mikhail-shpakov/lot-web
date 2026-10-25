import { lifeEpitaph, lifeName } from '../data/repo'
import { thingOf } from '../domain/things'
import { region } from '../domain/world'
import { Thing } from './art'
import { Card, Sheet, TopBar, useHome } from './kit'
import { cap } from './words'

/** Every life leaves one thing; a family line hands its thing down. */
export function ChestScreen({ onThing }: { onThing: (id: number) => void }) {
  const { s, w } = useHome()
  const list = [...s.things].reverse()
  const handed = list.filter((t) => s.holders(t.id).length > 1).length
  return (
    <div class="col">
      <TopBar title={w.t('Сундук', 'The chest')} sub={w.t('Каждая жизнь оставляет одну вещь. Если тянуть правнуков, вещь переходит по наследству.',
        'Each life leaves one thing behind. Draw great-grandchildren and the thing is handed down.')} />
      {list.length === 0 ? <p class="italic center" style={{ padding: '40px' }}>{w.t('Сундук пуст.', 'The chest is empty.')}</p> : (
        <div class="grid3">
          {handed > 0 && <div class="span small">{w.t(`Переходили по наследству: ${handed}`, `Handed down: ${handed}`)}</div>}
          {list.map((t) => {
            const k = thingOf(t.key)
            const holders = s.holders(t.id)
            return (
              <button key={t.id} type="button" class={`cell ${holders.length > 1 ? 'handed' : ''}`} onClick={() => onThing(t.id)}>
                <Thing shape={k.shape} size={54} />
                <div class="cell-name">{cap(w.x(k.name))}</div>
                <div class="cell-sub">{holders.length > 1 ? w.n(holders.length, 'поколение', 'поколения', 'поколений', 'generation', 'generations') : holders[0] ? w.year(holders[0].year) : ''}</div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

/** One thing and everyone who held it. */
export function ThingSheet({ id, onLife, onClose }: { id: number; onLife: (id: number) => void; onClose: () => void }) {
  const { s, w } = useHome()
  const t = s.thing(id)
  if (!t) return null
  const k = thingOf(t.key)
  const holders = s.holders(id)
  return (
    <Sheet title={cap(w.x(k.name))} onClose={onClose} closeLabel={w.t('Закрыть', 'Close')}>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Thing shape={k.shape} size={110} /></div>
      <p class="italic center" style={{ margin: '8px 0' }}>{holders.length > 1
        ? w.t(`Переходила из рук в руки: ${w.n(holders.length, 'поколение', 'поколения', 'поколений', '', '')}.`, `Passed from hand to hand: ${holders.length} generations.`)
        : w.t('Одна жизнь.', 'One life.')}</p>
      {holders.map((l, i) => (
        <div key={l.id} style={{ marginBottom: '8px' }}>
          <Card onClick={() => onLife(l.id)}>
            <div style={{ display: 'flex' }}>
              <div class="entry-age" style={{ width: '28px', textAlign: 'left', margin: 0 }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div class="bold">{w.x(lifeName(l))}</div>
                <div class="small">{`${w.year(l.year)} – ${w.year(l.year + l.death)} · ${w.x(region(l.region, l.eraI).name)}`}</div>
                <div class="write sm" style={{ marginTop: '4px' }}>{w.x(lifeEpitaph(l))}</div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </Sheet>
  )
}
