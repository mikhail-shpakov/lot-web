import type { Random } from './random'
import { type Group, type Region, Tx } from './world'

export type Shape = 'NEEDLE' | 'FLINT' | 'BEADS' | 'POUCH' | 'FLUTE' | 'TABLET' | 'MIRROR' | 'AMULET' | 'COIN' | 'CUP' | 'SPOON' | 'CHARM' | 'COMB'
  | 'WHISTLE' | 'PIPE' | 'LETTER' | 'GLASSES' | 'BUTTON' | 'PHOTO' | 'TICKET' | 'THIMBLE' | 'WATCH' | 'PHONE' | 'KEY' | 'CASSETTE'

/** One thing a life leaves behind for the chest. [tags] keep a thing to the regions it belongs to; empty means anywhere. Keys never change: the chest stores them. */
export class ThingKind {
  constructor(readonly key: string, readonly group: Group, readonly shape: Shape, readonly name: Tx, readonly tags: Set<string> = new Set()) {}
  fits(r: Region) {
    if (this.tags.size === 0) return true
    for (const t of this.tags) if (r.tags.has(t)) return true
    return false
  }
}

function t(group: Group, shape: Shape, ru: string, en: string) {
  return new ThingKind(`${group.toLowerCase()}.${shape.toLowerCase()}`, group, shape, new Tx(ru, en))
}

/** A thing of one region; [id] makes its key unique next to the general thing of the same shape. */
function l(group: Group, shape: Shape, id: string, tags: string, ru: string, en: string) {
  return new ThingKind(`${group.toLowerCase()}.${id}`, group, shape, new Tx(ru, en), new Set(tags.split(' ').filter((x) => x.trim() !== '')))
}

