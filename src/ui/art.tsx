import { useLayoutEffect, useRef, useState } from 'preact/hooks'
import { Random } from '../domain/random'
import type { Shape } from '../domain/things'
import type { TagText } from './words'

/** Old paper, iron-gall ink, a burnt wooden tag and a sack of hessian: the same palette as the app. */
export const C = {
  paper: '#EFE0BF', paperHi: '#F6EAD0', paperLo: '#DCC493', page: '#F7ECD2', rule: '#D9C49B', light: '#F8EFD9', card: '#FBF4E3',
  line: '#C8AE80', ink: '#2A1A10', ink2: '#5B3D26', muted: '#8A6A4A', red: '#8F2F22', blue: '#2B2A5A', wood: '#C99A5E', woodHi: '#D9B077',
  woodLo: '#A87A44', grain: '#8A6034', burn: '#3A1D0C', sack: '#C9A774', sackLo: '#B08C58', sackDark: '#3A2414', string: '#7A5230',
  land: '#D4BD8C', sea: '#E9D7AE',
}

// ---------------------------------------------------------------- the sack and the tag

/** A line burnt into the tag; a long place shrinks to fit the wood. */
function Burn({ s, y, size, bold, italic }: { s: string; y: number; size: number; bold?: boolean; italic?: boolean }) {
  const ref = useRef<SVGTextElement>(null)
  const [fit, setFit] = useState(size)
  useLayoutEffect(() => {
    const measure = () => {
      const el = ref.current
      if (!el) return
      el.setAttribute('font-size', String(size))
      const w = el.getComputedTextLength()
      setFit(w > 176 ? size * 176 / w : size)
    }
    measure()
    document.fonts?.ready.then(measure)
  }, [s, size])
  return (
    <text ref={ref} x={122} y={y} text-anchor="middle" font-family="'PT Serif', serif" font-size={fit} font-weight={bold ? 700 : 400}
      font-style={italic ? 'italic' : 'normal'} fill={C.burn}>{s}</text>
  )
}

const TAG = 'M30 4 L204 4 Q216 4 216 16 L216 104 Q216 116 204 116 L30 116 L4 60 Z'

/** The tag in its own 220×120 units: wood grain from the seed, a hole with a string, four burnt lines. */
function Tag({ t, seed, id }: { t: TagText; seed: bigint; id: string }) {
  const r = new Random(seed)
  const grain = []
  for (let i = 0; i < 10; i++) {
    const y = 10 + i * 11 + r.nextFloat() * 4
    const c1 = y + r.nextFloat() * 6 - 3
    const c2 = y + r.nextFloat() * 6 - 3
    grain.push(<path key={i} d={`M0 ${y} C60 ${c1} 140 ${c2} 220 ${y}`} stroke={C.grain} stroke-opacity={0.35} stroke-width={0.6 + r.nextFloat()} fill="none" />)
  }
  const kx = 60 + r.nextFloat() * 120
  return (
    <g>
      <defs>
        <linearGradient id={`${id}w`} x1="0" y1="4" x2="0" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color={C.woodHi} /><stop offset="1" stop-color={C.woodLo} />
        </linearGradient>
        <clipPath id={`${id}t`}><path d={TAG} /></clipPath>
      </defs>
      <path d="M22 60 C10 30 -10 30 -24 6" stroke={C.string} stroke-width={3} stroke-linecap="round" fill="none" />
      <path d={TAG} fill={`url(#${id}w)`} />
      <g clip-path={`url(#${id}t)`}>
        {grain}
        <ellipse cx={kx + 7} cy={91} rx={7} ry={3} fill="none" stroke={C.grain} stroke-opacity={0.3} stroke-width={1} />
      </g>
      <path d={TAG} fill="none" stroke={C.ink2} stroke-width={2} />
      <circle cx={22} cy={60} r={6} fill={C.sackDark} />
      <Burn s={t.year} y={32} size={21} bold />
      <Burn s={t.place} y={56} size={14} />
      <Burn s={t.family} y={77} size={12.5} italic />
      <Burn s={t.sex} y={98} size={12.5} />
    </g>
  )
}

const BODY = 'M60 70 C30 110 30 170 70 188 C100 198 150 198 180 188 C220 170 220 110 190 70 Z'

