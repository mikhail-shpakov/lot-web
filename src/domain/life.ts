import { type Content, type Hist, type Kind, type Line, type Person } from './content'
import { fullName, keepsSurnames, pool } from './names'
import { Random } from './random'
import { pickThing, type ThingKind } from './things'
import { ALL_REGIONS, areaOf, culture, type Era, eraOf, ERAS, type Estate, type Region, type Sex, TOTAL, Tx, Wish } from './world'
import * as Years from './years'

/** What a great-grandchild inherits from the life before: the family, the place, a thing and maybe a story. */
export interface Heir {
  lifeId: number
  name: Tx
  sex: Sex
  year: number
  region: string
  cult: string
  rank: number
  wealth: number
  sur: Tx | null
  thingId: number
  thing: Tx
  story: Tx | null
  dynasty: string
  gen: number
  /** Someone in the family line before could read, so this life is not the first. */
  readers: boolean
}

/** A great-grandchild is born 70 to 94 years later, and must be born by now. */
export function heirPossible(year: number, kids: number) { return kids > 0 && year + 94 < 2026 }

export type Mark = 'PLAIN' | 'HIST' | 'MEET' | 'DEATH'
export const MARKS: Mark[] = ['PLAIN', 'HIST', 'MEET', 'DEATH']

/**
 * What the reader has already met before a life was drawn: the Russian text of lines in recent books and every event
 * any life has seen. Built only from lives that ended before the draw, so replaying the life later gives the same book.
 */
export class Past {
  constructor(readonly read: Set<string>, readonly seen: Set<number>) {}
  static readonly NONE = new Past(new Set(), new Set())
}

export interface Entry { age: number; text: Tx; mark: Mark }

export class Door {
  constructor(readonly text: Tx, readonly why: Tx | null) {}
  get open() { return this.why == null }
}

export interface Choice { age: number; q: Tx; doors: Door[] }

/** Who the lot made you. */
export class Birth {
  constructor(
    readonly seed: bigint,
    readonly era: Era,
    readonly region: Region,
    readonly cult: string,
    readonly estate: Estate,
    readonly sex: Sex,
    readonly year: number,
    readonly first: Tx,
    readonly sur: Tx | null,
    readonly name: Tx,
    /** The part of everyone ever born who were born like this: era, region, family, sex. */
    readonly share: number,
    readonly heir: Heir | null,
  ) {}
  get survive5() { return 1 - q0(this.era, this.region) }
  get literacy() { return Math.min(this.era.lit * (this.estate.rank >= 3 ? 4 : 1), 1.0) }
}

export interface End {
  age: number
  epitaph: Tx
  bridge: Tx
  /** A new thing for the chest, or null when the heir's thing goes on to the next holder. */
  thing: ThingKind | null
  kidsAlive: number
  wealth: number
  rank: number
  lit: boolean
  sawSea: boolean
  meet: number | null
  story: Tx | null
  /** Every real event this life met, by id. */
  seen: number[]
}

/** A life as far as it has been read: the entries so far, and either a choice to make, the end, or more to turn. */
export class Page {
  constructor(readonly birth: Birth, readonly entries: Entry[], readonly pending: Choice | null, readonly end: End | null, readonly shown: number) {}
  get canTurn() { return this.pending == null && this.end == null }
}

function q0(era: Era, r: Region) { return era.i === 6 && r.tags.has('af') ? 0.12 : era.q0 }

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi)
const sum = <T>(list: T[], w: (x: T) => number) => { let s = 0; for (const x of list) s += w(x); return s }
const roundToInt = (x: number) => Math.round(x)

interface Act { door: Door; act: () => void }
interface Ask { choice: Choice; acts: (() => void)[] }

type S = 'BIRTH' | 'CHILD' | 'WORK' | 'YOUTH' | 'MARRY17' | 'MARRY24' | 'JOY' | 'CRISIS' | 'ADULT' | 'LEGACY' | 'OLD' | 'WISH' | 'FORK'

/** The engine version written into each life: 1 was 1.0.0, 2 brought forks, needs and kept books. */
export const VERSION = 2

/** Estates whose fathers read for a living. */
const READERS = new Set(['scribe', 'clergy', 'clerk', 'office'])

/** The year the books are written up to. */
export const NOW = 2026

const STOPS: [number, S][] = [
  [0, 'BIRTH'], [2, 'CHILD'], [5, 'CHILD'], [8, 'CHILD'], [10, 'CHILD'], [12, 'WORK'], [14, 'YOUTH'], [16, 'YOUTH'],
  [17, 'MARRY17'], [19, 'FORK'], [21, 'JOY'], [24, 'MARRY24'], [27, 'FORK'], [30, 'ADULT'], [33, 'CRISIS'], [36, 'JOY'],
  [39, 'FORK'], [42, 'ADULT'], [45, 'LEGACY'], [48, 'ADULT'], [51, 'FORK'], [54, 'JOY'], [58, 'OLD'], [61, 'OLD'],
  [64, 'FORK'], [67, 'JOY'], [70, 'WISH'], [73, 'OLD'], [76, 'OLD'], [80, 'OLD'], [84, 'OLD'], [88, 'OLD'], [92, 'OLD'],
  [96, 'OLD'], [100, 'OLD'],
]

/** Questions any life can ask its reader. */
const ANY_LIFE = [
  new Tx('Какую вещь из твоего дома стоило бы передать правнукам?', 'Which thing in your home would be worth handing down to your great-grandchildren?'),
  new Tx('Чьи руки вырастили хлеб, который ты ешь?', 'Whose hands grew the bread you eat?'),
  new Tx('Какая дверь сегодня открыта для тебя, но была бы закрыта для этого человека?', 'Which door is open to you today that would have been shut to this person?'),
  new Tx('Чему этот человек научил бы тебя за один вечер?', 'What could this person teach you in one evening?'),
  new Tx('Какую историю о своей семье ты знаешь — и кому её расскажешь?', 'Which story of your family do you know, and who will you tell it to?'),
  new Tx('Что сегодня стоило бы сделать руками?', 'What would be worth doing with your hands today?'),
  new Tx('Кого из ушедших тебе не хватает?', 'Who among those gone do you miss?'),
  new Tx('О чём этот человек не мог даже мечтать, а у тебя это есть?', 'What could this person not even dream of that you have?'),
  new Tx('Когда вокруг в последний раз было по-настоящему темно и тихо?', 'When was it last truly dark and quiet around you?'),
  new Tx('Кому сегодня можно помочь так, как помогли бы в деревне?', 'Who could you help today the way a village would?'),
  new Tx('Какой праздник этот человек ждал бы весь год — а какой ждёшь ты?', 'Which feast would this person have waited for all year, and which do you wait for?'),
  new Tx('Что из того, что у тебя есть, этот человек счёл бы богатством?', 'What that you own would this person have called wealth?'),
]

