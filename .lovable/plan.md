## Change

Two nav tweaks in `src/routes/index.tsx` (Nav component):

1. **Enlarge the logo** — bump header height from `h-20` to `h-28`, and logo from `h-14` to `h-20 md:h-24 w-auto`. This makes the brushed «КРОНА / Мебельная студия» mark read as a proper logo rather than a small chip.

2. **Keep nav links readable across the gradient** — the links «Подбор / Проекты / Журнал» currently sit on the darker portion of the forest-green→beige gradient and go invisible. Fix:
   - Change nav link base color from `text-neutral-600` to a light warm cream (`text-[#F5F0E4]`) with `hover:text-white` — readable on the dark green side.
   - Shift the gradient stops so the beige takes over sooner on the right side (where «Отзывы / Контакты» sit), e.g. `linear-gradient(90deg, #1F3A2E 0%, #1F3A2E 30%, rgba(31,58,46,0.75) 55%, #FAFAF7 80%, #FAFAF7 100%)`, and set links on the beige side to still read (light cream will look faint on beige). To avoid the light-on-beige issue, drop the individual per-link color and instead add a subtle dark text-shadow / semi-opaque backdrop: use `text-white/90` plus a soft `[text-shadow:_0_1px_2px_rgba(0,0,0,0.35)]` utility so the labels stay legible over both green and beige regions.
   - Alternative if shadow feels heavy: extend the green further right (~70%) so all five links sit on green, and cream text stays clean; only the «Консультация» pill on the far right sits on beige.

   Going with the **extended-green** approach (cleaner, no text-shadow): gradient becomes `linear-gradient(90deg, #1F3A2E 0%, #1F3A2E 68%, rgba(31,58,46,0.6) 82%, #FAFAF7 100%)`; nav links become `text-[#EDE6D3] hover:text-white`.

3. **Leave everything else untouched** — no changes to hero, sections, footer, colors, typography, or the Consultation pill.
