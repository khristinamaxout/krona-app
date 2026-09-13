import { createFileRoute } from "@tanstack/react-router";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Leaf,
  Ruler,
  Palette,
  Sparkles,
  Star,
  ChevronRight,
  ChevronLeft,
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
  Layers,
  TreePine,
} from "lucide-react";
import Assistant from "@/components/assistant";
import SmartImage, { preloadImage } from "@/components/smart-image";
import Reveal from "@/components/reveal";
import BrandIntro from "@/components/brand-intro";
import kronaLogo from "@/assets/krona-logo.png.asset.json";
import proofMarina from "@/assets/reviews/marina.jpg.asset.json";
import proofSvetlana from "@/assets/reviews/svetlana.jpg.asset.json";
import proofNatalia from "@/assets/reviews/natalia.jpg.asset.json";
import proofVictoria from "@/assets/reviews/victoria.jpg.asset.json";
import proofLamia from "@/assets/reviews/lamia.jpg.asset.json";
import proofMaksim from "@/assets/reviews/maksim.jpg.asset.json";
import proofMarinaThumb from "@/assets/reviews/marina_thumb.webp.asset.json";
import proofSvetlanaThumb from "@/assets/reviews/svetlana_thumb.webp.asset.json";
import proofNataliaThumb from "@/assets/reviews/natalia_thumb.webp.asset.json";
import proofVictoriaThumb from "@/assets/reviews/victoria_thumb.webp.asset.json";
import proofLamiaThumb from "@/assets/reviews/lamia_thumb.webp.asset.json";
import proofMaksimThumb from "@/assets/reviews/maksim_thumb.webp.asset.json";
import proof2gis from "@/assets/reviews/2gis.jpg.asset.json";
import proof2gisThumb from "@/assets/reviews/2gis_thumb.webp.asset.json";
import proofNadezhda from "@/assets/reviews/nadezhda.jpg.asset.json";
import proofNadezhdaThumb from "@/assets/reviews/nadezhda_thumb.webp.asset.json";
import proofRubrikator2 from "@/assets/reviews/rubrikator2.jpg.asset.json";
import proofRubrikator2Thumb from "@/assets/reviews/rubrikator2_thumb.webp.asset.json";
import proofVitaliy from "@/assets/reviews/vitaliy.jpg.asset.json";
import proofVitaliyThumb from "@/assets/reviews/vitaliy_thumb.webp.asset.json";
import proofLetter from "@/assets/reviews/letter.jpg.asset.json";
import proofLetterThumb from "@/assets/reviews/letter_thumb.webp.asset.json";
import proofChatNataliya from "@/assets/reviews/chat_nataliya.jpg.asset.json";
import proofChatNataliyaThumb from "@/assets/reviews/chat_nataliya_thumb.webp.asset.json";
import proofChatMarina from "@/assets/reviews/chat_marina.jpg.asset.json";
import proofChatMarinaThumb from "@/assets/reviews/chat_marina_thumb.webp.asset.json";
import proofChatAndrey from "@/assets/reviews/chat_andrey.jpg.asset.json";
import proofChatAndreyThumb from "@/assets/reviews/chat_andrey_thumb.webp.asset.json";
import proofChatEkaterina from "@/assets/reviews/chat_ekaterina.jpg.asset.json";
import proofChatEkaterinaThumb from "@/assets/reviews/chat_ekaterina_thumb.webp.asset.json";
import proofChatMariam from "@/assets/reviews/chat_mariam.jpg.asset.json";
import proofChatMariamThumb from "@/assets/reviews/chat_mariam_thumb.webp.asset.json";
import kronaWordmark from "@/assets/krona-wordmark.png.asset.json";
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
import { projects, thumbOf, coverOf, type Project } from "@/data/projects";

