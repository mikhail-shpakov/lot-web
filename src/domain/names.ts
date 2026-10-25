import type { Random } from './random'
import { type Sex, Tx } from './world'

/** Given names and surnames by culture, as "русское|English". */
export class Pool {
  readonly sur: Tx[]
  readonly male: Tx[]
  readonly female: Tx[]
  readonly surnameFirst: boolean
  readonly feminine: boolean

  constructor(s: string, m: string, f: string, opts: { surnameFirst?: boolean; feminine?: boolean } = {}) {
    this.sur = split(s)
    this.male = split(m)
    this.female = split(f)
    this.surnameFirst = opts.surnameFirst ?? false
    this.feminine = opts.feminine ?? false
  }
}

function split(list: string) {
  return list === '' ? [] : list.split(', ').map((x) => { const [r, e] = x.split('|'); return new Tx(r, e) })
}

const POOLS: Record<string, Pool> = {
  stone: new Pool("",
            "Быстроногий|Swift-Foot, Сын Ворона|Son of Raven, Тот-кто-видит-зверя|Sees-the-Beast, Длиннорукий|Long-Arm, Смеющийся|Laughing One, Молчун|Silent One, Кремень|Flint, Рыжий Лис|Red Fox, Тот-кто-бежит-с-ветром|Runs-with-the-Wind, Сын Лосихи|Son of the Elk Cow, Огниво|Firestone, Косолапый|Bear-Foot, Ночной Глаз|Night Eye, Рыболов|Fisher, Певун|Singer",
            "Дочь Реки|River's Daughter, Находящая воду|Finds-Water, Тихая|Quiet One, Ловкая|Nimble, Помнящая травы|Knows-the-Herbs, Пятнистая|Speckled, Ракушка|Shell, Утренняя|Morning One, Дочь Ветра|Wind's Daughter, Ягодница|Berry Picker, Ласточка|Swallow, Сказительница|Tale Keeper, Белая Сова|White Owl, Та-что-видит-сны|Dreamer"),
  au: new Pool("",
            "Билби|Bilby, Сын Эму|Son of Emu, Тот-кто-поёт-дорогу|Sings-the-Way, Бумеранг|Boomerang, Красная Земля|Red Earth, Дальний Огонь|Far Fire",
            "Дочь Дождя|Rain's Daughter, Знающая воду|Knows-the-Water, Звёздная|Star One, Тихий Ручей|Quiet Creek, Охра|Ochre, Ящерка|Little Lizard"),
  cn: new Pool("Ли|Li, Ван|Wang, Чжан|Zhang, Лю|Liu, Чэнь|Chen, Ян|Yang, Чжао|Zhao, Хуан|Huang, Цзя|Jia, Гао|Gao, Сунь|Sun, Чжоу|Zhou, Ма|Ma, Го|Guo",
            "Вэй|Wei, Мин|Ming, Цзюнь|Jun, Бо|Bo, Хао|Hao, Юн|Yong, Цян|Qiang, Пин|Ping, Тао|Tao, Гуан|Guang, Чэн|Cheng, Дэ|De, Шэн|Sheng, Фу|Fu",
            "Мэй|Mei, Лань|Lan, Сюэ|Xue, Хуа|Hua, Лин|Ling, Фан|Fang, Цзин|Jing, Юй|Yu, Сяо|Xiao, Хун|Hong, Сю|Xiu, Ин|Ying, Чунь|Chun, Цяо|Qiao", { surnameFirst: true }),
  jp: new Pool("Танака|Tanaka, Сато|Sato, Ямада|Yamada, Ито|Ito, Накамура|Nakamura, Кобаяси|Kobayashi",
            "Таро|Taro, Дзиро|Jiro, Хироси|Hiroshi, Кэндзи|Kenji, Исаму|Isamu, Сёта|Shota, Горо|Goro, Масао|Masao, Тадаси|Tadashi, Ёсио|Yoshio",
            "Ханако|Hanako, Юки|Yuki, Сакура|Sakura, Харуко|Haruko, Мити|Michi, Аяко|Ayako, Кику|Kiku, Тиё|Chiyo, Фуми|Fumi, Сидзу|Shizu", { surnameFirst: true }),
  in: new Pool("Шарма|Sharma, Сингх|Singh, Ядав|Yadav, Гупта|Gupta, Пиллаи|Pillai, Дас|Das, Рао|Rao, Патель|Patel, Мишра|Mishra, Наир|Nair",
            "Арджун|Arjun, Рави|Ravi, Виджай|Vijay, Кумар|Kumar, Анил|Anil, Девдас|Devdas, Мохан|Mohan, Гопал|Gopal, Шанкар|Shankar, Хари|Hari, Рамеш|Ramesh, Бхим|Bhim",
            "Сита|Sita, Лакшми|Lakshmi, Радха|Radha, Мира|Meera, Гита|Gita, Парвати|Parvati, Камала|Kamala, Сарасвати|Saraswati, Девика|Devika, Кальяни|Kalyani, Шанти|Shanti, Уша|Usha"),
  mes: new Pool("",
            "Лугаль|Lugal, Ипхур|Ipkhur, Шамаш-иддин|Shamash-iddin, Набу|Nabu, Ур-Нанше|Ur-Nanshe, Энмен|Enmen",
            "Нин-Ана|Nin-Ana, Геме|Geme, Шат-Иштар|Shat-Ishtar, Амат-Мамму|Amat-Mammu, Белтани|Beltani, Илтани|Iltani"),
  eg: new Pool("",
            "Хеси|Hesy, Небамон|Nebamun, Пенту|Pentu, Ипи|Ipi, Сенеб|Seneb, Мерира|Meryra",
            "Нефер|Nefer, Мерит|Merit, Тия|Tiye, Ити|Iti, Хенут|Henut, Небет|Nebet"),
  gr: new Pool("",
            "Никий|Nikias, Филон|Philon, Деметрий|Demetrios, Луций|Lucius, Гай|Gaius, Марк|Marcus",
            "Ирина|Eirene, Клео|Kleo, Юлия|Julia, Ливия|Livia, Фила|Phila, Агата|Agathe"),
  me: new Pool("",
            "Юсуф|Yusuf, Хасан|Hasan, Али|Ali, Омар|Omar, Ибрагим|Ibrahim, Самир|Samir, Халид|Khalid, Мустафа|Mustafa, Салих|Salih, Карим|Karim, Тарик|Tariq, Яхья|Yahya",
            "Фатима|Fatima, Лейла|Layla, Зейнаб|Zaynab, Амина|Amina, Мариам|Maryam, Халима|Halima, Нур|Nur, Хадиджа|Khadija, Сальма|Salma, Рукайя|Ruqayya, Сафия|Safiya, Ясмин|Yasmin"),
  fr: new Pool("Дюбуа|Dubois, Мартен|Martin, Бернар|Bernard, Леруа|Leroy, Моро|Moreau, Дюран|Durand",
            "Жан|Jean, Пьер|Pierre, Жак|Jacques, Гийом|Guillaume, Николя|Nicolas, Этьен|Étienne",
            "Мари|Marie, Жанна|Jeanne, Анна|Anne, Маргарита|Marguerite, Изабо|Isabeau, Катрин|Catherine"),
  de: new Pool("Мюллер|Müller, Шмидт|Schmidt, Шнайдер|Schneider, Фишер|Fischer, Вебер|Weber, Бауэр|Bauer",
            "Ганс|Hans, Йохан|Johann, Петер|Peter, Фриц|Fritz, Конрад|Konrad, Генрих|Heinrich",
            "Анна|Anna, Грета|Greta, Эльза|Elsa, Марта|Martha, Барбара|Barbara, Урсула|Ursula"),
  it: new Pool("Росси|Rossi, Бруно|Bruno, Риччи|Ricci, Конти|Conti, Эспозито|Esposito, Галло|Gallo",
            "Пьетро|Pietro, Джованни|Giovanni, Марко|Marco, Лука|Luca, Антонио|Antonio, Франческо|Francesco",
            "Мария|Maria, Лючия|Lucia, Франческа|Francesca, Джулия|Giulia, Анна|Anna, Клара|Chiara"),
  en: new Pool("Смит|Smith, Тейлор|Taylor, Купер|Cooper, Миллер|Miller, Бейкер|Baker, Уокер|Walker",
            "Джон|John, Уильям|William, Томас|Thomas, Ричард|Richard, Генри|Henry, Роберт|Robert",
            "Мэри|Mary, Элис|Alice, Агнес|Agnes, Джоан|Joan, Элизабет|Elizabeth, Энн|Anne"),
  ru: new Pool("Иванов|Ivanov, Кузнецов|Kuznetsov, Попов|Popov, Смирнов|Smirnov, Волков|Volkov, Соколов|Sokolov",
            "Иван|Ivan, Фёдор|Fyodor, Пётр|Pyotr, Никита|Nikita, Савва|Savva, Гаврила|Gavrila, Тимофей|Timofey, Степан|Stepan, Егор|Yegor, Афанасий|Afanasy, Прохор|Prokhor, Михаил|Mikhail",
            "Марья|Marya, Аграфена|Agrafena, Пелагея|Pelageya, Дарья|Darya, Анна|Anna, Ульяна|Ulyana, Акулина|Akulina, Евдокия|Yevdokia, Прасковья|Praskovya, Матрёна|Matryona, Татьяна|Tatyana, Ефросинья|Yefrosinya", { feminine: true }),
  af: new Pool("",
            "Кваме|Kwame, Мамаду|Mamadou, Секу|Sekou, Нкози|Nkosi, Адебайо|Adebayo, Коффи|Kofi, Чиди|Chidi, Окоро|Okoro, Бакари|Bakari, Тунде|Tunde, Йаа|Yaw, Муса|Musa, Жабари|Jabari",
            "Амина|Amina, Нья|Nya, Айя|Aya, Фату|Fatou, Абена|Abena, Зола|Zola, Нгози|Ngozi, Ифеома|Ifeoma, Адвоа|Adwoa, Кадиату|Kadiatou, Ньямбура|Nyambura, Мариама|Mariama"),
  sea: new Pool("",
            "Минь|Minh, Бао|Bao, Сомчай|Somchai, Нгок|Ngoc, Тхань|Thanh, Агус|Agus, Сурия|Surya, Вирой|Viroj, Хиеу|Hieu, Ракай|Rakai",
            "Лан|Lan, Мали|Mali, Хоа|Hoa, Ньян|Nhan, Суда|Suda, Деви|Dewi, Кхань|Khanh, Ратна|Ratna, Ньюнг|Nyung, Сари|Sari"),
  am: new Pool("",
            "Ицкоатль|Itzcoatl, Куаутли|Cuauhtli, Тупак|Tupac, Йольотль|Yollotl, Титу|Titu, Ачик|Achik",
            "Шочитль|Xochitl, Ситлали|Citlali, Кусикойльюр|Cusicoyllur, Имасумак|Imasumac, Метцли|Metztli, Окльо|Ocllo"),
  la: new Pool("Гарсия|García, Лопес|López, Силва|Silva, Перейра|Pereira, Мартинес|Martínez, Рамирес|Ramírez",
            "Хосе|José, Хуан|Juan, Франсиско|Francisco, Жоао|João, Мигель|Miguel, Педру|Pedro, Луис|Luis, Антонио|Antonio, Мануэль|Manuel, Рафаэль|Rafael",
            "Мария|María, Хосефа|Josefa, Ана|Ana, Луиса|Luisa, Тереза|Teresa, Росарио|Rosario, Каталина|Catalina, Инес|Inés, Гуадалупе|Guadalupe, Кармен|Carmen"),
  us: new Pool("Джонсон|Johnson, Миллер|Miller, Браун|Brown, Уильямс|Williams, Дэвис|Davis, Кларк|Clark",
            "Джон|John, Уильям|William, Джеймс|James, Роберт|Robert, Чарльз|Charles, Джордж|George",
            "Мэри|Mary, Элизабет|Elizabeth, Сара|Sarah, Маргарет|Margaret, Энни|Annie, Хелен|Helen"),
}

