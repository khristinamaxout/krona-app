import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bath,
  Baby,
  BedDouble,
  Blinds,
  BookOpen,
  Briefcase,
  Building2,
  Camera,
  CalendarDays,
  Check,
  ChefHat,
  Coffee,
  Compass,
  DoorOpen,
  DoorClosed,
  FileText,
  Gem,
  Images,
  Layers,
  Lightbulb,
  Leaf,
  Package,
  Paintbrush,
  Palette,
  PanelsTopLeft,
  Paperclip,
  PenLine,
  Ruler,
  ShieldCheck,
  Shirt,
  Sofa,
  Sparkles,
  SprayCan,
  Square,
  RectangleHorizontal,
  Star,
  Timer,
  TreePine,
  Tv,
  Upload,
  Users,
  Utensils,
  Wallet,
  WashingMachine,
  Wine,
  Home,
} from "lucide-react";
import sModernLiving from "@/assets/styles/modern-living.jpg";
import sModernKitchen from "@/assets/styles/modern-kitchen.jpg";
import sModernBedroom from "@/assets/styles/modern-bedroom.jpg";
import sNeoLiving from "@/assets/styles/neo-living.jpg";
import sNeoKitchen from "@/assets/styles/neo-kitchen.jpg";
import sNeoBedroom from "@/assets/styles/neo-bedroom.jpg";
import sMinLiving from "@/assets/styles/min-living.jpg";
import sMinKitchen from "@/assets/styles/min-kitchen.jpg";
import sMinBedroom from "@/assets/styles/min-bedroom.jpg";
import sLoftLiving from "@/assets/styles/loft-living.jpg";
import sLoftKitchen from "@/assets/styles/loft-kitchen.jpg";
import sLoftBedroom from "@/assets/styles/loft-bedroom.jpg";
import sScandLiving from "@/assets/styles/scand-living.jpg";
import sScandKitchen from "@/assets/styles/scand-kitchen.jpg";
import sScandBedroom from "@/assets/styles/scand-bedroom.jpg";
import sClassicLiving from "@/assets/styles/classic-living.jpg";
import sClassicKitchen from "@/assets/styles/classic-kitchen.jpg";
import sClassicBedroom from "@/assets/styles/classic-bedroom.jpg";

const forest = "#1F3A2E";
const graphite = "#1A1A1A";

type Opt = {
  label: string;
  swatch?: string;
  grad?: string;
  hint?: string;
  icon?: LucideIcon;
  imgs?: string[];
};
type Sub = {
  key: string;
  label: string;
  mode: "single" | "multi";
  options: Opt[];
  variant?: "pill" | "card" | "swatch";
};
type Step = {
  key: string;
  title: string;
  question: string;
  note?: string;
  mode?: "single" | "multi";
  variant?: "pill" | "card" | "swatch";
  max?: number;
  options?: Opt[];
  subs?: Sub[];
  free?: { key: string; label: string; placeholder: string };
  upload?: boolean;
  optional?: boolean;
};

const o = (arr: string[]): Opt[] => arr.map((label) => ({ label }));

/**
 * Изображения стилей — собственные фото реализованных проектов студии.
 * Для каждого стиля показываем самые продающие кадры: гостиная (зал), кухня, спальня.
 */
const ROOMS: { key: string; match: RegExp }[] = [
  { key: "Гостиная", match: /гостин|зал/i },
  { key: "Кухня", match: /кухн/i },
  { key: "Спальня", match: /спальн|детск|молодёжн|гардероб|шкаф/i },
];

const bestShot = (style: string, match: RegExp): string | null => {
  const byStyle = projects.filter((p) => p.style === style);
  const pools = [byStyle, projects];
  for (const pool of pools) {
    const hit = pool.find((p) => match.test(p.title) || match.test(p.category));
    if (hit?.photos?.[0]) return thumbOf(hit.photos[0]);
  }
  return null;
};

const styleShots = (style: string, fallback?: string): string[] => {
  const shots = ROOMS.map(
    (r) => bestShot(style, r.match) ?? (fallback ? bestShot(fallback, r.match) : null),
  ).filter((s): s is string => Boolean(s));
  const unique = Array.from(new Set(shots));
  return unique.slice(0, 3);
};


