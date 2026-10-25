import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import preact from '@preact/preset-vite'
import { defineConfig, type Plugin } from 'vite'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

/** Writes sw.js with every built file in its precache list, so the app opens offline after the first visit. */
function serviceWorker(): Plugin {
  return {
    name: 'lot-sw',
    apply: 'build',
    generateBundle(_, bundle) {
      const files = ['./', ...Object.keys(bundle).map((f) => `./${f}`), './manifest.webmanifest', './logo.png', './icon-192.png', './apple-touch-icon.png']
      const version = createHash('sha256').update(files.join('\n') + Object.values(bundle).map((b) => ('code' in b ? b.code : String(b.source.length))).join('')).digest('hex').slice(0, 12)
      const src = readFileSync(new URL('./src/sw.js', import.meta.url), 'utf8')
        .replace('__CACHE__', `lot-${version}`).replace('__FILES__', JSON.stringify(files))
      this.emitFile({ type: 'asset', fileName: 'sw.js', source: src })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [preact(), serviceWorker()],
  define: { __VERSION__: JSON.stringify(pkg.version) },
  build: { target: 'es2022', chunkSizeWarningLimit: 2000 },
})
