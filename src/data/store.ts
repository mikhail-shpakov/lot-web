/**
 * Everything the reader keeps, as one document in IndexedDB: the lives, the chest, the open book and the settings.
 * Small enough to write whole on every change; falls back to memory where the browser keeps no storage.
 */
import type { Sex } from '../domain/world'

/** A life lived to its end. Its seed and picks replay the whole book; the rest is kept for the atlas, the chest and the heirs. */
export interface LifeRow {
  id: number
  /** A 64-bit seed, as a decimal string. */
  seed: string
  heirOf: number | null
  witness: boolean
  picks: number[]
  nameRu: string
  nameEn: string
  sex: Sex
  year: number
  death: number
  eraI: number
  region: string
  cult: string
  estate: string
  rank: number
  wealth: number
  surRu: string | null
  surEn: string | null
  kids: number
  lit: boolean
  sawSea: boolean
  epitaphRu: string
  epitaphEn: string
  bridgeRu: string
  bridgeEn: string
  answer: string
  thingId: number
  storyRu: string | null
  storyEn: string | null
  meet: number | null
  /** The seed of the first life in a family line, shared by every great-grandchild after it. */
  dynasty: string
  gen: number
  endedAt: number
  ver: number
  /** The book as it was written: [age, mark, ru, en] per entry. */
  book: [number, number, string, string][]
  /** Ids of the real events the life met, for the chronicle. */
  seen: number[]
}

/** A thing in the chest; who held it is the lives that point at it. */
export interface ThingRow { id: number; key: string; createdAt: number }

/** The life being read now: everything else is replayed from these. [lifeId] is set once it has ended and gone to the archive. */
export interface Cur {
  seed: string
  heirOf: number | null
  witness: boolean
  picks: number[]
  shown: number
  drawnAt: number
  lifeId: number | null
  ver: number
  /** The era, area and sex asked for before the draw, encoded. */
  wish: string
}

export interface Settings {
  onboarded: boolean
  /** Lives drawn as a witness: fate makes every choice, and you only read. */
  witness: boolean
  /** The era, area and sex the reader keeps asking of the lot, encoded; any by default. */
  wish: string
  /** The book is written in the registrar's hand; false prints it in plain type. */
  hand: boolean
  /** null follows the browser. */
  lang: 'ru' | 'en' | null
  /** The book turns its own pages; false waits for the reader to turn each one. */
  auto: boolean
  /** How fast the book turns itself: 1, 2, 4 or 8 times the reading pace. */
  speed: number
}

export interface Doc {
  v: 1
  lives: LifeRow[]
  things: ThingRow[]
  cur: Cur | null
  settings: Settings
}

export const emptyDoc = (): Doc => ({
  v: 1, lives: [], things: [], cur: null,
  settings: { onboarded: false, witness: false, wish: ',,', hand: true, lang: null, auto: true, speed: 1 },
})

const DB = 'lot'
const STORE = 'kv'
const KEY = 'doc'

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const r = indexedDB.open(DB, 1)
    r.onupgradeneeded = () => r.result.createObjectStore(STORE)
    r.onsuccess = () => resolve(r.result)
    r.onerror = () => reject(r.error)
  })
}

let db: Promise<IDBDatabase> | null = null

export async function load(): Promise<Doc> {
  try {
    db = open()
    const d = await db
    const got = await new Promise<Doc | undefined>((resolve, reject) => {
      const q = d.transaction(STORE).objectStore(STORE).get(KEY)
      q.onsuccess = () => resolve(q.result as Doc | undefined)
      q.onerror = () => reject(q.error)
    })
    return got ? { ...emptyDoc(), ...got, settings: { ...emptyDoc().settings, ...got.settings } } : emptyDoc()
  } catch {
    db = null
    return emptyDoc()
  }
}

/** Writes are queued so the last one always lands last. */
let queue: Promise<void> = Promise.resolve()

export function save(doc: Doc) {
  if (!db) return
  const snapshot = structuredClone(doc)
  queue = queue.then(async () => {
    try {
      const d = await db!
      await new Promise<void>((resolve, reject) => {
        const t = d.transaction(STORE, 'readwrite')
        t.objectStore(STORE).put(snapshot, KEY)
        t.oncomplete = () => resolve()
        t.onerror = () => reject(t.error)
      })
    } catch (e) {
      console.warn('lot: could not save', e)
    }
  })
}

/** Asks the browser not to evict the archive when space runs low. */
export function persist() {
  navigator.storage?.persist?.().catch(() => {})
}
