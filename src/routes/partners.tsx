import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, TrendingUp, Handshake, ShieldCheck, Clock } from "lucide-react";
import kronaLogoMark from "@/assets/krona-logo-mark.png.asset.json";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Партнёрам — Крона, мебельная студия Елены Трифан" },
      {
        name: "description",
        content:
          "Сотрудничество с мебельной студией Крона: понятные условия, довольные клиенты и партнёрское вознаграждение, на которое можно рассчитывать.",
      },
      { property: "og:title", content: "Партнёрам — Крона, мебельная студия Елены Трифан" },
      {
        property: "og:description",
        content:
          "Дизайнерам, архитекторам и студиям — партнёрская программа мебельной студии Крона.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PartnersPage,
});

const forest = "#1F3A2E";
const graphite = "#1A1A1A";

function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1A1A1A] font-light">
      <Nav />
      <Hero />
      <Value />
      <How />
      <Terms />
      <Voices />
      <CTA />
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
        <Link to="/" className="flex items-center">
          <img
            src={kronaLogoMark.url}
            alt="Крона — мебельная студия"
            className="h-20 md:h-24 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-[#EDE6D3]">
          <Link to="/" className="hover:text-white transition">Главная</Link>
          <Link to="/" hash="portfolio" className="hover:text-white transition">Проекты</Link>
          <Link to="/" hash="expert" className="hover:text-white transition">Журнал</Link>
          <Link to="/partners" className="text-white">Партнёрам</Link>
        </nav>
        <a
          href="#partner-request"
          className="text-sm px-5 py-2 rounded-full text-white transition hover:opacity-90"
          style={{ backgroundColor: graphite }}
        >
          Стать партнёром
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-24 pb-28">
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase mb-8 text-neutral-500">
            <span className="w-8 h-px bg-neutral-400" />
            Партнёрская программа
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.05] tracking-tight font-normal">
            Ваши клиенты получают мебель,
            <br />
            которую{" "}
            <span style={{ color: forest }} className="italic font-serif">
              не стыдно
            </span>{" "}
            показать.
            <br />
            Вы — стабильный доход.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-neutral-600 leading-relaxed">
            Мы работаем с дизайнерами, архитекторами и студиями, для которых
            репутация — рабочий инструмент. Берём на себя производство, монтаж и
            все неудобные разговоры. Оставляем вам — проект и благодарного
            клиента.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#partner-request"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm transition hover:opacity-90"
              style={{ backgroundColor: forest }}
            >
              Обсудить сотрудничество <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border border-black/15 hover:border-black/40 transition"
            >
              Как это устроено
            </a>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="grid grid-cols-2 gap-6">
            <Metric k="до 15%" v="партнёрское вознаграждение с проекта" />
            <Metric k="7 лет" v="средний срок совместной работы" />
            <Metric k="94%" v="клиентов приходят к партнёру снова" />
            <Metric k="0" v="скрытых доплат для вашего клиента" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-black/10 pt-4">
      <div className="text-2xl md:text-3xl tracking-tight" style={{ color: forest }}>
        {k}
      </div>
      <div className="mt-2 text-xs text-neutral-500 leading-snug">{v}</div>
    </div>
  );
}

