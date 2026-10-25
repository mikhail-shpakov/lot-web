import app.lot.domain.*
import java.io.File

fun q(s: String) = "\"" + s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n") + "\""
fun tx(t: Tx?) = if (t == null) "null" else "[${q(t.ru)},${q(t.en)}]"

fun main(args: Array<String>) {
    val a = File(args[0])
    val content = Content.read(File(a, "lines").listFiles()!!.sorted().map { it.inputStream() }, File(a, "history.tsv").inputStream(),
        a.listFiles()!!.filter { it.name.startsWith("dilemmas") && it.name.endsWith(".txt") }.sorted().map { it.inputStream() })
    val out = StringBuilder()
    // Raw random streams, to check the PRNG port.
    val r = kotlin.random.Random(42L)
    out.append("{\"rand\":[")
    out.append((0 until 20).joinToString(",") { "${r.nextInt()},${r.nextInt(7)},${r.nextDouble()},${r.nextBoolean()},\"${r.nextLong()}\"" })
    out.append("],\"lives\":[\n")
    val wishes = listOf(Wish(), Wish(area = "eu"), Wish(eraI = 1, area = "in", sex = Sex.F), Wish(area = "ru"))
    val heir = Heir(1, Tx("Анна Иванова", "Anna Ivanova"), Sex.F, 1700, "ru", "ru", 1, 2, Names.pool("ru").sur[0], 5, Tx("ложка", "a spoon"), Tx("о говорящей сороке", "about the talking magpie"), 11L, 1, readers = true)
    val lines = mutableListOf<String>()
    for (n in 0 until 600) {
        val seed = if (n >= 500) n.toLong() * -7046029254386353131L else n.toLong() * 7919 - 1_000_003L * (n % 5)
        val wish = wishes[n % wishes.size]
        val h = if (n % 7 == 3) heir else null
        val witness = n % 6 == 5
        val past = if (n % 9 == 4) Past(setOf("Зимой умерли двое младших. Мать долго молчала."), setOf(1, 2, 3)) else Past.NONE
        val picks = mutableListOf<Int>()
        var shown = 1
        var p: Page
        while (true) {
            p = Life.read(content, seed, h, picks, shown, witness, past, wish)
            if (p.end != null) break
            val ch = p.pending
            if (ch != null) { val open = ch.doors.indices.filter { ch.doors[it].open }; picks += open[(picks.size * 3 + n) % open.size] } else shown++
        }
        val b = p.birth; val e = p.end!!
        lines += "{\"n\":$n,\"seed\":\"$seed\",\"picks\":[${picks.joinToString(",")}],\"shown\":$shown,\"era\":${b.era.i},\"region\":${q(b.region.key)},\"cult\":${q(b.cult)},\"estate\":${q(b.estate.key)},\"sex\":${q(b.sex.name)},\"year\":${b.year},\"name\":${tx(b.name)},\"share\":${b.share}," +
            "\"entries\":[${p.entries.joinToString(",") { "[${it.age},${it.mark.ordinal},${q(it.text.ru)},${q(it.text.en)}]" }}]," +
            "\"end\":{\"age\":${e.age},\"epitaph\":${tx(e.epitaph)},\"bridge\":${tx(e.bridge)},\"thing\":${e.thing?.key?.let(::q) ?: "null"},\"kids\":${e.kidsAlive},\"wealth\":${e.wealth},\"rank\":${e.rank},\"lit\":${e.lit},\"sea\":${e.sawSea},\"meet\":${e.meet ?: "null"},\"story\":${tx(e.story)},\"seen\":[${e.seen.joinToString(",")}]}}"
    }
    out.append(lines.joinToString(",\n")).append("]}\n")
    File(args[1]).writeText(out.toString())
    println("lines ${content.lines.size} hist ${content.hist.size} dilemmas ${content.dilemmas.size}")
}
