import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Content } from '../src/domain/content'

const dir = join(__dirname, '..', 'content')
const read = (p: string) => readFileSync(join(dir, p), 'utf8')

export const content = Content.read(
  readdirSync(join(dir, 'lines')).sort().map((f) => read(join('lines', f))),
  read('history.tsv'),
  readdirSync(dir).filter((f) => f.startsWith('dilemmas') && f.endsWith('.txt')).sort().map(read),
)