export const ALL_THINGS: ThingKind[] = [
        t('STONE', 'NEEDLE', "костяная игла", "a bone needle"),
        t('STONE', 'FLINT', "кремнёвый скребок", "a flint scraper"),
        t('STONE', 'BEADS', "бусы из ракушек", "a string of shell beads"),
        t('STONE', 'POUCH', "мешочек с охрой", "a pouch of ochre"),
        t('STONE', 'FLUTE', "флейта из птичьей кости", "a bird-bone flute"),
        t('ANC', 'TABLET', "глиняная табличка с долгом", "a clay tablet recording a debt"),
        t('ANC', 'MIRROR', "бронзовое зеркальце", "a bronze hand mirror"),
        t('ANC', 'AMULET', "амулет из синего камня", "a blue stone amulet"),
        t('ANC', 'COIN', "медная монета", "a copper coin"),
        t('ANC', 'CUP', "глиняная чашка", "a clay cup"),
        t('MED', 'SPOON', "деревянная ложка", "a wooden spoon"),
        t('MED', 'CHARM', "оловянный оберег", "a pewter charm"),
        t('MED', 'COIN', "серебряная монетка", "a little silver coin"),
        t('MED', 'COMB', "костяной гребень", "a bone comb"),
        t('MED', 'WHISTLE', "ивовая свистулька", "a willow whistle"),
        t('EARLY', 'CHARM', "медный амулет на шнурке", "a copper charm on a cord"),
        t('EARLY', 'PIPE', "глиняная трубка", "a clay pipe"),
        t('EARLY', 'LETTER', "письмо, которое некому было прочитать", "a letter nobody could read"),
        t('EARLY', 'SPOON', "расписная ложка", "a painted spoon"),
        t('EARLY', 'GLASSES', "очки в проволочной оправе", "wire-rimmed spectacles"),
        t('IND', 'BUTTON', "пуговица от шинели", "a greatcoat button"),
        t('IND', 'PHOTO', "фотокарточка в картонной рамке", "a photograph in a card frame"),
        t('IND', 'TICKET', "железнодорожный билет", "a railway ticket"),
        t('IND', 'THIMBLE', "напёрсток", "a thimble"),
        t('IND', 'WATCH', "карманные часы", "a pocket watch"),
        t('MOD', 'PHONE', "кнопочный телефон", "a push-button phone"),
        t('MOD', 'LETTER', "школьный аттестат", "a school certificate"),
        t('MOD', 'KEY', "ключ от квартиры", "a flat key"),
        t('MOD', 'BEADS', "пластиковые бусы", "plastic beads"),
        t('MOD', 'CASSETTE', "кассета с песнями", "a mixtape"),
        l('STONE', 'AMULET', "bear", "eu", "зуб пещерного медведя на шнурке", "a cave bear's tooth on a cord"),
        l('STONE', 'CHARM', "ivory", "eu", "фигурка из бивня мамонта", "a mammoth-ivory figurine"),
        l('STONE', 'BEADS', "ostrich", "af", "бусы из скорлупы страусиных яиц", "ostrich-eggshell beads"),
        l('ANC', 'AMULET', "jade", "cn", "нефритовая подвеска", "a jade pendant"),
        l('ANC', 'COIN', "spade", "cn", "бронзовая монета в виде лопатки", "a bronze spade coin"),
        l('ANC', 'AMULET', "scarab", "eg", "фаянсовый скарабей", "a faience scarab"),
        l('ANC', 'CUP', "lamp", "med me", "глиняный светильник", "a clay oil lamp"),
        l('ANC', 'BEADS', "quipu", "andes", "шнурок с узелками кипу", "a knotted quipu cord"),
        l('ANC', 'BEADS', "jadeite", "meso", "бусина из жадеита", "a jadeite bead"),
        l('ANC', 'LETTER', "palm", "in", "листья пальмы с письменами", "a palm-leaf manuscript"),
        l('ANC', 'BEADS', "cowrie", "af in", "нитка раковин каури", "a string of cowrie shells"),
        l('MED', 'BEADS', "rosary", "me in jp sea", "чётки", "prayer beads"),
        l('MED', 'LETTER', "birch", "ru", "берестяная грамота", "a birch-bark letter"),
        l('MED', 'CUP', "tea", "cn jp", "чайная чашка", "a tea bowl"),
        l('MED', 'CHARM', "cross", "eu ru", "медный нательный крестик", "a small copper cross"),
        l('MED', 'AMULET', "scallop", "eu", "раковина паломника", "a pilgrim's scallop shell"),
        l('MED', 'TABLET', "salt", "af", "плитка соли", "a slab of salt"),
        l('MED', 'TICKET', "jiaozi", "cn", "бумажная ассигнация", "a paper banknote"),
        l('MED', 'POUCH', "cacao", "meso", "мешочек какао-бобов", "a pouch of cacao beans"),
        l('MED', 'CUP', "ewer", "me eg", "медный кувшинчик", "a little copper ewer"),
        l('EARLY', 'CUP', "porcelain", "cn", "фарфоровая чашка", "a porcelain cup"),
        l('EARLY', 'POUCH', "tobacco", "eu ru us latam", "кисет", "a tobacco pouch"),
        l('EARLY', 'NEEDLE', "quill", "eu ru en fr de it", "гусиное перо", "a goose quill"),
        l('EARLY', 'LETTER', "freedom", "ru latam us", "вольная грамота", "a letter of freedom"),
        l('EARLY', 'COIN', "real", "latam", "серебряный реал", "a silver real"),
        l('EARLY', 'BEADS', "netsuke", "jp", "нэцкэ на шнурке", "a netsuke on a cord"),
        l('IND', 'LETTER', "postcard", "eu ru it de en fr", "открытка из Америки", "a postcard from America"),
        l('IND', 'BUTTON', "medal", "eu ru de fr en it us", "медаль за войну", "a war medal"),
        l('IND', 'TICKET', "union", "eu en de us", "профсоюзный билет", "a union card"),
        l('IND', 'KEY', "chest", "", "ключ от сундука", "a key to the chest"),
        l('MOD', 'PHONE', "radio", "", "транзисторный приёмник", "a transistor radio"),
        l('MOD', 'BUTTON', "badge", "ru", "комсомольский значок", "a Komsomol badge"),
        l('MOD', 'TICKET', "pass", "", "пропуск на завод", "a factory pass"),
        l('MOD', 'PHOTO', "wedding", "", "свадебная фотография", "a wedding photograph"),
]

/** A thing for a life in [g] born in [r]. */
export function pickThing(g: Group, r: Region, rnd: Random): ThingKind {
  return rnd.pick(ALL_THINGS.filter((x) => x.group === g && x.fits(r)))
}

export function thingOf(key: string): ThingKind { return ALL_THINGS.find((x) => x.key === key) ?? ALL_THINGS[0] }
export function thingsOf(g: Group) { return ALL_THINGS.filter((x) => x.group === g) }
