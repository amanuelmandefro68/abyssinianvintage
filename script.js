/**
 * ABYSSINIA VINTAGE GALLERY — OFFICIAL JAVASCRIPT
 * Domain: abyssiniavintage.com
 * Features: Bilingual Translation Engine (EN / አማ),
 *           Artifact Lightbox Dossier, Telegram Integrations.
 */

// ============================================================================
// 1. BILINGUAL TRANSLATION DICTIONARY
// ============================================================================
const TRANSLATIONS = {
  en: {
    "header.location": "Addis Ababa • Est. 2018",

    "hero.monogram": "ADDIS ABABA • EST. 2018",
    "hero.eyebrow": "GALLERY OF TIMELESS CURIOS & RARE INSTRUMENTS",
    "hero.title": "ABYSSINIA VINTAGE",
    "hero.comingSoon": "COMING SOON",
    "hero.narrative": "A new chapter is about to unfold. Preserving mechanical soul, vintage photography, and the enduring heritage of Addis Ababa.",
    "hero.ctaTelegram": "Join Official Telegram",
    "hero.ctaArchive": "View Curated Archive ↓",
    "hero.scrollLabel": "PAGE 02 • THE ARCHIVE",

    "archive.tag": "EXHIBITION PREVIEW • 02",
    "archive.title": "Curated Archival Collection",
    "archive.desc": "Authentic vintage cameras, Ethiopian coffee antiquities, and living salon pieces. Tap any object to inspect provenance.",
    "archive.inspect": "Inspect ↗",

    "archive.c1Origin": "JAPAN • MARCH 1972",
    "archive.c1Title": "Mamiya C330 Professional",
    "archive.c1Desc": "Classic Twin Lens Reflex system with interchangeable optics and precision bellows.",

    "archive.c2Origin": "LOMO OPTICS • CIRCA 1980",
    "archive.c2Title": "Lubitel 166 B Medium Format",
    "archive.c2Desc": "Iconic Soviet medium format TLR with waist-level finder and crisp T-22 lens.",

    "archive.c3Origin": "CAST IRON • EARLY 20TH C.",
    "archive.c3Title": "Spoke-Wheel Coffee Mill",
    "archive.c3Desc": "Monumental mechanical tribute celebrating Ethiopian Arabica coffee heritage.",

    "archive.c4Origin": "SALON ARTIFACTS • ADDIS ABABA",
    "archive.c4Title": "Antiquities of the Salon",
    "archive.c4Desc": "Hand-carved brass rotary telephone and French Aubusson floral needlepoint armchair.",

    "connect.title": "Stay Connected via Telegram",
    "connect.desc": "Get direct notification when private catalog drops and official gallery doors open.",

    "footer.copyright": "© 2018–2026 Abyssinia Vintage Gallery. Addis Ababa, Ethiopia.",
    "footer.top": "↑ Top"
  },

  am: {
    "header.location": "አዲስ አበባ • ከ 2018 ጀምሮ",

    "hero.monogram": "አዲስ አበባ • ከ 2018 ጀምሮ",
    "hero.eyebrow": "የጥንታዊ ካሜራዎች እና ብርቅዬ ቅርሶች ጋለሪ",
    "hero.title": "አቢሲንያ ቪንቴጅ ጋለሪ",
    "hero.comingSoon": "በቅርብ ቀን ይጠብቁን",
    "hero.narrative": "አዲስ ምዕራፍ ሊጀመር ነው። የጥንታዊ ካሜራዎች፣ የታሪክ ቅርሶች እና የውበት መገለጫዎች ጋለሪ በቅርቡ ይከፈታል።",
    "hero.ctaTelegram": "የቴሌግራም ቻናላችንን ይቀላቀሉ",
    "hero.ctaArchive": "የተመረጡ ቅርሶች ↓",
    "hero.scrollLabel": "ገጽ 02 • ቅርሶች",

    "archive.tag": "የኤግዚቢሽን ቅድመ-ዕይታ • 02",
    "archive.title": "የተመረጡ ቅርሶች ስብስብ",
    "archive.desc": "ኦሪጅናል ጥንታዊ ካሜራዎች፣ የኢትዮጵያ የቡና ባህል ቅርሶች እና የሳሎን ጌጦች። ዝርዝሩን ለማየት እቃውን ይንኩ።",
    "archive.inspect": "ዝርዝር ↗",

    "archive.c1Origin": "ጃፓን • መጋቢት 1972",
    "archive.c1Title": "ማሚያ ሲ330 ፕሮፌሽናል",
    "archive.c1Desc": "ታዋቂው ባለሁለት ሌንስ ሪፍሌክስ (TLR) ካሜራ ከተለዋዋጭ ሌንሶች ጋር።",

    "archive.c2Origin": "ሎሞ ኦፕቲክስ • 1980",
    "archive.c2Title": "ሉቢቴል 166 ቢ ካሜራ",
    "archive.c2Desc": "የሶቪየት ኅብረት መካከለኛ ፎርማት ካሜራ ከላይ በሚታይ መስታወት።",

    "archive.c3Origin": "የጠጠረ ብረት • 20ኛው መ/ክ/ዘ",
    "archive.c3Title": "ባለ መንኮራኩር የቡና መፍጫ",
    "archive.c3Desc": "የኢትዮጵያን ታላቅ የአረቢካ ቡና ባህል የሚያንፀባርቅ ጥንታዊ መፍጫ።",

    "archive.c4Origin": "የሳሎን ቅርሶች • አዲስ አበባ",
    "archive.c4Title": "የሳሎን ድንቅ ቅርሶች",
    "archive.c4Desc": "በእንጨትና ናስ የተሰራ ጥንታዊ ስልክ እና በአበባ ጥልፍ ያጌጠ ወንበር።",

    "connect.title": "በቴሌግራም ይከታተሉን",
    "connect.desc": "ጋለሪያችን ለህዝብ ሲከፈት እና አዳዲስ ቅርሶች ሲመጡ ቀድመው መረጃ ያግኙ።",

    "footer.copyright": "© 2018–2026 አቢሲንያ ቪንቴጅ ጋለሪ። አዲስ አበባ፣ ኢትዮጵያ።",
    "footer.top": "↑ ወደ ላይ"
  }
};

