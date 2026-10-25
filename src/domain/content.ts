import { type Group, type Region, Tx } from './world'

export type Kind = 'CHILD' | 'JOY' | 'YOUTH' | 'ADULT' | 'OLD' | 'HARD'
const KIND_OF: Record<string, Kind> = { c: 'CHILD', j: 'JOY', y: 'YOUTH', a: 'ADULT', o: 'OLD', x: 'HARD' }
export const KINDS: Kind[] = ['CHILD', 'JOY', 'YOUTH', 'ADULT', 'OLD', 'HARD']

/** The facts about a life that lines, forks and doors look at. */
export interface Person {
  readonly rank: number
  /** The year the life has reached. */
  readonly now: number
  /** m f lit illit married single kids monk town, plus the door words !lit poor rich !married !kids. */
  has(cond: string): boolean
}

/** Negations the person answers itself, as door conditions do. */
const DOOR_NEGATIONS = new Set(['lit', 'married', 'kids'])
const RANK = /^r[0-3]$/

/** What a line or a fork asks of the person: sex, station, letters, family. Read from `need` columns (see tools/CONTENT.md). */
export class Need {
  private readonly ranks: Set<number>
  /** `after:1930` and `before:-500` keep a line to the years it belongs to. */
  private readonly after: number | null
  private readonly before: number | null
  private readonly rest: Set<string>
  /** `+town` and the like: what a line does to the life once it is written (a line about the new flat makes the life a town life). */
  readonly sets: string[]

  constructor(tokens: string[]) {
    this.ranks = new Set(tokens.filter((t) => RANK.test(t)).map((t) => t.charCodeAt(1) - 48))
    const a = tokens.find((t) => t.startsWith('after:'))
    const b = tokens.find((t) => t.startsWith('before:'))
    this.after = a != null ? parseInt(a.slice(a.indexOf(':') + 1), 10) : null
    this.before = b != null ? parseInt(b.slice(b.indexOf(':') + 1), 10) : null
    this.rest = new Set(tokens.filter((t) => !(RANK.test(t) || t.includes(':') || t.startsWith('+'))))
    this.sets = tokens.filter((t) => t.startsWith('+')).map((t) => t.slice(1))
  }

  /** True when the need names [t] itself (`monk` lines are the only ones a monk's life gets). */
  names(t: string) { return this.rest.has(t) }

  /** True for a need that a town life can never meet (it asks for `!town`). */
  holdsOnlyOutsideTown() { return this.rest.has('!town') }

  holds(p: Person): boolean {
    if (this.ranks.size > 0 && !this.ranks.has(p.rank)) return false
    for (const t of this.rest) {
      const ok = t.startsWith('!') && !DOOR_NEGATIONS.has(t.slice(1)) ? !p.has(t.slice(1)) : p.has(t)
      if (!ok) return false
    }
    return (this.after == null || p.now >= this.after) && (this.before == null || p.now < this.before)
  }

  static readonly ANY = new Need([])
  static of(s: string) { return s.trim() === '' ? Need.ANY : new Need(s.trim().split(' ')) }
}

export class Line {
  constructor(readonly group: Group, readonly kind: Kind, readonly tags: Set<string>, readonly text: Tx, readonly need: Need) {}
  /** "sea" asks for a coast; other tags ask for a region that carries one of them. */
  fits(r: Region) {
    if (this.tags.size === 0) return true
    for (const t of this.tags) if (t === 'sea' ? r.sea : r.tags.has(t)) return true
    return false
  }
}

/** A real event. [meet] marks someone later written about, met in passing. Its id is its row, so rows are only ever appended. */
export class Hist {
  constructor(readonly id: number, readonly tags: Set<string>, readonly from: number, readonly to: number, readonly meet: boolean, readonly text: Tx) {}
  fits(r: Region, eraI: number, year: number) {
    if (year < this.from - 1 || year > this.to + 1) return false
    if (this.tags.has('*')) return eraI >= 5
    for (const t of this.tags) if (r.tags.has(t)) return true
    return false
  }
  /** The middle of its years, for sorting the chronicle. */
  get mid() { return Math.trunc((this.from + this.to) / 2) }
}

export interface Outcome { weight: number; text: Tx; fx: string[] }
export interface Shut { conds: string[]; why: Tx }
export interface Gate { text: Tx; shut: Shut[]; outs: Outcome[]; ep: Tx | null; ask: Tx | null }