function SackBody() {
  const warp = []
  for (let x = 30; x < 220; x += 6) warp.push(<line key={`v${x}`} x1={x} y1={55} x2={x + 4} y2={200} stroke={C.sackLo} stroke-width={1.2} />)
  for (let y = 60; y < 200; y += 6) warp.push(<line key={`h${y}`} x1={25} y1={y} x2={225} y2={y + 2} stroke={C.sackLo} stroke-opacity={0.7} stroke-width={1} />)
  return (
    <g>
      <defs>
        <clipPath id="sackBody"><path d={BODY} /></clipPath>
        <linearGradient id="sackShade" x1="30" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color={C.ink} stop-opacity={0.18} />
          <stop offset="0.333" stop-color={C.ink} stop-opacity={0} />
          <stop offset="0.667" stop-color={C.ink} stop-opacity={0} />
          <stop offset="1" stop-color={C.ink} stop-opacity={0.22} />
        </linearGradient>
      </defs>
      <ellipse cx={125} cy={192} rx={95} ry={8} fill={C.ink} fill-opacity={0.14} />
      <path d={BODY} fill={C.sack} />
      <g clip-path="url(#sackBody)">
        {warp}
        <rect x={25} y={55} width={200} height={150} fill="url(#sackShade)" />
      </g>
      <path d={BODY} fill="none" stroke={C.ink2} stroke-width={2.5} />
      <path d="M60 70 C90 58 160 58 190 70 C170 80 80 80 60 70 Z" fill={C.sackDark} />
      <path d="M70 76 C100 86 150 86 180 76" stroke={C.string} stroke-width={5} stroke-linecap="round" fill="none" />
      <path d="M128 84 C140 100 150 104 166 98" stroke={C.string} stroke-width={3} stroke-linecap="round" fill="none" />
      <path d="M128 84 C132 104 118 116 104 116" stroke={C.string} stroke-width={3} stroke-linecap="round" fill="none" />
      <circle cx={128} cy={84} r={4.5} fill={C.string} />
      <path d="M85 120 C95 150 90 170 100 182" stroke={C.sackLo} stroke-width={2} stroke-linecap="round" fill="none" />
      <path d="M160 115 C150 140 162 165 155 184" stroke={C.sackLo} stroke-width={2} stroke-linecap="round" fill="none" />
    </g>
  )
}

/**
 * The stage of the draw: a hessian sack and the wooden tag rising out of it, in 250×330 units.
 * [shake] tilts the sack in degrees; [rise] lifts the tag from inside the mouth (0) to the top (1); no tag when [tag] is null.
 */
export function Stage({ shake, rise, tag, seed, height = 300 }: { shake: number; rise: number; tag: TagText | null; seed: bigint; height?: number }) {
  const TOP = 130
  const e = Math.min(Math.max(rise, 0), 1)
  const cy = 200 + (75 - 200) * e
  const s = 0.5 + 0.5 * e
  const rot = -8 + 5 * e
  return (
    <svg viewBox="0 0 250 330" style={{ width: '100%', height: `${height}px`, display: 'block', overflow: 'visible' }} aria-hidden="true">
      <defs><clipPath id="sackMouth"><rect x={-60} y={-200} width={370} height={TOP + 78 + 200} /></clipPath></defs>
      <g transform={`translate(0 ${TOP}) rotate(${shake} 125 180)`}><SackBody /></g>
      {tag && rise > 0 && (
        <g clip-path="url(#sackMouth)">
          <g transform={`translate(15 ${cy - 60}) translate(110 60) scale(${s}) rotate(${rot}) translate(-110 -60)`}>
            <Tag t={tag} seed={seed} id="tag" />
          </g>
        </g>
      )}
    </svg>
  )
}

/** The app icon: the tag alone. */
export function TagIcon({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 108 108" width={size} height={size} aria-hidden="true">
      <g transform="rotate(-14 54 54)">
        <path d="M33 54 C28 42 22 38 18 30" stroke={C.wood} stroke-width={2.4} stroke-linecap="round" fill="none" />
        <path d="M40 38 L82 38 Q86 38 86 42 L86 66 Q86 70 82 70 L40 70 L30 54 Z" fill={C.woodHi} />
        <circle cx={37} cy={54} r={3.2} fill={C.sackDark} />
        <rect x={48} y={44.5} width={30} height={3.6} fill={C.burn} />
        <rect x={51} y={52.4} width={24} height={2.6} fill={C.burn} />
        <rect x={53} y={59.4} width={20} height={2.6} fill={C.burn} />
      </g>
    </svg>
  )
}

