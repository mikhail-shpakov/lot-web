import { Tx } from './world'

function group(n: number, sep: string) {
  return String(n).split('').reverse().join('').match(/.{1,3}/g)!.join(sep).split('').reverse().join('')
}

/** «1347», «1823 до н.э.», «ок. 23 000 до н.э.». */
export function yearOf(y: number): Tx {
  if (y < -9000) { const k = Math.abs(Math.trunc(y / 1000)) * 1000; return new Tx(`ок. ${group(k, ' ')} до н.э.`, `c. ${group(k, ',')} BC`) }
  if (y < 0) return new Tx(`${-y} до н.э.`, `${-y} BC`)
  return new Tx(`${y}`, `${y}`)
}

/** Ends a sentence after a year without doubling the dot of «до н.э.». */
export function stop(s: string) { return s.endsWith('.') ? s : `${s}.` }

/** «в 1347 году», "in 1347". */
export function inYear(y: number): Tx {
  if (y < -9000) { const k = Math.abs(Math.trunc(y / 1000)) * 1000; return new Tx(`около ${group(k, ' ')} года до н.э.`, `around ${group(k, ',')} BC`) }
  if (y < 0) return new Tx(`в ${-y} году до н.э.`, `in ${-y} BC`)
  return new Tx(`в ${y} году`, `in ${y}`)
}

export function plural(n: number, one: string, few: string, many: string): string {
  const a = Math.abs(n) % 100
  const b = a % 10
  if (a >= 11 && a <= 19) return many
  if (b === 1) return one
  if (b >= 2 && b <= 4) return few
  return many
}

export function yearsRu(n: number) { return `${n} ${plural(n, 'год', 'года', 'лет')}` }
export function yearsEn(n: number) { return n === 1 ? 'one year' : `${n} years` }

const ACC = ['', 'одного ребёнка', 'двоих детей', 'троих детей', 'четверых детей', 'пятерых детей', 'шестерых детей', 'семерых детей']
const NOM = ['', 'один ребёнок', 'двое детей', 'трое детей', 'четверо детей', 'пятеро детей', 'шестеро детей', 'семеро детей']
const EN = ['', 'one child', 'two children', 'three children', 'four children', 'five children', 'six children', 'seven children']

/** «вырастил троих детей». */
export function childrenAcc(n: number) { return n >= 1 && n <= 7 ? ACC[n] : `${n} детей` }
/** «было трое детей». */
export function childrenNom(n: number) { return n >= 1 && n <= 7 ? NOM[n] : `${n} детей` }
export function childrenEn(n: number) { return n >= 1 && n <= 7 ? EN[n] : `${n} children` }
