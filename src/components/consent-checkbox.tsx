import { Link } from "@tanstack/react-router";

/**
 * Галочка согласия на обработку персональных данных рядом с формой заявки.
 * tone="light" — для тёмных секций, tone="dark" — для светлых.
 */
export function ConsentCheckbox({
  checked,
  onChange,
  tone = "dark",
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  tone?: "light" | "dark";
  id: string;
}) {
  const text = tone === "light" ? "text-white/60" : "text-neutral-500";
  const link = tone === "light" ? "text-white/90" : "text-[#1F3A2E]";
  return (
    <label htmlFor={id} className={`flex items-start gap-3 text-xs leading-relaxed ${text}`}>
      <input
        id={id}
        type="checkbox"
        required
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-[#1F3A2E] cursor-pointer"
      />
      <span>
        Я даю{" "}
        <Link to="/consent" className={`${link} underline underline-offset-2 hover:opacity-80`}>
          согласие на обработку персональных данных
        </Link>{" "}
        и принимаю{" "}
        <Link to="/privacy" className={`${link} underline underline-offset-2 hover:opacity-80`}>
          политику конфиденциальности
        </Link>
        .
      </span>
    </label>
  );
}