// ============================================================================
// 2. PROVENANCE DOSSIERS (LIGHTBOX)
// ============================================================================
const ARTIFACT_DOSSIERS = {
  mamiya: {
    img: "assets/mamiya_c330.jpg",
    tag_en: "ARCHIVAL DOSSIER • REF. AV-1972",
    tag_am: "የቅርስ ማህደር • ማጣቀሻ AV-1972",
    title_en: "Mamiya C330 Professional Twin Lens Reflex",
    title_am: "ማሚያ ሲ330 ፕሮፌሽናል ባለሁለት ሌንስ ካሜራ",
    desc_en: "Manufactured in March 1972 in Tokyo, Japan. Known as the crown jewel of twin-lens reflex systems, featuring interchangeable bellow-focus lenses and rock-solid mechanical construction. Serial No. 726148.",
    desc_am: "በመጋቢት 1972 ቶኪዮ፣ ጃፓን የተሰራ። በዓለም አቀፍ ደረጃ በፎቶግራፍ አንሺዎች ዘንድ የሚደነቅ፣ ተለዋዋጭ ሌንሶች ያሉት እና በሜካኒክ ጥንካሬው ወደር የማይገኝለት ካሜራ። መለያ ቁጥር፡ 726148።",
    specs_en: [
      { k: "Model", v: "Mamiya C330 Professional" },
      { k: "Year & Origin", v: "March 1972 • Japan" },
      { k: "Format", v: "120 / 220 Film (6x6 cm Square)" },
      { k: "Shutter", v: "Mechanical Leaf Shutter" },
      { k: "Serial Number", v: "No. 726148" },
      { k: "Condition", v: "Conservation Grade A+" }
    ],
    specs_am: [
      { k: "ሞዴል", v: "ማሚያ ሲ330 ፕሮፌሽናል" },
      { k: "የተሰራበት ዓመት", v: "መጋቢት 1972 • ጃፓን" },
      { k: "የፊልም አይነት", v: "120 / 220 (6x6 ሳ.ሜ)" },
      { k: "የሻተር አይነት", v: "ሜካኒካል" },
      { k: "መለያ ቁጥር", v: "No. 726148" },
      { k: "ይዘት", v: "በከፍተኛ ጥንቃቄ የተጠበቀ" }
    ]
  },

  lubitel: {
    img: "assets/lubitel_166b.jpg",
    tag_en: "ARCHIVAL DOSSIER • REF. AV-166B",
    tag_am: "የቅርስ ማህደር • ማጣቀሻ AV-166B",
    title_en: "LOMO Lubitel 166 B Medium Format",
    title_am: "ሎሞ ሉቢቴል 166 ቢ መካከለኛ ፎርማት ካሜራ",
    desc_en: "Produced by the Leningrad Optical Mechanical Association (LOMO). Renowned for its lightweight textured bakelite body, top-down waist level ground glass finder, and high-contrast triplet T-22 lens.",
    desc_am: "በሌኒንግራድ ኦፕቲካል ሜካኒካል ማህበር (ሎሞ) የተመረተ። ክብደቱ ቀላል በሆነው የቤከላይት አካሉ፣ ከላይ በሚታየው የፈላጊ መስታወት እና ጥርት ባለ 75 ሚሜ ሌንሱ የሚታወቅ ድንቅ የፊልም ካሜራ።",
    specs_en: [
      { k: "Model", v: "Lubitel 166 B (Любитель)" },
      { k: "Era", v: "Circa 1980" },
      { k: "Lens", v: "T-22 75mm f/4.5 Triplet" },
      { k: "Focusing", v: "Geared Dual-Lens Coupled" },
      { k: "Film", v: "120 Roll Film (12 Exposures)" }
    ],
    specs_am: [
      { k: "ሞዴል", v: "ሉቢቴል 166 ቢ" },
      { k: "ዘመን", v: "በ1980 አካባቢ" },
      { k: "ሌንስ", v: "ቲ-22 75 ሚሜ f/4.5" },
      { k: "ማስተካከያ", v: "ባለሁለት ሌንስ" },
      { k: "ፊልም", v: "120 ሮል ፊልም" }
    ]
  },

  coffee: {
    img: "assets/artifact_coffee_grinder.jpg",
    tag_en: "ARCHIVAL DOSSIER • REF. AV-BUNNA",
    tag_am: "የቅርስ ማህደር • ማጣቀሻ AV-ቡና",
    title_en: "Cast-Iron Flywheel Coffee Mill",
    title_am: "ጥንታዊ ባለ መንኮራኩር የቡና መፍጫ",
    desc_en: "A magnificent early 20th-century manual coffee mill honoring Ethiopian coffee traditions. Heavy cast iron spoke flywheel provides smooth rotary torque, with embossed gilt lettering.",
    desc_am: "የኢትዮጵያን ጥንታዊ የቡና ባህል የሚያንፀባርቅ ድንቅ የ20ኛው መቶ ክፍለ ዘመን የእጅ መፍጫ። በጠንካራ ብረት እና መንኮራኩር የተሰራ፣ ወርቃማ ቅርጽ ያረፈበት እና ዘመናትን የተሻገረ የጥበብ እቃ።",
    specs_en: [
      { k: "Object", v: "Flywheel Manual Coffee Mill" },
      { k: "Material", v: "Forged Cast Iron & Aged Gilding" },
      { k: "Origin", v: "Addis Ababa, Ethiopia" },
      { k: "Condition", v: "Operational & Restored" }
    ],
    specs_am: [
      { k: "የእቃው አይነት", v: "ባለ መንኮራኩር የቡና መፍጫ" },
      { k: "ጥሬ እቃ", v: "የጠጠረ ብረትና ወርቃማ ቅብ" },
      { k: "መገኛ", v: "አዲስ አበባ፣ ኢትዮጵያ" },
      { k: "ሁኔታ", v: "በሙሉ አቅም የሚሰራ" }
    ]
  },

  living: {
    img: "assets/curated_collection.jpg",
    tag_en: "ARCHIVAL DOSSIER • REF. AV-LIVING",
    tag_am: "የቅርስ ማህደር • ማጣቀሻ AV-ሳሎን",
    title_en: "Curated Salon Antiquities",
    title_am: "የሳሎን ጥንታዊ ድንቅ ቅርሶች ስብስብ",
    desc_en: "A dialogue of living history featuring a polished mahogany rotary brass telephone alongside a classic French tapestry floral needlepoint armchair with carved cabriole legs.",
    desc_am: "ታሪክን ወደ ህይወት የሚመልስ ውብ ስብስብ፤ በእንጨትና ናስ የተሰራ ጥንታዊ የመደወያ ስልክ እና በአበባ ጥልፍ ያጌጠ ባለ ጽጌረዳ የሳሎን ወንበር በአንድነት የቀረበበት።",
    specs_en: [
      { k: "Ensemble", v: "Brass Rotary Phone & Tapestry Chair" },
      { k: "Woods", v: "Solid Walnut, Mahogany & Teak" },
      { k: "Textile", v: "Hand-Woven Needlepoint Tapestry" },
      { k: "Provenance", v: "Private Collection, Addis Ababa" }
    ],
    specs_am: [
      { k: "ስብስብ", v: "ጥንታዊ ስልክ እና የተጠለፈ ወንበር" },
      { k: "እንጨት", v: "ዋልነት፣ ማሆጋኒ እና ቲክ" },
      { k: "ጨርቅ", v: "በእጅ የተጠለፈ የአበባ ጌጥ" },
      { k: "መገኛ", v: "የግል ሰብሳቢ፣ አዲስ አበባ" }
    ]
  }
};

