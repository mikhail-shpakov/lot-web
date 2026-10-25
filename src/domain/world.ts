/** A line in both languages. Russian and English may carry {he|she} marks until a life's sex is known. */
export class Tx {
  constructor(readonly ru: string, readonly en: string) {}
  of(ru: boolean) { return ru ? this.ru : this.en }
  g(sex: Sex) { return new Tx(Tx.mark(this.ru, sex), Tx.mark(this.en, sex)) }
  plus(o: Tx) { return new Tx(this.ru + o.ru, this.en + o.en) }
  equals(o: Tx | null | undefined) { return !!o && o.ru === this.ru && o.en === this.en }

  static mark(s: string, sex: Sex) {
    return s.replace(/\{([^|}]*)\|([^}]*)\}/g, (_, m: string, f: string) => (sex === 'M' ? m : f))
  }
}

export type Sex = 'M' | 'F'

/** Eras share their everyday lines by group. */
export type Group = 'STONE' | 'ANC' | 'MED' | 'EARLY' | 'IND' | 'MOD'
export const GROUPS: Group[] = ['STONE', 'ANC', 'MED', 'EARLY', 'IND', 'MOD']

export interface Era {
  i: number
  group: Group
  name: Tx
  span: Tx
  from: number
  to: number
  /** People born in it, in billions. */
  births: number
  /** The chance of dying before five. */
  q0: number
  /** Age at death for those who pass five: low, most likely, high. */
  die: [number, number, number]
  lit: number
  /** Children born to a family. */
  fert: number
  color: string
  regions: Region[]
  estates: Estate[]
}

export interface Area { key: string; name: Tx; regions: Set<string> }

export interface Region {
  key: string
  name: Tx
  w: number
  lon: number
  lat: number
  cult: string
  tags: Set<string>
  sea: boolean
}

/** The family one is born into: «в семье крестьян», "born to peasants". */
export interface Estate {
  key: string
  of: Tx
  w: number
  /** 0 unfree, 1 common, 2 craft and trade, 3 the top. */
  rank: number
  work: Tx
  only: Set<string> | null
}

/** What the reader asked of the lot before drawing it; null means "any". Within it the draw keeps the real weights. */
export class Wish {
  constructor(readonly eraI: number | null = null, readonly area: string | null = null, readonly sex: Sex | null = null) {}
  get any() { return this.eraI == null && this.area == null && this.sex == null }
  copy(p: { eraI?: number | null; area?: string | null; sex?: Sex | null }) {
    return new Wish(p.eraI !== undefined ? p.eraI : this.eraI, p.area !== undefined ? p.area : this.area, p.sex !== undefined ? p.sex : this.sex)
  }
  encode() { return [this.eraI ?? '', this.area ?? '', this.sex ?? ''].join(',') }
  static decode(s: string | null | undefined): Wish {
    const p = s?.split(',')
    if (!p || p.length !== 3) return new Wish()
    const e = /^-?\d+$/.test(p[0]) ? parseInt(p[0], 10) : null
    return new Wish(e, p[1] || null, p[2] === 'M' || p[2] === 'F' ? p[2] : null)
  }
}

// Kotlin-shaped helpers, so the tables below read as they do in the Android source.
const tx = (ru: string, en: string) => new Tx(ru, en)
const listOf = <T>(...a: T[]): T[] => a
const setOf = (...a: string[]) => new Set(a)
const triple = (a: number, b: number, c: number): [number, number, number] => [a, b, c]
const hex = (c: number) => '#' + (c & 0xffffff).toString(16).padStart(6, '0')

function era(i: number, group: Group, name: Tx, span: Tx, from: number, to: number, births: number, q0: number, die: [number, number, number],
  lit: number, fert: number, color: number, regions: Region[], estates: Estate[]): Era {
  return { i, group, name, span, from, to, births, q0, die, lit, fert, color: hex(color), regions, estates }
}

function r(key: string, ru: string, en: string, w: number, lon: number, lat: number, cult: string, tags: string, sea = false): Region {
  return { key, name: tx(ru, en), w, lon, lat, cult, tags: new Set(tags.split(' ')), sea }
}

function e(key: string, ru: string, en: string, w: number, rank: number, workRu: string, workEn: string, only: string | null = null): Estate {
  return { key, of: tx(ru, en), w, rank, work: tx(workRu, workEn), only: only != null ? new Set(only.split(' ')) : null }
}

function area_(key: string, name: Tx, regions: Set<string>): Area { return { key, name, regions } }