/* ---------- Value ---------- */
function Value() {
  const items = [
    {
      icon: TrendingUp,
      title: "Больше среднего чека",
      text: "Индивидуальная мебель поднимает бюджет проекта, а вместе с ним — ваш процент. Партнёры Кроны в среднем зарабатывают на мебельной части на 30–40% больше, чем на готовых решениях.",
    },
    {
      icon: ShieldCheck,
      title: "Никаких неловких звонков",
      text: "Клиент никогда не позвонит вам с претензией по фасаду или петле. Все вопросы после подписания замера — на нас: сроки, доставка, монтаж, сервис в течение 5 лет.",
    },
    {
      icon: Handshake,
      title: "Ваш стиль — наш приоритет",
      text: "Мы не тянем клиента на себя и не ставим свой логотип в его квартире. В проекте остаётесь автором вы. Наше имя звучит только там, где вы сами захотите.",
    },
    {
      icon: Clock,
      title: "Предсказуемые сроки",
      text: "Производство планируется под ваш график сдачи объекта. Если сроки горят — говорим об этом до договора, а не за неделю до монтажа.",
    },
  ];
  return (
    <section className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Что вы получаете
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight tracking-tight">
            Партнёрство, в котором{" "}
            <span style={{ color: forest }} className="italic font-serif">
              выигрывают трое
            </span>
            : вы, ваш клиент и мы.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t border-black/10 pt-8">
              <Icon className="w-6 h-6" style={{ color: forest }} strokeWidth={1.25} />
              <h3 className="mt-6 text-2xl tracking-tight">{title}</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed max-w-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How ---------- */
function How() {
  const steps = [
    {
      n: "01",
      t: "Знакомимся",
      d: "Короткая встреча — офлайн или в Zoom. Смотрим ваши текущие проекты, обсуждаем стиль работы и типовые бюджеты клиентов.",
    },
    {
      n: "02",
      t: "Пробный проект",
      d: "Ведём первый объект в четыре руки: вы отвечаете за дизайн и клиента, мы — за просчёт, производство и монтаж. Никаких обязательств на будущее.",
    },
    {
      n: "03",
      t: "Договор о партнёрстве",
      d: "Если всё сошлось — фиксируем условия: процент, сроки реакции, порядок расчётов, зоны ответственности. Всё письменно и без мелкого шрифта.",
    },
    {
      n: "04",
      t: "Работаем долго",
      d: "Персональный менеджер, приоритет в загрузке производства и закрытый чат для оперативных вопросов по всем вашим объектам.",
    },
  ];
  return (
    <section id="how" className="border-t border-black/10 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              Как мы начинаем
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight tracking-tight">
              Четыре шага —{" "}
              <span style={{ color: forest }} className="italic font-serif">
                без обязательств
              </span>{" "}
              на первом.
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Мы не подписываем «партнёрство ради партнёрства». Сначала —
              совместный проект. Дальше уже решаем, интересно ли работать вдолгую.
            </p>
          </div>
          <div className="md:col-span-8 space-y-px bg-black/10">
            {steps.map((s) => (
              <div key={s.n} className="bg-[#F5F3EE] p-8 md:p-10 grid grid-cols-12 gap-6">
                <div
                  className="col-span-2 text-sm tracking-[0.2em]"
                  style={{ color: forest }}
                >
                  {s.n}
                </div>
                <div className="col-span-10">
                  <h3 className="text-2xl tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed max-w-xl">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Terms ---------- */
function Terms() {
  const yes = [
    "Персональный проектный менеджер",
    "Приоритетные сроки производства",
    "3D-визуализация вашего проекта",
    "Выезд замерщика по вашему графику",
    "Партнёрское вознаграждение до 15%",
    "Отсрочка платежа для системных партнёров",
    "Сервисное обслуживание изделий 5 лет",
    "Закрытая база материалов и фурнитуры",
  ];
  return (
    <section className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              Условия
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight tracking-tight">
              Прозрачно.
              <br />
              <span style={{ color: forest }} className="italic font-serif">
                Без мелкого шрифта.
              </span>
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed max-w-md">
              Мы намеренно держим партнёрскую программу простой. Один договор,
              одна ставка, один менеджер. Всё, что перечислено справа — входит
              по умолчанию, без «пакетов» и апгрейдов.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-x-8">
              {yes.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 py-4 border-t border-black/10"
                >
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: forest }} strokeWidth={1.5} />
                  <span className="text-[15px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Voices ---------- */
function Voices() {
  const q = [
    {
      t: "«Раньше я закладывала в смету “мебель под заказ” и внутренне сжималась — потому что не знала, кто и как это сделает. С Кроной я перестала перезванивать клиенту с извинениями.»",
      a: "Анна Ветлицкая",
      r: "Дизайнер интерьера, 12 лет практики",
    },
    {
      t: "«Для студии важно, чтобы подрядчик не тянул одеяло на себя. Крона — единственные, кто ни разу не оставил клиенту свою визитку через мою голову.»",
      a: "Максим Орлов",
      r: "Архитектурное бюро “Контур”",
    },
  ];
  return (
    <section className="border-t border-black/10" style={{ backgroundColor: forest }}>
      <div className="max-w-7xl mx-auto px-8 py-24 text-[#EDE6D3]">
        <div className="text-xs tracking-[0.25em] uppercase text-[#EDE6D3]/60 mb-6">
          Партнёры о нас
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {q.map((x) => (
            <figure key={x.a} className="border-t border-white/15 pt-8">
              <blockquote className="text-2xl md:text-3xl leading-snug tracking-tight font-light text-white">
                {x.t}
              </blockquote>
              <figcaption className="mt-8 text-sm text-[#EDE6D3]/80">
                <div className="text-white">{x.a}</div>
                <div className="mt-1">{x.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA / Request ---------- */
function CTA() {
  return (
    <section id="partner-request" className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="text-4xl md:text-5xl leading-tight tracking-tight">
            Давайте{" "}
            <span style={{ color: forest }} className="italic font-serif">
              познакомимся
            </span>
            .
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed max-w-md">
            Оставьте контакты — партнёрский менеджер напишет в течение рабочего
            дня. Никаких массовых рассылок и презентаций на 40 слайдов.
          </p>
          <div className="mt-10 space-y-3 text-sm text-neutral-600">
            <div>partners@krona.studio</div>
            <div>+7 (000) 000-00-00 — Ирина, партнёрский отдел</div>
          </div>
        </div>
        <form className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <Field label="Как к вам обращаться" />
          <Field label="Студия или бюро" />
          <Field label="Телефон" />
          <Field label="Email" />
          <div className="sm:col-span-2">
            <Field label="Пара слов о ваших проектах" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between pt-4">
            <div className="text-xs text-neutral-500 max-w-xs">
              Отправляя форму, вы соглашаетесь на обработку персональных данных.
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm transition hover:opacity-90"
              style={{ backgroundColor: forest }}
            >
              Отправить <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
        {label}
      </span>
      <input
        type="text"
        className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-2 text-[15px]"
      />
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
        <div>© Крона, мебельная студия</div>
        <Link to="/" className="hover:text-black transition">На главную →</Link>
      </div>
    </footer>
  );
}
