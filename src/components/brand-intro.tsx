import { useEffect, useState } from "react";
import kronaWordmark from "@/assets/krona-wordmark.png.asset.json";

/**
 * Короткая премиальная заставка студии: логотип на тёплом ivory-фоне.
 * Не блокирует доступ к сайту — оверлей исчезает через ~1,8 с и не перехватывает клики.
 */
export default function BrandIntro() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("krona-intro") === "1";
    if (reduced || seen) {
      setGone(true);
      return;
    }
    sessionStorage.setItem("krona-intro", "1");
    const t = setTimeout(() => setGone(true), 4700);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="krona-intro fixed inset-0 z-[70] flex flex-col items-center justify-center pointer-events-none bg-[#FAFAF7]"
    >
      <div
        className="krona-intro-mark h-12 sm:h-16 w-[280px] sm:w-[380px]"
        style={{
          backgroundColor: "rgba(31, 58, 46, 0.78)",
          WebkitMaskImage: `url(${kronaWordmark.url})`,
          maskImage: `url(${kronaWordmark.url})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      <div
        className="krona-intro-sub mt-4 text-[10px] sm:text-xs tracking-[0.28em] uppercase text-neutral-500"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Мебельная студия Елены Трифан
      </div>
    </div>
  );
}
