import { Content } from '../domain/content'

// The Android app's assets, bundled as text and listed in file-name order, as the app lists them.
const lines = import.meta.glob('../../content/lines/*.tsv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const dilemmas = import.meta.glob('../../content/dilemmas*.txt', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
import history from '../../content/history.tsv?raw'

const sorted = (m: Record<string, string>) => Object.keys(m).sort().map((k) => m[k])

export const content = Content.read(sorted(lines), history, sorted(dilemmas))
