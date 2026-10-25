# Lot · Жребий — web

A browser and iPhone version of [Lot](https://github.com/bigdevwhale/lot), the Android app by bigdevwhale:
*you are one of the 117 billion people who have ever been born; the lot decides which.*

It is a port, not a remake. The engine (`src/domain`) is the Kotlin engine translated line by line, down to Kotlin's
`Random` generator, so the same seed and the same choices write the same book as on Android. The texts in `content/` are
the app's assets, unchanged. The screens follow the app's: the sack, the parish register, the chest, the atlas.
One thing the web version adds: the book turns its own pages (pause, 1×–8×, or a page by hand), and stops at each fork
to wait for the reader.

Everything runs in the browser: no server, no account. Lives are kept in IndexedDB, and the app works offline after the
first visit.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
npm test             # the engine against the Android engine, and the app's own invariants
npm run build        # static files in dist/
npm run preview      # serve dist/ at http://localhost:4173
```

### On an iPhone

- **Quick look on the same Wi-Fi:** `npm run dev -- --host` and open the `Network:` address it prints in Safari.
  Offline mode and installing need HTTPS, so this is for trying it out.
- **To keep it:** host `dist/` anywhere with HTTPS. `npm run deploy` builds it and pushes `dist/` to the `gh-pages`
  branch, which GitHub Pages serves. Open the address in Safari, then Share → **Add to Home Screen**. It opens
  full-screen like an app and works without a connection.

Safari may clear a site's storage if it goes unused for a while; an app on the Home Screen keeps it. Settings →
Archive saves all lives to a JSON file and loads them back.

## How it is checked

`test/golden/Golden.kt` runs the original Kotlin engine (`app/src/main/java/app/lot/domain` from the Android repo) and
writes 600 lives with wishes, heirs, witnesses and a reader's past into `test/golden/golden.json`. `test/golden.test.ts`
replays them with the web engine and requires every entry, epitaph, question and thing to match. `test/life.test.ts`
carries over the invariants from the app's `LifeTest`.

To regenerate the golden file, compile the Android repo's domain sources together with `Golden.kt` (any Kotlin 2.x
compiler), then run `GoldenKt <path to app/src/main/assets> golden.json`.

## Layout

```
content/          the Android app's lines, history and forks (TSV and text)
src/domain/       the engine: world, content parsing, names, things, a life
src/data/         IndexedDB storage and the repository (draw, turn, pick, archive)
src/ui/           Preact screens, the SVG art (sack, tag, things, map), styles and fonts
src/sw.js         the offline service worker; the build fills in its file list
```

## License

MIT, as the original. The original app, its engine, texts and art are © bigdevwhale. Fonts: PT Serif and Marck
Script, SIL Open Font License.
