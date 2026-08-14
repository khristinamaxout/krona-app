import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  Menu,
  X,
  Gem,
  Scale,
  Fingerprint,
  Factory,
  Wrench,
  LifeBuoy,
} from "lucide-react";
import Assistant from "@/components/assistant";
import kronaLogo from "@/assets/krona-logo.png.asset.json";
import kronaWordmark from "@/assets/krona-wordmark.png.asset.json";
import photoWardrobe from "@/assets/wardrobe-gold.png.asset.json";
import photoKitchen from "@/assets/kitchen-white.png.asset.json";
import photoCabinet from "@/assets/cabinet-desk.png.asset.json";
import p13_712 from "@/assets/p13-img-20250313-112700-712.jpg.asset.json";
import p13_716 from "@/assets/p13-img-20250313-112700-716.jpg.asset.json";
import p13_567 from "@/assets/p13-img-20250313-112700-567.jpg.asset.json";
import p13_419 from "@/assets/p13-img-20250313-112700-419.jpg.asset.json";
import p13_416 from "@/assets/p13-img-20250313-112700-416.jpg.asset.json";
import p13_233 from "@/assets/p13-img-20250316-210514-233.jpg.asset.json";
import p13_929 from "@/assets/p13-img-20250313-112700-929.jpg.asset.json";
import p13_123 from "@/assets/p13-img-20250313-112701-123.jpg.asset.json";
import p13_595792 from "@/assets/p13-2025031620595792.jpg.asset.json";
import p13_351005 from "@/assets/p13-1741867351005.jpg.asset.json";
import p13_364540 from "@/assets/p13-1741867364540.jpg.asset.json";

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
      <WhyUs />
      <Assistant />
      <Portfolio />
      <Brands />
      <Expert />
      <Reviews />
      <RequestForm />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
