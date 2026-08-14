import { useCallback, useEffect, useRef, useState } from "react";

const preloaded = new Set<string>();

/** Мягкая предзагрузка полноразмерного фото (hover / приближение к вьюпорту). */
export function preloadImage(src?: string) {
  if (!src || preloaded.has(src) || typeof window === "undefined") return;
  preloaded.add(src);
  const img = new Image();
  img.decoding = "async";
  img.src = src;
}

type Props = {
  /** Лёгкое превью (webp ~800px) */
  thumb: string;
  /** Полноразмерный источник — используется в srcset для крупных экранов */
  full?: string;
  alt: string;
  /** Пропорция контейнера, например "4 / 5" — предотвращает CLS */
  ratio: string;
  sizes: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Предзагружать полноразмерное фото при наведении/входе в вьюпорт */
  preloadFullOnHover?: boolean;
};

export default function SmartImage({
  thumb,
  full,
  alt,
  ratio,
  sizes,
  width,
  height,
  priority = false,
  className = "",
  imgClassName = "",
  preloadFullOnHover = false,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // если картинка уже в кэше — не показываем скелетон
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  // предзагрузка полноразмерного фото незадолго до входа в зону просмотра
  useEffect(() => {
    if (!preloadFullOnHover || !full || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            preloadImage(full);
            io.disconnect();
          }
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [full, preloadFullOnHover]);

  const onHover = useCallback(() => {
    if (preloadFullOnHover) preloadImage(full);
  }, [full, preloadFullOnHover]);

  const srcSet = full && full !== thumb ? `${thumb} 800w, ${full} 1600w` : undefined;

  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      onFocus={onHover}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!loaded && <div className="absolute inset-0 krona-skeleton" aria-hidden="true" />}
      <img
        ref={imgRef}
        src={thumb}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-[opacity,filter,transform] duration-700 ease-out ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md scale-[1.02]"
        } ${imgClassName}`}
      />
    </div>
  );
}
