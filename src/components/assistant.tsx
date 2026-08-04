import { useMemo, useState } from "react";
import { ArrowRight, Check, Sparkles, Upload, Image as ImageIcon } from "lucide-react";

const forest = "#1F3A2E";
const graphite = "#1A1A1A";

type Opt = { label: string; swatch?: string; grad?: string; hint?: string };
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

const steps: Step[] = [
  {
    key: "rooms",
    title: "Помещение",
    question: "Для какого помещения создаём мебель?",
    note: "Можно выбрать несколько",
    mode: "multi",
    options: o([
      "🏠 Кухня",
      "🛋️ Гостиная",
      "🛏️ Спальня",
      "👶 Детская",
      "👔 Кабинет",
      "👗 Гардеробная",
      "🚪 Прихожая",
      "🧺 Постирочная",
      "🛁 Ванная",
      "🍷 Домашний бар",
      "📚 Библиотека",
      "🏢 Офис",
      "🍽️ Столовая",
      "☕ Кофейная зона",
      "📺 ТВ-зона",
      "🪟 Лоджия / балкон",
      "✨ Другое",
    ]),
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
        options: o([
          "⬜ Прямоугольное",
          "◻️ Квадратное",
          "🔺 Сложная планировка",
          "🧱 Есть ниши",
          "🪟 Панорамные окна",
          "🚪 Несколько дверей",
          "📐 Не знаю",
        ]),
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
    note: "Можно выбрать несколько",
    mode: "multi",
    variant: "card",
    options: [
      { label: "Современный", grad: "linear-gradient(135deg,#D9D4CB,#8E8B84)", hint: "Чистые линии, спокойный тон" },
      { label: "Минимализм", grad: "linear-gradient(135deg,#F2F0EB,#C9C5BC)", hint: "Ничего лишнего" },
      { label: "Неоклассика", grad: "linear-gradient(135deg,#EFE7DA,#B9A78C)", hint: "Мягкая классика, филёнка" },
      { label: "Лофт", grad: "linear-gradient(135deg,#6E6862,#2E2B28)", hint: "Металл, бетон, дерево" },
      { label: "Скандинавский", grad: "linear-gradient(135deg,#FAF7F0,#D7C9AE)", hint: "Свет и светлое дерево" },
      { label: "Japandi", grad: "linear-gradient(135deg,#E4DDD1,#7F7A6C)", hint: "Японская сдержанность" },
      { label: "Контемпорари", grad: "linear-gradient(135deg,#DCD8D2,#6F7A72)", hint: "Актуально и вне моды" },
      { label: "Классика", grad: "linear-gradient(135deg,#EDE3D2,#9C7F5C)", hint: "Симметрия, массив" },
      { label: "Ар-деко", grad: "linear-gradient(135deg,#2C2A28,#B79A5B)", hint: "Графика и латунь" },
      { label: "Прованс", grad: "linear-gradient(135deg,#F5F1E6,#C4CDBD)", hint: "Тёплый винтаж" },
      { label: "Хай-тек", grad: "linear-gradient(135deg,#C9CED2,#3A4046)", hint: "Глянец, стекло, металл" },
      { label: "Эко", grad: "linear-gradient(135deg,#E7E3D5,#5C7355)", hint: "Дерево и растения" },
      { label: "Средиземноморский", grad: "linear-gradient(135deg,#F3EFE4,#8FA9B4)", hint: "Свет, камень, синева" },
      { label: "Американская классика", grad: "linear-gradient(135deg,#E6E0D4,#4C5A55)", hint: "Крашеная филёнка" },
      { label: "Не знаю — помогите подобрать", grad: "linear-gradient(135deg,#1F3A2E,#6C8A78)", hint: "Подберём вместе" },
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
    options: o([
      "💰 Уложиться в бюджет",
      "✨ Красивый внешний вид",
      "🛠 Максимальная надёжность",
      "👶 Безопасность для детей",
      "🧹 Лёгкость ухода",
      "📦 Вместительность",
      "📐 Использовать каждый сантиметр",
      "🚀 Быстрое изготовление",
      "🌱 Экологичные материалы",
      "🎯 Индивидуальный дизайн",
      "💡 Современная фурнитура",
      "🏡 Чтобы мебель идеально вписалась в интерьер",
    ]),
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
    options: o([
      "📷 Фото помещения",
      "📐 План или обмеры",
      "🖼 Референсы из Pinterest",
      "📄 Дизайн-проект",
      "✨ Пока ничего нет",
    ]),
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
  const done = i >= steps.length;
  const step = steps[i];
  const progress = Math.round((Math.min(i, steps.length) / steps.length) * 100);

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

  const summary = [
    { label: "🏠 Помещение", value: get("rooms").join(" · ") },
    { label: "🪑 Мебель", value: get("furniture").join(" · ") },
    {
      label: "📐 Пространство",
      value: [get("area")[0], get("ceiling")[0], ...get("shape")].filter(Boolean).join(" · "),
    },
    { label: "🎨 Стиль", value: get("style").join(" · ") },
    { label: "🌈 Цвета", value: get("colors").join(" · ") },
    { label: "🌳 Материалы", value: get("materials").join(" · ") },
    { label: "⭐ Главное для вас", value: get("important").join(" · ") },
    { label: "💰 Бюджет", value: get("budget")[0] ?? "" },
    { label: "🗓 Сроки", value: get("timing")[0] ?? "" },
    {
      label: "👨‍👩‍👧 Кто пользуется",
      value: [get("users")[0], get("kids")[0] && `дети: ${get("kids")[0]}`, ...get("pets")]
        .filter(Boolean)
        .join(" · "),
    },
    { label: "📎 Материалы от вас", value: [...get("inspiration"), ...files].join(" · ") },
    { label: "✍️ Пожелания", value: texts["notes"] ?? "" },
  ].filter((r) => r.value);

  const optionButton = (
    opt: Opt,
    active: boolean,
    onClick: () => void,
    variant: Step["variant"],
    disabled?: boolean,
  ) => {
    if (variant === "card") {
      return (
        <button
          key={opt.label}
          type="button"
          onClick={onClick}
          className={`group relative text-left rounded-2xl overflow-hidden border transition bg-white ${
            active ? "border-transparent ring-2" : "border-black/10 hover:border-black/40"
          }`}
          style={active ? { boxShadow: `0 0 0 2px ${forest}` } : {}}
        >
          <div className="h-24 sm:h-28 w-full" style={{ background: opt.grad }} />
          <div className="p-4">
            <div className="text-sm leading-snug">{opt.label}</div>
            {opt.hint && (
              <div className="mt-1 text-xs text-neutral-500 leading-snug">{opt.hint}</div>
            )}
          </div>
          {active && (
            <span
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
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
          className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 text-left transition ${
            active ? "border-transparent" : "border-black/10 hover:border-black/40"
          }`}
          style={active ? { boxShadow: `0 0 0 2px ${forest}` } : {}}
        >
          <span
            className="w-8 h-8 rounded-full border border-black/10 shrink-0"
            style={{ background: opt.swatch }}
          />
          <span className="text-sm min-w-0">{opt.label}</span>
          {active && <Check className="w-4 h-4 ml-auto shrink-0" style={{ color: forest }} />}
        </button>
      );
    }
    return (
      <button
        key={opt.label}
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`px-5 py-3 rounded-full border text-sm text-left sm:text-center transition disabled:opacity-35 ${
          active
            ? "text-white border-transparent"
            : "bg-white border-black/10 hover:border-black/50"
        }`}
        style={active ? { backgroundColor: forest } : {}}
      >
        {opt.label}
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
            Мы задаём те же вопросы, что и дизайнер на первой встрече. В конце вы
            увидите свой профиль проекта — и мы придём на консультацию уже
            подготовленными.
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
          <div className="rounded-3xl bg-[#F5F3EE] p-6 sm:p-10 md:p-12 min-h-[520px] flex flex-col">
            {/* Прогресс */}
            <div className="flex items-center gap-4">
              <div className="h-1 flex-1 rounded-full bg-black/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${done ? 100 : progress}%`, backgroundColor: forest }}
                />
              </div>
              <div className="text-xs tracking-[0.18em] uppercase text-neutral-500 whitespace-nowrap">
                {done ? "Готово" : `${i + 1} / ${steps.length}`}
              </div>
            </div>

            {!done ? (
              <div key={step.key} className="flex flex-col flex-1 animate-fade-in">
                <div className="mt-8 text-xs tracking-[0.25em] uppercase text-neutral-500">
                  {step.title}
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-[2.1rem] font-normal max-w-xl leading-tight">
                  {step.question}
                </h3>
                {step.note && (
                  <p className="mt-3 text-sm text-neutral-500">{step.note}</p>
                )}

                {/* Опции шага */}
                {step.options && (
                  <div
                    className={`mt-8 grid gap-3 ${
                      step.variant === "card"
                        ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                        : step.variant === "swatch"
                          ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                          : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    }`}
                  >
                    {step.options.map((opt) => {
                      const active = get(step.key).includes(opt.label);
                      const blocked =
                        !!step.max && !active && get(step.key).length >= step.max;
                      return optionButton(
                        opt,
                        active,
                        () => toggle(step.key, opt.label, step.mode ?? "multi", step.max),
                        step.variant,
                        blocked,
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
                          {sub.options.map((opt) => {
                            const active = get(sub.key).includes(opt.label);
                            return (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => toggle(sub.key, opt.label, sub.mode)}
                                className={`px-4 py-2.5 rounded-full border text-sm transition ${
                                  active
                                    ? "text-white border-transparent"
                                    : "bg-white border-black/10 hover:border-black/50"
                                }`}
                                style={active ? { backgroundColor: forest } : {}}
                              >
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
                        onChange={(e) =>
                          setTexts({ ...texts, [step.free!.key]: e.target.value })
                        }
                        className="w-full rounded-2xl bg-white border border-black/10 px-5 py-4 text-sm outline-none focus:border-black/50 transition resize-none"
                      />
                    ) : (
                      <input
                        value={texts[step.free.key] ?? ""}
                        placeholder={step.free.placeholder}
                        onChange={(e) =>
                          setTexts({ ...texts, [step.free!.key]: e.target.value })
                        }
                        className="w-full rounded-full bg-white border border-black/10 px-5 py-3.5 text-sm outline-none focus:border-black/50 transition"
                      />
                    )}
                  </div>
                )}

                {/* Навигация */}
                <div className="mt-auto pt-10 flex items-center justify-between gap-4">
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
              <div className="flex-1 flex flex-col animate-fade-in">
                <div className="mt-8 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" style={{ color: forest }} />
                  <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
                    Ваш профиль проекта
                  </span>
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-[2.1rem] font-normal max-w-xl leading-tight">
                  Вот как мы вас{" "}
                  <span style={{ color: forest }} className="italic font-serif">
                    услышали.
                  </span>
                </h3>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {summary.map((r) => (
                    <div key={r.label} className="bg-white rounded-2xl p-5">
                      <div className="text-xs text-neutral-500">{r.label}</div>
                      <div className="mt-1.5 text-sm leading-relaxed">{r.value}</div>
                    </div>
                  ))}
                  {summary.length === 0 && (
                    <div className="text-sm text-neutral-500">
                      Вы прошли ассистента без выбора — не страшно, обсудим всё на
                      консультации.
                    </div>
                  )}
                </div>

                <p className="mt-8 text-neutral-600 leading-relaxed max-w-2xl">
                  На основе ваших ответов мы подготовим несколько решений, которые
                  максимально соответствуют вашим пожеланиям. Дизайнер получит всю
                  информацию заранее — поэтому первая консультация пройдёт предметно,
                  без долгих уточняющих вопросов.
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
                    <ImageIcon className="w-3.5 h-3.5" />
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