const STORIES = [
  new Tx('о том, как прадед перехитрил волка', 'how great-grandfather outwitted a wolf'),
  new Tx('о годе, когда река не пришла', 'about the year the river did not come'),
  new Tx('как бабка видела хвостатую звезду', 'how grandmother saw a star with a tail'),
  new Tx('о далёком городе с золотыми крышами', 'about a far city with golden roofs'),
  new Tx('как ты в детстве {потерялся|потерялась} и {нашёлся|нашлась}', 'how you were lost as a child and found again'),
  new Tx('о кладе под старой грушей, которого никто не нашёл', 'about the treasure under the old pear tree that nobody found'),
  new Tx('о прабабке, которая пешком дошла до моря', 'about the great-grandmother who walked all the way to the sea'),
  new Tx('о зиме, когда замёрзли птицы', 'about the winter the birds froze'),
  new Tx('как дед один раз видел царя', 'how grandfather once saw the king'),
  new Tx('о соседе, который ушёл за удачей и вернулся через двадцать лет', 'about the neighbour who went to seek his fortune and came back twenty years later'),
  new Tx('о свадьбе, на которой сгорел сарай', 'about the wedding at which the barn burned down'),
  new Tx('о говорящей сороке', 'about the talking magpie'),
  new Tx('о годе, когда лёд на реке простоял до лета', 'about the year the ice stayed on the river till summer'),
  new Tx('о лекарке, которая знала все травы', 'about the healer who knew every herb'),
  new Tx('о том, откуда в роду эта вещь', 'about where the family keepsake came from'),
]

const why = (ru: string, en: string) => new Tx(ru, en)

/**
 * One life, replayed from its seed: the same seed, the same picks and the same number of turned pages always give the
 * same life, so only those three are stored.
 */
class Life implements Person {
  private readonly rnd: Random
  readonly birth: Birth
  private readonly era: Era
  private readonly region: Region
  private readonly sex: Sex
  private readonly year: number
  rank = 0

  private death: number
  private lit = false
  private readonly parentLit: boolean
  /** An ancestor in the family line could read. */
  private readonly kinLit: boolean
  private firstLit = false
  private wealth: number
  private married = false
  private single = false
  private love = false
  private byParents = false
  private byMaster = false
  private monk = false
  private sawSea: boolean
  private kind = false
  private tree = false
  private taught = false
  private wishSea = false
  private kids = 0
  private kidsAlive = 0
  private story: Tx | null = null
  private meet: number | null = null
  private alive = false
  private town = false
  private age = 0
  /** The age the first child came at; lines about school-age, grown children and grandchildren wait for the years to pass. */
  private firstChildAt = -1
  get now() { return this.year + this.age }
  /** Words a fork's outcome leaves behind (faith, brave, moved, ...), read by the epitaph and the question. */
  private readonly flags = new Set<string>()
  private readonly eps: Tx[] = []
  private readonly asks: Tx[] = []
  private readonly usedForks = new Set<string>()

  private readonly entries: Entry[] = []
  private readonly used = new Set<Line>()
  private readonly usedHist = new Set<number>()

  has(cond: string): boolean {
    switch (cond) {
      case 'm': return this.sex === 'M'
      case 'f': return this.sex === 'F'
      case 'lit': return this.lit
      case 'illit': case '!lit': return !this.lit
      case 'married': return this.married
      case 'single': case '!married': return !this.married
      case 'kids': return this.kidsAlive > 0
      case 'small': return this.age < 4
      case 'school': return this.kidsAlive > 0 && this.firstChildAt >= 0 && this.age - this.firstChildAt >= 8
      case 'grown': return this.kidsAlive > 0 && this.firstChildAt >= 0 && this.age - this.firstChildAt >= 16
      case 'grand': return this.kidsAlive > 0 && this.firstChildAt >= 0 && this.age - this.firstChildAt >= 36
      case '!kids': return this.kidsAlive === 0
      case 'monk': return this.monk
      case 'town': return this.town
      case 'sea': return this.sawSea
      case 'poor': return this.wealth <= 0
      case 'rich': return this.wealth >= 2
      case 'r0': return this.rank === 0
      case 'r1': return this.rank === 1
      case 'r2': return this.rank === 2
      case 'r3': return this.rank === 3
      default: return this.flags.has(cond)
    }
  }

  constructor(
    private readonly content: Content,
    seed: bigint,
    heir: Heir | null,
    private readonly witness: boolean,
    private readonly past: Past,
    wish: Wish,
  ) {
    const rnd = (this.rnd = new Random(seed))
    let y: number
    let e: Era
    if (heir != null) {
      y = heir.year + 70 + rnd.nextIntUntil(25)
      e = eraOf(y)
    } else {
      // A chosen area weighs each era by how many of its people were born there.
      const area = areaOf(wish.area)
      const inArea = (x: Era) => area == null ? 1.0 : sum(x.regions.filter((g) => area.regions.has(g.key)), (g) => g.w) / sum(x.regions, (g) => g.w)
      let eras = ERAS.filter((x) => (wish.eraI == null || x.i === wish.eraI) && inArea(x) > 0)
      if (eras.length === 0) eras = ERAS
      e = this.weighted(eras, (x) => x.births * inArea(x))
      const u = Math.pow(rnd.nextDouble(), e.i === 0 ? 0.6 : 0.75)
      y = clamp(roundToInt(e.to - (e.to - e.from) * (1 - u)), e.from, e.to - 1)
    }
    this.era = e
    this.year = y
    let region: Region | null = null
    if (heir != null) {
      const was = ALL_REGIONS.find((g) => g.key === heir.region)
      region = e.regions.find((g) => g.key === heir.region) ?? null
      if (region == null && was != null) {
        let best: Region | null = null
        for (const g of e.regions) if ([...g.tags].some((t) => was.tags.has(t)) && (best == null || g.w > best.w)) best = g
        region = best
      }
    }
    if (region == null) {
      const a = areaOf(wish.area)
      let list = a ? e.regions.filter((g) => a.regions.has(g.key)) : null
      if (list != null && list.length === 0) list = null
      region = this.weighted(list ?? e.regions, (g) => g.w)
    }
    this.region = region
    const cult = culture(region, y)
    const reg = region
    const pl = e.estates.filter((s) => s.only == null || [...s.only].some((t) => reg.tags.has(t)))
    let estate: Estate | null = null
    if (heir != null) {
      let d: number
      if (heir.wealth >= 4) d = 1
      else if (heir.rank === 0 && heir.wealth >= 1) d = 1
      else if (heir.wealth <= 0 && rnd.nextDouble() < 0.3) d = -1
      else d = 0
      const want = clamp(heir.rank + d, 0, 3)
      const c = pl.filter((s) => s.rank === want)
      if (c.length > 0) estate = this.weighted(c, (s) => s.w)
    }
    if (estate == null) estate = this.weighted(pl, (s) => s.w)
    this.rank = estate.rank
    const coin = rnd.nextBoolean()
    this.sex = (heir == null ? wish.sex : null) ?? (coin ? 'M' : 'F')
    const sex = this.sex
    const p = pool(cult)
    const first = rnd.pick(sex === 'M' ? p.male : p.female)
    let sur: Tx | null = null
    if (keepsSurnames(cult, e.i)) sur = (heir?.sur != null && heir.cult === cult ? heir.sur : null) ?? rnd.pick(p.sur)
    const name = fullName(cult, e.i, sex, first, sur, rnd)
    this.death = rnd.nextDouble() < q0(e, region) ? rnd.nextIntUntil(5) : roundToInt(this.tri(e.die))
    // A life that would outrun today stops at today, unfinished.
    if (y + this.death > NOW) { this.death = NOW - y; this.alive = true }
    const share = e.births / TOTAL * region.w / sum(e.regions, (g) => g.w) * estate.w / sum(pl, (s) => s.w) * 0.5
    this.birth = new Birth(seed, e, region, cult, estate, sex, y, first, sur, name, share, heir)
    // Scribes, clergy and clerks read for a living; their children are never the first in the family.
    this.parentLit = (rnd.nextDouble() < (this.rank >= 3 ? Math.min(e.lit * 6, 0.95) : e.lit * 0.6)) || READERS.has(estate.key)
    this.kinLit = heir?.readers === true
    this.wealth = this.rank
    this.sawSea = region.sea && rnd.nextDouble() < 0.5
    if (e.i === 6) this.lit = rnd.nextDouble() < (this.rank === 0 ? 0.6 : 0.92)
    else if (e.i === 5) this.lit = rnd.nextDouble() < e.lit * (this.rank >= 2 ? 1.6 : 0.8)
    else this.lit = false
  }