// ---------------------------------------------------------------- the things in the chest

const edge = '#5B3D26'
const bone = '#E8DCC0'
const clay = '#C49A68'
const copper = '#B87333'
const brass = '#B8A050'
const pewter = '#A8A29A'
const paperC = '#F2E6C8'
const woodC = '#A87A44'

const L = (x1: number, y1: number, x2: number, y2: number, c: string, w: number, round = true, dash?: string) =>
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} stroke-width={w} stroke-linecap={round ? 'round' : 'butt'} stroke-dasharray={dash} />
const Ci = (cx: number, cy: number, r: number, fill: string, stroke?: string, sw = 2) =>
  <circle cx={cx} cy={cy} r={r} fill={stroke ? 'none' : fill} stroke={stroke} stroke-width={stroke ? sw : undefined} />
const P = (d: string, fill: string | null, stroke?: string, sw = 2) =>
  <path d={d} fill={fill ?? 'none'} stroke={stroke} stroke-width={stroke ? sw : undefined} stroke-linejoin="miter" />
const R = (x: number, y: number, w: number, h: number, rx: number, fill: string | null, stroke?: string, sw = 2) =>
  <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill ?? 'none'} stroke={stroke} stroke-width={stroke ? sw : undefined} />
const E = (x: number, y: number, w: number, h: number, fill: string | null, stroke?: string, sw = 2) =>
  <ellipse cx={x + w / 2} cy={y + h / 2} rx={w / 2} ry={h / 2} fill={fill ?? 'none'} stroke={stroke} stroke-width={stroke ? sw : undefined} />

