import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import kronaWordmark from "@/assets/krona-wordmark.png.asset.json";
import { LEGAL, LEGAL_LINKS } from "@/data/legal";

const forest = "#1F3A2E";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 border-t border-black/10 pt-8">
      <h2 className="text-xl sm:text-2xl font-normal leading-snug tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-700">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((it, i) => (
        <li key={i} className="list-disc marker:text-neutral-400">
          {it}
        </li>
      ))}
    </ul>
  );
}

export function LegalLayout({
  eyebrow,
  title,
  intro,
  currentPath,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  currentPath: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1A1A1A] font-light">
      <header
        className="sticky top-0 z-40 backdrop-blur-md border-b border-black/5"
        style={{
          background:
            "linear-gradient(90deg, #1F3A2E 0%, #1F3A2E 68%, rgba(31,58,46,0.6) 82%, #FAFAF7 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto pl-4 sm:pl-6 pr-4 sm:pr-8 h-20 sm:h-24 flex items-center justify-between gap-3">
          <Link to="/" className="flex flex-col items-center gap-1 shrink-0">
            <img src={kronaWordmark.url} alt={LEGAL.brand} className="h-8 sm:h-10 w-auto" />
            <div
              className="text-center text-[#EDE6D3] leading-[1.05] text-[8px] sm:text-[10px] tracking-[0.16em] whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="font-light uppercase">Мебельная студия</div>
              <div className="font-extralight tracking-[0.08em] text-[#EDE6D3]/80">
                Елены Трифан
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#EDE6D3] hover:text-white transition whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 pt-16 pb-24">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase mb-6 text-neutral-500">
          <span className="w-8 h-px bg-neutral-400" />
          {eyebrow}
        </div>
        <h1 className="text-[1.9rem] sm:text-4xl md:text-5xl leading-[1.12] tracking-tight font-normal">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed">
          {intro}
        </p>
        <div className="mt-6 text-xs uppercase tracking-[0.18em] text-neutral-400">
          Редакция от {LEGAL.updatedAt}
        </div>

        {children}

        <section className="mt-12 border-t border-black/10 pt-8">
          <h2 className="text-xl font-normal tracking-tight">Реквизиты и контакты</h2>
          <div className="mt-4 space-y-1.5 text-[15px] text-neutral-700">
            <div>Оператор: {LEGAL.operator}</div>
            <div>ИНН: {LEGAL.inn}</div>
            <div>ОГРНИП: {LEGAL.ogrnip}</div>
            <div>Адрес: {LEGAL.address}</div>
            <div>E-mail: {LEGAL.email}</div>
            <div>Телефон: {LEGAL.phone}</div>
          </div>
        </section>

        <nav className="mt-12 border-t border-black/10 pt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {LEGAL_LINKS.filter((l) => l.to !== currentPath).map((l) => (
            <Link key={l.to} to={l.to} className="text-neutral-600 hover:text-black transition">
              {l.label}
            </Link>
          ))}
        </nav>
      </main>

      <footer style={{ backgroundColor: forest }} className="text-[#EDE6D3]/80">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 text-xs">
          © {new Date().getFullYear()} Студия мебели на заказ. Саратов.
        </div>
      </footer>
    </div>
  );
}