  private weighted<T>(list: T[], w: (x: T) => number): T {
    let r = this.rnd.nextDouble() * sum(list, w)
    for (const x of list) { r -= w(x); if (r <= 0) return x }
    return list[list.length - 1]
  }

  private tri([a, m, b]: [number, number, number]): number {
    const u = this.rnd.nextDouble()
    const f = (m - a) / (b - a)
    return u < f ? a + Math.sqrt(u * (b - a) * (m - a)) : b - Math.sqrt((1 - u) * (b - a) * (b - m))
  }

  private tx(ru: string, en: string) { return new Tx(ru, en).g(this.sex) }
  private add(age: number, t: Tx, mark: Mark = 'PLAIN') { this.entries.push({ age, text: t.g(this.sex), mark }) }
  private add2(age: number, ru: string, en: string, mark: Mark = 'PLAIN') { this.add(age, new Tx(ru, en), mark) }

  private line(age: number, k: Kind, mark: Mark = 'PLAIN') {
    // Abroad, the lines of the home region no longer fit; only those true anywhere do.
    // Behind the monastery gate only the lines written for it fit: no dances, weddings or fields.
    const abroad = this.flags.has('abroad')
    const all = this.content.linesFor(this.era.group, k, this.region).filter((it) =>
      it.need.holds(this) && (!abroad || it.tags.size === 0) && (!this.monk || it.need.names('monk')) &&
      // A toddler's page gets only toddler lines, and an older child never does.
      (k !== 'CHILD' || it.need.names('small') === (age < 4)))
    const fresh = all.filter((it) => !this.used.has(it))
    // Lines the reader met in recent lives wait their turn while there are others.
    const unread = fresh.filter((it) => !this.past.read.has(it.text.g(this.sex).ru))
    const l = this.rnd.pickOrNull(unread.length > 0 ? unread : fresh.length > 0 ? fresh : all)
    if (l == null) return
    this.used.add(l)
    this.add(age, l.text, mark)
    // A line about the coast was lived by it.
    if (l.tags.has('sea')) this.sawSea = true
    for (const s of l.need.sets) {
      if (s === 'town') this.town = true
      else if (s === 'sea') this.sawSea = true
      else this.flags.add(s)
    }
  }

  private ask(age: number, q: Tx, ...doors: Act[]): Ask {
    return {
      choice: { age, q: q.g(this.sex), doors: doors.map((it) => new Door(it.door.text.g(this.sex), it.door.why?.g(this.sex) ?? null)) },
      acts: doors.map((it) => it.act),
    }
  }

  private door(ru: string, en: string, why: Tx | null, act: () => void): Act { return { door: new Door(new Tx(ru, en), why), act } }

  read(picks: number[], shown: number): Page {
    let revealed = 0
    let pi = 0
    let pending: Choice | null = null
    let end: End | null = null
    for (const [age, s] of STOPS) {
      if (revealed >= shown) break
      revealed++
      if (s !== 'BIRTH' && age >= this.death) { end = this.die(); break }
      const a = this.stop(age, s)
      if (a == null) continue
      const open = a.choice.doors.map((_, i) => i).filter((i) => a.choice.doors[i].open)
      let pick: number | null
      if (this.witness) pick = this.rnd.pick(open)
      else {
        const v = picks[pi++]
        pick = v !== undefined && open.includes(v) ? v : pi > picks.length ? null : open[0]
      }
      if (pick == null) { pending = a.choice; break }
      a.acts[pick]()
    }
    return new Page(this.birth, this.entries.slice(), pending, end, revealed)
  }

