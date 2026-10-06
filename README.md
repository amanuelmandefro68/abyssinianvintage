# Abyssinia Vintage Gallery — 2-Page Coming Soon Experience
**Official Web Experience for [abyssiniavintage.com](https://abyssiniavintage.com)**

A concise, mobile-first, luxury vintage editorial Coming Soon experience styled in **deep antique walnut/polished timber and burnished gold**.

---

## ✦ Core Design & Structure (2-Page Flow)

### Screen 1: The Grand Emblem & Coming Soon Viewport
- **Deep Polished Wood Atmosphere**: Warm dark mahogany background (`#160a03` to `#261408`) with ambient amber radial glow.
- **Authentic Brand Logo**: Circular gramophone emblem in warm burnished gold (`assets/logo_gold.png`).
- **Typography Hierarchy**:
  - Latin: Google Fonts `Cinzel` & `Cormorant Garamond`
  - Ethiopic: Google Fonts `Noto Serif Ethiopic`
  - Metadata: `Plus Jakarta Sans`
- **Official Telegram CTA**: Primary luxury button linking directly to [t.me/abyssiniavintage](https://t.me/abyssiniavintage).
- **One-Click Bilingual Switch**: `EN | አማ` toggle in the header.
- **Smooth Navigation**: One-tap glide down to Page 2.

### Screen 2: Curated Archival Collection & Direct Connect
- **4-Item Mobile-Optimized Grid**:
  1. **Mamiya C330 Professional (1972)** (`assets/mamiya_c330.jpg`)
  2. **Lubitel 166 B Medium Format** (`assets/lubitel_166b.jpg`)
  3. **Spoke-Wheel Coffee Mill** (`assets/artifact_coffee_grinder.jpg` — celebrating Ethiopian coffee culture)
  4. **Antiquities of the Salon** (`assets/curated_collection.jpg` — restored rotary brass phone and tapestry armchair)
- **Interactive Lightbox Modal**: Tap any item to inspect full provenance and technical specifications with an *"Inquire on Telegram"* direct action.
- **Direct Connect Banner**: Dedicated Telegram and Instagram buttons.
- **Minimal Integrated Footer**: `abyssiniavintage.com` • `Addis Ababa, Ethiopia`.

---

## 📁 File Structure

```text
abyssinia/
├── index.html               # 2-screen semantic HTML5 landing page
├── styles.css               # Dark polished wood & burnished gold design system
├── script.js                # Bilingual translation engine & modal lightbox
├── favicon.png              # Dark wood circular favicon with gold emblem
├── favicon-32x32.png        # 32x32 favicon
├── apple-touch-icon.png     # 192x192 touch icon
├── assets/                  # Brand imagery & authentic collection photos
│   ├── logo_gold.png        # Authentic gold emblem
│   ├── logo.png             # Authentic bronze emblem
│   ├── mamiya_c330.jpg      # March 1972 Mamiya C330 camera poster
│   ├── lubitel_166b.jpg     # Vintage Lubitel 166B photograph
│   ├── artifact_coffee_grinder.jpg  # Antique flywheel coffee mill
│   └── curated_collection.jpg       # Antique telephone & tapestry chair
├── server.js                # Lightweight zero-dependency static preview server
└── README.md                # Documentation & deployment guide
```

---

## 🚀 Local Preview

The preview server is active at:
👉 **[http://localhost:8085](http://localhost:8085)**
