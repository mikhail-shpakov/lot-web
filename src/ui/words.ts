import type { Birth } from '../domain/life'
import { TOTAL, Tx } from '../domain/world'
import * as Years from '../domain/years'

/** The four lines burnt into the wooden tag. */
export interface TagText { year: string; place: string; family: string; sex: string }

/** Words that come from data rather than resources, in both languages. */
export class Words {
  constructor(readonly ru: boolean) {}
  t(r: string, e: string) { return this.ru ? r : e }
  x(tx: Tx) { return tx.of(this.ru) }

  n(n: number, one: string, few: string, many: string, en1: string, enN: string) {
    return this.ru ? `${n} ${Years.plural(n, one, few, many)}` : `${n} ${n === 1 ? en1 : enN}`
  }

  year(y: number) { return this.x(Years.yearOf(y)) }

  /** «2,1%», "<0.01%". */
  pct(p: number): string {
    const v = p * 100
    let s: string
    if (v >= 10) s = v.toFixed(0)
    else if (v >= 1) s = v.toFixed(1)
    else if (v >= 0.01) s = v.toFixed(2)
    else return this.t('<0,01%', '<0.01%')
    return (this.ru ? s.replace('.', ',') : s) + '%'
  }

  /** People, from a share of the 117 billion: «1,2 млрд», "430 million". */
  people(share: number): string {
    const b = share * TOTAL
    if (b >= 1) {
      const s = b.toFixed(1)
      return this.ru ? `${s.replace('.', ',')} млрд` : `${s} billion`
    }
    const m = Math.max(Math.trunc(b * 1000), 1)
    return this.ru ? `${m} млн` : `${m} million`
  }

  tag(b: Birth): TagText {
    return {
      year: this.year(b.year),
      place: this.x(b.region.name),
      family: this.t(`в семье ${b.estate.of.ru}`, `born to ${b.estate.of.en}`),
      sex: b.sex === 'M' ? this.t('мальчик', 'a boy') : this.t('девочка', 'a girl'),
    }
  }

  born(b: Birth): string {
    const y = Years.inYear(b.year)
    return this.x(new Tx(`{Родился|Родилась} ${Years.stop(y.ru)} ${b.region.name.ru}, в семье ${b.estate.of.ru}.`,
      `Born ${Years.stop(y.en)} ${b.region.name.en}, to ${b.estate.of.en}.`).g(b.sex))
  }

  gen(g: number) { return this.ru ? `${g}-е поколение рода` : `generation ${g} of the line` }

  lived(age: number) { return age < 1 ? this.t('меньше года', 'under a year') : this.n(age, 'год', 'года', 'лет', 'year', 'years') }
}

export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