  private stop(age: number, s: S): Ask | null {
    this.age = age
    let hist: Hist | null = null
    if (age >= 4) {
      const abroad = this.flags.has('abroad')
      const all = this.content.hist.filter((it) => !this.usedHist.has(it.id) && it.fits(this.region, this.era.i, this.year + age) && (!abroad || it.tags.has('*')))
      // Events no life has met yet come first: they fill the chronicle.
      const unseen = all.filter((it) => !this.past.seen.has(it.id))
      const h = this.rnd.pickOrNull(unseen.length > 0 ? unseen : all)
      if (h != null && this.rnd.nextDouble() < (h.meet ? 0.85 : 0.45)) {
        hist = h
        this.usedHist.add(h.id)
        this.add(age, h.text, h.meet ? 'MEET' : 'HIST')
        if (h.meet) this.meet = h.id
      }
    }
    switch (s) {
      case 'BIRTH': {
        const y = Years.inYear(this.year)
        this.add(0, new Tx(`{Родился|Родилась} ${Years.stop(y.ru)} ${this.region.name.ru}, в семье ${this.birth.estate.of.ru}.`,
          `Born ${Years.stop(y.en)} ${this.region.name.en}, to ${this.birth.estate.of.en}.`))
        const h = this.birth.heir
        if (h != null) {
          this.add(0, new Tx(`${h.sex === 'M' ? 'Прадед' : 'Прабабка'} — ${h.name.ru}. Семейная вещь: ${h.thing.ru}.`,
            `Your great-grand${h.sex === 'M' ? 'father' : 'mother'} was ${h.name.en}. The family keepsake: ${h.thing.en}.`))
        }
        break
      }
      case 'CHILD': if (hist == null || this.rnd.nextBoolean()) this.line(age, 'CHILD'); break
      case 'WORK': return this.work()
      case 'YOUTH': this.line(age, 'YOUTH'); break
      case 'MARRY17':
        if (this.sex === 'F' && this.era.i >= 1 && this.era.i <= 4 && !this.monk) return this.marry(age)
        else if (hist == null) this.line(age, 'YOUTH')
        break
      case 'MARRY24':
        if (!this.married && !this.monk && !this.single) return this.marry(age)
        else if (hist == null) this.line(age, 'ADULT')
        break
      case 'JOY': this.line(age, 'JOY'); break
      case 'CRISIS': if (hist == null) this.line(age, 'HARD', 'HIST'); return this.crisis()
      case 'ADULT': if (hist == null || this.rnd.nextBoolean()) this.line(age, 'ADULT'); break
      case 'LEGACY': return this.legacy()
      case 'OLD': if (hist == null) this.line(age, 'OLD'); break
      case 'WISH': return this.lastWish()
      case 'FORK': {
        const f = this.fork(age)
        if (f != null) return f
        if (hist == null) this.line(age, age >= 58 ? 'OLD' : 'ADULT')
        break
      }
    }
    return null
  }

  private work(): Ask {
    const e = this.era.i
    const f = this.sex === 'F'
    const rank = this.rank
    const lit = this.lit
    // Before the printing age girls were not taught, in the oldest times not even in a scribe's house.
    const girl = f && e >= 1 && e <= 4 && !lit && rank > 0 && (rank < 3 || e < 3)
    let learn: Tx | null = null
    if (e === 0) learn = why('Письма ещё не придумали.', 'Writing has not been invented yet.')
    else if (e < 6 && lit) learn = why('Ты уже умеешь читать.', 'You can read already.')
    else if (rank === 0 && e < 6) learn = why('Несвободным учиться запрещено.', 'The unfree are forbidden to learn.')
    else if (girl) learn = why('Девочек грамоте не учат.', 'Girls are not taught their letters.')
    else if (e < 4 && rank < 3) learn = why('Грамоте учат только детей писцов и знати.', 'Only the children of scribes and nobles learn their letters.')
    else if (e === 6 && rank === 0) learn = why('Семье нужен твой заработок уже сейчас.', 'Your family needs your wages now.')
    let town: Tx | null = null
    if (e === 0) town = why('Городов ещё нет.', 'There are no towns yet.')
    else if (rank === 0 && e < 6) town = why('Ты не {свободен|свободна} уйти.', 'You are not free to leave.')
    else if (f && e < 5) town = why('В ученики девочек не берут.', 'Girls are not taken as apprentices.')
    const doors: Act[] = [
      this.door('Работать с родителями', 'Work alongside your parents', null, () => { this.add(12, this.birth.estate.work) }),
      this.door(e === 6 ? 'Учиться дальше' : 'Учиться грамоте', e === 6 ? 'Stay on at school' : 'Learn to read and write', learn, () => {
        if (e === 6) { this.wealth++; this.add2(12, 'Учишься дальше. Первым делом — в библиотеку.', 'You stay on at school. First thing: the library.') }
        else {
          this.lit = true; this.firstLit = !this.parentLit && !this.kinLit
          if (this.firstLit) this.add2(12, '{Выучился|Выучилась} читать — {первым|первой} в роду.', 'You learn to read, the first in your family.')
          else if (this.parentLit) this.add2(12, '{Выучился|Выучилась} читать и писать, как отец.', 'You learn to read and write, like your father.')
          else this.add2(12, '{Выучился|Выучилась} читать и писать. Грамотные в роду были и до тебя.', 'You learn to read and write. There were readers in the family before you.')
        }
      }),
    ]
    // A girl may still try in secret, from a brother's lessons or a father's tablets; half of them are caught.
    if (girl) doors.push(this.door('Учиться тайком', 'Learn in secret', null, () => {
      if (this.rnd.nextBoolean()) {
        this.lit = true; this.firstLit = !this.parentLit && !this.kinLit; this.flags.add('secretlit')
        if (this.parentLit) this.add2(12, 'Подглядывала, как пишет отец, и тайком выучила буквы. Он знает и молчит.', 'You watched your father write and learned the letters in secret. He knows and says nothing.')
        else this.add2(12, 'Брат по вечерам показывал тебе буквы, пока никто не видит. Ты выучила все.', 'In the evenings your brother showed you the letters when no one was looking. You learned them all.')
      } else {
        this.add2(12, 'Тебя застали над письменами. Выпороли, и к письму больше не подпускают.', 'You are caught bent over the writing. You are beaten and kept away from it from then on.')
      }
    }))
    doors.push(this.door(e === 6 ? 'Уехать к родне в большой город' : 'Уйти в город, в ученики к мастеру', e === 6 ? 'Go to relatives in the big city' : 'Go to town as an apprentice', town, () => {
      this.town = true
      if (this.rnd.nextBoolean()) this.wealth++
      if (this.rnd.nextDouble() < 0.35) this.sawSea = true
      if (e === 6) this.add2(12, '{Уехал|Уехала} в город. Спишь у дальней родни на полу.', 'You move to the city. You sleep on a distant relative\'s floor.')
      else this.add2(12, '{Ушёл|Ушла} в город, в ученики. Мастер бьёт, но кормит.', 'You go to town as an apprentice. The master beats you, but feeds you.')
    }))
    if (e >= 2 && e <= 4) {
      const cloisters = ['eu', 'ru', 'cn', 'jp', 'sea', 'in']
      let shut: Tx | null = null
      if (rank === 0) shut = why('Несвободных не постригают.', 'The unfree may not take vows.')
      else if (![...this.region.tags].some((t) => cloisters.includes(t))) shut = why('Здесь нет монастырей.', 'There are no monasteries here.')
      doors.push(this.door('Уйти в монастырь', 'Enter a monastery', shut, () => {
        this.monk = true
        if (this.rnd.nextDouble() < 0.7) { this.lit = true; this.firstLit = !this.parentLit && !this.kinLit }
        this.add2(12, '{Ушёл|Ушла} в монастырь. Семьи не будет — будет тишина и молитва.', 'You enter a monastery. There will be no family: there will be silence and prayer.')
      }))
    }
    return this.ask(12, new Tx('Детство кончилось. Что дальше?', 'Childhood is over. What next?'), ...doors)
  }

