import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Отправка заявок с сайта КРОНА на почту владельца через Resend (connector gateway).
 * Ключи читаются только на сервере, во frontend не попадают.
 */

/** Email получателя заявок — менять здесь. */
export const LEAD_RECIPIENT = "krona.studio.mebel@yandex.ru";

/** Отправитель. Пока нет своего домена — тестовый sender Resend. */
const LEAD_FROM = "KRONA <onboarding@resend.dev>";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(120),
  phone: z.string().trim().min(3, "Укажите телефон").max(40),
  email: z.string().trim().max(255).optional().or(z.literal("")),
  interest: z.string().trim().max(300).optional().or(z.literal("")),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  source: z.string().trim().min(1).max(160),
});

export type LeadInput = z.infer<typeof leadSchema>;

const esc = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#777;font-size:13px;white-space:nowrap">${esc(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#1A1A1A;font-size:15px">${esc(value).replace(/\n/g, "<br/>")}</td>
  </tr>`;
}

export const sendLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const resendKey = process.env["RESEND_API_KEY"];

    if (!lovableKey || !resendKey) {
      console.error("[lead] Missing RESEND_API_KEY or LOVABLE_API_KEY env vars");
      return { ok: false as const };
    }

    const now = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Saratov",
      dateStyle: "long",
      timeStyle: "short",
    });

    const html = `<div style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;padding:24px">
      <div style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#1F3A2E">Крона</div>
      <h1 style="font-size:22px;font-weight:normal;color:#1A1A1A;margin:8px 0 20px">Новая заявка с сайта КРОНА</h1>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        ${row("Имя", data.name)}
        ${row("Телефон", data.phone)}
        ${row("Email", data.email || undefined)}
        ${row("Что интересует", data.interest || undefined)}
        ${row("Сообщение", data.message || undefined)}
        ${row("Форма / раздел", data.source)}
        ${row("Дата и время", now)}
      </table>
    </div>`;

    const text = [
      "Новая заявка с сайта КРОНА",
      `Имя: ${data.name}`,
      `Телефон: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      data.interest ? `Что интересует: ${data.interest}` : null,
      data.message ? `Сообщение: ${data.message}` : null,
      `Форма / раздел: ${data.source}`,
      `Дата и время: ${now}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch(`${GATEWAY_URL}/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": resendKey,
        },
        body: JSON.stringify({
          from: LEAD_FROM,
          to: [LEAD_RECIPIENT],
          reply_to: data.email || undefined,
          subject: "Новая заявка с сайта КРОНА",
          html,
          text,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        console.error(`[lead] Resend request failed [${response.status}]: ${body}`);
        return { ok: false as const };
      }

      return { ok: true as const };
    } catch (err) {
      console.error("[lead] Unexpected error while sending lead email:", err);
      return { ok: false as const };
    }
  });
