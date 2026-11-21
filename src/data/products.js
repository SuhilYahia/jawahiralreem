/**
 * المنتجات الرسمية المستخرجة والموسعة لمتجر جواهر الريم - ثنائي اللغة (AR/EN)
 */

import roseCareImg from '../assets/images/rose-care-spray.webp';
import coconutHalawaImg from '../assets/images/coconut-hair-remover.webp';
import rosecareBanner from '../assets/images/banner-rosecare.png';
import halawaBanner from '../assets/images/banner-halawa.png';
import heroBanner from '../assets/images/banner-hero.webp';

export const productsData = [
  {
    id: "rose-care-spray",
    name_ar: "روز كير جواهر الريم بالصبار – رذاذ مرطب ومهدئ للوجه والبشرة بماء الورد الطبيعي 165 مل",
    name_en: "Jawahir Alreem Rose Care with Aloe Vera – Refreshing & Soothing Facial Mist 165 ml",
    shortName_ar: "رذاذ روز كير كلاسيك بماء الورد والصبار",
    shortName_en: "Rose Care Classic Rosewater & Aloe Mist",
    category: "skin-care",
    categoryName_ar: "العناية بالبشرة",
    categoryName_en: "Skincare",
    price: 55.00,
    currency_ar: "ر.س",
    currency_en: "SAR",
    originalPrice: 65.00,
    image: roseCareImg,
    url: "https://store.jawahiralreem.sa/products/روز-كير-كلاسيك-رذاذ-مرطب-للوجه-بماء-الورد-والصبار-جواهر-الريم-",
    badge_ar: "الأكثر مبيعاً",
    badge_en: "Best Seller",
    isPopular: true,
    inStock: true,
    description_ar: "رذاذ مرطب ومنعش للوجه يجمع بين ماء الورد الطبيعي والصبار لترطيب فوري ونضارة قبل أو بعد المكياج. مناسب للبشرة الحساسة وخالٍ من الكحول والبارابين",
    description_en: "An ultra-pure hydrating mist infused with natural rosewater and organic aloe vera extract. Calms sensitive skin, soothes post-hair-removal redness, and revitalizes radiance all day.",
    benefits_ar: [
      "ترطيب فوري وعميق للبشرة الجافة والمجهدة",
      "تهدئة احمرار البشرة وتخفيف التهيج بفضل الصبار النقي",
      "منعش مثالي كبرايمر قبل المكياج أو مثبت بعده",
      "خالٍ من الكحول والبارابين والمواد الكيميائية القاسية"
    ],
    benefits_en: [
      "Instant and profound hydration for tired, thirsty skin",
      "Soothes redness and calms irritation with organic aloe vera",
      "Perfect makeup primer or refreshing finish setting spray",
      "100% free from alcohol, parabens, and harsh chemicals"
    ],
    howToUse_ar: "رشي الرذاذ على الوجه والرقبة من مسافة 20 سم مع إغلاق العينين، اتركيه ليجف طبيعياً أو ربتي بلطف. يُستخدم صباحاً ومساءً أو عند الحاجة للانتعاش.",
    howToUse_en: "Hold 20 cm away from face with eyes closed, spray evenly, and let dry naturally or tap gently. Use morning and night or whenever skin needs a refreshing boost.",
    specs_ar: [
      { label: "الحجم الصافي", value: "165 مل" },
      { label: "المكونات الأساسية", value: "ماء الورد الطبيعي + خلاصة الصبار" },
      { label: "نوع البشرة", value: "مناسب لجميع أنواع البشرة، خاصة الحساسة" },
      { label: "بلد الصنع", value: "المملكة العربية السعودية (المدينة المنورة)" },
      { label: "الترخيص", value: "معتمد ومسجل لدى هيئة الغذاء والدواء (SFDA)" }
    ],
    specs_en: [
      { label: "Net Volume", value: "165 ml" },
      { label: "Key Ingredients", value: "Natural Rosewater + Aloe Vera Extract" },
      { label: "Skin Type", value: "All skin types, especially sensitive" },
      { label: "Origin", value: "Saudi Arabia (Madinah)" },
      { label: "Registration", value: "Certified by Saudi FDA (SFDA)" }
    ]
  },
  {
    id: "coconut-hair-remover",
    name_ar: "حلاوة لازالة الشعر من جواهر الريم بزيت جوز الهند للبشرة الجافة والعادية – لإزالة الشعر من الجذور مع ترطيب ونعومة 500 جرام",
    name_en: "Jawahir Alreem Natural Sugar Wax Hair Remover with Coconut Oil 500g",
    shortName_ar: "حلاوة إزالة الشعر بزيت جوز الهند 500 جم",
    shortName_en: "Coconut Oil Sugar Wax 500g",
    category: "hair-remover",
    categoryName_ar: "إزالة الشعر الطبيعية",
    categoryName_en: "Natural Hair Removal",
    price: 20.00,
    currency_ar: "ر.س",
    currency_en: "SAR",
    originalPrice: 25.00,
    image: coconutHalawaImg,
    url: "https://store.jawahiralreem.sa/products/جواهر-الريم-حلاوة-إزالة-الشعر-بزيت-جوز-الهند",
    badge_ar: "الأصالة منذ 1999",
    badge_en: "Heritage Since 1999",
    isPopular: true,
    inStock: true,
    description_ar: "حلاوة جواهر الريم بزيت جوز الهند، مزيل طبيعي للشعر من الجذور بمكونات نقية 100%. تمنحك ترطيباً فائقاً وتمنع الجفاف خصيصاً للبشرة الجافة والعادية. منتج سعودي معتمد من الغذاء والدواء وبشهادات جودة عالمية لنعومة حريرية تدوم طويلاً.",
    description_en: "The iconic traditional formula trusted since 1999, enriched with virgin coconut oil. Removes even the shortest hair from the root while moisturizing skin to silky perfection without irritation.",
    benefits_ar: [
      "إزالة كاملة للشعر من الجذور تمنح نعومة تدوم لأسابيع",
      "زيت جوز الهند يمنع جفاف البشرة ويغذيها بعد الاستخدام",
      "تقشير لطيف لخلايا الجلد الميتة وتفتيح ملمس البشرة",
      "قوام مرن وسهل التشكيل للاستخدام المنزلي والاحترافي"
    ],
    benefits_en: [
      "Total hair removal from the root delivering weeks of smoothness",
      "Virgin coconut oil locks in moisture preventing post-wax dryness",
      "Gently exfoliates dead skin cells for a radiant, soft finish",
      "Pliable, user-friendly texture for home and salon professionals"
    ],
    howToUse_ar: "خذي قطعة مناسبة من الحلاوة ودلكيها بين يديك حتى تصبح طرية، مديها باتجاه نمو الشعر ثم انزعيها بسرعة عكس اتجاه نمو الشعر.",
    howToUse_en: "Knead a portion in hands until pliable, apply smoothly in direction of hair growth, then flick off swiftly against direction of growth.",
    specs_ar: [
      { label: "الوزن الصافي", value: "500 جرام" },
      { label: "المكونات الأساسية", value: "سكر طبيعي نقي + ماء مقطر + زيت جوز الهند" },
      { label: "نوع البشرة", value: "العادية، الجافة، والمختلطة" },
      { label: "بلد الصنع", value: "المملكة العربية السعودية (المدينة المنورة)" },
      { label: "الترخيص", value: "مطابق للمواصفات السعودية ومعتمد من SFDA" }
    ],
    specs_en: [
      { label: "Net Weight", value: "500 grams" },
      { label: "Key Ingredients", value: "Pure Cane Sugar + Distilled Water + Virgin Coconut Oil" },
      { label: "Skin Type", value: "Normal, Dry, and Combination skin" },
      { label: "Origin", value: "Saudi Arabia (Madinah)" },
      { label: "Registration", value: "SFDA Certified & Saudi Standards Compliant" }
    ]
  },
  {
    id: "rosecare-bundle-saving",
    name_ar: "باقات التوفير منتجات العناية بالبشرة | جواهر الريم - مجموعة روز كير",
    name_en: "Saving Bundles Skincare Products | Jawahir Alreem - Rose Care Collection",
    shortName_ar: "باقات التوفير منتجات العناية بالبشرة",
    shortName_en: "Skincare Saving Bundles",
    category: "bundles",
    categoryName_ar: "باقات التوفير",
    categoryName_en: "Value Bundles",
    price: null,
    hidePrice: true,
    image: "https://media.zid.store/b55ee141-41bc-4121-940c-39c74f34f22b/57bad5cf-38dc-420d-8461-da8147dc9d81.jpg",
    url: "https://store.jawahiralreem.sa/categories/1574327/%D8%A8%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D9%88%D9%81%D9%8A%D8%B1-%D8%AC%D9%88%D8%A7%D9%87%D8%B1-%D8%A7%D9%84%D8%B1%D9%8A%D9%85",
    badge_ar: "باقات التوفير",
    badge_en: "Value Bundles",
    isPopular: true,
    inStock: true,
    description_ar: "تسوقي أفضل منتجات العناية بالبشرة الطبيعية من مصنع جواهر الريم بالمدينة المنورة. اكتشفي رذاذ روز كير المرطب بماء الورد الطبيعي والصبار لإعادة النضارة والترطيب اليومي لبشرتك.",
    description_en: "Shop the finest natural skincare from Jawahir Alreem Factory in Madinah. Discover Rose Care hydrating mist with natural rosewater and aloe vera for daily radiance.",
    /*
    benefits_ar: [
      "رذاذ روز كير بماء الورد الطبيعي وخلاصة الصبار النقي",
      "ترطيب فوري عميق ونضارة وحيوية تدوم طوال اليوم",
      "باقات توفير حصرية مباشرة من مصنع جواهر الريم بالمدينة المنورة",
      "منتجات معتمدة ومطابقة لأعلى معايير هيئة الغذاء والدواء SFDA"
    ],
    benefits_en: [
      "Rose Care Mist with natural rosewater and pure organic aloe vera",
      "Instant deep hydration and vibrant radiance throughout the day",
      "Exclusive value bundles directly from Jawahir Alreem factory in Madinah",
      "Certified products meeting strict SFDA pharmaceutical and cosmetic standards"
    ],
    howToUse_ar: "يُرش رذاذ روز كير على الوجه والرقبة صباحاً ومساءً أو كلما دعت الحاجة لترطيب فوري وانتعاش طبيعي.",
    howToUse_en: "Mist Rose Care over face and neck morning and evening, or whenever needed for instant pure freshness.",
    */
    specs_ar: [
      { label: "التصنيف", value: "باقات التوفير - مجموعة روز كير" },
      { label: "المكونات الأساسية", value: "ماء الورد الطبيعي + خلاصة الصبار النقي" },
      { label: "الجهة المصنعة", value: "مصنع جواهر الريم للصناعة - المدينة المنورة" },
      { label: "الاعتماد", value: "مسجل ومعتمد لدى هيئة الغذاء والدواء (SFDA)" }
    ],
    specs_en: [
      { label: "Category", value: "Value Bundles - Rose Care Collection" },
      { label: "Key Ingredients", value: "Natural Rosewater + Organic Aloe Vera" },
      { label: "Manufacturer", value: "Jawahir Alreem Industry Factory - Madinah" },
      { label: "Certification", value: "Registered & Approved by Saudi FDA (SFDA)" }
    ]
  },
  /*
  {
    id: "rosecare-duo-pack",
    name_ar: "بكج الثنائي المنعش – عبوتين من رذاذ روز كير بماء الورد الطبيعي وخلاصة الصبار",
    name_en: "Double Refresh Pack – Twin Pack of Rose Care Rosewater & Aloe Facial Mist",
    shortName_ar: "بكج ثنائي رذاذ روز كير (عبوتين)",
    shortName_en: "Twin Rose Care Mist Pack",
    category: "bundles",
    categoryName_ar: "باقات التوفير",
    categoryName_en: "Value Bundles",
    price: 95.00,
    currency_ar: "ر.س",
    currency_en: "SAR",
    originalPrice: 110.00,
    image: rosecareBanner,
    url: "https://store.jawahiralreem.sa/categories/1574327/باقات-التوفير",
    badge_ar: "عرض خاص",
    badge_en: "Special Offer",
    isPopular: false,
    inStock: true,
    description_ar: "عبوتان بحجم 165 مل من رذاذ روز كير بالصبار؛ واحدة لتسريحتك المنزلية وأخرى لحقيبتك وسفرك لتبقى بشرتك نضرة ومحمية من الجفاف أينما كنتِ.",
    description_en: "Two 165ml bottles of pure Rose Care Aloe Mist: one for your vanity desk and one for your handbag, keeping your skin radiant and refreshed on the go.",
    benefits_ar: [
      "تكفي روتينك اليومي لعدة أشهر من الترطيب",
      "حجم عملي ومريح للحمل في حقيبة اليد والسفر",
      "ترطيب وإنعاش فوري طوال ساعات النهار",
      "سعر مخفض وحصري عند شراء العبوتين معاً"
    ],
    benefits_en: [
      "Months of premium daily skincare supply",
      "Handy travel-friendly size for hydration anywhere",
      "Instant reviving relief throughout hot or dry days",
      "Exclusive bundle discount for the duo"
    ],
    howToUse_ar: "رشي رذاذ الورد والصبار بلطف على البشرة كلما شعرتِ بجفاف أو إجهاد لتجديد حيوية الوجه والرقبة.",
    howToUse_en: "Mist gently over face and neck whenever skin feels dry or fatigued to restore natural vitality.",
    specs_ar: [
      { label: "الكمية", value: "2 عبوة × 165 مل" },
      { label: "المكونات", value: "خلاصة الورد النقي والصبار الطبيعي" },
      { label: "بلد الصنع", value: "المملكة العربية السعودية (المدينة المنورة)" }
    ],
    specs_en: [
      { label: "Quantity", value: "2 Bottles × 165ml" },
      { label: "Ingredients", value: "Pure Rose Distillate + Aloe Vera Extract" },
      { label: "Origin", value: "Saudi Arabia (Madinah)" }
    ]
  },
  */
  {
    id: "salon-wholesale-halawa",
    name_ar: "منتجات إزالة الشعر",
    name_en: "Hair Removal Products",
    shortName_ar: "منتجات إزالة الشعر",
    shortName_en: "Hair Removal Products",
    subtitle_ar: "المنتجات",
    subtitle_en: "Products",
    category: "hair-remover",
    categoryName_ar: "المنتجات",
    categoryName_en: "Products",
    price: null,
    hidePrice: true,
    image: "https://media.zid.store/b55ee141-41bc-4121-940c-39c74f34f22b/cc45bd1f-8517-41d2-b170-876ae2571576.png",
    url: "https://store.jawahiralreem.sa/categories/1561222/%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A5%D8%B2%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%B4%D8%B9%D8%B1-%D8%AC%D9%88%D8%A7%D9%87%D8%B1-%D8%A7%D9%84%D8%B1%D9%8A%D9%85",
    badge_ar: "المنتجات",
    badge_en: "Products",
    isPopular: false,
    inStock: true,
    description_ar: "تسوقي حلاوة جواهر الريم الطبيعية لإزالة الشعر من الجذور. تركيبات متنوعة (الصمغ العربي، شمع النحل، زيت جوز الهند، والليمون) لتنعيم البشرة وتغذيتها ولائم كافة انواع البشرة.",
    description_en: "Shop Jawahir Alreem natural sugar wax hair remover from the roots. Diverse formulas (gum arabic, beeswax, coconut oil, lemon) to soften, nourish, and suit all skin types."
  }
];

export const productCategories = [
  { id: "all", name_ar: "جميع المنتجات", name_en: "All Products" },
  { id: "skin-care", name_ar: "العناية بالبشرة (روز كير)", name_en: "Skincare (Rose Care)" },
  { id: "hair-remover", name_ar: "حلاوة إزالة الشعر الطبيعية", name_en: "Natural Hair Removal" },
  { id: "bundles", name_ar: "باقات التوفير", name_en: "Value Bundles" }
];