  private marry(age: number): Ask {
    const e = this.era.i
    const f = this.sex === 'F'
    // The unfree are married off by their master, not by their parents.
    const owned = this.rank === 0 && e >= 1 && e <= 5
    let forced: Tx | null = null
    if (owned) forced = why('Кого тебе взять, решает хозяин.', 'Your master decides whom you marry.')
    else if (e >= 1 && e <= 4 && (f || this.rank >= 3 || e < 3)) forced = why('Выбирать тебе не дают: старшие уже сговорились.', 'You are given no choice: the elders have already agreed.')
    let alone: Tx | null = null
    if (owned) alone = why('Хозяин не спрашивает, хочешь ли ты семью.', 'Your master does not ask whether you want a family.')
    else if (e === 0) alone = why('В одиночку не выжить.', 'Nobody survives alone.')
    else if (e < 5 && f) alone = why('Одинокой женщине не прожить — разве что в монастыре.', 'A woman alone cannot get by, except in a convent.')
    else if (e < 5) alone = why('Без семьи тебе не дадут земли.', 'Without a family you will get no land.')
    return this.ask(age, age < 20 ? new Tx('Тебя сватают.', 'A match is being made for you.') : new Tx('Пора заводить семью.', 'Time to start a family.'),
      this.door(owned ? 'Как решил хозяин' : 'Как решили родители', owned ? 'As your master decided' : 'As your parents decided', null, () => {
        if (owned) this.byMaster = true; else this.byParents = true
        if (owned) this.wed(age, 'Хозяин свёл тебя с {невольницей|невольником} со своего двора. {Жену|Мужа} ты до этого видел{|а} только издали.', 'Your master pairs you with {a woman|a man} from his own yard. Until then you had seen {her|him} only from afar.')
        else this.wed(age, 'Свадьбу сыграли, как решили старшие. {Жену|Мужа} ты впервые {увидел|увидела} за неделю до неё.', 'The wedding is held as the elders decided. You first saw your {wife|husband} a week before.')
      }),
      this.door(e === 0 ? 'Уйти к тому, кто нравится, в чужой род' : 'По любви', e === 0 ? 'Go to the one you like, in another band' : 'For love', forced, () => {
        this.love = true
        if (e === 0) this.wed(age, '{Ушёл в чужой род за той, что нравилась.|Ушла в чужой род за тем, кто нравился.}', 'You go to another band for the one you like.')
        else this.wed(age, '{Женился|Вышла замуж} по любви. Родня ворчала, потом привыкла.', 'You marry for love. The family grumbles, then gets used to it.')
      }),
      this.door('Не заводить семью', 'Stay unmarried', alone, () => {
        this.single = true
        this.add2(age, '{Решил|Решила} жить {один|одна}. Свободы больше, рук меньше.', 'You decide to live alone. More freedom, fewer hands.')
      }),
    )
  }

  private wed(age: number, ru: string, en: string) {
    this.add2(age, ru, en)
    this.bear()
    const n = this.kids
    const at = age + 2
    if (n === 0) this.add2(at, 'Детей не было.', 'There are no children.')
    else if (n === this.kidsAlive) this.add2(at, `Родилось детей: ${n}.`, `Children born: ${n}.`)
    else this.add2(at, `Родилось детей: ${n}. Выросли ${this.kidsAlive}.`, `Children born: ${n}. Grew up: ${this.kidsAlive}.`)
  }

  /** A marriage and the children it brings, as the era allowed them to live. */
  private bear() {
    this.married = true; this.single = false
    const n = Math.max(roundToInt(this.era.fert + (this.rnd.nextDouble() - 0.5) * 4), 0)
    this.kids = n
    this.kidsAlive = this.era.i >= 6 ? n : Math.min(roundToInt(n * (1 - this.era.q0) * (0.8 + this.rnd.nextDouble() * 0.4)), n)
    if (n > 0 && this.firstChildAt < 0) this.firstChildAt = this.age + 1
  }

  /** An everyday fork from the dilemmas that fit this era, place, person and age; null when none fits. */
  private fork(age: number): Ask | null {
    if (this.rnd.nextDouble() < 0.2) return null
    const abroad = this.flags.has('abroad')
    const all = this.content.dilemmas.filter((it) =>
      !this.usedForks.has(it.id) && it.groups.has(this.era.group) && age >= it.ages[0] && age <= it.ages[1] && it.fits(this.region) && it.need.holds(this) &&
      (!abroad || it.tags.has('*') || it.tags.size === 0) &&
      // A monk has taken vows: only the forks of the cloister.
      (!this.monk || it.need.names('monk')))
    // A fork met in a recent life (one of its outcomes is in that book) waits while others are left.
    const unmet = all.filter((d) => !d.doors.some((g) => g.outs.some((o) => this.past.read.has(o.text.g(this.sex).ru))))
    const c = unmet.length > 0 ? unmet : all
    if (c.length === 0) return null
    const d = this.weighted(c, (it) => it.weight)
    this.usedForks.add(d.id)
    const acts: Act[] = d.doors.map((g) => ({
      door: new Door(g.text, g.shut.find((sh) => sh.conds.every((it) => this.has(it)))?.why ?? null),
      act: () => {
        const o = this.weighted(g.outs, (it) => it.weight)
        this.add(age, o.text)
        this.effects(age, o.fx)
        if (g.ep != null) this.eps.push(g.ep.g(this.sex))
        if (g.ask != null) this.asks.push(g.ask.g(this.sex))
      },
    }))
    if (!acts.some((it) => it.door.open)) return null
    return this.ask(age, d.q, ...acts)
  }

  private effects(age: number, fx: string[]) {
    for (const f of fx) {
      if (f.startsWith('wealth')) this.wealth = Math.max(this.wealth + parseInt(f.slice(6), 10), 0)
      else if (f.startsWith('risk')) { if (this.rnd.nextDouble() * 100 < parseInt(f.slice(4), 10)) this.death = Math.min(this.death, age + 1 + this.rnd.nextIntUntil(3)) }
      else if (f === 'lit') { if (!this.lit) { this.lit = true; this.firstLit = !this.parentLit && !this.kinLit } }
      else if (f === 'sea') this.sawSea = true
      else if (f === 'kind') this.kind = true
      else if (f === 'love') this.love = true
      else if (f === 'town') this.town = true
      else if (f === 'free') { if (this.rank === 0) this.rank = 1 }
      else if (f === 'kids+1') { this.kids++; this.kidsAlive++; if (this.firstChildAt < 0) this.firstChildAt = age }
      else if (f === 'kids-1') { if (this.kidsAlive > 0) this.kidsAlive-- }
      else if (f === 'married') { if (!this.married) this.bear(); this.flags.delete('widowed') }
      else this.flags.add(f)
    }
  }

