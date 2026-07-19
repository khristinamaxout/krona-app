## Change

Reframe the top-left «КРОНА» logo and restyle the nav bar.

1. **Extract the logo from its green square** — use `imagegen--edit_image` on `src/assets/krona-logo.png` (via its asset pointer) to remove the dark-green background and keep only the artistic brushed «КРОНА / Мебельная студия» mark in its cream/beige ink. Save as a new transparent PNG asset `src/assets/krona-logo-mark.png` and upload via `lovable-assets create` → `.asset.json` pointer.

2. **Swap the header logo** in `src/routes/index.tsx` (Nav block, ~lines 61–62):
   - Replace the current `<img>` (green square asset) with the new transparent mark.
   - Increase size (e.g. `h-14 w-auto`, remove `rounded-sm`) so the logo reads clearly and is no longer boxed.

3. **Restyle the nav background** — same Nav wrapper:
   - Replace the current solid background with a horizontal gradient going from the deep forest green (existing `forest` token `#1F3A2E`) on the left into the current beige/off-white (`#FAFAF7`) on the right, e.g. `background: linear-gradient(90deg, #1F3A2E 0%, #1F3A2E 18%, #FAFAF7 55%)`.
   - Ensure nav link text on the beige side stays graphite (current color) — no changes needed since links sit to the right.
   - Logo sits on the green portion; since the extracted mark is cream/beige ink, it reads naturally against the deep green.

4. **Leave everything else untouched** — footer logo, all sections, typography, colors, layout, and the `Leaf` import remain unchanged.

## Technical notes

- `imagegen--edit_image` with `transparent_background: true` and prompt to isolate the brushed logo mark; target `.png`.
- Only files touched: new `src/assets/krona-logo-mark.png.asset.json` + edits inside the Nav component in `src/routes/index.tsx`.
