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
import SmartImage, { preloadImage } from "@/components/smart-image";
import kronaLogo from "@/assets/krona-logo.png.asset.json";
import kronaWordmark from "@/assets/krona-wordmark.png.asset.json";
import photoWardrobe from "@/assets/wardrobe-gold.png.asset.json";
import logoBlum from "@/assets/brands/blum.svg.asset.json";
import logoBoyard from "@/assets/brands/boyard.svg.asset.json";
import logoEgger from "@/assets/brands/egger.svg.asset.json";
import logoKronospan from "@/assets/brands/kronospan.svg.asset.json";
import logoGrass from "@/assets/brands/grass.svg.asset.json";
import logoHettich from "@/assets/brands/hettich.svg.asset.json";
import logoAristo from "@/assets/brands/aristo.png.asset.json";
import logoAq from "@/assets/brands/aq.png.asset.json";
import logoKastamonu from "@/assets/brands/kastamonu.png.asset.json";
import logoAgt from "@/assets/brands/agt.svg.asset.json";
import logoLamarty from "@/assets/brands/lamarty.svg.asset.json";
import { projects, thumbOf, type Project } from "@/data/projects";


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
    links: [
      {
        rel: "preload",
        as: "image",
        href: photoWardrobe.url,
      },

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
const brandLogos: { name: string; src?: string; site: string; tall?: boolean }[] = [
  { name: "Blum", src: logoBlum.url, site: "https://blum-pro.ru/" },
  { name: "Hettich", src: logoHettich.url, site: "https://hettich.ru/" },
  { name: "Boyard", src: logoBoyard.url, site: "https://boyard.biz/" },
  { name: "Aristo", src: logoAristo.url, site: "https://aristo.expert/" },
  { name: "AQ by Westline", src: logoAq.url, site: "https://aq-solution.com/", tall: true },

  { name: "Grass", src: logoGrass.url, site: "https://grass.ru/" },
  { name: "Egger", src: logoEgger.url, site: "https://www.egger.com/" },
  { name: "Kronospan", src: logoKronospan.url, site: "https://kronospan.ru/" },
  {
    name: "Kastamonu Entegre",
    src: logoKastamonu.url,
    site: "https://www.kastamonuentegre.com/ru_ru",
  },
  { name: "AGT", src: logoAgt.url, site: "https://www.agtwood.ru/" },
  { name: "Lamarty", src: logoLamarty.url, site: "https://www.lamarty.ru/lamarty/" },
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
          {brandLogos.map((b) => (
            <a
              key={b.name}
              href={b.site}
              target="_blank"
              rel="noopener noreferrer nofollow"
              title={b.name}
              className="krona-lift h-24 sm:h-28 rounded-2xl border border-black/10 bg-[#F5F3EE] flex items-center justify-center px-6 hover:border-black/30 transition"
            >
              <img
                src={b.src}
                alt={`${b.name} — логотип производителя`}
                loading="lazy"
                decoding="async"
                className="max-h-9 sm:max-h-10 w-auto max-w-[75%] object-contain opacity-80 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}


/* ---------- Assistant (см. src/components/assistant.tsx) ---------- */

/* ---------- Portfolio ---------- */
const FEATURED_ORDER = ["007", "005", "008"];

function ProjectArchive({
  items,
  onOpen,
}: {
  items: Project[];
  onOpen: (no: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="krona-lift group relative overflow-hidden rounded-full px-8 py-4 text-sm tracking-[0.18em] uppercase text-white"
          style={{ backgroundColor: forest }}
        >
          <span className="relative z-10 inline-flex items-center gap-3">
            {open ? "Свернуть архив" : `Открыть архив проектов · ${items.length}`}
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-500 ${open ? "rotate-90" : ""}`}
            />
          </span>
          <span
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />
        </button>
      </div>

      <div className="krona-archive mt-10" data-open={open}>
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-2">
            {open &&
              items.map((p, k) => (
                <button
                  key={p.no}
                  onClick={() => onOpen(p.no)}
                  style={{ animationDelay: `${Math.min(k, 8) * 70}ms` }}
                  className="krona-unfold group text-left krona-lift rounded-[20px] border border-black/5 bg-white/60 p-3"
                >
                  <SmartImage
                    thumb={thumbOf(p.photos[0])}
                    full={p.photos[0]}
                    alt={`${p.title} — ${p.category}, ${p.style}`}
                    ratio="4 / 5"
                    width={800}
                    height={1000}
                    preloadFullOnHover
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="rounded-[16px] bg-neutral-200 mb-4"
                    imgClassName="krona-media"
                  />
                  <div className="px-2 pb-2">
                    <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-500">
                      Проект №{p.no} · {p.category}
                    </div>
                    <h3 className="text-xl mt-2">{p.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.lead}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full border border-black/10 text-neutral-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span
                      className="mt-5 inline-flex items-center gap-2 text-sm"
                      style={{ color: forest }}
                    >
                      Смотреть проект <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [photoIdx, setPhotoIdx] = useState<number | null>(null);
  const project = openIdx !== null ? projects[openIdx] : null;
  const rest = projects.filter((p) => !FEATURED_ORDER.includes(p.no));


  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
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
        <p className="text-sm text-neutral-600 max-w-xs">
          {projects.length} реализованных проектов: кухни, прихожие, спальни, детские,
          гардеробные. Нажмите на карточку, чтобы посмотреть галерею и характеристики.
        </p>
      </div>

      {/* Избранные проекты */}
      <div className="mb-16">
        <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
          Избранное студии
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_ORDER.map((no, k) => {
            const i = projects.findIndex((x) => x.no === no);
            const p = projects[i];
            if (!p) return null;
            return (
              <button
                key={p.no}
                onClick={() => setOpenIdx(i)}
                style={{ animationDelay: `${k * 90}ms` }}
                className="krona-rise group text-left krona-lift rounded-[24px] overflow-hidden border border-black/5 bg-white relative"
              >
                <SmartImage
                  thumb={thumbOf(p.photos[0])}
                  full={p.photos[0]}
                  alt={`${p.title} — ${p.category}, ${p.style}`}
                  ratio="3 / 4"
                  width={800}
                  height={1066}
                  priority
                  preloadFullOnHover
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="bg-neutral-200"
                  imgClassName="krona-media"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white bg-gradient-to-t from-black/75 via-black/25 to-transparent">
                  <div className="text-[11px] tracking-[0.2em] uppercase opacity-80">
                    {p.category} · {p.style}
                  </div>
                  <h3 className="text-2xl mt-1">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-90 line-clamp-2">{p.lead}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Архив проектов — «распаковка» */}
      <ProjectArchive
        items={rest}
        onOpen={(no) => setOpenIdx(projects.findIndex((x) => x.no === no))}
      />


      {project && (
        <div
          className="fixed inset-0 z-50 bg-black/60 overflow-y-auto p-4 md:p-8"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="krona-veil max-w-5xl mx-auto rounded-[20px] bg-[#FAFAF7] p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-3">
                  Проект №{project.no} · реализован · {project.style}
                </div>
                <h3 className="text-3xl md:text-4xl font-normal leading-tight">
                  {project.title}
                </h3>
              </div>
              <button
                aria-label="Закрыть"
                onClick={() => setOpenIdx(null)}
                className="text-neutral-500 hover:text-black shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-8 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
              <button
                onClick={() => setPhotoIdx(0)}
                onMouseEnter={() => preloadImage(project.photos[0])}
                className="rounded-[20px] overflow-hidden bg-neutral-200 cursor-zoom-in w-full"
              >
                <SmartImage
                  thumb={thumbOf(project.photos[0])}
                  full={project.photos[0]}
                  alt={project.title}
                  ratio="4 / 3"
                  width={800}
                  height={600}
                  priority
                  preloadFullOnHover
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="w-full"
                />
              </button>

              <div>
                {project.story.map((s) => (
                  <p key={s} className="mb-4 text-[15px] text-neutral-700 leading-relaxed">
                    {s}
                  </p>
                ))}
                <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {project.specs.map((s) => (
                    <div key={s.k} className="border-t border-black/10 pt-3">
                      <dt className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                        {s.k}
                      </dt>
                      <dd className="text-sm text-neutral-800 mt-1">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {project.photos.length > 1 && (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {project.photos.slice(1).map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setPhotoIdx(i + 1)}
                    onMouseEnter={() => preloadImage(src)}
                    className="rounded-[20px] overflow-hidden bg-neutral-200 group"
                  >
                    <SmartImage
                      thumb={thumbOf(src)}
                      full={src}
                      alt={`${project.title} — фото ${i + 2}`}
                      ratio="4 / 5"
                      width={800}
                      height={1000}
                      preloadFullOnHover
                      sizes="(min-width: 1024px) 20vw, 33vw"
                      className="w-full"
                      imgClassName="group-hover:scale-[1.04]"
                    />
                  </button>
                ))}
              </div>
            )}

            <a
              href="#request"
              onClick={() => setOpenIdx(null)}
              className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm text-white"
              style={{ backgroundColor: forest }}
            >
              Хочу похожий проект <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {project && photoIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPhotoIdx(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            aria-label="Закрыть"
            onClick={() => setPhotoIdx(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <div className="relative max-h-[88vh] max-w-full" onClick={(e) => e.stopPropagation()}>
            {/* мгновенное превью, пока грузится полноразмерное фото */}
            <img
              src={thumbOf(project.photos[photoIdx])}
              alt=""
              aria-hidden="true"
              className="max-h-[88vh] max-w-full rounded-2xl object-contain blur-md"
            />
            <img
              src={project.photos[photoIdx]}
              alt={project.title}
              decoding="async"
              className="absolute inset-0 w-full h-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}

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
    <footer style={{ backgroundColor: forest }} className="text-[#EDE6D3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 flex flex-wrap items-center justify-between gap-8 text-sm">
        <div className="flex flex-col items-center gap-0.5 shrink-0">
          <img
            src={kronaWordmark.url}
            alt="Крона — мебельная студия Елены Трифан"
            className="h-7 w-auto"
          />
          <div
            className="text-center leading-[1.05] text-[8px] tracking-[0.16em] whitespace-nowrap"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="font-light uppercase">Мебельная студия</div>
            <div className="font-extralight tracking-[0.08em] text-[#EDE6D3]/80">
              Елены Трифан
            </div>
          </div>
        </div>

        <div className="text-[#EDE6D3]/70">
          © {new Date().getFullYear()} Студия мебели на заказ. Саратов.
        </div>

        <div className="flex flex-wrap gap-6">
          {["Instagram", "MAX", "WhatsApp", "Telegram"].map((s) => (
            <a key={s} href="#" className="text-[#EDE6D3]/80 hover:text-[#EDE6D3] transition">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

