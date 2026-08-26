import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "krona-cookie-consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* приватный режим — баннер просто не показываем */
    }
  }, []);

  const decide = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Использование cookie"
      className="fixed inset-x-3 bottom-3 z-[130] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md"
    >
      <div className="rounded-3xl border border-black/10 bg-[#FAFAF7] p-5 sm:p-6 shadow-[0_24px_60px_-30px_rgba(26,26,26,0.6)]">
        <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">Cookie</div>
        <p className="mt-3 text-[13px] leading-relaxed text-neutral-700">
          Мы используем файлы cookie, чтобы сайт работал корректно и был удобнее. Продолжая
          пользоваться сайтом, вы соглашаетесь с{" "}
          <Link to="/cookie" className="text-[#1F3A2E] underline underline-offset-2">
            политикой cookie
          </Link>{" "}
          и{" "}
          <Link to="/privacy" className="text-[#1F3A2E] underline underline-offset-2">
            политикой обработки персональных данных
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full px-5 py-2.5 text-xs text-white transition hover:opacity-90"
            style={{ backgroundColor: "#1F3A2E" }}
          >
            Принять
          </button>
          <button
            type="button"
            onClick={() => decide("essential")}
            className="rounded-full border border-black/15 px-5 py-2.5 text-xs text-neutral-700 transition hover:border-black/40"
          >
            Только необходимые
          </button>
        </div>
      </div>
    </div>
  );
}