/** An everyday fork from dilemmas*.txt. */
export class Dilemma {
  constructor(
    readonly id: string,
    readonly groups: Set<Group>,
    readonly tags: Set<string>,
    readonly need: Need,
    readonly ages: [number, number],
    readonly weight: number,
    readonly q: Tx,
    readonly doors: Gate[],
  ) {}
  fits(r: Region) {
    if (this.tags.has('*') || this.tags.size === 0) return true
    for (const t of this.tags) if (r.tags.has(t)) return true
    return false
  }
}

function rows(s: string) {
  return s.split(/\r?\n/).filter((l) => l.trim() !== '' && !l.startsWith('#')).map((l) => l.split('\t'))
}

function tags(s: string) { return s.trim() === '' ? new Set<string>() : new Set(s.trim().split(' ')) }

/** A `|` inside a {he|she} mark is part of the text, not a separator. */
const BAR = /\|(?![^{]*\})/
function bars(s: string) { return s.split(BAR).map((x) => x.trim()) }
function pair(s: string) { const b = bars(s); return new Tx(b[0], b[1]) }

function before(s: string, c: string) { const i = s.indexOf(c); return i < 0 ? s : s.slice(0, i) }
function after(s: string, c: string) { const i = s.indexOf(c); return i < 0 ? s : s.slice(i + 1) }

export function parseDilemmas(src: string): Dilemma[] {
  const out: Dilemma[] = []
  for (const block of src.split(/\n\s*\n/)) {
    const rs = block.trim().split(/\r?\n/).filter((l) => l.trim() !== '' && !l.startsWith('#'))
    if (rs.length === 0) continue
    const head = new Map<string, string>()
    const doors: { text: string; shut: string[]; out: string[]; ep?: string; ask?: string }[] = []
    for (const row of rs) {
      const key = before(row, ':').trim()
      const v = after(row, ':').trim()
      if (key === 'door') doors.push({ text: v, shut: [], out: [] })
      else if ((key === 'shut' || key === 'out') && doors.length > 0) doors[doors.length - 1][key].push(v)
      else if ((key === 'ep' || key === 'ask') && doors.length > 0) doors[doors.length - 1][key] = v
      else head.set(key, v)
    }
    const need = (k: string) => { const v = head.get(k); if (v == null) throw new Error(`dilemma without ${k}`); return v }
    const [a, b] = need('ages').split('-').map((x) => parseInt(x.trim(), 10))
    const w = head.get('weight')
    const weight = w != null && w.trim() !== '' && !isNaN(Number(w)) ? Number(w) : 1.0
    out.push(new Dilemma(
      need('id'),
      new Set(need('groups').split(' ').filter((x) => x.trim() !== '').map((x) => x.toUpperCase() as Group)),
      tags(head.get('tags') ?? ''),
      Need.of(head.get('need') ?? ''),
      [a, b],
      weight,
      pair(need('q')),
      doors.map((d) => ({
        text: pair(d.text),
        shut: d.shut.map((s) => { const c = bars(s); return { conds: c[0].split(' ').filter((x) => x.trim() !== ''), why: new Tx(c[1], c[2]) } }),
        outs: d.out.map((o) => {
          const c = bars(o)
          return { weight: Number(c[0]), text: new Tx(c[1], c[2]), fx: (c[3] ?? '').split(' ').filter((x) => x.trim() !== '') }
        }),
        ep: d.ep != null ? pair(d.ep) : null,
        ask: d.ask != null ? pair(d.ask) : null,
      })),
    ))
  }
  return out
}

/** Everyday lines, real history and forks, read from the content folder: lines/*.tsv, history.tsv and the dilemmas files. */
export class Content {
  private readonly byKey = new Map<string, Line[]>()

  constructor(readonly lines: Line[], readonly hist: Hist[], readonly dilemmas: Dilemma[] = []) {
    for (const l of lines) {
      const k = l.group + l.kind
      const list = this.byKey.get(k)
      if (list) list.push(l)
      else this.byKey.set(k, [l])
    }
  }

  linesFor(g: Group, k: Kind, r: Region) { return (this.byKey.get(g + k) ?? []).filter((l) => l.fits(r)) }

  /** [lines] and [dilemmas] come in file-name order, as the app lists its assets. */
  static read(lines: string[], history: string, dilemmas: string[]): Content {
    const l = lines.flatMap(rows).map((c) =>
      new Line(c[0].toUpperCase() as Group, KIND_OF[c[1][0]], tags(c[2]), new Tx(c[3], c[4]), Need.of(c[5] ?? '')))
    const h = rows(history).map((c, i) => new Hist(i, tags(c[0]), parseInt(c[1], 10), parseInt(c[2], 10), c[3] === '1', new Tx(c[4], c[5])))
    const d = dilemmas.flatMap(parseDilemmas)
    return new Content(l, h, d)
  }
}