  private crisis(): Ask {
    const unfree = this.rank === 0 && this.era.i < 6
    const monk = this.monk
    const e = this.era.i
    return this.ask(33, new Tx('Беда. Что делать?', 'Hard times. What now?'),
      this.door(monk ? 'Переждать в обители' : 'Переждать дома', monk ? 'Sit it out in the monastery' : 'Sit it out at home', null, () => {
        if (this.rnd.nextDouble() < 0.25) {
          this.death = Math.min(this.death, 33 + this.rnd.nextIntUntil(3))
          this.add2(33, 'Пережидали. Не все пережили.', 'You wait it out. Not everyone lives through it.')
        } else {
          this.wealth = Math.max(this.wealth - 1, 0)
          this.add2(33, 'Пережидали. Выжили, но всё нажитое ушло.', 'You wait it out. You live, but everything you had is gone.')
        }
      }),
      this.door(e === 0 ? 'Уйти всем родом за зверем' : monk ? 'Уйти с братией в другую обитель' : unfree ? 'Бежать' : 'Уйти всей семьёй в другие края',
        e === 0 ? 'Move the whole band after the game' : monk ? 'Leave with the others for another monastery' : unfree ? 'Run away' : 'Leave with the family for other lands', null, () => {
          if (this.rnd.nextDouble() < 0.4) this.sawSea = true
          if (this.monk) {
            const lost = this.rnd.nextDouble() < 0.15
            if (lost) this.death = Math.min(this.death, 35)
            this.add(33, lost ? new Tx('Ушли. Дорога забрала многих.', 'You leave. The road takes many.')
              : new Tx('Ушли. Дорога забрала стариков, новая обитель приняла остальных.', 'You leave. The road takes the old ones; another monastery takes in the rest.'))
          } else if (unfree && this.rnd.nextDouble() < 0.4) {
            this.death = Math.min(this.death, 34)
            this.add2(33, 'Беглых поймали.', 'The runaways are caught.')
          } else if (unfree) {
            this.rank = 1
            this.add2(33, '{Бежал|Бежала}. На новом месте никто не знает, кем ты {был|была}.', 'You run. In the new place nobody knows what you were.')
          } else if (this.rnd.nextDouble() < 0.15) {
            this.death = Math.min(this.death, 35)
            this.add2(33, 'Ушли. Дорога забрала многих.', 'You leave. The road takes many.')
          } else {
            this.add2(33, 'Ушли. Дорога забрала старших, но на новом месте есть земля.', 'You leave. The road takes the old ones, but there is land in the new place.')
          }
        }),
      this.door(monk ? 'Раздать монастырский хлеб голодным' : 'Поделиться последним с соседями', monk ? 'Give the monastery\'s bread to the hungry' : 'Share the last you have with the neighbours',
        this.wealth <= 0 && e > 0 ? why('Делиться нечем: у вас самих пусто.', 'There is nothing to share: your own stores are empty.') : null, () => {
          this.kind = true
          this.wealth = Math.max(this.wealth - 1, 0)
          if (this.monk) this.add2(33, 'Хлеб раздали у ворот. Обитель голодает вместе со всеми, и этого не забудут.', 'The bread is given out at the gate. The monastery goes hungry with everyone, and it will not be forgotten.')
          else this.add2(33, '{Отдал|Отдала} соседям половину запасов. Этого не забудут.', 'You give the neighbours half of what you have. It will not be forgotten.')
        }),
    )
  }

  private legacy(): Ask {
    if (this.monk) return this.cloisterLegacy()
    const none = this.kidsAlive === 0 ? why('Детей у тебя нет.', 'You have no children.') : null
    return this.ask(45, new Tx('Что оставить детям?', 'What will you leave the children?'),
      this.door('Научить своему делу', 'Teach them your trade', none, () => { this.add2(45, 'Дети знают твоё дело лучше тебя.', 'The children know your trade better than you do.') }),
      this.door('Научить читать', 'Teach them to read', none ?? (!this.lit ? why('Ты и сам{|а} не умеешь читать.', 'You cannot read yourself.') : null), () => {
        this.taught = true
        this.add2(45, 'Учишь детей грамоте по единственной книге в доме.', 'You teach the children their letters from the only book in the house.')
      }),
      this.door('Копить на чёрный день', 'Save for a rainy day', this.rank === 0 && this.era.i < 6 ? why('У несвободных своего нет.', 'The unfree own nothing.') : null, () => {
        this.wealth++
        if (this.era.i === 0) this.add2(45, 'Запас кремня и шкур — в сухой пещере.', 'A store of flint and hides, in a dry cave.')
        else if (this.era.i === 6) this.add2(45, 'Откладываешь понемногу каждый месяц.', 'You put a little aside every month.')
        else this.add2(45, 'Под половицей — горшок с монетами.', 'Under the floorboard, a pot of coins.')
      }),
      this.door('Рассказывать истории', 'Tell them stories', null, () => {
        const old = this.birth.heir?.story ?? null
        if (old != null && this.rnd.nextBoolean()) {
          this.story = old
          this.add(45, new Tx(`Рассказываешь ту же историю, что рассказывали тебе: ${old.ru}.`, `You tell the same story you were told: ${old.en}.`))
        } else {
          const s = this.rnd.pick(STORIES).g(this.sex)
          this.story = s
          this.add(45, new Tx(`Вечерами рассказываешь детям ${s.ru}. Они просят ещё.`, `In the evenings you tell the children ${s.en}. They ask for more.`))
        }
      }),
    )
  }

  /** A monk leaves no children: what is left is the novices, the books and the stories. */
  private cloisterLegacy(): Ask {
    const unread = !this.lit ? why('Ты и сам{|а} не умеешь читать.', 'You cannot read yourself.') : null
    return this.ask(45, new Tx('Что оставить после себя?', 'What will you leave behind?'),
      this.door('Учить послушников грамоте', 'Teach the novices to read', unread, () => {
        this.taught = true
        this.add2(45, 'Учишь послушников грамоте. Самый бестолковый потом пишет лучше всех.', 'You teach the novices their letters. The slowest one ends up writing best of all.')
      }),
      this.door('Переписать книгу для обители', 'Copy a book for the monastery', unread, () => {
        this.add2(45, 'Год над одной книгой. Она будет стоять в библиотеке, когда тебя забудут.', 'A year over one book. It will stand in the library when you are forgotten.')
      }),
      this.door('Рассказывать истории', 'Tell them stories', null, () => {
        const s = this.rnd.pick(STORIES).g(this.sex)
        this.story = s
        this.add(45, new Tx(`Вечерами рассказываешь послушникам ${s.ru}. Они просят ещё.`, `In the evenings you tell the novices ${s.en}. They ask for more.`))
      }),
    )
  }

