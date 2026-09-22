import { SITE_URL } from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal-layout";
import { LEGAL } from "@/data/legal";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Политика использования cookie — Крона" },
      {
        name: "description",
        content:
          "Какие файлы cookie использует сайт мебельной студии Крона, зачем они нужны и как отключить их в браузере.",
      },
      { property: "og:title", content: "Политика использования cookie — Крона" },
      {
        property: "og:description",
        content: "Типы cookie на сайте студии Крона и управление ими.",
      },
      { property: "og:url", content: `${SITE_URL}/cookie` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cookie` }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <LegalLayout
      eyebrow="Правовая информация"
      title="Политика использования файлов cookie"
      intro="Сайт использует файлы cookie — небольшие текстовые файлы, которые сохраняются в браузере и помогают сайту работать корректно, запоминать выбор пользователя и улучшать сервис."
      currentPath="/cookie"
    >
      <LegalSection title="1. Какие cookie мы используем">
        <LegalList
          items={[
            "Необходимые — обеспечивают работу сайта, сохраняют факт согласия с cookie и состояние интерактивного ассистента. Отключить их нельзя, без них сайт работает некорректно.",
            "Функциональные — запоминают предпочтения пользователя (например, ранее выбранные варианты в подборе мебели).",
            "Аналитические — обезличенная статистика посещаемости и поведения на сайте, помогает улучшать структуру и содержание страниц.",
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Правовая основа">
        <p>
          Обработка данных, получаемых через cookie, ведётся на основании согласия пользователя,
          которое выражается нажатием кнопки в информационном баннере либо продолжением
          использования сайта, а также в соответствии с Федеральным законом № 152-ФЗ и Федеральным
          законом № 149-ФЗ «Об информации, информационных технологиях и о защите информации».
        </p>
      </LegalSection>

      <LegalSection title="3. Как управлять cookie">
        <p>
          Пользователь может в любой момент удалить сохранённые cookie и запретить их запись в
          настройках браузера (разделы «Конфиденциальность» и «Данные сайтов»). Отключение
          необходимых cookie может привести к тому, что часть функций сайта станет недоступной.
        </p>
      </LegalSection>

      <LegalSection title="4. Срок хранения">
        <p>
          Сессионные cookie удаляются при закрытии браузера, постоянные — хранятся до 12 месяцев
          либо до их удаления пользователем.
        </p>
      </LegalSection>

      <LegalSection title="5. Вопросы">
        <p>
          Вопросы об использовании cookie направляйте на {LEGAL.email}. Порядок обработки остальных
          персональных данных описан в Политике обработки персональных данных.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