export function pool(cult: string): Pool { return POOLS[cult] ?? POOLS.stone }

/** Surnames come in once parish books and tax rolls keep them: from the late Middle Ages on, earlier in China. */
export function keepsSurnames(cult: string, eraI: number) {
  return pool(cult).sur.length > 0 && (eraI >= 3 || (cult === 'cn' && eraI >= 1))
}

/** Full name: a given name with a surname, or «Кумар, сын Виджая» where there are none, or just a nickname in the Stone Age. */
export function fullName(cult: string, _eraI: number, sex: Sex, first: Tx, sur: Tx | null, rnd: Random): Tx {
  const p = pool(cult)
  if (cult === 'stone' || cult === 'au') return first
  if (sur != null) {
    const s = sex === 'F' && p.feminine ? new Tx(sur.ru + 'а', sur.en + 'a') : sur
    return p.surnameFirst ? new Tx(`${s.ru} ${first.ru}`, `${s.en} ${first.en}`) : new Tx(`${first.ru} ${s.ru}`, `${first.en} ${s.en}`)
  }
  const i = rnd.nextIntUntil(p.male.length)
  const father = !p.male[i].equals(first) ? p.male[i] : p.male[(i + 1) % p.male.length]
  return new Tx(`${first.ru}, ${sex === 'M' ? 'сын' : 'дочь'} ${genitive(father.ru)}`, `${first.en}, ${sex === 'M' ? 'son' : 'daughter'} of ${father.en}`)
}

/** «Виджай» → «Виджая», «Никита» → «Никиты»: enough Russian declension for a father's name. */
export function genitive(n: string): string {
  const last = n[n.length - 1]
  const prev = n.length >= 2 ? n[n.length - 2] : null
  if (last === 'й' || last === 'ь') return n.slice(0, -1) + 'я'
  if (last === 'а') return n.slice(0, -1) + (prev != null && 'гкхжшщч'.includes(prev) ? 'и' : 'ы')
  if (last === 'я') return n.slice(0, -1) + 'и'
  if ('оиуеюэы'.includes(last)) return n
  return n + 'а'
}