  private lastWish(): Ask {
    let sea: Tx | null = null
    if (this.sawSea) sea = why('Ты его уже {видел|видела}.', 'You have seen it already.')
    else if (this.rank === 0 && this.era.i < 6) sea = why('Тебя не отпустят.', 'You will not be let go.')
    else if (this.wealth < 1 && this.era.i < 5) sea = why('Дорога к морю — месяц пути и все деньги дома.', 'The road to the sea is a month\'s walk and all the money in the house.')
    let tree: Tx | null = null
    if (this.era.i === 0) tree = why('Дома нет: род кочует.', 'There is no house: the band moves on.')
    else if (this.rank === 0 && this.era.i < 6 && !this.monk) tree = why('Земля не твоя.', 'The land is not yours.')
    return this.ask(70, new Tx('Последнее желание.', 'One last wish.'),
      this.door('Увидеть море', 'See the sea', sea, () => {
        this.sawSea = true; this.wishSea = true
        this.add2(70, 'Море. Стоишь у воды до темноты и молчишь.', 'The sea. You stand by the water until dark and say nothing.')
      }),
      this.door('Помириться с братом', 'Make peace with your brother', null, () => {
        this.add2(70, 'Помирились. Сидели рядом до ночи и не вспоминали, из-за чего.', 'You make peace. You sit side by side till night and never mention what it was about.')
      }),
      this.door(this.monk ? 'Посадить дерево в монастырском саду' : 'Посадить дерево у дома', this.monk ? 'Plant a tree in the monastery garden' : 'Plant a tree by the house', tree, () => {
        this.tree = true
        this.add2(70, '{Посадил|Посадила} грушу. Плодов ты не увидишь.', 'You plant a pear tree. You will not see its fruit.')
      }),
    )
  }

