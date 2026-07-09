import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Send,
  MessageCircle,
  Star,
  MapPin,
  Mail,
  CreditCard,
  BookOpen,
  UserPlus,
  QrCode,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TAGIR — Партнёр WEECOMI" },
      {
        name: "description",
        content:
          "Digital-решения для бизнеса. Визитки, E-меню, сайты, автоматизация.",
      },
    ],
  }),
  component: Index,
});

const actions = [
  { icon: Phone, label: "Телефон" },
  { icon: Send, label: "Телеграмм" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: MessageCircle, label: "Max" },
  { icon: Star, label: "100грам" },
  { icon: MapPin, label: "Адрес" },
  { icon: Mail, label: "Эл. адрес" },
  { icon: CreditCard, label: "Оплата" },
  { icon: BookOpen, label: "Каталог" },
];

function Index() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center py-6 px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-neutral-800 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400"
              alt="Tagir"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wider">TAGIR</h1>
            <p className="text-xs font-semibold mt-2 leading-tight">
              ПАРТНЁР
              <br />
              КОМПАНИИ
              <br />
              WEECOMI
            </p>
          </div>
        </div>

        <div className="text-sm space-y-4 mb-5">
          <p>
            Digital-решения для бизнеса.
            <br />
            Визитки. E-меню. Сайты.
            <br />
            Автоматизация.
          </p>
          <p>
            Меньше рутины. Больше клиентов.
            <br />
            Больше прибыли.
          </p>
        </div>

        <div className="border-t border-neutral-700 mb-5" />

        <div className="grid grid-cols-3 gap-3">
          {actions.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className="w-20 h-20 bg-neutral-900 flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(25% 5%, 75% 5%, 98% 50%, 75% 95%, 25% 95%, 2% 50%)",
                }}
              >
                <Icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white text-black rounded-full py-3 text-sm font-medium">
            <UserPlus className="w-4 h-4" />
            Добавить в контакты
          </button>
          <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center">
            <QrCode className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