function draw(s: Shape) {
  switch (s) {
    case 'NEEDLE': return <>{L(14, 50, 48, 12, bone, 5)}{L(14, 50, 48, 12, '#8A7458', 1.2)}{Ci(45, 15, 2, edge)}</>
    case 'FLINT': {
      const f = 'M12 44 L22 14 L40 10 L52 30 L44 50 Z'
      return <>{P(f, '#7D7A72')}{P(f, null, '#3A3530')}{P('M22 14 L30 34 L44 50 M30 34 L52 30', null, '#55524C', 1.4)}</>
    }
    case 'BEADS': {
      const cols = ['#3D6A8A', '#D8C8A8', '#A33A2C', '#D8C8A8', '#3D6A8A']
      return <>{P('M12 18 C20 50 44 50 52 18', null, '#7A5230', 1.4)}{cols.map((c, i) => {
        const t = i / 4
        const x = 12 + 40 * t
        const y = 18 + 30 * Math.sin(Math.PI * t)
        return <g key={i}>{Ci(x, y, 5, c)}{Ci(x, y, 5, '', edge, 1)}</g>
      })}</>
    }
    case 'POUCH': {
      const b = 'M20 22 C10 34 12 52 32 54 C52 52 54 34 44 22 Z'
      return <>{P(b, '#9A6A3A')}{P(b, null, '#3A2414')}{L(20, 22, 44, 22, '#3A2414', 3)}{Ci(32, 40, 6, '#B5442A')}</>
    }
    case 'FLUTE': return (
      <g transform="rotate(-35 32 32)">{R(8, 27, 48, 10, 5, bone)}{R(8, 27, 48, 10, 5, null, edge, 1.5)}{[0, 1, 2, 3].map((i) => <g key={i}>{Ci(22 + i * 8, 32, 1.8, edge)}</g>)}</g>
    )
    case 'TABLET': return <>{R(14, 10, 36, 44, 5, clay)}{R(14, 10, 36, 44, 5, null, edge)}{[0, 1, 2, 3, 4].map((i) =>
      <g key={i}>{L(20, 19 + i * 7, 34 + (i * 7) % 10, 19 + i * 7, '#7A5230', 2, false, '2 2')}</g>)}</>
    case 'MIRROR': return <>{R(29, 40, 6, 16, 2, '#7A5230')}{Ci(32, 26, 16, '#B8893C')}{Ci(32, 26, 16, '', edge)}{Ci(32, 26, 11, '#D9B46A')}</>
    case 'AMULET': return <>{P('M18 8 C20 26 44 26 46 8', null, '#7A5230', 1.4)}{E(22, 22, 20, 28, '#3D6A8A')}{E(22, 22, 20, 28, null, edge)}{E(27, 27, 6, 9, '#8FB4C9')}</>
    case 'COIN': return <>{Ci(32, 32, 18, copper)}{Ci(32, 32, 18, '', edge)}{Ci(32, 32, 13, '', '#8A5222', 1)}{R(28, 28, 8, 8, 0, edge)}</>
    case 'CUP': {
      const c = 'M16 22 L48 22 C48 42 42 50 32 50 C22 50 16 42 16 22 Z'
      return <>{P(c, clay)}{P(c, null, edge)}{E(16, 18, 32, 8, '#7A5230')}{L(20, 32, 44, 32, '#7A5230', 1.4, false)}</>
    }
    case 'SPOON': return <>{L(28, 27, 52, 52, woodC, 5)}<g transform="rotate(-40 22 20)">{E(13, 8, 18, 24, '#C49A68')}{E(13, 8, 18, 24, null, edge)}</g></>
    case 'CHARM': return <>{L(32, 4, 32, 10, '#4A4540', 2)}{R(18, 10, 28, 40, 3, pewter)}{R(18, 10, 28, 40, 3, null, '#4A4540')}{Ci(32, 24, 6, '#D9B46A')}{P('M24 44 C24 32 40 32 40 44 Z', '#7A5C4A')}</>
    case 'COMB': return <>{R(10, 20, 44, 10, 0, bone)}{R(10, 20, 44, 10, 0, null, edge)}{Array.from({ length: 10 }, (_, i) =>
      <g key={i}>{L(13 + i * 4.3, 30, 13 + i * 4.3, 46, bone, 2.5, false)}</g>)}</>
    case 'WHISTLE': return <>{R(8, 26, 44, 12, 6, '#C9B07A')}{R(8, 26, 44, 12, 6, null, edge)}{R(16, 28, 6, 4, 0, edge)}{L(30, 26, 30, 38, '#7A5230', 1, false)}</>
    case 'PIPE': {
      const b = 'M34 26 L50 26 L50 40 C50 48 34 48 34 40 Z'
      return <>{L(10, 22, 36, 32, bone, 5)}{P(b, bone)}{P(b, null, edge)}</>
    }
    case 'LETTER': return <>{R(12, 16, 40, 32, 0, paperC)}{R(12, 16, 40, 32, 0, null, edge)}{[0, 1, 2, 3].map((i) =>
      <g key={i}>{P(`M17 ${24 + i * 6} C25 ${22 + i * 6} 35 ${26 + i * 6} 47 ${24 + i * 6}`, null, '#2B2A5A', 1.2)}</g>)}{Ci(44, 44, 5, '#8F2F22')}</>
    case 'GLASSES': return <>
      <circle cx={20} cy={34} r={10} fill="#A8C8D8" fill-opacity={0.2} stroke="#4A4540" stroke-width={2.2} />
      <circle cx={44} cy={34} r={10} fill="#A8C8D8" fill-opacity={0.2} stroke="#4A4540" stroke-width={2.2} />
      {P('M30 33 Q32 29 34 33', null, '#4A4540', 2.2)}{L(10, 32, 4, 26, '#4A4540', 2)}{L(54, 32, 60, 26, '#4A4540', 2)}
    </>
    case 'BUTTON': return <>{Ci(32, 32, 16, brass)}{Ci(32, 32, 16, '', edge)}{Ci(32, 32, 12, '', '#8A7430', 1)}{P('M24 32 L32 24 L40 32 L32 40 Z', '#8A7430')}</>
    case 'PHOTO': return <>{R(12, 10, 40, 46, 0, '#D8C8A0')}{R(12, 10, 40, 46, 0, null, edge)}{R(17, 15, 30, 32, 0, '#8A7A62')}{Ci(26, 26, 4, '#C8B898')}{Ci(38, 25, 4, '#C8B898')}
      {P('M20 47 C20 37 32 37 32 47 M32 47 C32 37 44 37 44 47', '#5A4A3A')}</>
    case 'TICKET': return <>{R(8, 20, 48, 24, 0, '#C7B37A')}{R(8, 20, 48, 24, 0, null, edge)}{L(40, 20, 40, 44, edge, 1, false, '3 2')}{L(14, 28, 34, 28, edge, 2, false)}{L(14, 34, 28, 34, edge, 2, false)}</>
    case 'THIMBLE': {
      const t = 'M20 50 C18 30 22 14 32 14 C42 14 46 30 44 50 Z'
      const dots = []
      for (let r = 0; r <= 2; r++) for (let c = 0; c <= 2; c++) dots.push(<g key={`${r}${c}`}>{Ci(26 + c * 6, 26 + r * 7, 1.4, '#6A655E')}</g>)
      return <>{P(t, '#B8B2A8')}{P(t, null, '#4A4540')}{dots}</>
    }
    case 'WATCH': return <>{L(32, 6, 32, 14, brass, 3, false)}{Ci(32, 34, 18, brass)}{Ci(32, 34, 18, '', edge)}{Ci(32, 34, 14, '#F4ECD8')}
      {Array.from({ length: 12 }, (_, i) => <g key={i} transform={`rotate(${i * 30} 32 34)`}>{L(32, 22, 32, 24.5, edge, 1, false)}</g>)}
      {L(32, 34, 32, 25, edge, 1.6, false)}{L(32, 34, 39, 37, edge, 1.6, false)}</>
    case 'PHONE': {
      const keys = []
      for (let r = 0; r <= 2; r++) for (let c = 0; c <= 2; c++) keys.push(<g key={`${r}${c}`}>{R(24 + c * 6, 31 + r * 7, 4, 4, 0, '#AAAAAA')}</g>)
      return <>{R(20, 8, 24, 48, 4, '#3A3A40')}{R(20, 8, 24, 48, 4, null, '#1A1A1E')}{R(24, 13, 16, 14, 0, '#9AB88A')}{keys}</>
    }
    case 'KEY': return <>{Ci(20, 32, 9, '', brass, 4)}{L(29, 32, 54, 32, brass, 4)}{L(46, 32, 46, 40, brass, 4)}{L(52, 32, 52, 38, brass, 4)}</>
    case 'CASSETTE': return <>{R(8, 16, 48, 32, 3, '#3A3A40')}{R(13, 20, 38, 14, 0, '#E6D8B8')}{L(15, 24, 48, 24, '#8F2F22', 1.5, false)}
      {Ci(24, 39, 4, '#1A1A1E')}{Ci(40, 39, 4, '#1A1A1E')}{Ci(24, 39, 2, '#E6D8B8')}{Ci(40, 39, 2, '#E6D8B8')}</>
  }
}

