/**
 * Базовый адрес сайта.
 *
 * Используется в canonical-ссылках, Open Graph, sitemap.xml и robots.txt.
 * При переезде на собственный домен достаточно задать переменную окружения
 * VITE_SITE_URL (например, https://example.ru) — код менять не нужно.
 */
const RAW_SITE_URL =
  (import.meta.env?.VITE_SITE_URL as string | undefined)?.trim() ||
  "https://krona-app.lovable.app";

/** Адрес без завершающего слэша: https://example.ru */
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

/** Абсолютный адрес страницы или файла: absUrl("/partners") */
export const absUrl = (path = "/"): string =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
