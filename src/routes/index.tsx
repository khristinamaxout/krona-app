import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Leaf,
  Ruler,
  Palette,
  Sparkles,
  Star,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import kronaLogo from "@/assets/krona-logo.png.asset.json";
import kronaLogoMark from "@/assets/krona-logo-mark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Крона — Мебельная студия Елены Трифан" },
      {
        name: "description",
        content:
          "Помогаем создать мебель, которая подходит именно вашему пространству. Студия мебели на заказ Крона.",
      },
      { property: "og:title", content: "Крона — Мебельная студия Елены Трифан" },
      {
        property: "og:description",
        content:
          "Премиальная студия мебели на заказ. Скандинавский минимализм и натуральные материалы.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const forest = "#1F3A2E";
const graphite = "#1A1A1A";

function Index() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1A1A1A] font-light">
      <Nav />
      <Hero />
      <Assistant />
      <Portfolio />
      <Expert />
      <Reviews />
      <RequestForm />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md border-b border-black/5"
      style={{
        background:
          "linear-gradient(90deg, #1F3A2E 0%, #1F3A2E 68%, rgba(31,58,46,0.6) 82%, #FAFAF7 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto pl-6 pr-8 h-28 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={kronaLogoMark.url}
            alt="Крона — мебельная студия"
            className="h-20 md:h-24 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-10 text-sm text-[#EDE6D3]">
          <a href="#assistant" className="hover:text-white transition">Подбор</a>
          <a href="#portfolio" className="hover:text-white transition">Проекты</a>
          <a href="#expert" className="hover:text-white transition">Журнал</a>
          <a href="#reviews" className="hover:text-white transition">Отзывы</a>
          <a href="#request" className="hover:text-white transition">Контакты</a>
          <a href="/partners" className="hover:text-white transition">Партнёрам</a>
        </nav>
        <a
          href="#request"
          className="text-sm px-5 py-2 rounded-full text-white transition hover:opacity-90"
          style={{ backgroundColor: graphite }}
        >
          Консультация
        </a>
      </div>
    </header>

  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-24 pb-32">
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <div
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase mb-8 text-neutral-500"
          >
            <span className="w-8 h-px bg-neutral-400" />
            Студия мебели на заказ
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.05] tracking-tight font-normal">
            Помогаем создать мебель,
            <br />
            которая подходит{" "}
            <span style={{ color: forest }} className="italic font-serif">
              именно
            </span>
            <br />
            вашему пространству.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-neutral-600 leading-relaxed">
            Крона — это не магазин каталогов. Это тихий диалог между вашим домом,
            материалом и мастером. Мы задаём правильные вопросы — и делаем меньше,
            но точнее.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#assistant"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm tracking-wide"
              style={{ backgroundColor: graphite }}
            >
              Подобрать мебель <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm tracking-wide border border-black/15 hover:bg-black/[0.03] transition"
            >
              Смотреть проекты
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
              alt="Скандинавский интерьер"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-500">
            <Metric num="12" label="лет практики" />
            <Metric num="340+" label="проектов" />
            <Metric num="98%" label="возвращаются" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ num, label }: { num: string; label: string }) {
  return (
    <div className="border-t border-black/10 pt-3">
      <div className="text-2xl text-black font-normal">{num}</div>
      <div className="mt-1">{label}</div>
    </div>
  );
}

/* ---------- Assistant ---------- */
type Step = { key: string; title: string; question: string; options: string[] };
const steps: Step[] = [
  {
    key: "type",
    title: "Тип мебели",
    question: "Что вы хотите сделать?",
    options: ["Кухня", "Гардеробная", "Спальня", "Гостиная", "Кабинет", "Прихожая"],
  },
  {
    key: "room",
    title: "Помещение",
    question: "Какая площадь пространства?",
    options: ["До 10 м²", "10–20 м²", "20–40 м²", "Больше 40 м²"],
  },
  {
    key: "style",
    title: "Стиль",
    question: "Что вам ближе визуально?",
    options: ["Скандинавский", "Японский минимализм", "Современная классика", "Тёплый минимал"],
  },
  {
    key: "colors",
    title: "Палитра",
    question: "Основные оттенки",
    options: ["Светлое дерево", "Молочный и белый", "Графит и камень", "Тёмный дуб", "Зелёные акценты"],
  },
  {
    key: "priority",
    title: "Приоритет",
    question: "Что важнее всего?",
    options: ["Хранение", "Эстетика", "Долговечность", "Скорость", "Бюджет"],
  },
];

