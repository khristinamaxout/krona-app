/**
 * Отправка заявок через EmailJS (публичные ключи — их можно держать в коде).
 * Письма приходят на ящик, указанный в шаблоне EmailJS.
 */

const SERVICE_ID = (import.meta.env?.VITE_EMAILJS_SERVICE_ID as string) || "service_q67hqgn";
const TEMPLATE_ID = (import.meta.env?.VITE_EMAILJS_TEMPLATE_ID as string) || "template_c7qsayp";
const PUBLIC_KEY = (import.meta.env?.VITE_EMAILJS_PUBLIC_KEY as string) || "L8a6BrHpOuDVWbfFX";

export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  interest?: string;
  message?: string;
  source: string;
};

export async function sendLeadEmail({ data }: { data: LeadInput }): Promise<{ ok: boolean }> {
  const now = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Saratov",
    dateStyle: "long",
    timeStyle: "short",
  });

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          name: data.name,
          phone: data.phone,
          email: data.email || "—",
          interest: data.interest || "—",
          message: data.message || "—",
          source: data.source,
          date: now,
          title: "Новая заявка с сайта КРОНА",
          reply_to: data.email || "",
        },
      }),
    });

    if (!res.ok) {
      console.error("[lead] EmailJS error", res.status, await res.text());
      return { ok: false };
    }
    return { ok: true };
  } catch (err) {
    console.error("[lead] EmailJS request failed", err);
    return { ok: false };
  }
}
