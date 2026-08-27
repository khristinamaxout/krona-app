/**
 * Юридические реквизиты студии «Крона» (по карточке клиента).
 */
export const LEGAL = {
  brand: "Крона — мебельная студия Елены Трифан",
  operator: "ИП Трифан Елена Сергеевна",
  inn: "643914048549",
  ogrnip: "310643930500020",
  address: "РФ, г. Саратов, ул. Волжская, д. 16, кв. 84",
  actualAddress: "РФ, г. Саратов, ул. Симбирская, д. 154, ТЦ «Мебель Сити», ежедневно 10:00–20:00",
  email: "krona.studio.mebel@yandex.ru",
  phone: "+7 (905) 383-99-39",
  vk: "https://vk.ru/kuhni_krona2010",
  telegram: "https://t.me/kuhni_krona",
  whatsapp: "https://wa.me/79053839939",
  updatedAt: "26 августа 2026 г.",
} as const;

export const LEGAL_LINKS = [
  { to: "/privacy", label: "Политика обработки персональных данных" },
  { to: "/consent", label: "Согласие на обработку персональных данных" },
  { to: "/cookie", label: "Политика использования cookie" },
  { to: "/terms", label: "Пользовательское соглашение" },
] as const;
