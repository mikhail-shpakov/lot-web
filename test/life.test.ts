import { describe, expect, it } from 'vitest'
import { type Entry, type Heir, liveLife, readLife } from '../src/domain/life'
import { genitive, pool } from '../src/domain/names'
import { Random } from '../src/domain/random'
import { ERAS, fits, TOTAL, Tx, Wish } from '../src/domain/world'
import { content } from './load'

/** The invariants of the Android app's LifeTest, run against the web engine. */
const openDoors = (ch: { doors: { open: boolean }[] }) => ch.doors.map((_, i) => i).filter((i) => ch.doors[i].open)

describe('a life', () => {
  it('replays the same life', () => {
    const [a, picks] = liveLife(content, 42n, null, (ch, i) => { const o = openDoors(ch); return o[i % o.length] })
    const b = readLife(content, 42n, null, picks, Number.MAX_SAFE_INTEGER, false)
    expect(b.entries).toEqual(a.entries)
    expect(b.end!.epitaph).toEqual(a.end!.epitaph)
  })

  it('always ends, and every fork has an open door', () => {
    const rnd = new Random(5n)
    for (let n = 0; n < 1500; n++) {
      const [p] = liveLife(content, BigInt(n), null, (ch) => { const o = openDoors(ch); expect(o.length).toBeGreaterThan(0); return rnd.pick(o) }, { witness: n % 4 === 0 })
      const end = p.end!
      expect(end.age).toBeGreaterThanOrEqual(0)
      expect(end.age).toBeLessThanOrEqual(100)
      const last = p.entries[p.entries.length - 1].text.ru
      expect(last.startsWith('Умер') || last.startsWith('Сейчас')).toBe(true)
      expect(new Set(end.seen).size).toBe(end.seen.length)
      for (const e of p.entries) {
        expect(e.text.ru.includes('{') || e.text.en.includes('{'), `unmarked ${e.text.ru}`).toBe(false)
        expect(e.text.ru.trim() !== '' && e.text.en.trim() !== '').toBe(true)
      }
    }
  })

  it('draws the eras in the shares of everyone ever born', () => {
    const n = 20000
    const counts = new Array(ERAS.length).fill(0)
    for (let i = 0; i < n; i++) counts[readLife(content, BigInt(i) * 7919n, null, [], 1, false).birth.era.i]++
    for (const e of ERAS) expect(Math.abs(counts[e.i] / n - e.births / TOTAL), e.name.en).toBeLessThan(0.015)
  })

  it('lets great-grandchildren inherit', () => {
    const first = readLife(content, 11n, null, [], 1, false).birth
    const heir: Heir = { lifeId: 1, name: first.name, sex: first.sex, year: 1700, region: 'ru', cult: 'ru', rank: 1, wealth: 2, sur: pool('ru').sur[0],
      thingId: 5, thing: new Tx('ложка', 'a spoon'), story: null, dynasty: '11', gen: 1, readers: false }
    for (let s = 0; s < 50; s++) {
      const b = readLife(content, BigInt(s), heir, [], 1, false).birth
      expect(b.year).toBeGreaterThanOrEqual(1770)
      expect(b.year).toBeLessThanOrEqual(1794)
      expect(b.region.key).toBe('ru')
      expect(b.name.ru).toContain('Иванов')
    }
  })

  it('narrows the lot to a wish', () => {
    for (let n = 0; n < 300; n++) {
      const b = readLife(content, BigInt(n), null, [], 1, false, undefined, new Wish(null, 'ru')).birth
      expect(b.region.key).toBe('ru')
      expect(b.era.i).toBeGreaterThanOrEqual(2)
    }
    for (let n = 0; n < 300; n++) {
      const b = readLife(content, BigInt(n), null, [], 1, false, undefined, new Wish(1, 'in', 'F')).birth
      expect([b.era.i, b.region.key, b.sex]).toEqual([1, 'in', 'F'])
    }
    expect(!fits(0, 'ru') && fits(null, 'ru') && fits(6, 'au')).toBe(true)
  })

  it('acts on the door that was picked, and never rewrites its book', () => {
    const rnd = new Random(7n)
    for (let n = 0; n < 300; n++) {
      const seed = rnd.nextLong()
      const wish = n % 3 === 0 ? new Wish(null, 'eu') : new Wish()
      const picks: number[] = []
      let shown = 1
      let before: Entry[] = []
      for (;;) {
        const p = readLife(content, seed, null, picks, shown, false, undefined, wish)
        expect(p.entries.slice(0, before.length)).toEqual(before)
        before = p.entries
        if (p.end != null) break
        const ch = p.pending
        if (ch == null) { shown++; continue }
        picks.push(rnd.pick(openDoors(ch)))
        expect(readLife(content, seed, null, picks, shown, false, undefined, wish).pending).toBeNull()
      }
    }
  })

  it('declines a father\'s name', () => {
    expect(['Виджай', 'Никита', 'Лука', 'Хасан', 'Ур-Нанше'].map(genitive)).toEqual(['Виджая', 'Никиты', 'Луки', 'Хасана', 'Ур-Нанше'])
  })
})