function Assistant() {
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<Record<string, string>>({});
  const done = i >= steps.length;
  const step = steps[i];

  return (
    <section id="assistant" className="border-y border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            01 — Ассистент
          </div>
          <h2 className="text-4xl leading-tight font-normal">
            Пять вопросов —
            <br />и мы понимаем,
            <br />
            <span style={{ color: forest }} className="italic font-serif">
              что вам нужно.
            </span>
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            Вместо сотен вариантов — мягкий диалог. Мы задаём только то, что
            действительно важно для дизайнера и мастера.
          </p>
          <div className="mt-10 space-y-3">
            {steps.map((s, idx) => (
              <div
                key={s.key}
                className={`flex items-center gap-3 text-sm ${
                  idx <= i ? "text-black" : "text-neutral-400"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] ${
                    idx < i
                      ? "text-white border-transparent"
                      : idx === i
                      ? "border-black"
                      : "border-neutral-300"
                  }`}
                  style={idx < i ? { backgroundColor: forest } : {}}
                >
                  {idx < i ? <Check className="w-3 h-3" /> : idx + 1}
                </span>
                {s.title}
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="rounded-3xl bg-[#F5F3EE] p-10 md:p-14 min-h-[440px] flex flex-col">
            {!done ? (
              <>
                <div className="text-xs tracking-[0.25em] uppercase text-neutral-500">
                  Шаг {i + 1} из {steps.length} — {step.title}
                </div>
                <h3 className="mt-4 text-3xl md:text-4xl font-normal max-w-lg leading-tight">
                  {step.question}
                </h3>
                <div className="mt-10 flex flex-wrap gap-3">
                  {step.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setAns({ ...ans, [step.key]: opt });
                        setI(i + 1);
                      }}
                      className="px-5 py-3 rounded-full bg-white border border-black/10 hover:border-black transition text-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="mt-auto pt-10 flex items-center justify-between text-sm text-neutral-500">
                  <button
                    onClick={() => setI(Math.max(0, i - 1))}
                    disabled={i === 0}
                    className="disabled:opacity-30"
                  >
                    ← Назад
                  </button>
                  <div className="flex gap-1">
                    {steps.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1 w-8 rounded-full ${
                          idx <= i ? "bg-black" : "bg-black/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col justify-center">
                <Sparkles className="w-6 h-6 mb-4" style={{ color: forest }} />
                <h3 className="text-3xl font-normal max-w-lg">
                  Готово. Мы подберём проект под ваш запрос.
                </h3>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {Object.entries(ans).map(([k, v]) => {
                    const s = steps.find((s) => s.key === k)!;
                    return (
                      <div key={k} className="bg-white rounded-2xl p-4">
                        <div className="text-xs text-neutral-500">{s.title}</div>
                        <div className="mt-1">{v}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex gap-3">
                  <a
                    href="#request"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm"
                    style={{ backgroundColor: graphite }}
                  >
                    Отправить дизайнеру <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => {
                      setAns({});
                      setI(0);
                    }}
                    className="px-6 py-3 rounded-full text-sm border border-black/15"
                  >
                    Начать заново
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio ---------- */
const projects = [
  {
    title: "Кухня Хвоя",
    story:
      "Проект для семьи в загородном доме под Петербургом. Дубовый шпон, каменная столешница и скрытая вентиляция.",
    materials: ["Массив дуба", "Кварцевый агломерат", "Латунная фурнитура"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    title: "Гардеробная Северный свет",
    story:
      "Пространство 14 м² под потолок 3.2 м. Ясень, стеклянные фасады, мягкая LED-подсветка.",
    materials: ["Ясень белёный", "Матовое стекло", "Тканевые вставки"],
    img: "https://images.unsplash.com/photo-1616627981927-8b98a4c0b52d?w=1200&q=80",
  },
  {
    title: "Гостиная Мох",
    story:
      "Стеллаж и медиа-зона по индивидуальному чертежу. Тёплый графит с зелёными акцентами.",
    materials: ["Шпон ореха", "Металл матовый", "Войлок"],
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex items-end justify-between mb-14">
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            02 — Проекты
          </div>
          <h2 className="text-4xl md:text-5xl font-normal leading-tight max-w-xl">
            Каждый проект —{" "}
            <span style={{ color: forest }} className="italic font-serif">
              история дома
            </span>
            .
          </h2>
        </div>
        <a
          href="#request"
          className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black"
        >
          Все проекты <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200 mb-5">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700"
              />
            </div>
            <h3 className="text-xl">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.story}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.materials.map((m) => (
                <span
                  key={m}
                  className="text-xs px-3 py-1 rounded-full border border-black/10 text-neutral-600"
                >
                  {m}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Expert ---------- */
const articles = [
  {
    tag: "Цвет",
    icon: Palette,
    title: "Как выбрать палитру, которая не устареет через год",
    time: "7 мин",
  },
  {
    tag: "Материалы",
    icon: Leaf,
    title: "Массив, шпон и МДФ — честный разбор без маркетинга",
    time: "9 мин",
  },
  {
    tag: "Планирование",
    icon: Ruler,
    title: "Гардеробная 6 м²: как разместить всё и оставить воздух",
    time: "6 мин",
  },
];

function Expert() {
  return (
    <section id="expert" className="bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
          03 — Журнал
        </div>
        <h2 className="text-4xl md:text-5xl font-normal leading-tight max-w-2xl mb-14">
          Экспертиза, которой мы делимся{" "}
          <span style={{ color: forest }} className="italic font-serif">
            бесплатно
          </span>
          .
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              className="group rounded-3xl border border-black/10 p-8 hover:border-black transition flex flex-col min-h-[280px]"
            >
              <a.icon className="w-6 h-6 mb-6" style={{ color: forest }} strokeWidth={1.5} />
              <div className="text-xs tracking-[0.2em] uppercase text-neutral-500">
                {a.tag}
              </div>
              <h3 className="mt-3 text-xl leading-snug">{a.title}</h3>
              <div className="mt-auto pt-8 flex items-center justify-between text-sm text-neutral-500">
                <span>{a.time} чтения</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
const reviews = [
  {
    name: "Анна и Дмитрий",
    role: "Кухня, 2024",
    text: "Крона задавали такие вопросы, о которых мы сами не думали. В итоге получили не просто мебель, а решение для нашей семьи.",
  },
  {
    name: "Мария К.",
    role: "Гардеробная, 2024",
    text: "Никакой суеты и продавливания. Три встречи, точные чертежи и монтаж день в день. Всё как обещали.",
  },
  {
    name: "Studio Nord",
    role: "Партнёр-архитектор",
    text: "Работаем с Кроной третий год. Единственная мастерская, которой я доверяю финиш без личного контроля.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
        04 — Отзывы
      </div>
      <h2 className="text-4xl md:text-5xl font-normal leading-tight max-w-2xl mb-14">
        Люди, для которых мы делали дом.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-3xl bg-[#F5F3EE] p-8 flex flex-col">
            <div className="flex gap-0.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: forest }} />
              ))}
            </div>
            <p className="text-lg leading-relaxed">«{r.text}»</p>
            <div className="mt-8 pt-6 border-t border-black/10">
              <div className="text-sm">{r.name}</div>
              <div className="text-xs text-neutral-500 mt-1">{r.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Request Form ---------- */
function RequestForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="request" className="text-white" style={{ backgroundColor: graphite }}>
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">
            05 — Заявка
          </div>
          <h2 className="text-4xl md:text-5xl font-normal leading-tight">
            Расскажите о проекте.
            <br />
            Мы вернёмся{" "}
            <span style={{ color: "#A8C8A0" }} className="italic font-serif">
              в течение дня
            </span>
            .
          </h2>
          <p className="mt-8 text-white/60 leading-relaxed max-w-md">
            После заявки — короткий звонок 15 минут. Дальше — бесплатный выезд
            дизайнера, замеры и предварительный эскиз.
          </p>
          <div className="mt-10 space-y-3 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4" /> +7 (812) 000-00-00
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4" /> hello@krona.studio
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {!sent ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Как к вам обращаться" required />
                <Field label="Телефон" required type="tel" />
              </div>
              <Field label="Email" type="email" />
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Город" />
                <Field label="Бюджет (примерно)" />
              </div>
              <Select
                label="Тип проекта"
                options={["Кухня", "Гардеробная", "Спальня", "Гостиная", "Комплексно"]}
              />
              <Textarea label="О пространстве и задаче" />
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm"
                >
                  Отправить заявку <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-white/40 max-w-xs">
                  Отправляя заявку, вы соглашаетесь на обработку персональных данных.
                </p>
              </div>
            </form>
          ) : (
            <div className="rounded-3xl border border-white/15 p-10 h-full flex flex-col justify-center">
              <Check className="w-8 h-8 mb-6" style={{ color: "#A8C8A0" }} />
              <h3 className="text-3xl font-normal">Заявка принята.</h3>
              <p className="mt-4 text-white/60 max-w-md">
                Дизайнер Крона позвонит вам в течение рабочего дня. Пока — можно
                посмотреть наши последние проекты.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs text-white/50">{label}{required && " *"}</span>
      <input
        required={required}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white placeholder-white/30"
      />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs text-white/50">{label}</span>
      <select
        className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white"
        defaultValue=""
      >
        <option value="" disabled className="text-black">Выберите...</option>
        {options.map((o) => (
          <option key={o} className="text-black">{o}</option>
        ))}
      </select>
    </label>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-xs text-white/50">{label}</span>
      <textarea
        rows={4}
        className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white placeholder-white/30 resize-none"
      />
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-8 py-14 flex flex-wrap items-center justify-between gap-6 text-sm text-neutral-500">
      <div className="flex items-center gap-2">
        <Leaf className="w-4 h-4" style={{ color: forest }} strokeWidth={1.5} />
        <span className="tracking-[0.3em]">КРОНА</span>
      </div>
      <div>© {new Date().getFullYear()} Студия мебели на заказ. Санкт-Петербург.</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-black">Instagram</a>
        <a href="#" className="hover:text-black">Pinterest</a>
        <a href="#" className="hover:text-black">Telegram</a>
      </div>
    </footer>
  );
}
