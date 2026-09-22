import { SITE_URL } from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal-layout";
import { LEGAL } from "@/data/legal";

export const Route = createFileRoute("/consent")({
  head: () => ({
    meta: [
      { title: "Согласие на обработку персональных данных — Крона" },
      {
        name: "description",
        content:
          "Текст согласия на обработку персональных данных, которое пользователь даёт при отправке заявки на сайте мебельной студии Крона.",
      },
      { property: "og:title", content: "Согласие на обработку персональных данных — Крона" },
      {
        property: "og:description",
        content: "Условия согласия на обработку персональных данных при отправке заявки.",
      },
      { property: "og:url", content: `${SITE_URL}/consent` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/consent` }],
  }),
  component: ConsentPage,
});

function ConsentPage() {
  return (
    <LegalLayout
      eyebrow="Правовая информация"
      title="Согласие на обработку персональных данных"
      intro="Отмечая галочку рядом с формой и нажимая кнопку отправки, пользователь свободно, своей волей и в своём интересе даёт согласие на обработку персональных данных на условиях, изложенных ниже (ст. 9 Федерального закона № 152-ФЗ)."
      currentPath="/consent"
    >
      <LegalSection title="1. Кому даётся согласие">
        <p>
          Оператор: {LEGAL.operator}, ИНН {LEGAL.inn}, адрес: {LEGAL.address}.
        </p>
      </LegalSection>

      <LegalSection title="2. Перечень персональных данных">
        <LegalList
          items={[
            "имя (обращение);",
            "номер телефона;",
            "адрес электронной почты;",
            "город и сведения о помещении, бюджете и пожеланиях к проекту, указанные добровольно;",
            "файлы, прикреплённые пользователем (планировки, фотографии, эскизы);",
            "cookie и обезличенные данные веб-аналитики.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Перечень действий с данными">
        <p>
          Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение),
          извлечение, использование, передача (предоставление, доступ) уполномоченным лицам,
          обезличивание, блокирование, удаление и уничтожение — как с использованием средств
          автоматизации, так и без них.
        </p>
      </LegalSection>

      <LegalSection title="4. Цели обработки">
        <LegalList
          items={[
            "обработка обращения и обратная связь по заявке;",
            "подготовка расчёта, эскиза и коммерческого предложения;",
            "заключение и исполнение договора на изготовление и монтаж мебели;",
            "направление информационных сообщений о статусе заказа.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Срок действия и отзыв согласия">
        <p>
          Согласие действует до достижения целей обработки либо до его отзыва. Отзыв оформляется
          свободным письменным заявлением на {LEGAL.email} либо по адресу {LEGAL.address}. После
          отзыва Оператор прекращает обработку и уничтожает данные в сроки, установленные
          законодательством, за исключением данных, хранение которых обязательно по закону.
        </p>
      </LegalSection>

      <LegalSection title="6. Подтверждение">
        <p>
          Пользователь подтверждает, что указанные им данные принадлежат ему лично, являются
          достоверными, а также что он ознакомлен с{" "}
          <span className="whitespace-nowrap">Политикой обработки персональных данных</span> и
          Пользовательским соглашением.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