/** A thing from the chest, drawn in 64×64 units like a small engraving. */
export function Thing({ shape, size = 54 }: { shape: Shape; size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" style={{ display: 'block', overflow: 'visible' }}>
      <ellipse cx={32} cy={57} rx={20} ry={3} fill="#000" fill-opacity={0.13} />
      {draw(shape)}
    </svg>
  )
}

// ---------------------------------------------------------------- the atlas

/** A pin on the atlas: where someone was born, coloured by era. */
export interface Pin { lon: number; lat: number; color: string; infant: boolean; jitter: number; on: boolean; id: number }

const LAND: number[][] = [
  [-168, 66, -140, 70, -95, 72, -80, 63, -60, 55, -66, 45, -81, 30, -80, 25, -97, 26, -97, 18, -87, 15, -80, 8, -90, 14, -105, 20, -117, 32, -124, 40, -124, 48, -135, 58, -152, 60, -165, 62],
  [-80, 9, -62, 10, -50, 0, -35, -6, -40, -22, -58, -38, -65, -55, -73, -50, -71, -20, -81, -5],
  [-10, 36, -9, 43, -2, 44, -5, 48, 2, 51, 8, 54, 10, 58, 5, 62, 15, 69, 28, 71, 42, 67, 60, 69, 80, 73, 105, 77, 140, 72, 170, 70, 180, 66, 160, 60, 142, 52, 135, 43, 127, 38, 122, 30, 120, 22, 108, 18, 108, 11, 104, 1, 98, 8, 98, 16, 92, 22, 80, 15, 77, 8, 72, 20, 66, 25, 57, 25, 56, 27, 50, 30, 48, 29, 52, 24, 56, 26, 59, 22, 52, 15, 43, 12, 35, 28, 34, 31, 36, 36, 27, 37, 26, 40, 23, 36, 20, 40, 14, 42, 16, 38, 12, 42, 8, 44, 3, 43, -5, 36],
  [-17, 21, -10, 33, -5, 36, 10, 37, 20, 32, 32, 31, 34, 28, 43, 12, 51, 12, 40, -5, 40, -15, 35, -25, 20, -35, 15, -28, 12, -15, 14, -5, 9, 4, -8, 5, -17, 14],
  [114, -22, 130, -12, 137, -12, 142, -11, 146, -19, 153, -28, 150, -37, 141, -38, 131, -31, 115, -34],
  [-55, 60, -45, 60, -20, 70, -20, 82, -60, 82, -72, 77],
  [-5, 50, 1, 51, -2, 57, -6, 58, -5, 55],
  [130, 31, 140, 35, 142, 40, 141, 45, 140, 41, 135, 34],
  [44, -25, 47, -25, 50, -15, 49, -12, 44, -17],
  [95, 5, 106, -6, 102, -4],
  [109, 1, 117, 7, 119, 0, 116, -4, 110, -3],
  [166, -46, 174, -41, 178, -38, 172, -35, 168, -44],
]

