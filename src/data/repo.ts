import type { Content } from '../domain/content'
import { type Entry, type Heir, MARKS, Page, Past, readLife, VERSION } from '../domain/life'
import { newSeed } from '../domain/random'
import { thingOf, thingsOf } from '../domain/things'
import { Tx, Wish } from '../domain/world'
import { type Cur, type Doc, type LifeRow, type Settings, type ThingRow, emptyDoc, save } from './store'

/** How many recent books a new life tries not to repeat. */
const RECENT = 40

export const lifeName = (l: LifeRow) => new Tx(l.nameRu, l.nameEn)
export const lifeEpitaph = (l: LifeRow) => new Tx(l.epitaphRu, l.epitaphEn)
export const lifeBridge = (l: LifeRow) => new Tx(l.bridgeRu, l.bridgeEn)

export class State {
  readonly byId: Map<number, LifeRow>
  /** Every real event met in any life, with the first life that met it: the chronicle and the encounters. */
  readonly seen: Map<number, LifeRow>

  constructor(readonly lives: LifeRow[], readonly things: ThingRow[], readonly cur: Cur | null, readonly page: Page | null, readonly settings: Settings) {
    this.byId = new Map(lives.map((l) => [l.id, l]))
    this.seen = new Map()
    for (const l of lives) for (const h of l.seen) if (!this.seen.has(h)) this.seen.set(h, l)
  }

  holders(thingId: number) { return this.lives.filter((l) => l.thingId === thingId) }
  thing(id: number) { return this.things.find((t) => t.id === id) }
  get wish() { return Wish.decode(this.settings.wish) }
}

const encode = (entries: Entry[]): LifeRow['book'] => entries.map((e) => [e.age, MARKS.indexOf(e.mark), e.text.ru, e.text.en])
const decode = (book: LifeRow['book']): Entry[] => book.map(([age, m, ru, en]) => ({ age, mark: MARKS[m], text: new Tx(ru, en) }))

export class Repo {
  private doc: Doc = emptyDoc()
  private listeners = new Set<(s: State) => void>()
  state!: State

  constructor(readonly content: Content) {
    this.state = this.compute()
  }

  /** Starts from what was kept. */
  load(doc: Doc) {
    this.doc = doc
    this.emit(false)
  }

  subscribe(f: (s: State) => void) {
    this.listeners.add(f)
    return () => { this.listeners.delete(f) }
  }

  private compute() {
    const d = this.doc
    const page = d.cur ? this.read(d.cur, d.lives, d.things) : null
    return new State(d.lives, d.things, d.cur, page, d.settings)
  }

  private emit(write = true) {
    this.state = this.compute()
    if (write) save(this.doc)
    for (const f of this.listeners) f(this.state)
  }

  heir(row: LifeRow | undefined, things: ThingRow[], lives: LifeRow[]): Heir | null {
    if (!row) return null
    const t = things.find((x) => x.id === row.thingId)
    const thing = t ? thingOf(t.key).name : new Tx('', '')
    const readers = lives.some((l) => l.dynasty === row.dynasty && l.gen <= row.gen && l.lit)
    return {
      lifeId: row.id, name: lifeName(row), sex: row.sex, year: row.year, region: row.region, cult: row.cult, rank: row.rank, wealth: row.wealth,
      sur: row.surRu != null ? new Tx(row.surRu, row.surEn ?? row.surRu) : null, thingId: row.thingId, thing,
      story: row.storyRu != null ? new Tx(row.storyRu, row.storyEn ?? row.storyRu) : null, dynasty: row.dynasty, gen: row.gen, readers,
    }
  }

  private read(c: Cur, lives: LifeRow[], things: ThingRow[]): Page {
    const heir = this.heir(lives.find((l) => l.id === c.heirOf), things, lives)
    return readLife(this.content, BigInt(c.seed), heir, c.picks, c.shown, c.witness, this.past(c, lives), Wish.decode(c.wish))
  }

  /** The reader's past at the moment [c] was drawn: books of the last lives before it, events of all of them. */
  private past(c: Cur, lives: LifeRow[]): Past {
    const before = lives.filter((l) => l.endedAt <= c.drawnAt && l.id !== c.lifeId)
    const read = new Set(before.filter((l) => l.book.length > 0).slice(-RECENT).flatMap((l) => l.book.map((e) => e[2])))
    const seen = new Set(before.flatMap((l) => l.seen))
    return new Past(read, seen)
  }