// ============================================================================
// 3. APPLICATION STATE & INITIALIZATION
// ============================================================================
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initModalLightbox();
  initSmoothScroll();
});

// ============================================================================
// 4. BILINGUAL LANGUAGE ENGINE
// ============================================================================
function initLanguage() {
  const savedLang = localStorage.getItem('av_preferred_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'am')) {
    currentLang = savedLang;
  } else {
    currentLang = 'en';
  }

  applyLanguage(currentLang);

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'am' : 'en';
      localStorage.setItem('av_preferred_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  const enOpt = document.querySelector('.lang-opt.lang-en');
  const amOpt = document.querySelector('.lang-opt.lang-am');
  if (enOpt && amOpt) {
    if (lang === 'en') {
      enOpt.classList.add('active');
      amOpt.classList.remove('active');
    } else {
      enOpt.classList.remove('active');
      amOpt.classList.add('active');
    }
  }

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
}

// ============================================================================
// 5. LIGHTBOX MODAL
// ============================================================================
function initModalLightbox() {
  const modal = document.getElementById('artifact-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const contentTarget = document.getElementById('modal-content-target');

  if (!modal || !contentTarget) return;

  const cards = document.querySelectorAll('[data-modal]');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const modalKey = card.getAttribute('data-modal');
      const dossier = ARTIFACT_DOSSIERS[modalKey];
      if (!dossier) return;

      renderModalContent(dossier, contentTarget);
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function renderModalContent(dossier, container) {
  const isAm = currentLang === 'am';
  const tag = isAm ? dossier.tag_am : dossier.tag_en;
  const title = isAm ? dossier.title_am : dossier.title_en;
  const desc = isAm ? dossier.desc_am : dossier.desc_en;
  const specs = isAm ? dossier.specs_am : dossier.specs_en;

  let specsHtml = '';
  specs.forEach(s => {
    specsHtml += `
      <li>
        <span class="spec-name">${s.k}</span>
        <span class="spec-val">${s.v}</span>
      </li>
    `;
  });

  container.innerHTML = `
    <div class="modal-photo-col">
      <img src="${dossier.img}" alt="${title}">
    </div>
    <div class="modal-info-col">
      <span class="modal-tag">${tag}</span>
      <h3 class="modal-title">${title}</h3>
      <p class="modal-desc">${desc}</p>
      <ul class="modal-specs-list">
        ${specsHtml}
      </ul>
      <a href="https://t.me/abyssiniavintage" target="_blank" rel="noopener noreferrer" class="gold-cta-btn primary-telegram">
        ${isAm ? 'በቴሌግራም ስለ ቅርሱ ይጠይቁ ↗' : 'Inquire on Telegram ↗'}
      </a>
    </div>
  `;
}

// ============================================================================
// 6. SMOOTH SCROLL
// ============================================================================
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
