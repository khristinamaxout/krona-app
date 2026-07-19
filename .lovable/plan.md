## Change

Swap the top-left header logo (currently a Lucide `Leaf` icon + text «КРОНА») with the uploaded green KRONA logo image (`user-uploads://image-3.png` — dark green square with «КРОНА / Мебельная студия»).

## Steps

1. Register the uploaded image as a Lovable Asset:
   - `lovable-assets create --file /mnt/user-uploads/image-3.png --filename krona-logo.png > src/assets/krona-logo.png.asset.json`
2. In `src/routes/index.tsx` (lines ~61–62, the header logo block):
   - Import the asset JSON.
   - Replace the `<Leaf />` icon + `<span>КРОНА</span>` with a single `<img>` using the asset URL, alt="Крона — мебельная студия", sized to fit the header (h-10, w-auto, rounded-sm).
3. Leave the footer logo (lines ~646–647), all other sections, typography, layout, colors, and the `Leaf` import (still used elsewhere at line 416) untouched.

No other files change.