const LAND_PATHS = LAND.map((pts) => {
  let d = `M${pts[0] + 180} ${90 - pts[1]}`
  for (let i = 2; i < pts.length; i += 2) d += ` L${pts[i] + 180} ${90 - pts[i + 1]}`
  return d + ' Z'
})

/** Where a pin sits on the map, jitter included, in map units. */
export function pinAt(p: Pin): [number, number] {
  return [p.lon + 180 + (((p.jitter * 37) % 11) - 5) * 0.8, 90 - p.lat + (((p.jitter * 53) % 9) - 4) * 0.8]
}

/** An old equirectangular world map, 360×180 units, the continents drawn from a few dozen points each. */
export function WorldMap({ pins, onPick }: { pins: Pin[]; onPick: (id: number | null) => void }) {
  const hatch = []
  for (let y = 3; y < 180; y += 4) hatch.push(<line key={`s${y}`} x1={0} y1={y} x2={360} y2={y} stroke={C.line} stroke-opacity={0.35} stroke-width={0.3} />)
  for (let g = 0; g <= 360; g += 30) hatch.push(<line key={`m${g}`} x1={g} y1={0} x2={g} y2={180} stroke={C.line} stroke-width={0.35} />)
  for (let g = 0; g <= 180; g += 30) hatch.push(<line key={`p${g}`} x1={0} y1={g} x2={360} y2={g} stroke={C.line} stroke-width={0.35} />)
  const sorted = [...pins].sort((a, b) => Number(a.on) - Number(b.on))
  return (
    <svg viewBox="0 0 360 180" style={{ width: '100%', display: 'block' }} onClick={(ev) => {
      // The nearest dot within a finger's reach; a tap on open sea closes the note.
      const svg = ev.currentTarget as SVGSVGElement
      const box = svg.getBoundingClientRect()
      const k = 360 / box.width
      const x = (ev.clientX - box.left) * k
      const y = (ev.clientY - box.top) * k
      let best: Pin | null = null
      let bd = Infinity
      for (const p of pins) { const [px, py] = pinAt(p); const d = Math.hypot(px - x, py - y); if (d < bd) { bd = d; best = p } }
      onPick(best && bd < 24 * k ? best.id : null)
    }}>
      <defs><clipPath id="mapClip"><rect x={0} y={0} width={360} height={180} /></clipPath></defs>
      <g clip-path="url(#mapClip)">
        <rect x={0} y={0} width={360} height={180} fill={C.sea} />
        {hatch}
        {LAND_PATHS.map((d, i) => <path key={i} d={d} fill={C.land} stroke={C.ink2} stroke-width={0.7} stroke-linejoin="round" />)}
        {sorted.map((p) => {
          const [x, y] = pinAt(p)
          return (
            <g key={p.id}>
              {p.on && <circle cx={x} cy={y} r={5.2} fill="none" stroke={C.ink} stroke-width={1} />}
              <circle cx={x} cy={y} r={3.6} fill={C.page} />
              <circle cx={x} cy={y} r={2.8} fill={p.color} />
              {p.infant && <circle cx={x} cy={y} r={0.9} fill={C.page} />}
            </g>
          )
        })}
      </g>
      <rect x={0} y={0} width={360} height={180} fill="none" stroke={C.ink2} stroke-width={1} />
    </svg>
  )
}
