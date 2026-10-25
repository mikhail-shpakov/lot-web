import { useRef } from 'preact/hooks'
import { TOTAL } from '../domain/world'
import { Btn, Card, Chip, Gap, Sheet, useHome } from './kit'

/** The StillCraft bot: deep links file a bug or an idea for this app, or follow its releases. */
const BOT = 'https://t.me/ArcaneWhisperBot?start='
const COMMUNITY = [
  ['🐞', 'Сообщить о баге', 'Report a bug', 'что сломалось и как повторить', 'what broke and how to repeat it', `${BOT}bug_lot`],
  ['💡', 'Предложить идею', 'Suggest an idea', 'функция, событие, вещь', 'a feature, an event, a thing', `${BOT}wish_lot`],
  ['🔔', 'Подписаться на обновления', 'Follow updates', 'бот напишет, когда выйдет версия', 'the bot writes when a version is out', `${BOT}f_lot`],
  ['💬', 'Чат StillCraft', 'StillCraft chat', 'все приложения и люди', 'all the apps and people', 'https://t.me/+Q4gFEDk8O842OGVi'],
]

export function SettingsSheet({ onClose }: { onClose: () => void }) {
  const { s, w, repo, toast } = useHome()
  const st = s.settings
  const file = useRef<HTMLInputElement>(null)
  const set = (p: Partial<typeof st>) => repo.settings((x) => ({ ...x, ...p }))

  const save = () => {
    const blob = new Blob([repo.exportJson()], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `lot-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  }
  const load = async (f: File) => {
    try {
      repo.importJson(await f.text())
      toast(w.t('Архив загружен.', 'The archive is loaded.'))
    } catch {
      toast(w.t('Это не архив «Жребия».', 'That is not a Lot archive.'))
    }
  }

  return (
    <Sheet title={w.t('Настройки', 'Settings')} onClose={onClose} closeLabel={w.t('Закрыть', 'Close')}>
      <Card>
        <h3 class="heading">{w.t('Язык', 'Language')}</h3>
        <div class="flow" style={{ marginTop: '8px' }}>
          <Chip on={w.ru} onClick={() => set({ lang: 'ru' })}>Русский</Chip>
          <Chip on={!w.ru} onClick={() => set({ lang: 'en' })}>English</Chip>
        </div>
      </Card>
      <Gap />
      <Card>
        <h3 class="heading">{w.t('Как жить', 'How to live')}</h3>
        <p class="small" style={{ margin: 0 }}>{w.t('Можно выбирать на развилках самому, а можно быть свидетелем: тогда за тебя решает судьба, и ты только читаешь книгу.',
          'You can choose at each fork yourself, or be a witness: then fate decides, and you only read the book.')}</p>
        <div class="flow" style={{ marginTop: '8px' }}>
          <Chip on={!st.witness} onClick={() => set({ witness: false })}>{w.t('жить и выбирать', 'live and choose')}</Chip>
          <Chip on={st.witness} onClick={() => set({ witness: true })}>{w.t('быть свидетелем', 'be a witness')}</Chip>
        </div>
      </Card>
      <Gap />
      <Card>
        <h3 class="heading">{w.t('Почерк книги', "The book's hand")}</h3>
        <div class="write" style={{ marginTop: '6px' }}>{w.t('Родилась в семье пахаря. Видела море.', "Born to a ploughman's family. Saw the sea.")}</div>
        <div class="flow" style={{ marginTop: '8px' }}>
          <Chip on={st.hand} onClick={() => set({ hand: true })}>{w.t('рукописный', 'handwritten')}</Chip>
          <Chip on={!st.hand} onClick={() => set({ hand: false })}>{w.t('печатный', 'printed')}</Chip>
        </div>
      </Card>
      <Gap />
      <Card>
        <h3 class="heading">{w.t('Архив', 'Archive')}</h3>
        <p class="small" style={{ margin: '0 0 8px' }}>{w.t(
          'Жизни хранятся только в этом браузере. Safari на айфоне может стереть их, если сайт долго не открывать, — надёжнее добавить «Жребий» на экран «Домой» и иногда сохранять архив в файл.',
          'Lives are kept only in this browser. Safari on an iPhone may wipe them if the site goes unopened for a while: adding Lot to the Home Screen and saving the archive to a file now and then is safer.')}</p>
        <Btn kind="soft" onClick={save}>{w.t('Сохранить архив в файл', 'Save the archive to a file')}</Btn>
        <Gap h={8} />
        <Btn kind="ghost" onClick={() => file.current?.click()}>{w.t('Загрузить архив из файла', 'Load an archive from a file')}</Btn>
        <input ref={file} type="file" accept="application/json,.json" style={{ display: 'none' }}
          onChange={(e) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) load(f); (e.target as HTMLInputElement).value = '' }} />
      </Card>
      <Gap />
      <Card>
        <h3 class="heading">{w.t('Сообщество', 'Community')}</h3>
        <p class="small" style={{ margin: '0 0 4px' }}>{w.t('Приложение делается вместе с теми, кто им пользуется. Всё идёт через бота StillCraft в Telegram.',
          'The app is made together with the people who use it. It all goes through the StillCraft bot on Telegram.')}</p>
        <div class="community">
          {COMMUNITY.map(([icon, ru, en, subRu, subEn, url]) => (
            <a key={url} href={url} target="_blank" rel="noopener">
              <span class="ico">{icon}</span>
              <span style={{ flex: 1 }}><div class="bold">{w.t(ru, en)}</div><div class="small">{w.t(subRu, subEn)}</div></span>
              <span class="chev">›</span>
            </a>
          ))}
        </div>
      </Card>
      <Gap />
      <Card>
        <h3 class="heading">{w.t('О «Жребии»', 'About Lot')}</h3>
        <p class="small" style={{ margin: 0 }}>{w.t(
          `Мешок тянет по-честному: из ${TOTAL} миллиардов когда-либо родившихся людей, по оценке Population Reference Bureau, с весами эпох, мест и сословий. Поэтому чаще всего ты — крестьянин до 1800 года. ${repo.content.lines.length} строк быта и ${repo.content.hist.length} настоящих событий. Без рекламы, без аккаунта, работает без интернета.`,
          `The sack draws fairly: from the ${TOTAL} billion people ever born, by the Population Reference Bureau's estimate, weighted by era, place and station. That is why you are most often a peasant before 1800. ${repo.content.lines.length} everyday lines and ${repo.content.hist.length} real events. No ads, no account, works offline.`)}</p>
        <a class="small red" style={{ display: 'block', marginTop: '8px' }} href="https://github.com/bigdevwhale/lot" target="_blank" rel="noopener">
          {w.t(`Веб-версия ${__VERSION__} · по приложению Lot (MIT) · шрифты PT Serif и Marck Script (OFL) · исходники на GitHub`,
            `Web version ${__VERSION__} · after the Lot app (MIT) · PT Serif and Marck Script fonts (OFL) · source on GitHub`)}
        </a>
      </Card>
      <Gap h={20} />
    </Sheet>
  )
}
