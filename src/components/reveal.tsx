import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Задержка появления, мс */
  delay?: number;
  className?: string;
  as?: ElementType;
  /** Тип раскрытия */
  variant?: "rise" | "veil" | "curtain";
  id?: string;
};

/**
 * Мягкое раскрытие блока при попадании в зону просмотра.
 * Уважает prefers-reduced-motion (стили в styles.css).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "rise",
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={ref as never}
      data-shown={shown ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`krona-reveal krona-reveal--${variant} ${className}`}
    >
      {children}
    </Tag>
  );
}