const steps: Step[] = [
  {
    key: "rooms",
    title: "Помещение",
    question: "Для какого помещения создаём мебель?",
    note: "Можно выбрать несколько",
    mode: "multi",
    options: [
      { label: "Кухня", icon: ChefHat },
      { label: "Гостиная", icon: Sofa },
      { label: "Спальня", icon: BedDouble },
      { label: "Детская", icon: Baby },
      { label: "Прихожая", icon: DoorOpen },
      { label: "Гардеробная", icon: Shirt },
      { label: "Кабинет", icon: Briefcase },
      { label: "Ванная", icon: Bath },
      { label: "Другое", icon: Sparkles },
    ],
  },
  {
    key: "furniture",
    title: "Мебель",
    question: "Какую мебель хотите изготовить?",
    note: "Можно выбрать несколько",
    mode: "multi",
    options: o([
      "Кухонный гарнитур",
      "Шкаф",
      "Шкаф-купе",
      "Гардеробная",
      "Прихожая",
      "Тумба",
      "ТВ-зона",
      "Комод",
      "Кровать",
      "Туалетный столик",
      "Рабочее место",
      "Детская мебель",
      "Стеллаж",
      "Витрина",
      "Буфет",
      "Барная стойка",
      "Обеденная группа",
      "Комплекс мебели",
      "Полностью меблировать помещение",
    ]),
  },
  {
    key: "space",
    title: "О помещении",
    question: "Расскажите немного о помещении",
    note: "Это помогает нам сразу думать в реальных габаритах",
    subs: [
      {
        key: "area",
        label: "Размер помещения",
        mode: "single",
        options: o(["до 10 м²", "10–15 м²", "15–20 м²", "более 20 м²"]),
      },
      {
        key: "shape",
        label: "Форма помещения",
        mode: "multi",
        options: [
          { label: "Прямоугольное", icon: RectangleHorizontal },
          { label: "Квадратное", icon: Square },
          { label: "Сложная планировка", icon: Layers },
          { label: "Есть ниши", icon: PanelsTopLeft },
          { label: "Панорамные окна", icon: Blinds },
          { label: "Несколько дверей", icon: DoorClosed },
          { label: "Не знаю", icon: Compass },
        ],
      },
      {
        key: "ceiling",
        label: "Высота потолков",
        mode: "single",
        options: o(["до 2,5 м", "2,5–2,8 м", "3 м и выше"]),
      },
      {
        key: "plan",
        label: "Уже есть план?",
        mode: "single",
        options: o(["Загружу позже", "Есть чертёж", "Есть дизайн-проект", "Пока нет"]),
      },
    ],
  },
  {
    key: "style",
    title: "Стиль",
    question: "В каком стиле нравится мебель?",
    note: "Выберите один или несколько — или доверьте выбор нам",
    mode: "multi",
    variant: "card",
    options: [
      {
        label: "Современный",
        hint: "Чистые линии и функциональность",
        grad: "linear-gradient(135deg,#D9D4CB,#8E8B84)",
        imgs: styleShots("Современный"),
      },
      {
        label: "Неоклассика",
        hint: "Современная классика",
        grad: "linear-gradient(135deg,#EFE7DA,#B9A78C)",
        imgs: styleShots("Неоклассика"),
      },
      {
        label: "Минимализм",
        hint: "Ничего лишнего",
        grad: "linear-gradient(135deg,#F2F0EB,#C9C5BC)",
        imgs: styleShots("Минимализм"),
      },
      {
        label: "Лофт",
        hint: "Бетон, металл, дерево",
        grad: "linear-gradient(135deg,#6E6862,#2E2B28)",
        imgs: styleShots("Лофт"),
      },
      {
        label: "Скандинавский",
        hint: "Свет, дерево, уют",
        grad: "linear-gradient(135deg,#FAF7F0,#D7C9AE)",
        imgs: styleShots("Скандинавский"),
      },
      {
        label: "Классика",
        hint: "Традиции и элегантность",
        grad: "linear-gradient(135deg,#EDE3D2,#9C7F5C)",
        imgs: styleShots("Классика", "Неоклассика"),
      },

      {
        label: "Помогите подобрать",
        hint: "Не уверены? Поможем",
        icon: Star,
        grad: "linear-gradient(135deg,#1F3A2E,#6C8A78)",
      },
    ],
  },
  {
    key: "colors",
    title: "Цвет",
    question: "Какие цвета вам нравятся?",
    note: "Можно выбрать несколько",
    mode: "multi",
    variant: "swatch",
    options: [
      { label: "Белый", swatch: "#F7F5F0" },
      { label: "Чёрный", swatch: "#1A1A1A" },
      { label: "Натуральное дерево", swatch: "#C49A6C" },
      { label: "Тёмный орех", swatch: "#5A3A26" },
      { label: "Дуб", swatch: "#D8BE96" },
      { label: "Серый", swatch: "#9A9A96" },
      { label: "Бежевый", swatch: "#E0D3BC" },
      { label: "Зелёный", swatch: "#1F3A2E" },
      { label: "Синий", swatch: "#2C3E55" },
      { label: "Светлые тёплые", swatch: "#F0E4D0" },
      { label: "Контрастные", swatch: "linear-gradient(135deg,#F7F5F0 50%,#1A1A1A 50%)" },
      { label: "Не знаю", swatch: "linear-gradient(135deg,#EDE6D3,#9BAF9E)" },
    ],
  },
  {
    key: "materials",
    title: "Материалы",
    question: "Какие материалы нравятся?",
    note: "Если сомневаетесь — отметьте «Не знаю», подскажем на консультации",
    mode: "multi",
    options: o([
      "МДФ",
      "ЛДСП",
      "Натуральный шпон",
      "Массив дерева",
      "Акрил",
      "Эмаль",
      "Пластик",
      "Стекло",
      "Металл",
      "Камень",
      "Не знаю",
    ]),
  },
  {
    key: "important",
    title: "Важное",
    question: "Что для вас важнее всего?",
    note: "Можно выбрать до трёх",
    mode: "multi",
    max: 3,
    options: [
      { label: "Уложиться в бюджет", icon: Wallet },
      { label: "Красивый внешний вид", icon: Gem },
      { label: "Максимальная надёжность", icon: ShieldCheck },
      { label: "Безопасность для детей", icon: Baby },
      { label: "Лёгкость ухода", icon: SprayCan },
      { label: "Вместительность", icon: Package },
      { label: "Использовать каждый сантиметр", icon: Ruler },
      { label: "Быстрое изготовление", icon: Timer },
      { label: "Экологичные материалы", icon: Leaf },
      { label: "Индивидуальный дизайн", icon: Paintbrush },
      { label: "Современная фурнитура", icon: Lightbulb },
      { label: "Чтобы мебель идеально вписалась в интерьер", icon: Home },
    ],
  },
  {
    key: "budget",
    title: "Бюджет",
    question: "На какой бюджет рассчитываете?",
    note: "Ориентир, не обязательство — он помогает предложить честное решение",
    mode: "single",
    options: o(["до 150 000 ₽", "150 000 – 300 000 ₽", "300 000 – 500 000 ₽", "500 000 ₽ и выше"]),
  },
  {
    key: "timing",
    title: "Сроки",
    question: "Когда планируете заказ?",
    mode: "single",
    options: o(["Сейчас", "В течение месяца", "Через 2–3 месяца", "Пока изучаю варианты"]),
  },
  {
    key: "life",
    title: "Образ жизни",
    question: "Кто будет жить рядом с этой мебелью?",
    note: "Эти детали влияют на фурнитуру, покрытия и сценарии хранения",
    subs: [
      {
        key: "users",
        label: "Кто будет пользоваться мебелью",
        mode: "single",
        options: o(["Один человек", "Пара", "Семья", "Большая семья", "Коммерческое помещение"]),
      },
      {
        key: "kids",
        label: "Дети",
        mode: "single",
        options: o(["Нет", "До 3 лет", "Школьники", "Подростки"]),
      },
      {
        key: "pets",
        label: "Домашние животные",
        mode: "multi",
        options: o(["Есть кошка", "Есть собака", "Нет"]),
      },
      {
        key: "cooking",
        label: "Как часто готовите (для кухни)",
        mode: "single",
        options: o(["Практически не готовим", "Каждый день", "Любим принимать гостей"]),
      },
    ],
  },
  {
    key: "inspiration",
    title: "Вдохновение",
    question: "Есть ли что показать?",
    note: "Необязательно — но так проект попадает в точку с первого раза",
    mode: "multi",
    optional: true,
    upload: true,
    options: [
      { label: "Фото помещения", icon: Camera },
      { label: "План или обмеры", icon: Ruler },
      { label: "Референсы из Pinterest", icon: Images },
      { label: "Дизайн-проект", icon: FileText },
      { label: "Пока ничего нет", icon: Sparkles },
    ],
    free: {
      key: "links",
      label: "Ссылка на доску вдохновения (Pinterest, соцсети)",
      placeholder: "https://…",
    },
  },
  {
    key: "notes",
    title: "Детали",
    question: "Что ещё важно учесть?",
    note: "Свободно, своими словами",
    optional: true,
    free: {
      key: "notes",
      label: "Ваш комментарий",
      placeholder:
        "Например: хочу, чтобы кухня была максимально удобной для семьи из пяти человек.",
    },
  },
];