  /** The whole book of an archived life, as it was written. */
  book(row: LifeRow): Entry[] {
    if (row.book.length > 0) return decode(row.book)
    const s = this.doc
    return readLife(this.content, BigInt(row.seed), this.heir(s.lives.find((l) => l.id === row.heirOf), s.things, s.lives), row.picks,
      Number.MAX_SAFE_INTEGER, row.witness).entries
  }

  /** Pulls a lot from the sack. [heirOf] makes it the great-grandchild of that life. */
  draw(witness: boolean, heirOf: number | null = null, wish: Wish = new Wish(), seed: bigint = newSeed(), now = Date.now()) {
    this.doc.cur = { seed: String(seed), heirOf, witness, picks: [], shown: 1, drawnAt: now, lifeId: null, ver: VERSION, wish: heirOf == null ? wish.encode() : ',,' }
    this.emit()
  }

  /** Turns to the next page of the book. */
  turn(now = Date.now()) {
    const c = this.doc.cur
    if (!c || this.state.page?.canTurn !== true) return
    this.settle({ ...c, shown: c.shown + 1 }, now)
  }

  pick(door: number, now = Date.now()) {
    const c = this.doc.cur
    const p = this.state.page?.pending
    if (!c || !p || p.doors[door]?.open !== true) return
    this.settle({ ...c, picks: [...c.picks, door] }, now)
  }

  answer(lifeId: number, text: string) {
    this.doc.lives = this.doc.lives.map((l) => (l.id === lifeId ? { ...l, answer: text.trim() } : l))
    this.emit()
  }

  settings(change: (s: Settings) => Settings) {
    this.doc.settings = change(this.doc.settings)
    this.emit()
  }

  /** Saves the new place in the book; a life that has just ended goes to the archive with its thing. */
  private settle(c: Cur, now: number) {
    const d = this.doc
    const page = this.read(c, d.lives, d.things)
    const end = page.end
    if (end == null || c.lifeId != null) { d.cur = c; this.emit(); return }
    const b = page.birth
    const heir = b.heir
    let thingId: number
    if (end.thing == null && heir != null) thingId = heir.thingId
    else {
      thingId = Math.max(0, ...d.things.map((t) => t.id)) + 1
      d.things = [...d.things, { id: thingId, key: (end.thing ?? thingsOf(b.era.group)[0]).key, createdAt: now }]
    }
    const id = Math.max(0, ...d.lives.map((l) => l.id)) + 1
    d.lives = [...d.lives, {
      id, seed: c.seed, heirOf: c.heirOf, witness: c.witness, picks: c.picks,
      nameRu: b.name.ru, nameEn: b.name.en, sex: b.sex, year: b.year, death: end.age, eraI: b.era.i,
      region: b.region.key, cult: b.cult, estate: b.estate.key, rank: end.rank, wealth: end.wealth,
      surRu: b.sur?.ru ?? null, surEn: b.sur?.en ?? null, kids: end.kidsAlive, lit: end.lit, sawSea: end.sawSea,
      epitaphRu: end.epitaph.ru, epitaphEn: end.epitaph.en, bridgeRu: end.bridge.ru, bridgeEn: end.bridge.en, answer: '',
      thingId, storyRu: end.story?.ru ?? null, storyEn: end.story?.en ?? null, meet: end.meet,
      dynasty: heir?.dynasty ?? c.seed, gen: (heir?.gen ?? 0) + 1, endedAt: now,
      ver: VERSION, book: encode(page.entries), seen: end.seen,
    }]
    d.cur = { ...c, lifeId: id }
    this.emit()
  }

  /** The whole archive as a file, so a browser that clears its storage does not take the lives with it. */
  exportJson() { return JSON.stringify(this.doc) }

  importJson(text: string) {
    const got = JSON.parse(text) as Doc
    if (got?.v !== 1 || !Array.isArray(got.lives) || !Array.isArray(got.things)) throw new Error('not a Lot archive')
    this.doc = { ...emptyDoc(), ...got, settings: { ...emptyDoc().settings, ...got.settings } }
    this.emit()
  }
}
