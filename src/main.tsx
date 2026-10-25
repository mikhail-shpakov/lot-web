import { render } from 'preact'
import { content } from './data/content'
import { Repo } from './data/repo'
import { load, persist } from './data/store'
import { App } from './ui/app'
import './ui/styles.css'

const repo = new Repo(content)
load().then((doc) => {
  repo.load(doc)
  render(<App repo={repo} />, document.getElementById('app')!)
  if (doc.lives.length > 0) persist()
})

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}))
}