const FIELD = tx("{Пашешь с отцом.|Прядёшь, жнёшь и смотришь за младшими.}", "{You plough with your father.|You spin, reap and mind the little ones.}")

/** Everyone ever born, in billions: the Population Reference Bureau's estimate, rounded. */
export const TOTAL = 117.0

function medEstates(serfs: number): Estate[] { return listOf(
    e("farm", "крестьян", "peasants", 78.0, 1, FIELD.ru, FIELD.en),
    e("bond", "холопов", "bondsmen", serfs * 100, 0, "Работаешь на господском дворе без платы.", "You work in the lord's yard for no pay."),
    e("craft", "ремесленников", "craftsmen", 8.0, 2, "{Стоишь у горна.|Помогаешь в лавке.}", "{You stand at the forge.|You help in the shop.}"),
    e("trade", "торговцев", "merchants", 4.0, 2, "Считаешь мешки и учишь цены.", "You count sacks and learn the prices."),
    e("temple", "служителей храма", "temple servants", 2.5, 3, "Подметаешь храм и учишь молитвы.", "You sweep the temple and learn the prayers."),
    e("war", "воинов", "warriors", 2.0, 2, "{Чистишь коня и оружие.|Шьёшь и стряпаешь на всю дружину.}", "{You groom the horse and clean the arms.|You sew and cook for the whole band.}"),
    e("noble", "знатного рода", "a noble house", 1.5, 3, "Учишься держаться в седле и при гостях.", "You learn to sit a horse and to sit with guests."),
)}

