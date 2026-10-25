import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { type Heir, MARKS, Past, readLife } from '../src/domain/life'
import { pool } from '../src/domain/names'
import { Random } from '../src/domain/random'
import { Tx, Wish } from '../src/domain/world'
import { content } from './load'

/** Lives written by the Android app's own Kotlin engine (test/golden/Golden.kt); the web engine must write the same books. */
const golden = JSON.parse(readFileSync(join(__dirname, 'golden', 'golden.json'), 'utf8'))

describe('the Kotlin engine, replayed', () => {
  it('counts the same content', () => {
    expect([content.lines.length, content.hist.length, content.dilemmas.length]).toEqual([2415, 465, 155])
  })

  it('draws the same random numbers', () => {
    const r = new Random(42n)
    const got: unknown[] = []
    for (let i = 0; i < 20; i++) got.push(r.nextInt(), r.nextIntUntil(7), r.nextDouble(), r.nextBoolean(), String(r.nextLong()))
    expect(got).toEqual(golden.rand)
  })

  const wishes = [new Wish(), new Wish(null, 'eu'), new Wish(1, 'in', 'F'), new Wish(null, 'ru')]
  const heir: Heir = {
    lifeId: 1, name: new Tx('Анна Иванова', 'Anna Ivanova'), sex: 'F', year: 1700, region: 'ru', cult: 'ru', rank: 1, wealth: 2, sur: pool('ru').sur[0],
    thingId: 5, thing: new Tx('ложка', 'a spoon'), story: new Tx('о говорящей сороке', 'about the talking magpie'), dynasty: '11', gen: 1, readers: true,
  }
  const past = new Past(new Set(['Зимой умерли двое младших. Мать долго молчала.']), new Set([1, 2, 3]))

  it('writes the same 600 lives', () => {
    for (const g of golden.lives) {
      const n: number = g.n
      const p = readLife(content, BigInt(g.seed), n % 7 === 3 ? heir : null, g.picks, g.shown, n % 6 === 5, n % 9 === 4 ? past : Past.NONE, wishes[n % 4])
      const b = p.birth
      const e = p.end!
      expect(e, `life ${n} did not end`).toBeTruthy()
      expect({
        era: b.era.i, region: b.region.key, cult: b.cult, estate: b.estate.key, sex: b.sex, year: b.year, name: [b.name.ru, b.name.en], share: b.share,
        entries: p.entries.map((x) => [x.age, MARKS.indexOf(x.mark), x.text.ru, x.text.en]),
        end: {
          age: e.age, epitaph: [e.epitaph.ru, e.epitaph.en], bridge: [e.bridge.ru, e.bridge.en], thing: e.thing?.key ?? null, kids: e.kidsAlive,
          wealth: e.wealth, rank: e.rank, lit: e.lit, sea: e.sawSea, meet: e.meet, story: e.story ? [e.story.ru, e.story.en] : null, seen: e.seen,
        },
      }, `life ${n}`).toEqual({
        era: g.era, region: g.region, cult: g.cult, estate: g.estate, sex: g.sex, year: g.year, name: g.name, share: g.share, entries: g.entries, end: g.end,
      })
    }
  })
})