const navLinks = [
  { href: "#assistant", label: "Подбор" },
  { href: "#portfolio", label: "Проекты" },
  { href: "#expert", label: "Журнал" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#request", label: "Контакты" },
  { href: "/partners", label: "Партнёрам" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-40 backdrop-blur-md border-b border-black/5"
        style={{
          background:
            "linear-gradient(90deg, #1F3A2E 0%, #1F3A2E 68%, rgba(31,58,46,0.6) 82%, #FAFAF7 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto pl-4 sm:pl-6 pr-4 sm:pr-8 h-24 sm:h-28 flex items-center justify-between gap-3">
          <div className="flex flex-col items-center gap-0.5 shrink-0">
            <img
              src={kronaWordmark.url}
              alt="Крона — мебельная студия Елены Трифан"
              className="h-9 sm:h-12 md:h-14 w-auto"
            />
            <div
              className="text-center text-[#EDE6D3] leading-[1.05] text-[9px] sm:text-[11px] md:text-[13px] tracking-[0.16em] md:tracking-[0.18em] whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="font-light uppercase">Мебельная студия</div>
              <div className="font-extralight tracking-[0.08em] text-[#EDE6D3]/80">
                Елены Трифан
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-10 text-sm text-[#EDE6D3] min-w-0">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#request"
              className="shrink-0 whitespace-nowrap text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full text-white transition hover:opacity-90"
              style={{ backgroundColor: graphite }}
            >
              Консультация
            </a>
            <button
              type="button"
              aria-label="Открыть меню"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full border border-[#EDE6D3]/40 text-[#EDE6D3] flex items-center justify-center hover:bg-white/10 transition"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное полноэкранное меню */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: forest }}
      >
        <div className="h-24 sm:h-28 px-4 sm:px-8 flex items-center justify-between">
          <img src={kronaWordmark.url} alt="Крона" className="h-9 sm:h-12 w-auto" />
          <button
            type="button"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full border border-[#EDE6D3]/40 text-[#EDE6D3] flex items-center justify-center hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="px-6 sm:px-10 mt-6 flex flex-col">
          {navLinks.map((l, idx) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group py-4 border-b border-[#EDE6D3]/15 flex items-center justify-between text-[#EDE6D3] text-2xl sm:text-3xl font-light transition-all duration-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transitionDelay: open ? `${80 + idx * 60}ms` : "0ms",
              }}
            >
              <span>{l.label}</span>
              <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition" />
            </a>
          ))}
        </nav>

        <div className="px-6 sm:px-10 mt-10 space-y-3 text-[#EDE6D3]/70 text-sm">
          <a href="tel:+78120000000" className="flex items-center gap-3">
            <Phone className="w-4 h-4" /> +7 (812) 000-00-00
          </a>
          <a href="mailto:hello@krona.studio" className="flex items-center gap-3">
            <Mail className="w-4 h-4" /> hello@krona.studio
          </a>
          <a
            href="#request"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EDE6D3] text-[#1F3A2E] text-sm"
          >
            Записаться на консультацию <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-24 pb-32">
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase mb-8 text-neutral-500">
            <span className="w-8 h-px bg-neutral-400" />
            Студия мебели на заказ
          </div>
          <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[2.6rem] lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight font-normal">
            Дом начинается с{" "}
            <span style={{ color: forest }} className="italic font-serif">
              характера
            </span>
            .
          </h1>
          <p className="mt-8 max-w-lg text-base sm:text-lg text-neutral-600 leading-relaxed">
            Как хороший костюм шьётся под конкретного человека, так и наша мебель проектируется под
            ваш интерьер, привычки и образ жизни. Именно поэтому за двадцать лет мы не повторили ни
            одного проекта.
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
              src={photoWardrobe.url}
              alt="Встроенный шкаф во всю стену с золотыми вставками"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-500">
            <Metric num="20" label="лет практики" />
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

/* ---------- Почему выбирают нас ---------- */
const advantages = [
  {
    icon: Gem,
    title: "Авторская мебель по индивидуальному проекту",
    text: "Каждый проект рождается заново — под ваш интерьер, привычки и характер дома. Мы не собираем мебель из готовых решений.",
  },
  {
    icon: Scale,
    title: "Премиальные материалы по честной цене",
    text: "Рассчитайте мебель из массива или эмали и сравните стоимость с другими компаниями. Вы будете приятно удивлены.",
  },
  {
    icon: Fingerprint,
    title: "20 лет без повторений",
    text: "За двадцать лет работы мы не повторили ни одного проекта. Каждая мебель проектируется индивидуально — под конкретного человека.",
  },
  {
    icon: Factory,
    title: "Собственное производство в Пензе",
    text: "Наша мастерская находится в одном из крупнейших мебельных центров России. Это позволяет реализовывать нестандартные решения практически любой сложности — с ручной проработкой деталей.",
  },
  {
    icon: Wrench,
    title: "Надёжная фурнитура",
    text: "Используем только проверенные комплектующие мировых производителей.",
    brands: ["Blum", "Hettich", "Boyard"],
  },
  {
    icon: LifeBuoy,
    title: "Поддержка после установки",
    text: "Мы остаёмся рядом и после завершения проекта. Возможность сервисного обслуживания обсуждается индивидуально в зависимости от материалов и комплектации изделия.",
  },
];

function WhyUs() {
  return (
    <section id="why" className="bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
          Почему выбирают нас
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight max-w-2xl mb-12 sm:mb-14">
          Авторская студия и мебель{" "}
          <span style={{ color: forest }} className="italic font-serif">
            по индивидуальному проекту
          </span>
          .
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="rounded-3xl border border-black/10 p-7 sm:p-8 flex flex-col hover:border-black/40 transition bg-[#FAFAF7]"
            >
              <a.icon
                className="w-6 h-6 mb-6 shrink-0"
                style={{ color: forest }}
                strokeWidth={1.5}
              />
              <h3 className="text-lg sm:text-xl leading-snug break-words">{a.title}</h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed break-words">{a.text}</p>
              {a.brands && (
                <div className="mt-6 pt-5 border-t border-black/10 flex flex-wrap gap-2">
                  {a.brands.map((b) => (
                    <span
                      key={b}
                      className="text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border border-black/10 text-neutral-500"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Партнёры / бренды ---------- */
const brandPlaceholders = [
  "Blum",
  "Hettich",
  "Boyard",
  "Egger",
  "Kronospan",
  "Grass",
  "Rehau",
  "Cleaf",
];

function Brands() {
  return (
    <section id="brands" className="bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">Партнёры</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight max-w-3xl mb-12 sm:mb-14">
          Работаем с лучшими производителями{" "}
          <span style={{ color: forest }} className="italic font-serif">
            материалов и фурнитуры
          </span>
          .
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {brandPlaceholders.map((b) => (
            <div
              key={b}
              className="h-24 sm:h-28 rounded-2xl border border-black/10 bg-[#F5F3EE] flex items-center justify-center px-4 hover:border-black/30 transition"
            >
              <span className="text-xs sm:text-sm tracking-[0.22em] uppercase text-neutral-500 text-center break-words">
                {b}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-neutral-500 max-w-xl">
          Место под логотипы брендов — заглушки заменяются на официальные изображения партнёров.
        </p>
      </div>
    </section>
  );
}

/* ---------- Assistant (см. src/components/assistant.tsx) ---------- */

/* ---------- Portfolio ---------- */
const projects = [
  {
    title: "Кухня",
    story: "Описание проекта будет добавлено.",
    materials: ["Фрезерованные фасады", "Камень", "Чёрная фурнитура"],
    img: photoKitchen.url,
  },
  {
    title: "Кабинет",
    story: "Описание проекта будет добавлено.",
    materials: ["Рифлёные фасады", "Стекло", "Латунь"],
    img: photoCabinet.url,
  },
  {
    title: "Шкаф во всю стену",
    story: "Описание проекта будет добавлено.",
    materials: ["Крашеный МДФ", "Золотые вставки", "Ниша с подсветкой"],
    img: photoWardrobe.url,
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

      <FarandolaProject />
    </section>
  );
}

/* ---------- Проект №013 · Спальня «Фарандола» ---------- */
const farandolaPhotos = [
  { src: p13_712.url, alt: "Пятидверный шкаф с зеркальной секцией, спальня «Фарандола»" },
  { src: p13_123.url, alt: "Общий вид спальни «Фарандола» с кроватью и комодом" },
  { src: p13_364540.url, alt: "Кровать с мягким изголовьем и прикроватные тумбы" },
  { src: p13_929.url, alt: "Комод с фрезеровкой и золотой фурнитурой" },
  { src: p13_716.url, alt: "Комод и овальное зеркало в раме под цвет фасадов" },
  { src: p13_351005.url, alt: "Зеркало в овальной раме над комодом" },
  { src: p13_567.url, alt: "Прикроватная тумба, деталь фрезеровки" },
  { src: p13_419.url, alt: "Фасад шкафа: фрезеровка и золотая ручка" },
  { src: p13_416.url, alt: "Внутреннее наполнение шкафа" },
  { src: p13_233.url, alt: "Кровать с подъёмным механизмом и местом хранения" },
  { src: p13_595792.url, alt: "Спальня «Фарандола»: шкаф, кровать, тумбы" },
];

const farandolaSpecs = [
  { k: "Категория", v: "Спальня, комплект" },
  { k: "Стиль", v: "Неоклассика" },
  { k: "Палитра", v: "Белый, бежевый, золото" },
  { k: "Материалы", v: "МДФ, зеркало" },
  { k: "Покрытие", v: "Глянцевая плёнка ПВХ" },
  { k: "Фурнитура", v: "Boyard: ручки, петли с доводчиком" },
];

function FarandolaProject() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mt-24">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
        <div
          className="rounded-[20px] overflow-hidden bg-neutral-200 cursor-zoom-in"
          onClick={() => setActive(0)}
        >
          <img
            src={farandolaPhotos[0].src}
            alt={farandolaPhotos[0].alt}
            className="w-full h-full object-cover aspect-[4/3] hover:scale-[1.02] transition duration-700"
          />
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            Проект №013 · реализован
          </div>
          <h3 className="text-3xl md:text-4xl font-normal leading-tight">
            Спальня{" "}
            <span style={{ color: forest }} className="italic font-serif">
              «Фарандола»
            </span>
          </h3>
          <p className="mt-5 text-[15px] text-neutral-700 leading-relaxed">
            Большой пятидверный шкаф с зеркалом стал главной точкой интерьера. К нему мы
            подобрали кровать с двумя тумбами, комод и зеркало. Зеркало оформили в такую же
            раму, как основные фасады, — вместо резного багета, который планировался
            изначально. В жизни всё получилось гармонично и очень нежно.
          </p>
          <p className="mt-4 text-[15px] text-neutral-700 leading-relaxed">
            Спокойные глянцевые оттенки, единая фрезеровка на всех предметах комплекта и
            золотая фурнитура — авторский набор решений для этой квартиры. Кровать сделана с
            подъёмным механизмом: дополнительное место хранения без лишних корпусов в комнате.
          </p>

          <dl className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {farandolaSpecs.map((s) => (
              <div key={s.k} className="border-t border-black/10 pt-3">
                <dt className="text-xs uppercase tracking-[0.15em] text-neutral-500">{s.k}</dt>
                <dd className="text-sm text-neutral-800 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {farandolaPhotos.slice(1).map((p, i) => (
          <button
            key={p.src}
            onClick={() => setActive(i + 1)}
            className="rounded-[20px] overflow-hidden bg-neutral-200 aspect-[4/5] group"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="eager"
              className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-700"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            aria-label="Закрыть"
            onClick={() => setActive(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={farandolaPhotos[active].src}
            alt={farandolaPhotos[active].alt}
            className="max-h-[88vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}


/* ---------- Expert ---------- */
const articles = [
  {
    tag: "Цвет",
    icon: Palette,
    title: "Как выбрать палитру, которая не устареет через год",
    time: "7 мин",
    lead: "Три правила, которые защищают интерьер от быстрого морального износа.",
    body: [
      "Правило 60/30/10. Шестьдесят процентов — спокойный фон (стены, фасады верхнего яруса), тридцать — основной материал мебели, десять — акцент: фурнитура, текстиль, один цветной модуль. Если акцента больше десяти процентов, интерьер начинает «кричать» и надоедает за сезон.",
      "Проверяйте цвет при трёх источниках света. Образец фасада нужно посмотреть у окна утром, под рабочим светом вечером и под тёплой лампой. Один и тот же графит может уйти в синеву или в коричневый — и это решается до заказа, а не после монтажа.",
      "Сложные цвета живут дольше чистых. Не «зелёный», а зелёный с примесью серого; не «белый», а белый с тёплым подтоном. Приглушённые оттенки лучше сочетаются с деревом и не спорят с текстилем, который вы поменяете через пару лет.",
      "Мода уходит в деталях, а не в корпусе. Хотите модный цвет — оставьте его на фасаде одного шкафа, на нише или на стуле. Корпусную мебель делайте в базе: её меняют раз в 10–15 лет.",
    ],
  },
  {
    tag: "Материалы",
    icon: Leaf,
    title: "Массив, шпон и МДФ — честный разбор без маркетинга",
    time: "9 мин",
    lead: "Где переплата оправдана, а где вы платите за слово в договоре.",
    body: [
      "Массив — это красиво и ремонтопригодно: царапину можно зашлифовать. Но дерево дышит: при перепадах влажности фасад может повести. Массив уместен в фасадах, столешницах, торцах — и почти никогда не нужен в корпусе шкафа, который вы не видите.",
      "Шпон — тонкий срез настоящего дерева на стабильной основе. Даёт рисунок массива без его капризов, позволяет подобрать фасады «в одну карту» — когда текстура продолжается с двери на дверь. Требует аккуратной эксплуатации на кромках.",
      "МДФ в эмали или плёнке — рабочая лошадка современных кухонь: стабильная геометрия, любой цвет, ровная поверхность. Матовая эмаль красива, но чувствительна к абразивам; выбирайте покрытия с антивандальным лаком там, где касаются руками.",
      "ЛДСП — не ругательство. Качественная плита европейского производства с кромкой ПВХ 2 мм служит десятилетиями. Экономить нужно не на материале корпуса, а на лишних декоративных элементах.",
      "На что смотреть в смете: класс эмиссии плиты (E0.5/E1), толщина кромки, производитель фурнитуры и наличие гарантии на механизмы. Эти четыре строки говорят о мебели больше, чем слово «премиум».",
    ],
  },
  {
    tag: "Планирование",
    icon: Ruler,
    title: "Гардеробная 6 м²: как разместить всё и оставить воздух",
    time: "6 мин",
    lead: "Порядок действий, который экономит метры и нервы.",
    body: [
      "Начните с инвентаризации, а не с чертежа. Посчитайте: сколько метров вешалок для длинного, сколько для короткого, сколько ящиков для белья, сколько коробок для сезонного. Реальные цифры почти всегда расходятся с ощущениями.",
      "Рабочие высоты: штанга для короткого — 100–110 см от полки, для длинного — 150–160 см; верхний ярус под сезонное — от 200 см; выдвижные ящики — не выше 120 см, иначе в них неудобно смотреть.",
      "Глубина 60 см для вешалок, 40–45 см для полок и обуви. Разная глубина по стенам освобождает проход: минимально комфортный проход — 90 см, идеальный — 110 см.",
      "Свет и вентиляция — не опция. Датчик движения, тёплый свет 3000K, зазор для воздуха внизу и вверху: вещи не должны храниться в глухом коробе.",
      "Оставьте 15% пустоты. Гардеробная, забитая под завязку в день монтажа, через полгода превращается в склад. Запас — это часть проекта.",
    ],
  },
  {
    tag: "Кухня",
    icon: Wrench,
    title: "Эргономика кухни: 12 размеров, которые решают всё",
    time: "8 мин",
    lead: "Цифры, по которым мы проверяем каждый кухонный проект.",
    body: [
      "Высота столешницы считается от вашего роста: примерно рост / 2 + 5 см. Для роста 165 см это 87–88 см, для 180 см — 92–95 см. Стандартные 85 см подходят далеко не всем.",
      "Рабочий треугольник «мойка — плита — холодильник»: сумма сторон 3,5–6 м. Между мойкой и плитой — не менее 60 см рабочей поверхности, это главное место готовки.",
      "Проход между рядами в двухрядной кухне — 100–120 см. Меньше 90 см — дверцы и духовка начинают конфликтовать.",
      "Верхние шкафы: низ на 55–60 см над столешницей. Вытяжка над газом — 75 см, над индукцией — 65 см.",
      "Ящики вместо распашных нижних шкафов — почти всегда правильное решение: доступ ко всему объёму без приседаний.",
      "Розетки планируются на этапе чертежа: минимум 5 рабочих точек на фартуке и отдельные линии для духовки и варочной панели.",
    ],
  },
  {
    tag: "Процесс",
    icon: Fingerprint,
    title: "Что должно быть в договоре на мебель на заказ",
    time: "5 мин",
    lead: "Короткий чек-лист перед подписанием — с любой студией, не только с нами.",
    body: [
      "Приложение с чертежами и спецификацией. Не «кухня по эскизу», а перечень модулей, размеров, материалов, артикулов фурнитуры и цветов по каталогу RAL или NCS.",
      "Сроки в календарных днях с точкой отсчёта: от даты замера чистовых стен или от даты внесения аванса. И порядок сдвига сроков, если стены не готовы.",
      "Порядок оплаты. Здоровая схема: аванс на материалы, платёж перед отгрузкой, остаток после подписания акта монтажа.",
      "Гарантия отдельно на корпус, покрытие и механизмы, с указанием, кто обслуживает фурнитуру.",
      "Условия изменений: сколько стоит правка после запуска в производство. Это нормальный пункт, важно знать цену заранее.",
    ],
  },
  {
    tag: "Уход",
    icon: LifeBuoy,
    title: "Как ухаживать за фасадами, чтобы мебель выглядела новой",
    time: "4 мин",
    lead: "Пять привычек, которые продлевают жизнь покрытию.",
    body: [
      "Никаких абразивов и меламиновых губок: они снимают лак и оставляют матовые пятна на глянце и эмали.",
      "Тёплая вода с каплей нейтрального средства и мягкая микрофибра закрывают 95% задач. Спиртосодержащие спреи — только точечно и не на эмали.",
      "Пар — главный враг. Не открывайте посудомойку сразу после цикла: пар идёт прямо на кромку соседнего фасада.",
      "Раз в год подтягивайте петли и направляющие: пять минут регулировки возвращают ровные зазоры.",
      "Дерево и шпон любят влажность 40–60%. Зимой при работающих батареях помогает обычный увлажнитель — он защищает не только вас, но и мебель.",
    ],
  },
];

function Expert() {
  const [active, setActive] = useState<number | null>(null);
  const post = active === null ? null : articles[active];

  useEffect(() => {
    document.body.style.overflow = post ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [post]);

  return (
    <section id="expert" className="bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">03 — Журнал</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight max-w-2xl mb-6">
          Экспертиза, которой мы делимся{" "}
          <span style={{ color: forest }} className="italic font-serif">
            бесплатно
          </span>
          .
        </h2>
        <p className="max-w-xl text-neutral-600 leading-relaxed mb-14">
          Короткие материалы из практики студии: цифры, чек-листы и решения, которыми мы пользуемся
          сами. Читаются за несколько минут.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <button
              key={a.title}
              type="button"
              onClick={() => setActive(i)}
              className="group text-left rounded-3xl border border-black/10 p-8 hover:border-black transition flex flex-col min-h-[300px]"
            >
              <a.icon className="w-6 h-6 mb-6" style={{ color: forest }} strokeWidth={1.5} />
              <div className="text-xs tracking-[0.2em] uppercase text-neutral-500">{a.tag}</div>
              <h3 className="mt-3 text-xl leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{a.lead}</p>
              <div className="mt-auto pt-8 flex items-center justify-between text-sm text-neutral-500">
                <span>{a.time} чтения</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {post && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
          onClick={() => setActive(null)}
        >
          <article
            className="bg-white w-full max-w-2xl sm:rounded-3xl p-6 sm:p-12 my-0 sm:my-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:border-black transition"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-xs tracking-[0.2em] uppercase text-neutral-500">
              {post.tag} · {post.time} чтения
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl leading-snug pr-10">{post.title}</h3>
            <p className="mt-4 text-lg italic font-serif" style={{ color: forest }}>
              {post.lead}
            </p>
            <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
              {post.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <a
              href="#request"
              onClick={() => setActive(null)}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm"
              style={{ backgroundColor: graphite }}
            >
              Обсудить свой проект <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        </div>
      )}
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
      <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">04 — Отзывы</div>
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
          <div className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">05 — Заявка</div>
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
            После заявки — короткий звонок 15 минут. Дальше — бесплатный выезд дизайнера, замеры и
            предварительный эскиз.
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
                Дизайнер Крона позвонит вам в течение рабочего дня. Пока — можно посмотреть наши
                последние проекты.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  required = false,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs text-white/50">
        {label}
        {required && " *"}
      </span>
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
        <option value="" disabled className="text-black">
          Выберите...
        </option>
        {options.map((o) => (
          <option key={o} className="text-black">
            {o}
          </option>
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
        <a href="#" className="hover:text-black">
          Instagram
        </a>
        <a href="#" className="hover:text-black">
          Pinterest
        </a>
        <a href="#" className="hover:text-black">
          Telegram
        </a>
      </div>
    </footer>
  );
}