/** Обложка сайта — проект №143 «Кухня в изумрудном цвете» */
const heroProject = projects.find((p) => p.no === "143");
const heroImage = heroProject ? coverOf(heroProject) : "";
import { ConsentCheckbox } from "@/components/consent-checkbox";
import { Link } from "@tanstack/react-router";
import { LEGAL, LEGAL_LINKS } from "@/data/legal";
import { sendLeadEmail } from "@/lib/emailjs";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "КРОНА — мебельная студия в Саратове" },
      {
        name: "description",
        content:
          "Мебель на заказ в Саратове: кухни, шкафы, гардеробные и мебель для гостиных. Собственное производство, проект по вашим размерам, замер и монтаж — студия Елены Трифан.",
      },
      { property: "og:title", content: "КРОНА — мебельная студия в Саратове" },
      {
        property: "og:description",
        content:
          "Кухни, шкафы и корпусная мебель на заказ по вашим размерам. 20 лет практики, собственное производство, реализованные проекты в портфолио.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://krona-app.lovable.app/" },
      { property: "og:image", content: "https://krona-app.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://krona-app.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://krona-app.lovable.app/" },
      {
        rel: "preload",
        as: "image",
        href: heroImage,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FurnitureStore",
          name: "КРОНА — мебельная студия Елены Трифан",
          url: "https://krona-app.lovable.app/",
          image: "https://krona-app.lovable.app/og-image.jpg",
          telephone: "+7 (905) 383-99-39",
          email: "krona.studio.mebel@yandex.ru",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Саратов",
            addressCountry: "RU",
            streetAddress: "ул. Симбирская, д. 154, ТЦ «Мебель Сити»",
          },
        }),
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
      <BrandIntro />
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
          <a href="tel:+79053839939" className="flex items-center gap-3">
            <Phone className="w-4 h-4" /> {LEGAL.phone}
          </a>
          <a href={`mailto:${LEGAL.email}`} className="flex items-center gap-3">
            <Mail className="w-4 h-4" /> {LEGAL.email}
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
  const base = 500; // ждём завершения брендовой заставки
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-24 pb-32">
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <Reveal
            delay={base}
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase mb-8 text-neutral-500"
          >
            <span className="w-8 h-px bg-neutral-400" />
            Студия мебели на заказ
          </Reveal>
          <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[2.6rem] lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight font-normal">
            <Reveal as="span" variant="curtain" delay={base + 120} className="block">
              Дом начинается с
            </Reveal>
            <Reveal as="span" variant="curtain" delay={base + 420} className="block">
              <span style={{ color: forest }} className="italic font-serif">
                характера
              </span>
              .
            </Reveal>
          </h1>
          <Reveal
            as="p"
            delay={base + 640}
            className="mt-8 max-w-lg text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            Как хороший костюм шьётся под конкретного человека, так и наша мебель проектируется под
            ваш интерьер, привычки и образ жизни. Именно поэтому за двадцать лет мы не повторили ни
            одного проекта.
          </Reveal>

          <Reveal delay={base + 820} className="mt-10 flex flex-wrap gap-4">
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
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal variant="curtain" delay={base + 200}>
            <div className="krona-hero-zoom aspect-[4/5] overflow-hidden bg-neutral-200">
              <img
                src={heroImage}
                alt="Кухня в изумрудном цвете с мраморной столешницей и золотой фурнитурой"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-500">
            {[
              { num: "20", label: "лет практики" },
              { num: "340+", label: "проектов" },
              { num: "98%", label: "возвращаются" },
            ].map((m, i) => (
              <Reveal key={m.label} delay={base + 900 + i * 140}>
                <Metric num={m.num} label={m.label} />
              </Reveal>
            ))}
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
    title: "Собственное производство",
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
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <Reveal className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
          Почему выбирают нас
        </Reveal>
        <Reveal
          as="h2"
          variant="curtain"
          delay={80}
          className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight max-w-2xl mb-16 sm:mb-20"
        >
          Авторская студия и мебель{" "}
          <span style={{ color: forest }} className="italic font-serif">
            по индивидуальному проекту
          </span>
          .
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-14">
          {advantages.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 110}
              className="group border-t border-black/15 pt-6 transition-colors duration-500 hover:border-black/60"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="text-sm tracking-[0.2em] tabular-nums"
                  style={{ color: forest }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a.icon
                  className="w-5 h-5 shrink-0 self-center transition-transform duration-500 group-hover:-translate-y-0.5"
                  style={{ color: forest }}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-5 text-xl sm:text-2xl leading-snug break-words transition-transform duration-500 group-hover:-translate-y-0.5">
                {a.title}
              </h3>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed break-words max-w-md">
                {a.text}
              </p>
              {a.brands && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.2em] uppercase text-neutral-500">
                  {a.brands.map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </div>
              )}
            </Reveal>
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
                className={`w-auto max-w-[75%] object-contain opacity-80 hover:opacity-100 transition ${b.tall ? "max-h-16 sm:max-h-20" : "max-h-9 sm:max-h-10"}`}
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
const FEATURED_ORDER = ["122", "141", "120"];

/** Ритм редакционной сетки: чередование крупных и малых блоков (12 колонок) */
const RHYTHM: { span: string; ratio: string; big: boolean }[] = [
  { span: "lg:col-span-7", ratio: "4 / 3", big: true },
  { span: "lg:col-span-5", ratio: "4 / 5", big: false },
  { span: "lg:col-span-5", ratio: "4 / 5", big: false },
  { span: "lg:col-span-7", ratio: "4 / 3", big: true },
  { span: "lg:col-span-12", ratio: "3 / 2", big: true },
];