export const ERAS: Era[] = listOf(
        era(0, "STONE", tx("Каменный век", "Stone Age"), tx("до 8000 до н.э.", "before 8000 BC"), -50000, -8000, 9.0, .45, triple(8, 30, 70), 0.0, 4.0, 0xFF6B4A2B,
            listOf(
                r("eaf", "Восточная Африка", "East Africa", 30.0, 36, 0, "stone", "af"),
                r("me", "Ближний Восток", "Near East", 13.0, 40, 32, "stone", "me"),
                r("eur", "Европа, у ледника", "Europe, by the ice", 8.0, 15, 48, "stone", "eu med"),
                r("sas", "Южная Азия", "South Asia", 22.0, 78, 22, "stone", "in", true),
                r("eas", "Восточная Азия", "East Asia", 17.0, 112, 34, "stone", "cn", true),
                r("am", "Америка", "The Americas", 6.0, -100, 38, "stone", "am meso"),
                r("au", "Австралия", "Australia", 4.0, 135, -25, "au", "au", true),
            ),
            listOf(e("band", "охотников и собирателей", "hunter-gatherers", 100.0, 1,
                "{Ходишь со взрослыми на зверя: тебя уже берут в загон.|Ходишь с женщинами за кореньями и учишься находить съедобное.}",
                "{You go after game with the grown-ups: they let you drive the herd.|You go with the women for roots and learn what can be eaten.}"))),
        era(1, "ANC", tx("Древний мир", "Ancient world"), tx("8000 до н.э. – 1 н.э.", "8000 BC – AD 1"), -8000, 1, 37.0, .42, triple(8, 38, 80), .02, 6.0, 0xFF8F6A2F,
            listOf(
                r("cn", "Китай, Жёлтая река", "China, the Yellow River", 24.0, 112, 35, "cn", "cn"),
                r("in", "Индия, Ганг", "India, the Ganges", 24.0, 82, 25, "in", "in"),
                r("mes", "Месопотамия", "Mesopotamia", 9.0, 45, 32, "mes", "me"),
                r("eg", "Египет, Нил", "Egypt, the Nile", 7.0, 31, 27, "eg", "eg", true),
                r("med", "Средиземноморье", "The Mediterranean", 12.0, 18, 40, "gr", "med it eu", true),
                r("waf", "Западная Африка", "West Africa", 9.0, 0, 11, "af", "af"),
                r("meso", "Мезоамерика", "Mesoamerica", 4.0, -98, 19, "am", "meso am"),
                r("andes", "Анды", "The Andes", 2.0, -73, -13, "am", "andes am"),
                r("au", "Австралия", "Australia", .5, 135, -25, "au", "au", true),
            ),
            listOf(
                e("farm", "земледельцев", "farmers", 70.0, 1, "Работаешь в поле с отцом и у очага с матерью.", "You work the field with your father and the hearth with your mother."),
                e("slave", "рабов", "slaves", 12.0, 0, "Работаешь, как прикажут. Тебя могут продать.", "You work as you are told. You can be sold."),
                e("craft", "ремесленников", "craftsmen", 9.0, 2, "Помогаешь в мастерской: месишь глину, раздуваешь горн.", "You help in the workshop: kneading clay, pumping the bellows."),
                e("scribe", "писцов при храме", "temple scribes", 4.0, 3, "Носишь таблички за писцами.", "You carry the tablets behind the scribes."),
                e("war", "воинов", "warriors", 4.0, 2, "{Учишься держать копьё.|Мелешь зерно для всей дружины.}", "{You learn to hold a spear.|You grind grain for the whole war band.}"),
                e("noble", "знатного рода", "a noble house", 1.0, 3, "Учишься приказывать слугам.", "You learn to give orders to servants."),
            )),
        era(2, "MED", tx("Раннее средневековье", "Early Middle Ages"), tx("1 – 1200", "1 – 1200"), 1, 1200, 27.0, .40, triple(8, 42, 85), .05, 6.0, 0xFF5C6E3A,
            listOf(
                r("cn", "Китай", "China", 26.0, 112, 33, "cn", "cn"),
                r("in", "Индия", "India", 24.0, 79, 22, "in", "in"),
                r("me", "Ближний Восток", "The Middle East", 10.0, 42, 33, "me", "me eg"),
                r("fr", "Франция", "France", 5.0, 2, 47, "fr", "eu fr"),
                r("it", "Италия", "Italy", 4.0, 12, 43, "it", "eu it med", true),
                r("de", "Германия", "Germany", 3.0, 10, 51, "de", "eu de"),
                r("ru", "Русь", "Rus'", 3.0, 37, 55, "ru", "ru"),
                r("waf", "Западная Африка", "West Africa", 11.0, 0, 11, "af", "af"),
                r("jp", "Япония", "Japan", 3.0, 138, 36, "jp", "jp", true),
                r("sea", "Юго-Восточная Азия", "Southeast Asia", 5.0, 104, 13, "sea", "sea", true),
                r("meso", "Мезоамерика", "Mesoamerica", 4.0, -98, 19, "am", "meso am"),
                r("andes", "Анды", "The Andes", 2.0, -73, -13, "am", "andes am"),
                r("au", "Австралия", "Australia", .5, 135, -25, "au", "au", true),
            ),
            medEstates(.04)),
        era(3, "MED", tx("Позднее средневековье", "Late Middle Ages"), tx("1200 – 1650", "1200 – 1650"), 1200, 1650, 12.0, .40, triple(8, 44, 85), .10, 6.0, 0xFF3F6A6A,
            listOf(
                r("cn", "Китай", "China", 24.0, 112, 33, "cn", "cn"),
                r("in", "Индия", "India", 22.0, 79, 22, "in", "in"),
                r("sea", "Юго-Восточная Азия", "Southeast Asia", 6.0, 104, 13, "sea", "sea", true),
                r("jp", "Япония", "Japan", 4.0, 138, 36, "jp", "jp", true),
                r("me", "Ближний Восток", "The Middle East", 7.0, 42, 33, "me", "me eg"),
                r("fr", "Франция", "France", 5.0, 2, 47, "fr", "eu fr"),
                r("de", "Германия", "Germany", 4.0, 10, 51, "de", "eu de"),
                r("it", "Италия", "Italy", 4.0, 12, 43, "it", "eu it med", true),
                r("en", "Англия", "England", 2.0, -1, 52, "en", "eu en", true),
                r("ru", "Русь", "Rus'", 3.0, 37, 55, "ru", "ru"),
                r("waf", "Западная Африка", "West Africa", 12.0, 0, 11, "af", "af"),
                r("meso", "Мезоамерика", "Mesoamerica", 4.0, -98, 19, "am", "meso am"),
                r("andes", "Анды", "The Andes", 3.0, -73, -13, "am", "andes am"),
                r("au", "Австралия", "Australia", .4, 135, -25, "au", "au", true),
            ),
            medEstates(.02)),
        era(4, "EARLY", tx("Новое время", "Early modern"), tx("1650 – 1850", "1650 – 1850"), 1650, 1850, 9.0, .37, triple(8, 48, 90), .25, 6.0, 0xFF3D4F7A,
            listOf(
                r("cn", "Китай", "China", 30.0, 112, 33, "cn", "cn"),
                r("in", "Индия", "India", 20.0, 79, 22, "in", "in"),
                r("sea", "Юго-Восточная Азия", "Southeast Asia", 6.0, 104, 13, "sea", "sea", true),
                r("jp", "Япония", "Japan", 4.0, 138, 36, "jp", "jp", true),
                r("me", "Ближний Восток", "The Middle East", 5.0, 42, 33, "me", "me eg"),
                r("fr", "Франция", "France", 4.0, 2, 47, "fr", "eu fr"),
                r("de", "Германия", "Germany", 4.0, 10, 51, "de", "eu de"),
                r("en", "Англия", "England", 3.0, -1, 52, "en", "eu en", true),
                r("it", "Италия", "Italy", 3.0, 12, 43, "it", "eu it med", true),
                r("ru", "Россия", "Russia", 6.0, 38, 55, "ru", "ru"),
                r("waf", "Западная Африка", "West Africa", 10.0, 0, 11, "af", "af"),
                r("latam", "Латинская Америка", "Latin America", 4.0, -60, -12, "la", "latam meso andes am"),
                r("us", "Северная Америка", "North America", 1.5, -78, 40, "us", "us", true),
                r("au", "Австралия", "Australia", .2, 135, -25, "au", "au", true),
            ),
            listOf(
                e("farm", "крестьян", "peasants", 66.0, 1, FIELD.ru, FIELD.en),
                e("serf", "крепостных", "serfs", 14.0, 0, "Работаешь три дня в неделю на барина, остальное — на себя.", "Three days a week you work for the master, the rest for yourselves.", "ru"),
                e("slave", "невольников", "enslaved people", 6.0, 0, "Работаешь на плантации от рассвета до темноты.", "You work on the plantation from dawn to dark.", "latam us af"),
                e("craft", "ремесленников", "craftsmen", 9.0, 2, "{Стоишь у горна.|Шьёшь на заказ.}", "{You stand at the forge.|You sew to order.}"),
                e("trade", "торговцев", "merchants", 6.0, 2, "Стоишь за прилавком.", "You stand behind the counter."),
                e("clergy", "духовенства", "clergy", 2.0, 3, "Помогаешь отцу в храме: свечи, молитвы, похороны.", "You help your father at the temple: candles, prayers, funerals."),
                e("noble", "дворян", "gentry", 2.0, 3, "Учишься письму, верховой езде и манерам.", "You learn letters, riding and manners."),
            )),
        era(5, "IND", tx("Век машин", "Age of machines"), tx("1850 – 1950", "1850 – 1950"), 1850, 1950, 8.0, .28, triple(8, 58, 95), .5, 5.0, 0xFF6A3F6E,
            listOf(
                r("cn", "Китай", "China", 22.0, 112, 33, "cn", "cn"),
                r("in", "Индия", "India", 18.0, 79, 22, "in", "in"),
                r("sea", "Юго-Восточная Азия", "Southeast Asia", 7.0, 104, 13, "sea", "sea", true),
                r("jp", "Япония", "Japan", 4.0, 138, 36, "jp", "jp", true),
                r("me", "Ближний Восток", "The Middle East", 5.0, 42, 33, "me", "me eg"),
                r("fr", "Франция", "France", 4.0, 2, 47, "fr", "eu fr"),
                r("de", "Германия", "Germany", 4.0, 10, 51, "de", "eu de"),
                r("en", "Англия", "England", 4.0, -1, 52, "en", "eu en", true),
                r("it", "Италия", "Italy", 4.0, 12, 43, "it", "eu it med", true),
                r("ru", "Россия", "Russia", 9.0, 38, 55, "ru", "ru"),
                r("af", "Африка", "Africa", 10.0, 15, 5, "af", "af"),
                r("latam", "Латинская Америка", "Latin America", 6.0, -60, -12, "la", "latam meso andes am"),
                r("us", "США", "The United States", 5.0, -90, 40, "us", "us", true),
                r("au", "Австралия", "Australia", .5, 145, -32, "au", "au", true),
            ),
            listOf(
                e("farm", "крестьян", "peasants", 52.0, 1, FIELD.ru, FIELD.en),
                e("mill", "фабричных рабочих", "mill hands", 20.0, 1, "Идёшь на фабрику: двенадцать часов у станка.", "You go to the mill: twelve hours at the machine."),
                e("craft", "ремесленников", "craftsmen", 10.0, 2, "Учишься ремеслу отца.", "You learn your father's trade."),
                e("shop", "лавочников", "shopkeepers", 8.0, 2, "Стоишь за прилавком.", "You stand behind the counter."),
                e("clerk", "служащих", "clerks", 6.0, 2, "Переписываешь бумаги в конторе.", "You copy papers in an office."),
                e("rich", "богатых", "the wealthy", 1.5, 3, "Учишься музыке и языкам.", "You learn music and languages."),
            )),
        era(6, "MOD", tx("Наше время", "Our time"), tx("1950 – 2026", "1950 – 2026"), 1950, 2026, 15.0, .07, triple(10, 74, 100), .85, 2.6, 0xFF8F2F22,
            listOf(
                r("cn", "Китай", "China", 18.0, 112, 33, "cn", "cn"),
                r("in", "Индия", "India", 19.0, 79, 22, "in", "in"),
                r("sea", "Юго-Восточная Азия", "Southeast Asia", 9.0, 104, 13, "sea", "sea", true),
                r("jp", "Япония", "Japan", 2.0, 138, 36, "jp", "jp", true),
                r("me", "Ближний Восток", "The Middle East", 7.0, 42, 33, "me", "me eg"),
                r("eu", "Европа", "Europe", 6.0, 10, 49, "de", "eu de fr it en"),
                r("ru", "Россия", "Russia", 3.0, 38, 55, "ru", "ru"),
                r("af", "Африка", "Africa", 22.0, 15, 5, "af", "af"),
                r("latam", "Латинская Америка", "Latin America", 9.0, -60, -12, "la", "latam meso andes am"),
                r("us", "США", "The United States", 5.0, -90, 40, "us", "us", true),
                r("au", "Австралия", "Australia", .4, 145, -32, "au", "au", true),
            ),
            listOf(
                e("farm", "крестьян", "smallholders", 33.0, 1, "Работаешь в поле до и после школы.", "You work the field before and after school."),
                e("work", "рабочих", "workers", 25.0, 1, "Подрабатываешь на рынке.", "You earn a little at the market."),
                e("poor", "городской бедноты", "the urban poor", 15.0, 0, "Продаёшь воду на перекрёстке.", "You sell water at a crossroads."),
                e("office", "служащих", "office workers", 19.0, 2, "Делаешь уроки за кухонным столом.", "You do your homework at the kitchen table."),
                e("well", "обеспеченных", "the well-off", 6.0, 3, "Ходишь в кружок робототехники.", "You go to a robotics club."),
                e("rich", "очень богатых", "the very rich", 1.0, 3, "На каникулы летаешь в другие страны.", "You fly abroad for the holidays."),
            )),
    )

