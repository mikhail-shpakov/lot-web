/**
 * Kotlin's `Random(seed: Long)`, bit for bit: the XorWow generator and the stdlib's ways of turning its ints into
 * bounded ints, doubles and booleans. A life is replayed from its seed, so the web and the Android app read the same book.
 */
export class Random {
  private x: number
  private y: number
  private z: number
  private w: number
  private v: number
  private addend: number

  constructor(seed: bigint) {
    const s = BigInt.asIntN(64, seed)
    const seed1 = Number(BigInt.asIntN(32, s))
    const seed2 = Number(BigInt.asIntN(32, s >> 32n))
    this.x = seed1
    this.y = seed2
    this.z = 0
    this.w = 0
    this.v = ~seed1
    this.addend = (seed1 << 10) ^ (seed2 >>> 4)
    for (let i = 0; i < 64; i++) this.nextInt()
  }

  nextInt(): number {
    let t = this.x
    t = t ^ (t >>> 2)
    this.x = this.y
    this.y = this.z
    this.z = this.w
    const v0 = this.v
    this.w = v0
    t = t ^ (t << 1) ^ v0 ^ (v0 << 4)
    this.v = t | 0
    this.addend = (this.addend + 362437) | 0
    return (t + this.addend) | 0
  }

  nextBits(bitCount: number): number {
    return (this.nextInt() >>> (32 - bitCount)) & (-bitCount >> 31)
  }

  /** An int in [0, until). */
  nextIntUntil(until: number): number {
    const n = until | 0
    if (n <= 0) throw new Error(`bound must be positive: ${until}`)
    if ((n & -n) === n) return this.nextBits(31 - Math.clz32(n))
    let bits: number, v: number
    do {
      bits = this.nextInt() >>> 1
      v = bits % n
    } while (((bits - v + (n - 1)) | 0) < 0)
    return v
  }

  nextDouble(): number {
    const hi = this.nextBits(26)
    const lo = this.nextBits(27)
    return (hi * 134217728 + lo) / 9007199254740992
  }

  nextFloat(): number {
    return this.nextBits(24) / 16777216
  }

  nextBoolean(): boolean {
    return this.nextBits(1) !== 0
  }

  nextLong(): bigint {
    const hi = BigInt(this.nextInt())
    const lo = BigInt(this.nextInt())
    return BigInt.asIntN(64, (hi << 32n) + lo)
  }

  pick<T>(list: readonly T[]): T {
    if (list.length === 0) throw new Error('Collection is empty.')
    return list[this.nextIntUntil(list.length)]
  }

  pickOrNull<T>(list: readonly T[]): T | null {
    return list.length === 0 ? null : list[this.nextIntUntil(list.length)]
  }
}

/** A fresh 64-bit seed for a new lot. */
export function newSeed(): bigint {
  const a = new Uint32Array(2)
  crypto.getRandomValues(a)
  return BigInt.asIntN(64, (BigInt(a[0]) << 32n) | BigInt(a[1]))
}