function ProjectTile({
  p,
  onOpen,
  span,
  ratio,
  big,
  index,
}: {
  p: Project;
  onOpen: () => void;
  span: string;
  ratio: string;
  big: boolean;
  index: number;
}) {
  return (
    <Reveal
      variant="curtain"
      delay={(index % 2) * 90}
      className={`sm:col-span-1 ${span} col-span-1`}
    >
      <button
        onClick={onOpen}
        aria-label={`Открыть проект: ${p.title}`}
        className="group block w-full text-left"
      >
        <div className="overflow-hidden bg-neutral-200">
          <SmartImage
            thumb={thumbOf(coverOf(p))}
            full={coverOf(p)}
            alt={`${p.title} — ${p.category}, ${p.style}`}
            ratio={ratio}
            width={big ? 1200 : 800}
            height={big ? 900 : 1000}
            preloadFullOnHover
            sizes={
              big
                ? "(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                : "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
            }
            className="w-full"
            imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
        <div className="pt-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
          <div className="text-[11px] tracking-[0.22em] uppercase text-neutral-500">
            №{p.no} · {p.category} · {p.style}
          </div>
          <h3 className={`mt-2 leading-snug ${big ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
            {p.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-neutral-600 leading-relaxed">{p.lead}</p>
          <span
            className="mt-4 inline-flex items-center gap-2 text-sm"
            style={{ color: forest }}
          >
            Смотреть проект
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          </span>
        </div>
      </button>
    </Reveal>
  );
}

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
          className="group inline-flex items-center gap-3 border-b pb-2 text-sm tracking-[0.22em] uppercase transition-colors"
          style={{ color: forest, borderColor: forest }}
        >
          {open ? "Свернуть архив" : `Открыть архив проектов · ${items.length}`}
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-500 ${open ? "rotate-90" : "group-hover:translate-x-1"}`}
          />
        </button>
      </div>

      <div className="krona-archive mt-14" data-open={open}>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-16 lg:gap-y-24 pb-2">
            {open &&
              items.map((p, k) => {
                const r = RHYTHM[k % RHYTHM.length];
                return (
                  <ProjectTile
                    key={p.no}
                    p={p}
                    index={k}
                    span={r.span}
                    ratio={r.ratio}
                    big={r.big}
                    onOpen={() => onOpen(p.no)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Ритм галереи кейса: крупное · два средних · деталь */
const GALLERY_RHYTHM: { span: string; ratio: string; w: number; h: number; sizes: string }[] = [
  {
    span: "sm:col-span-2 lg:col-span-12",
    ratio: "16 / 10",
    w: 1600,
    h: 1000,
    sizes: "(min-width: 1024px) 1200px, 100vw",
  },
  {
    span: "sm:col-span-1 lg:col-span-6",
    ratio: "4 / 3",
    w: 1200,
    h: 900,
    sizes: "(min-width: 1024px) 600px, 100vw",
  },
  {
    span: "sm:col-span-1 lg:col-span-6",
    ratio: "4 / 3",
    w: 1200,
    h: 900,
    sizes: "(min-width: 1024px) 600px, 100vw",
  },
  {
    span: "sm:col-span-1 lg:col-span-5 lg:col-start-2",
    ratio: "4 / 5",
    w: 800,
    h: 1000,
    sizes: "(min-width: 1024px) 460px, 100vw",
  },
];

function Portfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [photoIdx, setPhotoIdx] = useState<number | null>(null);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [photoAttempt, setPhotoAttempt] = useState(0);
  const project = openIdx !== null ? projects[openIdx] : null;
  const rest = projects.filter((p) => !FEATURED_ORDER.includes(p.no));

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const lightboxCloseRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const touchRef = useRef<{ x: number; y: number; t: number } | null>(null);

  const goPhoto = useCallback(
    (dir: number) => {
      if (!project) return;
      const total = project.photos.length;
      setPhotoIdx((i) => (i === null ? i : (i + dir + total) % total));
    },
    [project],
  );

  // Клавиатура: Esc закрывает, стрелки листают полноэкранный просмотр
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (photoIdx !== null) setPhotoIdx(null);
        else setOpenIdx(null);
        return;
      }
      if (photoIdx === null) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goPhoto(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPhoto(-1);
      }
      if (e.key === "Home") setPhotoIdx(0);
      if (e.key === "End") setPhotoIdx(project.photos.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, photoIdx, goPhoto]);

  // Сброс состояния ошибки при смене кадра
  useEffect(() => {
    setPhotoFailed(false);
    setPhotoAttempt(0);
  }, [photoIdx, project]);

  // Фокус переходит в полноэкранный просмотр и возвращается назад при закрытии
  const lightboxOpen = photoIdx !== null;
  const openedFromRef = useRef<number | null>(null);
  useEffect(() => {
    if (!lightboxOpen) {
      const back = lastFocusRef.current;
      const idx = openedFromRef.current;
      lastFocusRef.current = null;
      openedFromRef.current = null;
      if (back?.isConnected) {
        back.focus();
      } else if (idx !== null) {
        const el = document.querySelector<HTMLElement>(`[data-photo-trigger="${idx}"]`);
        el?.focus();
      }
      return;
    }
    lastFocusRef.current = (document.activeElement as HTMLElement) ?? null;
    openedFromRef.current = photoIdx;
    lightboxCloseRef.current?.focus();
  }, [lightboxOpen, photoIdx]);

  // Агрессивная предзагрузка ближайших кадров (±2) — после первого рендера
  useEffect(() => {
    if (!project || photoIdx === null) return;
    const total = project.photos.length;
    const id = window.requestAnimationFrame(() => {
      for (const d of [1, -1, 2, -2]) {
        preloadImage(project.photos[(photoIdx + d + total * 2) % total]);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [project, photoIdx]);

  // Предзагрузка первых кадров кейса сразу после открытия проекта
  useEffect(() => {
    if (!project) return;
    const id = window.setTimeout(() => {
      project.photos.slice(0, 3).forEach((p) => preloadImage(p));
    }, 600);
    return () => window.clearTimeout(id);
  }, [project]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    if (t) touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchRef.current;
      touchRef.current = null;
      const t = e.changedTouches[0];
      if (!start || !t) return;
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      if (Date.now() - start.t > 800) return;
      goPhoto(dx < 0 ? 1 : -1);
    },
    [goPhoto],
  );




  return (
    <section id="portfolio" className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-16 md:mb-20">
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
      </Reveal>

      {/* Избранные проекты — асимметричная редакционная сетка */}
      <div className="mb-24 md:mb-32">
        <Reveal className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-8">
          Избранное студии
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-16 lg:gap-y-24">
          {FEATURED_ORDER.map((no, k) => {
            const i = projects.findIndex((x) => x.no === no);
            const p = projects[i];
            if (!p) return null;
            const layout =
              k === 0
                ? { span: "lg:col-span-8", ratio: "4 / 3", big: true }
                : k === 1
                  ? { span: "lg:col-span-4", ratio: "4 / 5", big: false }
                  : { span: "lg:col-span-12 sm:col-span-2", ratio: "3 / 2", big: true };
            return (
              <ProjectTile
                key={p.no}
                p={p}
                index={k}
                span={layout.span}
                ratio={layout.ratio}
                big={layout.big}
                onOpen={() => setOpenIdx(i)}
              />
            );
          })}
        </div>
      </div>

      {/* Архив проектов */}
      <ProjectArchive
        items={rest}
        onOpen={(no) => setOpenIdx(projects.findIndex((x) => x.no === no))}
      />

      {project && (
        <div
          className="fixed inset-0 z-50 bg-[#FAFAF7] overflow-y-auto krona-veil"
          onClick={() => setOpenIdx(null)}
        >
          <button
            aria-label="Закрыть"
            onClick={() => setOpenIdx(null)}
            className="fixed top-5 right-5 z-[55] w-11 h-11 flex items-center justify-center bg-[#FAFAF7]/85 backdrop-blur text-neutral-700 hover:text-black border border-black/10"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <div onClick={(e) => e.stopPropagation()}>
            {/* Доминирующее главное фото */}
            <button
              onClick={() => setPhotoIdx(0)}
              onMouseEnter={() => preloadImage(coverOf(project))}
              data-photo-trigger={0}
              aria-label={`Открыть фото 1 во весь экран`}
              className="block w-full cursor-zoom-in bg-neutral-200"
            >
              <SmartImage
                thumb={thumbOf(coverOf(project))}
                full={coverOf(project)}
                alt={project.title}
                ratio="16 / 10"
                width={1600}
                height={1000}
                priority
                preloadFullOnHover
                sizes="100vw"
                className="w-full max-h-[86vh]"
              />
            </button>

            <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24">
              <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12">
                <div className="lg:col-span-5">
                  <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-5">
                    Проект №{project.no} · реализован · {project.category} · {project.style}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-normal leading-[1.1]">
                    {project.title}
                  </h3>
                  <p className="mt-6 text-lg italic font-serif" style={{ color: forest }}>
                    {project.lead}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.18em] uppercase text-neutral-500">
                    {project.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  {project.story.map((s) => (
                    <p key={s} className="mb-5 text-[15px] md:text-base text-neutral-700 leading-relaxed">
                      {s}
                    </p>
                  ))}
                  <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-5">
                    {project.specs.map((s) => (
                      <div key={s.k} className="border-t border-black/10 pt-3">
                        <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                          {s.k}
                        </dt>
                        <dd className="text-sm text-neutral-800 mt-1.5">{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Редакционная галерея: крупное · два средних · деталь */}
              {project.photos.length > 1 && (
                <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-y-16">
                  {project.photos.slice(1).map((src, i) => {
                    const r = GALLERY_RHYTHM[i % GALLERY_RHYTHM.length];
                    const isDetail = i % GALLERY_RHYTHM.length === 3;
                    return (
                      <Reveal
                        key={src}
                        variant="curtain"
                        delay={(i % 2) * 80}
                        className={`col-span-1 ${r.span}`}
                      >
                        <button
                          onClick={() => setPhotoIdx(i + 1)}
                          onMouseEnter={() => preloadImage(src)}
                          data-photo-trigger={i + 1}
                          className="group block w-full cursor-zoom-in overflow-hidden bg-neutral-200"
                          aria-label={`Открыть фото ${i + 2} во весь экран`}
                        >
                          <SmartImage
                            thumb={thumbOf(src)}
                            full={src}
                            alt={`${project.title} — фото ${i + 2}`}
                            ratio={r.ratio}
                            width={r.w}
                            height={r.h}
                            preloadFullOnHover
                            sizes={r.sizes}
                            className="w-full"
                            imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                          />
                        </button>
                        {isDetail && (
                          <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-neutral-500">
                            Деталь
                          </div>
                        )}
                      </Reveal>
                    );
                  })}
                </div>
              )}


              <a
                href="#request"
                onClick={() => setOpenIdx(null)}
                className="mt-20 inline-flex items-center gap-3 border-b pb-2 text-sm tracking-[0.22em] uppercase"
                style={{ color: forest, borderColor: forest }}
              >
                Хочу похожий проект <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {project && photoIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — просмотр фото`}
          className="krona-dark-scope fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setPhotoIdx(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            ref={lightboxCloseRef}
            className="absolute top-5 right-5 z-10 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Закрыть просмотр"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoIdx(null);
            }}
          >
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>

          {project.photos.length > 1 && (
            <>
              <button
                aria-label="Предыдущее фото"
                aria-controls="krona-lightbox-image"
                onClick={(e) => {
                  e.stopPropagation();
                  goPhoto(-1);
                }}
                className="absolute left-2 sm:left-6 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white border border-white/20 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
              </button>
              <button
                aria-label="Следующее фото"
                aria-controls="krona-lightbox-image"
                onClick={(e) => {
                  e.stopPropagation();
                  goPhoto(1);
                }}
                className="absolute right-2 sm:right-6 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white border border-white/20 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </>
          )}

          <div
            id="krona-lightbox-image"
            className="relative max-h-[84vh] max-w-full overflow-hidden select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {photoFailed ? (
              <div
                role="alert"
                className="flex w-[80vw] max-w-md flex-col items-center justify-center gap-4 border border-white/20 px-6 py-16 text-center"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                  Фото не загрузилось
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhotoFailed(false);
                    setPhotoAttempt((a) => a + 1);
                  }}
                  className="border border-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-white/80 transition-colors hover:border-white hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Повторить загрузку
                </button>
                <span className="sr-only">
                  {project.title} — фото {photoIdx + 1} из {project.photos.length} недоступно.
                  Нажмите «Повторить загрузку» или закройте просмотр клавишей Esc.
                </span>
              </div>
            ) : (
              <>
                {/* мгновенное превью, пока грузится полноразмерное фото */}
                <img
                  key={`t-${photoIdx}`}
                  src={thumbOf(project.photos[photoIdx])}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="max-h-[84vh] max-w-full object-contain blur-md"
                />
                <img
                  key={`f-${photoIdx}-${photoAttempt}`}
                  src={
                    photoAttempt === 0
                      ? project.photos[photoIdx]
                      : `${project.photos[photoIdx]}${project.photos[photoIdx].includes("?") ? "&" : "?"}r=${photoAttempt}`
                  }
                  alt={`${project.title} — фото ${photoIdx + 1} из ${project.photos.length}`}
                  decoding="async"
                  draggable={false}
                  onError={() => setPhotoFailed(true)}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </>
            )}
          </div>

          <div
            aria-live="polite"
            aria-atomic="true"
            className="absolute bottom-6 left-0 right-0 text-center text-[11px] tracking-[0.25em] uppercase text-white/60 tabular-nums"
          >
            {photoIdx + 1} / {project.photos.length}
            <span className="sr-only"> — листайте стрелками или свайпом, Esc — закрыть</span>
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
    tag: "Материалы",
    icon: Layers,
    title: "ЛДСП и МДФ: в чём разница и как отличить качественную плиту",
    time: "8 мин",
    lead: "Простыми словами о двух главных материалах корпусной мебели — и о том, на что смотреть до подписания сметы.",
    body: [
      "ЛДСП — древесно-стружечная плита под декоративным ламинированным слоем. Внутри — прессованная стружка, снаружи — бумажно-смоляное покрытие с текстурой дерева или однотонным цветом. Плита стабильна по геометрии, не боится сухого воздуха и держит нагрузку — поэтому из неё делают корпуса, полки, каркасы шкафов и кухонь.",
      "МДФ — мелкодисперсная фракция: древесное волокно, спрессованное почти в однородную массу. Плита плотнее и пластичнее, её можно фрезеровать, гнуть радиусом, красить эмалью, обтягивать плёнкой или шпоном. Отсюда правило, по которому работаем мы: корпус — ЛДСП, фасады и всё, что имеет форму и цвет, — МДФ.",
      "Разница по влаге. Обычная ЛДСП боится длительного контакта с водой в местах реза, поэтому под мойку и рядом с посудомойкой мы ставим влагостойкую плиту (её сердцевина окрашена в зелёный) и обязательно герметизируем вырезы. МДФ в эмали переносит влажность лучше, но и его торцы должны быть закрыты покрытием.",
      "Как отличить качественную плиту. Первое — класс эмиссии формальдегида: E0.5 или E1, ниже — не бывает безопаснее, выше — не для жилых комнат. Второе — производитель: Egger, Kronospan, Lamarty, Kastamonu, AGT дают предсказуемое качество и стабильный цвет от партии к партии. Третье — срез: у хорошей ЛДСП стружка равномерная, без пустот и крупных щепок, плита не крошится по кромке реза.",
      "Кромка важнее самой плиты. Именно через открытый торец в материал попадает влага. Просите ПВХ-кромку 2 мм на всех видимых и нагруженных торцах и 0,4–1 мм на внутренних; в идеале — нанесение на автоматической линии, без клеевого шва «в нахлёст». Меламиновая кромка «в тон» — признак экономии, она отходит первой.",
      "Что спросить у студии перед заказом: марка и толщина плиты (корпус 16 или 18 мм), класс эмиссии, тип и толщина кромки, чем закрыты вырезы под мойку и трубы, какая гарантия на корпус. Пять вопросов — и вы уже понимаете уровень мебели лучше, чем по слову «премиум» в презентации.",
    ],
  },
  {
    tag: "Материалы",
    icon: TreePine,
    title: "Почему мебель делают из ДСП, а не из массива дерева",
    time: "6 мин",
    lead: "Честный ответ на самый частый вопрос на первой встрече — без снобизма и без оправданий.",
    body: [
      "Дерево живое, и это его главный минус в корпусе. Массив реагирует на влажность: зимой при батареях он усыхает, летом набирает влагу. Широкая деревянная стенка шкафа со временем может повести, а фасад — перестать попадать в зазор. Плита этой проблемы лишена: её геометрия остаётся стабильной десятилетиями.",
      "Точность. Современная мебель собирается по миллиметрам: присадка под петли, направляющие скрытого монтажа, стыковка модулей в линию на 4 метра. Такую точность даёт раскрой плиты на станке с ЧПУ, а не работа с доской, у которой своя влажность и свой характер в каждой пласти.",
      "Экономика без потери качества. Массив в корпусе удорожает мебель в 2,5–4 раза, при этом вы его не видите: он спрятан за фасадами и внутри шкафов. Разумнее вложить бюджет туда, где это заметно каждый день — в фурнитуру Blum или Hettich, в качественные фасады, в подсветку и продуманную эргономику.",
      "Экология — не в пользу массива. Плита производится из отходов деревообработки и щепы, а не из спиленного ствола. При классе эмиссии E0.5/E1 материал сертифицирован для детских и жилых помещений — по нормам это те же требования, что и к отделке комнаты ребёнка.",
      "Где дерево действительно нужно. Мы используем массив и шпон осознанно: столешницы и барные стойки, обеденные группы, декоративные торцы и рейки, ручки-профили, фасады в классике, где важна глубина фрезеровки. То есть там, где дерево работает на ощущение, а не прячется в конструкции.",
      "Итог простой: «мебель из ДСП» — это не про экономию, а про инженерное решение. Дорогая мебель отличается не породой дерева в корпусе, а качеством плиты, кромки, фурнитуры и точностью сборки. Именно эти четыре вещи вы будете чувствовать каждый день, открывая дверцу.",
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
    name: "Марина",
    rating: 5,
    date: "2018",
    dateTime: "2018",
    role: "Кухня по индивидуальному проекту",
    text:
      "Я работаю в мебели уже 15 лет и сама разбираюсь в качественном исполнении. Выбирала целый месяц и остановилась на этой компании из-за дизайнера Елены: она учла все мои пожелания, нет того, что они не могли бы выполнить. Уже не один год довольна качеством, функциональностью и дизайном кухни.",
  },
  {
    name: "Светлана",
    rating: 5,
    date: "Январь 2024",
    dateTime: "2024-01",
    role: "Кухня, шкаф-купе и тумба",
    text:
      "Огромное спасибо Елене и фирме «Крона» за качественно проделанную работу — от замера до сборки. Помимо кухни заказывали шкаф-купе и тумбу под телевизор, всё выполнено в срок, по качеству мебели и сборки нареканий нет. Будем рекомендовать знакомым и с радостью обратимся снова.",
  },
  {
    name: "Наталья",
    rating: 5,
    date: "Март 2024",
    dateTime: "2024-03",
    role: "Кухня",
    text:
      "Благодарю за работу! Заказывала кухню — доставили в срок, даже чуть раньше. Сборщик собрал всё очень оперативно, за это отдельная благодарность. Елена всегда на связи. Мы только в процессе ремонта, так что уверена, что вернёмся снова.",
  },
  {
    name: "Виктория",
    rating: 5,
    date: "Январь 2023",
    dateTime: "2023-01",
    role: "Комплект мебели",
    text:
      "Дорогая Елена, спасибо вам за проделанную работу. Очень грамотный подход, вы профессионал своего дела: находите в любой ситуации решение и даёте дельные советы. Полученный результат нас очень порадовал и будет радовать долгие годы.",
  },
  {
    name: "Надежда",
    rating: 5,
    date: "Апрель 2024",
    dateTime: "2024-04",
    role: "Шкаф в спальню",
    text:
      "Хочу выразить огромную благодарность за чудесный шкаф для моей спальни. Выполнен качественно, фурнитура на месте. Большое спасибо Кириллу за быструю сборку, а также дизайнеру Елене, которая воплотила мои идеи в эскизе шкафа. Ребятам из бригады номер 1 отдельное спасибо. Вы лучшие, так держать. Скоро приду за вторым шкафом в прихожую.",
  },
  {
    name: "Владимир Лихоманов",
    rating: 5,
    date: "Июнь 2022",
    dateTime: "2022-06",
    role: "Стол из массива",
    text:
      "Заказывали стол на кухню из массива — стол в кухне теперь смотрится невероятно круто! Спасибо за качественное предоставление товара и услуг.",
  },
  {
    name: "Мартын",
    rating: 5,
    date: "Май 2022",
    dateTime: "2022-05",
    role: "Кухня",
    text:
      "Огромное спасибо вам за вашу работу, теперь кухня — любимое место в квартире. Однозначно 5 звёзд!",
  },
  {
    name: "Виталий",
    rating: 5,
    date: "Январь 2015",
    dateTime: "2015-01",
    role: "Прихожая и детская",
    text:
      "Хорошая компания, работают без обмана. Цены честные, не завышены. Заказывал у них прихожую и детскую — качество понравилось, спасибо. С новогодними праздниками от души поздравляю весь ваш дружный коллектив!",
  },
  {
    name: "Андрей",
    rating: 5,
    date: "Апрель 2024",
    dateTime: "2024-04",
    role: "Стол и стулья",
    text:
      "Заказывали стол и стулья, остались довольны качеством мебели — всё очень хорошо выполнено.",
  },
  {
    name: "Татьяна",
    rating: 5,
    date: "Апрель 2024",
    dateTime: "2024-04",
    role: "Стол",
    text: "Заказывала стол. Пришло в срок, в целости и сохранности. Спасибо!",
  },
  {
    name: "Екатерина",
    rating: 5,
    date: "Апрель 2024",
    dateTime: "2024-04",
    role: "Гостиная",
    text:
      "Елена, очень благодарны вам за такой прекрасный результат. Всё красиво, аккуратно и, главное, сочетается с другой мебелью. Спасибо дизайнеру и мастерам! Владимиру, сборщику, также очень благодарны за качественную и аккуратную работу. Спасибо команде «Крона Мебель» за внимание к заказчику и профессионализм!",
  },
  {
    name: "Наталия",
    rating: 5,
    date: "2024",
    dateTime: "2024",
    role: "Гостиная с витриной",
    text:
      "Елена, по мне так угадали во всех смыслах! Витрина особенно меня радует. Кирилл ваш, конечно, умничка большой — берегите его из всех сил. Словом, для меня вы лучшие в Саратове, теперь только к вам!",
  },
];

/* Скриншоты настоящих отзывов и переписок с заказчиками */
const proofShots = [
  { src: proof2gis.url, thumb: proof2gisThumb.url, label: "Отзывы · 2ГИС" },
  { src: proofNadezhda.url, thumb: proofNadezhdaThumb.url, label: "Отзыв Надежды" },
  { src: proofRubrikator2.url, thumb: proofRubrikator2Thumb.url, label: "Отзывы · Рубрикатор" },
  { src: proofVitaliy.url, thumb: proofVitaliyThumb.url, label: "Отзыв Виталия" },
  { src: proofMarina.url, thumb: proofMarinaThumb.url, label: "Отзыв Марины" },
  { src: proofSvetlana.url, thumb: proofSvetlanaThumb.url, label: "Отзыв Светланы" },
  { src: proofNatalia.url, thumb: proofNataliaThumb.url, label: "Отзыв Натальи" },
  { src: proofVictoria.url, thumb: proofVictoriaThumb.url, label: "Отзыв Виктории" },
  { src: proofLetter.url, thumb: proofLetterThumb.url, label: "Отзыв · гостиная" },
  { src: proofChatNataliya.url, thumb: proofChatNataliyaThumb.url, label: "Переписка · витрина" },
  { src: proofChatMarina.url, thumb: proofChatMarinaThumb.url, label: "Переписка · ванная" },
  { src: proofChatAndrey.url, thumb: proofChatAndreyThumb.url, label: "Переписка · подростковая" },
  { src: proofChatEkaterina.url, thumb: proofChatEkaterinaThumb.url, label: "Переписка · гардеробная" },
  { src: proofChatMariam.url, thumb: proofChatMariamThumb.url, label: "Переписка · детская" },
  { src: proofLamia.url, thumb: proofLamiaThumb.url, label: "Переписка · спальня" },
  { src: proofMaksim.url, thumb: proofMaksimThumb.url, label: "Переписка · прихожая" },
];

const PROOFS_VISIBLE = 8;

function Reviews() {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const [allProofs, setAllProofs] = useState(false);
  const r = reviews[i];
  const go = (d: number) => setI((p) => (p + d + reviews.length) % reviews.length);
  const goZoom = (d: number) =>
    setZoom((p) => (p === null ? p : (p + d + proofShots.length) % proofShots.length));
  const shown = allProofs ? proofShots : proofShots.slice(0, PROOFS_VISIBLE);

  return (
    <section id="reviews" className="py-20" style={{ backgroundColor: "#F5F3EE" }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
          <div className="text-xs tracking-[0.25em] uppercase text-neutral-500">04 — Отзывы</div>
          <div className="text-xs text-neutral-500">
            <span className="tabular-nums" style={{ color: forest }}>
              5,0
            </span>{" "}
            · {reviews.length} отзыва клиентов · 2ГИС, Рубрикатор, переписки
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="flex gap-1 mb-5" aria-label={`Оценка ${r.rating} из 5`}>
              {[...Array(5)].map((_, s) => (
                <Star
                  key={s}
                  className={`w-3.5 h-3.5 ${s < r.rating ? "fill-current" : ""}`}
                  style={{ color: s < r.rating ? forest : "rgba(0,0,0,0.2)" }}
                />
              ))}
            </div>
            <blockquote
              key={i}
              className="text-xl md:text-[1.6rem] leading-[1.5] font-light animate-[krona-quote-in_.6s_ease]"
            >
              «{r.text}»
            </blockquote>
            <div className="mt-7 flex flex-wrap items-center gap-5 justify-between">
              <div>
                <div className="text-sm">{r.name}</div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {r.role} ·{" "}
                  <time dateTime={r.dateTime} className="tabular-nums">
                    {r.date}
                  </time>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 tabular-nums mr-2">
                  {String(i + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  aria-label="Предыдущий отзыв"
                  onClick={() => go(-1)}
                  className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Следующий отзыв"
                  onClick={() => go(1)}
                  className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-black/10">
            <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Подтверждения
            </div>
            <div className="grid grid-cols-4 gap-2">
              {shown.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setZoom(proofShots.indexOf(p))}
                  title={p.label}
                  className="aspect-[3/4] overflow-hidden rounded-lg bg-white border border-black/10 hover:border-black/25 transition-colors"
                >
                  <img
                    src={p.thumb}
                    alt={p.label}
                    width={300}
                    height={400}
                    sizes="(max-width: 1024px) 22vw, 100px"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
            {!allProofs && proofShots.length > PROOFS_VISIBLE && (
              <button
                type="button"
                onClick={() => setAllProofs(true)}
                className="mt-4 text-xs tracking-[0.14em] uppercase text-neutral-600 border-b border-black/20 hover:text-neutral-900 transition-colors"
              >
                Показать все ({proofShots.length})
              </button>
            )}
            <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
              Скриншоты отзывов с независимых площадок и переписок с заказчиками.
            </p>
          </aside>
        </div>
      </div>

      {zoom !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={proofShots[zoom].src}
            alt={proofShots[zoom].label}
            className="max-h-[88vh] max-w-full rounded-xl"
          />
          <button
            type="button"
            aria-label="Предыдущий скриншот"
            onClick={(e) => {
              e.stopPropagation();
              goZoom(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Следующий скриншот"
            onClick={(e) => {
              e.stopPropagation();
              goZoom(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Закрыть"
            onClick={() => setZoom(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}




/* ---------- Request Form ---------- */
function RequestForm() {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const submitLead = sendLeadEmail;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(false);
    const fd = new FormData(e.currentTarget);
    const val = (k: string) => String(fd.get(k) ?? "").trim();
    try {
      const res = await submitLead({
        data: {
          name: val("name"),
          phone: val("phone"),
          email: val("email"),
          interest: [val("type"), val("city") && `Город: ${val("city")}`, val("budget") && `Бюджет: ${val("budget")}`]
            .filter(Boolean)
            .join(" · "),
          message: val("message"),
          source: "Главная — блок «05 Заявка»",
        },
      });
      if (res.ok) setSent(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  };

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
            <a href={`tel:${LEGAL.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 hover:text-white transition">
              <Phone className="w-4 h-4" /> {LEGAL.phone}
            </a>
            <a href={`mailto:${LEGAL.email}`} className="flex items-center gap-3 hover:text-white transition">
              <Mail className="w-4 h-4" /> {LEGAL.email}
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          {!sent ? (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field name="name" label="Как к вам обращаться" required />
                <Field name="phone" label="Телефон" required type="tel" />
              </div>
              <Field name="email" label="Email" type="email" />
              <div className="grid md:grid-cols-2 gap-4">
                <Field name="city" label="Город" />
                <Field name="budget" label="Бюджет (примерно)" />
              </div>
              <Select
                name="type"
                label="Тип проекта"
                options={["Кухня", "Гардеробная", "Спальня", "Гостиная", "Комплексно"]}
              />
              <Textarea name="message" label="О пространстве и задаче" />
              <div className="mt-2 max-w-xl">
                <ConsentCheckbox
                  id="consent-request"
                  tone="light"
                  checked={agree}
                  onChange={setAgree}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={!agree || busy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {busy ? "Отправляем…" : "Отправить заявку"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {error && (
                <p role="alert" className="text-sm text-[#E8B4A0] max-w-md">
                  Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз или свяжитесь с нами
                  по телефону.
                </p>
              )}
            </form>
          ) : (
            <div className="rounded-3xl border border-white/15 p-10 h-full flex flex-col justify-center">
              <Check className="w-8 h-8 mb-6" style={{ color: "#A8C8A0" }} />
              <h3 className="text-3xl font-normal">Заявка принята.</h3>
              <p className="mt-4 text-white/60 max-w-md">
                Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
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
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
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
        name={name}
        required={required}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white placeholder-white/30"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs text-white/50">{label}</span>
      <select
        name={name}
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

function Textarea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="text-xs text-white/50">{label}</span>
      <textarea
        name={name}
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
          {[
            { label: "ВКонтакте", href: LEGAL.vk },
            { label: "Telegram", href: LEGAL.telegram },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EDE6D3]/80 hover:text-[#EDE6D3] transition"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-[#EDE6D3]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[#EDE6D3]/60">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-[#EDE6D3] transition">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