type Answers = Record<string, string[]>;
type Texts = Record<string, string>;

export default function Assistant() {
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<Answers>({});
  const [texts, setTexts] = useState<Texts>({});
  const [files, setFiles] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const done = i >= steps.length;
  const step = steps[i];
  const progress = Math.round((Math.min(i, steps.length) / steps.length) * 100);

  // Окно ассистента фиксированной высоты: при смене шага возвращаем внутренний скролл наверх,
  // чтобы страница не «перепрыгивала».
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [i]);

  const get = (k: string) => ans[k] ?? [];

  const toggle = (k: string, label: string, mode: "single" | "multi", max?: number) => {
    setAns((prev) => {
      const cur = prev[k] ?? [];
      if (mode === "single") return { ...prev, [k]: cur[0] === label ? [] : [label] };
      if (cur.includes(label)) return { ...prev, [k]: cur.filter((x) => x !== label) };
      if (max && cur.length >= max) return prev;
      return { ...prev, [k]: [...cur, label] };
    });
  };

  const stepAnswered = useMemo(() => {
    if (done) return true;
    if (step.optional) return true;
    if (step.subs) return step.subs.some((s) => (ans[s.key] ?? []).length > 0);
    return get(step.key).length > 0;
  }, [i, ans, done]); // eslint-disable-line react-hooks/exhaustive-deps

  const summary: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Home, label: "Помещение", value: get("rooms").join(" · ") },
    { icon: Sofa, label: "Мебель", value: get("furniture").join(" · ") },
    {
      icon: Ruler,
      label: "Пространство",
      value: [get("area")[0], get("ceiling")[0], ...get("shape")].filter(Boolean).join(" · "),
    },
    { icon: Paintbrush, label: "Стиль", value: get("style").join(" · ") },
    { icon: Palette, label: "Цвета", value: get("colors").join(" · ") },
    { icon: TreePine, label: "Материалы", value: get("materials").join(" · ") },
    { icon: Star, label: "Главное для вас", value: get("important").join(" · ") },
    { icon: Wallet, label: "Бюджет", value: get("budget")[0] ?? "" },
    { icon: CalendarDays, label: "Сроки", value: get("timing")[0] ?? "" },
    {
      icon: Users,
      label: "Кто пользуется",
      value: [get("users")[0], get("kids")[0] && `дети: ${get("kids")[0]}`, ...get("pets")]
        .filter(Boolean)
        .join(" · "),
    },
    {
      icon: Paperclip,
      label: "Материалы от вас",
      value: [...get("inspiration"), ...files].join(" · "),
    },
    { icon: PenLine, label: "Пожелания", value: texts["notes"] ?? "" },
  ].filter((r) => r.value);

  const optionButton = (
    opt: Opt,
    active: boolean,
    onClick: () => void,
    variant: Step["variant"],
    disabled?: boolean,
    idx = 0,
  ) => {
    const delay = { animationDelay: `${Math.min(idx, 16) * 35}ms` };
    const Icon = opt.icon;
    if (variant === "card") {
      const captions = ["Гостиная", "Кухня", "Спальня"];
      return (
        <button
          key={opt.label}
          type="button"
          onClick={onClick}
          style={{
            ...delay,
            borderRadius: 20,
            boxShadow: active
              ? `0 0 0 2px ${forest}, 0 22px 50px -30px rgba(26,26,26,0.55)`
              : "0 14px 34px -26px rgba(26,26,26,0.45)",
          }}
          className={`group relative flex h-full flex-col text-left overflow-hidden border bg-white krona-rise krona-lift ${
            active ? "border-transparent" : "border-black/10 hover:border-black/30"
          }`}
        >
          <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-neutral-100">
            {opt.imgs && opt.imgs.length > 0 ? (
              <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-[3px]">
                {opt.imgs.map((src, i) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden bg-neutral-200 ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                  >
                    <span className="absolute inset-0 krona-skeleton" aria-hidden="true" />
                    <img
                      src={src}
                      alt={`${opt.label} — ${captions[i] ?? "пример работы"}`}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={480}
                      className="absolute inset-0 h-full w-full object-cover krona-media"
                    />
                  </div>
                ))}
              </div>
            ) : (

              <div
                className="flex h-full w-full items-center justify-center krona-media"
                style={{ background: opt.grad }}
              >
                {Icon && <Icon className="w-9 h-9 text-white" strokeWidth={1.2} />}
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="text-[15px] leading-snug">{opt.label}</div>
            {opt.hint && (
              <div className="mt-1.5 text-xs text-neutral-500 leading-snug">{opt.hint}</div>
            )}
          </div>
          {active && (
            <span
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center krona-check"
              style={{ backgroundColor: forest }}
            >
              <Check className="w-3.5 h-3.5 text-white" />
            </span>
          )}
        </button>
      );
    }
    if (variant === "swatch") {
      return (
        <button
          key={opt.label}
          type="button"
          onClick={onClick}
          style={{ ...delay, ...(active ? { boxShadow: `0 0 0 2px ${forest}` } : {}) }}
          className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 text-left krona-rise krona-lift ${
            active ? "border-transparent" : "border-black/10 hover:border-black/40"
          }`}
        >
          <span
            className="w-8 h-8 rounded-full border border-black/10 shrink-0 krona-media"
            style={{ background: opt.swatch }}
          />
          <span className="text-sm min-w-0">{opt.label}</span>
          {active && (
            <Check
              className="w-4 h-4 ml-auto shrink-0 krona-check rounded-full"
              style={{ color: forest }}
            />
          )}
        </button>
      );
    }
    return (
      <button
        key={opt.label}
        type="button"
        onClick={onClick}
        disabled={disabled}
        style={{ ...delay, ...(active ? { backgroundColor: forest } : {}) }}
        className={`group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border text-sm text-left krona-rise krona-lift disabled:opacity-35 ${
          active
            ? "text-white border-transparent"
            : "bg-white border-black/10 hover:border-black/50"
        }`}
      >
        {Icon && (
          <Icon
            className="w-4 h-4 shrink-0 transition-transform duration-500 group-hover:scale-110"
            strokeWidth={1.4}
            style={{ color: active ? "#FFFFFF" : forest }}
          />
        )}
        <span className="min-w-0">{opt.label}</span>
      </button>
    );
  };

  return (
    <section id="assistant" className="border-y border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24 grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Левая колонка */}
        <div className="lg:col-span-4">
          <div className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            01 — Ассистент
          </div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-normal">
            Персональная консультация —{" "}
            <span style={{ color: forest }} className="italic font-serif">
              шаг за шагом.
            </span>
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            Мы задаём те же вопросы, что и дизайнер на первой встрече. В конце вы увидите свой
            профиль проекта — и мы придём на консультацию уже подготовленными.
          </p>

          <div className="mt-10 hidden lg:block space-y-2.5">
            {steps.map((s, idx) => (
              <button
                key={s.key}
                type="button"
                onClick={() => idx <= i && setI(idx)}
                className={`w-full flex items-center gap-3 text-sm text-left ${
                  idx <= i ? "text-black" : "text-neutral-400"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] shrink-0 ${
                    idx < i
                      ? "text-white border-transparent"
                      : idx === i
                        ? "border-black"
                        : "border-neutral-300"
                  }`}
                  style={idx < i ? { backgroundColor: forest } : {}}
                >
                  {idx < i ? <Check className="w-3 h-3" /> : idx + 1}
                </span>
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Правая колонка */}
        <div className="lg:col-span-8">
          <div
            className={`rounded-3xl bg-[#F5F3EE] p-6 sm:p-10 md:p-12 flex flex-col ${
              done ? "min-h-[520px]" : "h-[640px] sm:h-[700px] lg:h-[720px]"
            }`}
          >
            {/* Прогресс */}
            <div className="flex items-center gap-4">
              <div className="h-1 flex-1 rounded-full bg-black/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] krona-sheen"
                  style={{ width: `${done ? 100 : progress}%`, backgroundColor: forest }}
                />
              </div>
              <div className="text-xs tracking-[0.18em] uppercase text-neutral-500 whitespace-nowrap">
                {done ? "Готово" : `${i + 1} / ${steps.length}`}
              </div>
            </div>

            {!done ? (
              <div key={step.key} className="flex flex-col flex-1 min-h-0 krona-veil">
                <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto pr-1 -mr-1 krona-scroll">
                <div className="mt-8 text-xs tracking-[0.25em] uppercase text-neutral-500 krona-rise">
                  {step.title}
                </div>
                <h3
                  className="mt-3 text-2xl sm:text-3xl md:text-[2.1rem] font-normal max-w-xl leading-tight krona-rise"
                  style={{ animationDelay: "70ms" }}
                >
                  {step.question}
                </h3>
                {step.note && (
                  <p
                    className="mt-3 text-sm text-neutral-500 krona-rise"
                    style={{ animationDelay: "120ms" }}
                  >
                    {step.note}
                  </p>
                )}

                {/* Опции шага */}
                {step.options && (
                  <div
                    className={`mt-8 grid gap-3 ${
                      step.variant === "card"
                        ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-stretch"
                        : step.variant === "swatch"
                          ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                          : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    }`}
                  >
                    {step.options.map((opt, oi) => {
                      const active = get(step.key).includes(opt.label);
                      const blocked = !!step.max && !active && get(step.key).length >= step.max;
                      return optionButton(
                        opt,
                        active,
                        () => toggle(step.key, opt.label, step.mode ?? "multi", step.max),
                        step.variant,
                        blocked,
                        oi,
                      );
                    })}
                  </div>
                )}

                {/* Подвопросы */}
                {step.subs && (
                  <div className="mt-8 space-y-7">
                    {step.subs.map((sub) => (
                      <div key={sub.key}>
                        <div className="text-sm text-neutral-500 mb-3">{sub.label}</div>
                        <div className="flex flex-wrap gap-2.5">
                          {sub.options.map((opt, oi) => {
                            const active = get(sub.key).includes(opt.label);
                            const SubIcon = opt.icon;
                            return (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => toggle(sub.key, opt.label, sub.mode)}
                                className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm krona-rise krona-lift ${
                                  active
                                    ? "text-white border-transparent"
                                    : "bg-white border-black/10 hover:border-black/50"
                                }`}
                                style={{
                                  animationDelay: `${Math.min(oi, 12) * 30}ms`,
                                  ...(active ? { backgroundColor: forest } : {}),
                                }}
                              >
                                {SubIcon && (
                                  <SubIcon
                                    className="w-4 h-4 shrink-0 transition-transform duration-500 group-hover:scale-110"
                                    strokeWidth={1.4}
                                    style={{ color: active ? "#FFFFFF" : forest }}
                                  />
                                )}
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Загрузка файлов */}
                {step.upload && (
                  <label className="mt-6 flex items-center gap-3 rounded-2xl border border-dashed border-black/20 bg-white/60 px-5 py-4 cursor-pointer hover:border-black/50 transition">
                    <Upload className="w-5 h-5 shrink-0" style={{ color: forest }} />
                    <span className="text-sm text-neutral-600">
                      {files.length
                        ? `Прикреплено: ${files.length} файл(ов)`
                        : "Прикрепить фото, план или референсы"}
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={(e) =>
                        setFiles(Array.from(e.target.files ?? []).map((f) => f.name))
                      }
                    />
                  </label>
                )}

                {/* Свободное поле */}
                {step.free && (
                  <div className="mt-6">
                    <div className="text-sm text-neutral-500 mb-2">{step.free.label}</div>
                    {step.key === "notes" ? (
                      <textarea
                        rows={5}
                        value={texts[step.free.key] ?? ""}
                        placeholder={step.free.placeholder}
                        onChange={(e) => setTexts({ ...texts, [step.free!.key]: e.target.value })}
                        className="w-full rounded-2xl bg-white border border-black/10 px-5 py-4 text-sm outline-none focus:border-black/50 transition resize-none"
                      />
                    ) : (
                      <input
                        value={texts[step.free.key] ?? ""}
                        placeholder={step.free.placeholder}
                        onChange={(e) => setTexts({ ...texts, [step.free!.key]: e.target.value })}
                        className="w-full rounded-full bg-white border border-black/10 px-5 py-3.5 text-sm outline-none focus:border-black/50 transition"
                      />
                    )}
                  </div>
                )}
                </div>

                {/* Навигация */}
                <div className="pt-6 flex items-center justify-between gap-4">

                  <button
                    type="button"
                    onClick={() => setI(Math.max(0, i - 1))}
                    disabled={i === 0}
                    className="text-sm text-neutral-500 disabled:opacity-30"
                  >
                    ← Назад
                  </button>
                  <button
                    type="button"
                    onClick={() => setI(i + 1)}
                    disabled={!stepAnswered}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white text-sm transition disabled:opacity-30"
                    style={{ backgroundColor: graphite }}
                  >
                    {i === steps.length - 1 ? "Собрать мой профиль" : "Далее"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Итоговое резюме */
              <div className="flex-1 flex flex-col krona-veil">
                <div className="mt-8 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" strokeWidth={1.4} style={{ color: forest }} />
                  <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
                    Ваш профиль проекта
                  </span>
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-[2.1rem] font-normal max-w-xl leading-tight krona-rise">
                  Вот как мы вас{" "}
                  <span style={{ color: forest }} className="italic font-serif">
                    услышали.
                  </span>
                </h3>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {summary.map((r, ri) => (
                    <div
                      key={r.label}
                      className="bg-white rounded-2xl p-5 krona-rise krona-lift"
                      style={{ animationDelay: `${Math.min(ri, 12) * 45}ms` }}
                    >
                      <div className="text-xs text-neutral-500 flex items-center gap-2">
                        <r.icon
                          className="w-3.5 h-3.5"
                          strokeWidth={1.4}
                          style={{ color: forest }}
                        />
                        {r.label}
                      </div>
                      <div className="mt-1.5 text-sm leading-relaxed">{r.value}</div>
                    </div>
                  ))}
                  {summary.length === 0 && (
                    <div className="text-sm text-neutral-500">
                      Вы прошли ассистента без выбора — не страшно, обсудим всё на консультации.
                    </div>
                  )}
                </div>

                <p className="mt-8 text-neutral-600 leading-relaxed max-w-2xl">
                  На основе ваших ответов мы подготовим несколько решений, которые максимально
                  соответствуют вашим пожеланиям. Дизайнер получит всю информацию заранее — поэтому
                  первая консультация пройдёт предметно, без долгих уточняющих вопросов.
                </p>

                <div className="mt-8 rounded-3xl bg-white p-6 sm:p-8">
                  <div className="text-sm text-neutral-500">
                    Оставьте контакты — пришлём индивидуальные решения и расчёт стоимости
                  </div>
                  <div className="mt-4 grid sm:grid-cols-3 gap-3">
                    <input
                      placeholder="Имя"
                      className="rounded-full border border-black/10 px-5 py-3.5 text-sm outline-none focus:border-black/50 transition"
                    />
                    <input
                      placeholder="Телефон"
                      inputMode="tel"
                      className="rounded-full border border-black/10 px-5 py-3.5 text-sm outline-none focus:border-black/50 transition"
                    />
                    <a
                      href="#request"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm"
                      style={{ backgroundColor: forest }}
                    >
                      Получить проект <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="mt-3 text-xs text-neutral-500 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.4} />
                    Ответ в течение рабочего дня. Никаких звонков «просто так».
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setAns({});
                      setTexts({});
                      setFiles([]);
                      setI(0);
                    }}
                    className="text-sm text-neutral-500 underline underline-offset-4"
                  >
                    Пройти заново
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