export const AREAS: Area[] = listOf(
        area_("cn", tx("Китай", "China"), setOf("cn", "eas")),
        area_("in", tx("Индия", "India"), setOf("in", "sas")),
        area_("me", tx("Ближний Восток", "The Middle East"), setOf("me", "mes", "eg")),
        area_("eu", tx("Европа", "Europe"), setOf("eur", "med", "fr", "it", "de", "en", "eu")),
        area_("ru", tx("Россия", "Russia"), setOf("ru")),
        area_("af", tx("Африка", "Africa"), setOf("eaf", "waf", "af")),
        area_("jp", tx("Япония", "Japan"), setOf("jp")),
        area_("sea", tx("Юго-Восточная Азия", "Southeast Asia"), setOf("sea")),
        area_("am", tx("Америка", "The Americas"), setOf("am", "meso", "andes", "latam", "us")),
        area_("au", tx("Австралия", "Australia"), setOf("au")),
    )

export const ALL_REGIONS: Region[] = ERAS.flatMap((x) => x.regions)

export function region(key: string, eraI: number): Region {
  return ERAS[eraI].regions.find((x) => x.key === key) ?? ALL_REGIONS.find((x) => x.key === key)!
}

export function areaOf(key: string | null | undefined): Area | undefined {
  return AREAS.find((a) => a.key === key)
}

/** Can a lot be drawn for this era and area at all? */
export function fits(eraI: number | null, area: string | null): boolean {
  const a = areaOf(area)
  if (!a) return true
  return ERAS.filter((x) => eraI == null || x.i === eraI).some((x) => x.regions.some((g) => a.regions.has(g.key)))
}

export function eraOf(year: number): Era {
  let found: Era | undefined
  for (const x of ERAS) if (year >= x.from) found = x
  return found ?? ERAS[0]
}

/** Cultures change hands: the Americas speak Spanish after the conquest, Australia English after the ships. */
export function culture(g: Region, year: number): string {
  if (g.cult === 'am' && year > 1540) return 'la'
  if (g.cult === 'au' && year > 1850) return 'en'
  return g.cult
}
