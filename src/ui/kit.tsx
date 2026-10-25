import type { ComponentChildren } from 'preact'
import { createContext } from 'preact'
import { useContext, useEffect } from 'preact/hooks'
import type { Repo, State } from '../data/repo'
import type { Words } from './words'

/** Everything a screen reads, at one moment. */
export interface Home {
  s: State
  w: Words
  repo: Repo
  toast: (s: string) => void
}

export const HomeCtx = createContext<Home>(null as unknown as Home)
export const useHome = () => useContext(HomeCtx)

type Kind = 'ink' | 'ghost' | 'soft'

export function Btn({ children, kind = 'ink', disabled, onClick }: { children: ComponentChildren; kind?: Kind; disabled?: boolean; onClick: () => void }) {
  return <button type="button" class={`btn ${kind === 'ink' ? '' : kind}`} disabled={disabled} onClick={onClick}>{children}</button>
}

export function Chip({ children, on, disabled, onClick }: { children: ComponentChildren; on: boolean; disabled?: boolean; onClick: () => void }) {
  return <button type="button" class={`chip ${on ? 'on' : ''}`} disabled={disabled} aria-pressed={on} onClick={onClick}>{children}</button>
}

export function Card({ children, onClick, style }: { children: ComponentChildren; onClick?: () => void; style?: Record<string, string> }) {
  if (onClick) return <button type="button" class="card tap" style={style} onClick={onClick}>{children}</button>
  return <div class="card" style={style}>{children}</div>
}

export const Label = ({ children, style }: { children: ComponentChildren; style?: Record<string, string> }) => <div class="label" style={style}>{children}</div>
export const Gap = ({ h = 10 }: { h?: number }) => <div style={{ height: `${h}px` }} />
export const Rule = ({ dark }: { dark?: boolean }) => <div class={`rule ${dark ? 'dark' : ''}`} />

/** The title of a tab. */
export function TopBar({ title, sub, end }: { title: string; sub?: string; end?: ComponentChildren }) {
  return (
    <div class="top">
      <div class="top-row"><h1 class="title">{title}</h1>{end}</div>
      {sub && <p class="top-sub">{sub}</p>}
    </div>
  )
}

/** A full-screen sheet over the tabs, with a title and a way back. */
export function Sheet({ title, onClose, closeLabel, children }: { title: string; onClose: () => void; closeLabel: string; children: ComponentChildren }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <div class="sheet-back" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div class="sheet paper" role="dialog" aria-label={title}>
        <div class="sheet-head"><h2 class="heading">{title}</h2><button type="button" class="sheet-close" onClick={onClose}>{closeLabel}</button></div>
        <div class="sheet-body">{children}</div>
      </div>
    </div>
  )
}

export function Dialog({ title, children, actions }: { title: string; children: ComponentChildren; actions: ComponentChildren }) {
  return (
    <div class="sheet-back" style={{ alignItems: 'center' }}>
      <div class="dialog" role="alertdialog" aria-label={title}>
        <h2 class="heading">{title}</h2>
        <div style={{ marginTop: '8px' }}>{children}</div>
        <div class="dialog-actions">{actions}</div>
      </div>
    </div>
  )
}

/** A short buzz where the phone allows it. */
export function buzz(ms = 20) {
  try { navigator.vibrate?.(ms) } catch { /* no vibration here */ }
}