  private die(): End {
    const a = this.death
    const tx = (ru: string, en: string) => this.tx(ru, en)
    // A fork's risk may have ended a life that was still running.
    if (this.alive && a < NOW - this.year) this.alive = false
    let how: Tx[]
    if (a < 5) how = [tx('Лихорадка.', 'A fever.'), tx('Не {пережил|пережила} зиму.', 'The winter was too long.'), tx('Жар и понос, три дня.', 'Three days of fever and flux.')]
    else if (this.era.i === 6 && a < 60) how = [tx('Сердце.', 'The heart.'), tx('Авария на дороге.', 'A road accident.'), tx('Болезнь, которую поздно заметили.', 'An illness found too late.')]
    else if (a < 40) how = this.sex === 'F' && this.married ? [tx('Горячка.', 'A fever.'), tx('Роды.', 'Childbirth.'), tx('Мор.', 'Plague.')]
      : [tx('Горячка.', 'A fever.'), tx('Несчастье в поле.', 'An accident in the field.'), tx('Мор.', 'Plague.')]
    else if (a < 60) how = [tx('Горячка.', 'A fever.'), tx('Сердце.', 'The heart.'), tx('Чахотка.', 'Consumption.')]
    else how = [tx('{Уснул|Уснула} и не {проснулся|проснулась}.', 'Went to sleep and did not wake.'), tx('Сердце.', 'The heart.'), tx('Старость.', 'Old age.'),
      this.monk ? tx('Тихо, под пение {братии|сестёр}.', 'Quietly, while the others sang.') : this.kidsAlive > 0 ? tx('Тихо, при детях.', 'Quietly, with the children near.') : tx('Тихо, во сне.', 'Quietly, in sleep.')]
    const cause = this.rnd.pick(how)
    let when: Tx
    if (this.alive) when = tx(`Сейчас тебе ${Years.yearsRu(a)}. Дальше книга ещё не написана.`, `You are ${a} now. The rest of the book is not written yet.`)
    else if (a < 1) when = tx('{Умер|Умерла} младенцем.', 'Died in infancy.')
    else if (a < 5) when = tx(`{Умер|Умерла} на ${a + 1}-м году.`, `Died aged ${a}.`)
    else when = tx(`{Умер|Умерла} в ${a} ${Years.plural(a, 'год', 'года', 'лет')}.`, `Died aged ${a}.`)
    this.add(a, this.alive ? when : when.plus(new Tx(' ', ' ')).plus(cause), 'DEATH')

    const ep: Tx[] = []
    if (a < 5 && !this.alive) ep.push(this.rnd.pick([tx('Прожил{|а} мало, но {был|была} {любим|любима}.', 'Lived little, and was loved.'), tx('Мать помнила до конца своих дней.', 'Mother remembered to the end of her days.')]))
    else {
      ep.push(...this.eps.slice(0, 2))
      if (this.firstLit) ep.push(tx('{Первый|Первая} в роду, кто {научился|научилась} читать.', 'The first in the family to read.'))
      if (this.flags.has('secretlit')) ep.push(tx('Грамоте выучилась тайком.', 'Learned her letters in secret.'))
      if (this.birth.estate.rank === 0 && this.rank > 0) ep.push(tx('{Родился|Родилась} несвободным, {умер|умерла} {свободным|свободной}.', 'Born unfree, died free.'))
      if (this.kids > 0) ep.push(this.kidsAlive < this.kids ? tx(`{Пережил|Пережила} ${Years.childrenAcc(this.kids - this.kidsAlive)}.`, `Outlived ${Years.childrenEn(this.kids - this.kidsAlive)}.`)
        : tx(`{Вырастил|Вырастила} ${Years.childrenAcc(this.kids)}.`, `Raised ${Years.childrenEn(this.kids)}.`))
      if (this.wishSea) ep.push(tx('{Увидел|Увидела} море на старости лет.', 'Saw the sea in old age.'))
      else if (!this.sawSea) ep.push(tx('Моря так и не {увидел|увидела}.', 'Never saw the sea.'))
      if (this.kind) ep.push(tx('В голодный год {делился|делилась} последним.', 'Shared the last of it in a hungry year.'))
      if (this.love) ep.push(tx('{Выбрал|Выбрала} сердцем.', 'Chose with the heart.'))
      if (this.monk) ep.push(tx('{Жил|Жила} в тишине.', 'Lived in silence.'))
      if (this.taught) ep.push(this.monk ? tx('Послушники читали благодаря {ему|ей}.', 'The novices could read because of {him|her}.') : tx('Дети читали благодаря {ему|ей}.', 'The children could read because of {him|her}.'))
      if (this.tree) ep.push(tx('Груша у дома цветёт и сейчас.', 'The pear tree by the house still blooms.'))
      if (this.meet != null) ep.push(tx('Однажды {видел|видела} того, о ком потом писали книги.', 'Once met someone later written about in books.'))
      if (this.flags.has('faith')) ep.push(tx('{Верил|Верила} крепко.', 'Kept the faith.'))
      if (this.flags.has('brave')) ep.push(tx('Не {побоялся|побоялась}.', 'Was not afraid.'))
      if (this.flags.has('moved')) ep.push(tx('{Умер|Умерла} далеко от места, где {родился|родилась}.', 'Died far from the place of birth.'))
      if (ep.length === 0) ep.push(this.rnd.pick([tx('{Жил|Жила} как все. Это немало.', 'Lived like everyone. That is no small thing.'), tx('{Работал|Работала} и не {жаловался|жаловалась}.', 'Worked and did not complain.')]))
    }
    if (this.alive) ep.unshift(tx('{Жив|Жива} и сейчас.', 'Still alive.'))
    const epitaph = ep.slice(0, 3).reduce((x, y) => x.plus(new Tx(' ', ' ')).plus(y))

    const f = this.birth.first
    const qs: Tx[] = [
      new Tx('Сколько людей сегодня помнят по имени твою прабабушку?', 'How many people today remember your great-grandmother\'s name?'),
      new Tx('Что в твоём сегодняшнем дне показалось бы этому человеку чудом?', 'What in your day today would look like a miracle to this person?'),
    ]
    const kids = this.kids
    if (a < 5 && !this.alive) qs.push(new Tx(`Эта жизнь длилась ${Years.yearsRu(a + 1)}. Чего ты ждёшь от своих ближайших четырёх?`, `This life lasted ${Years.yearsEn(a + 1)}. What do you hope for from your next four?`))
    else {
      if (!this.sawSea) qs.push(tx(`${f.ru} так и не {увидел|увидела} моря. Когда море в последний раз было у тебя перед глазами?`, `${f.en} never saw the sea. When was the sea last in front of your eyes?`))
      if (!this.lit && a >= 12) qs.push(tx(`${f.ru} так и не {научился|научилась} читать. Какую книгу стоило бы прочесть вслух — и кому?`, `${f.en} never learned to read. Which book would be worth reading aloud, and to whom?`))
      if (this.byMaster) qs.push(tx('За {него|неё} всё решал хозяин, даже с кем жить. Что в твоём последнем году — твой собственный выбор?', 'A master decided everything for {him|her}, even whom to live with. What in your last year was your own choice?'))
      if (this.byParents) qs.push(tx('За {него|неё} всё решили старшие. Что в твоём последнем году — твой собственный выбор?', 'The elders decided everything for {him|her}. What in your last year was your own choice?'))
      if (kids > 0) qs.push(new Tx(`У этого человека ${kids === 1 ? 'был' : 'было'} ${Years.childrenNom(kids)}. Кому стоит позвонить сегодня?`, `This person had ${Years.childrenEn(kids)}. Who should you call today?`))
      if (this.kind) qs.push(new Tx('В голодный год этот человек делился последним. С кем можешь поделиться ты?', 'In a hungry year this person shared the last of it. Who could you share with?'))
      if (this.monk) qs.push(new Tx('Эта жизнь прошла в тишине. Где тишина у тебя?', 'This life passed in silence. Where is your silence?'))
      if (this.meet != null) qs.push(new Tx('Этот человек видел того, о ком потом писали книги. Кого из встреченных тобой стоит запомнить?', 'This person met someone later written about. Who among the people you have met is worth remembering?'))
    }
    if (a >= 5) {
      if (this.town) qs.push(new Tx('Этот человек ушёл в город за другой жизнью. Куда хочется уйти тебе?', 'This person went to town for another life. Where do you want to go?'))
      if (this.flags.has('moved')) qs.push(new Tx('Этот человек всё бросил и ушёл. Что держит на месте тебя?', 'This person left everything behind. What keeps you where you are?'))
      if (this.flags.has('faith')) qs.push(new Tx('Этот человек крепко верил. Во что веришь ты?', 'This person kept the faith. What do you believe in?'))
      if (this.birth.estate.rank === 0) qs.push(new Tx('Этот человек родился несвободным. Что ты сегодня можешь сделать, не спрашивая разрешения?', 'This person was born unfree. What can you do today without asking anyone\'s leave?'))
      if (a >= 80) qs.push(new Tx(`Этот человек прожил ${Years.yearsRu(a)}. Что хочется успеть к этому возрасту?`, `This person lived to ${a}. What do you want to have done by that age?`))
      if (this.alive) qs.push(new Tx('Эта жизнь ещё идёт. Что хочется ей пожелать?', 'This life is still going. What would you wish it?'))
      qs.push(...this.asks)
    }
    // The life's own questions most of the time; now and then one of the questions any life can ask.
    const own = qs.slice(2)
    const bridge = own.length > 0 && this.rnd.nextDouble() < 0.75 ? this.rnd.pick(own) : this.rnd.pick([...qs.slice(0, 2), ...ANY_LIFE])

    return {
      age: a, epitaph, bridge, thing: this.birth.heir != null ? null : pickThing(this.era.group, this.region, this.rnd),
      kidsAlive: this.kidsAlive, wealth: this.wealth, rank: this.rank, lit: this.lit, sawSea: this.sawSea, meet: this.meet, story: this.story,
      seen: [...this.usedHist],
    }
  }
}

export function readLife(content: Content, seed: bigint, heir: Heir | null, picks: number[], shown: number, witness: boolean,
  past: Past = Past.NONE, wish: Wish = new Wish()): Page {
  return new Life(content, seed, heir, witness, past, wish).read(picks, shown)
}

/** Reads a life to its end with [pick] choosing at every fork, for the demo and the tests. */
export function liveLife(content: Content, seed: bigint, heir: Heir | null, pick: (c: Choice, i: number) => number,
  opts: { witness?: boolean; past?: Past; wish?: Wish } = {}): [Page, number[]] {
  const picks: number[] = []
  let shown = 1
  for (;;) {
    const p = readLife(content, seed, heir, picks, shown, opts.witness ?? false, opts.past ?? Past.NONE, opts.wish ?? new Wish())
    if (p.end != null) return [p, picks]
    if (p.pending != null) picks.push(pick(p.pending, picks.length))
    else shown++
  }
}
