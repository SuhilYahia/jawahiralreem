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
    rating: 5,
    reviewsCount: 124,
    url: "https://store.jawahiralreem.sa/products/روز-كير-كلاسيك-رذاذ-مرطب-للوجه-بماء-الورد-والصبار-جواهر-الريم-",
    badge_ar: "الأكثر مبيعاً",
    badge_en: "Best Seller",
    isPopular: true,
    inStock: true,
    description_ar: "رذاذ مرطب ومنعش فائق النقاء مستخلص من ماء الورد الطبيعي وخلاصة الصبار الفعالة، يعمل على تهدئة البشرة بعد إزالة الشعر أو التعرض للشمس ويعيد النضارة طوال اليوم.",
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
    name_ar: "حلاوة لازالة الشعر من جواهر الريم بزيت جوز الهند للبشرة الجافة والعادية 500 جرام",
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
    rating: 5,
    reviewsCount: 218,
    url: "https://store.jawahiralreem.sa/products/جواهر-الريم-حلاوة-إزالة-الشعر-بزيت-جوز-الهند",
    badge_ar: "الأصالة منذ 1999",
    badge_en: "Heritage Since 1999",
    isPopular: true,
    inStock: true,
    description_ar: "التركيبة الكلاسيكية الشهيرة التي وثقت بها الأجيال منذ 1999م، مطورة بزيت جوز الهند البكر. تزيل الشعر من الجذور حتى أقصر الشعيرات مع الحفاظ على مرونة ونعومة الجلد وترطيبه كالحرير.",
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
    name_ar: "باقة التوفير الملكية – مجموعة العناية والنعومة المتكاملة من روز كير وحلاوة جواهر الريم",
    name_en: "Royal Saving Bundle – Comprehensive Smoothness Routine with Rose Care & Sugar Wax",
    shortName_ar: "باقة التوفير الملكية المتكاملة",
    shortName_en: "Royal Saving Beauty Bundle",
    category: "bundles",
    categoryName_ar: "باقات التوفير",
    categoryName_en: "Value Bundles",
    price: 68.00,
    currency_ar: "ر.س",
    currency_en: "SAR",
    originalPrice: 85.00,
    image: heroBanner,
    rating: 5,
    reviewsCount: 89,
    url: "https://store.jawahiralreem.sa/categories/1574327/باقات-التوفير",
    badge_ar: "توفير 20%",
    badge_en: "Save 20%",
    isPopular: true,
    inStock: true,
    description_ar: "المجموعة المثالية لروتين العناية المتكامل: تجمع بين رذاذ روز كير بماء الورد والصبار المنعش، وعبوة حلاوة إزالة الشعر الطبيعية بزيت جوز الهند 500 جم لإزالة وتهدئة وترطيب عميق.",
    description_en: "The quintessential complete beauty ritual: combines Rose Care refreshing facial mist (165ml) and Coconut Oil natural sugar wax (500g) for flawless removal and soothing hydration.",
    benefits_ar: [
      "روتين متكامل: إزالة طبيعية ثم ترطيب فوري مهدئ",
      "توفير مالي مميز يصل إلى 20% مقارنة بالشراء المنفرد",
      "مناسبة جداً للاستخدام الشخصي أو كهدية فاخرة",
      "تغليف محكم يحافظ على فاعلية وجودة المكونات"
    ],
    benefits_en: [
      "Complete 2-step routine: natural removal followed by instant cooling hydration",
      "Substantial 20% financial saving versus buying individually",
      "Ideal for personal self-care or an elegant luxury gift",
      "Sealed packaging preserving maximum ingredient freshness"
    ],
    howToUse_ar: "استخدمي الحلاوة لإزالة الشعر، ثم رشي رذاذ روز كير فوراً لتهدئة المسام وترطيب البشرة برائحة الورد.",
    howToUse_en: "Use sugar wax for hair removal, then immediately mist Rose Care to calm pores and indulge in pure rose fragrance.",
    specs_ar: [
      { label: "المحتويات", value: "رذاذ روز كير 165 مل + حلاوة 500 جم" },
      { label: "الهدف", value: "إزالة الشعر + تهدئة وترطيب عميق" },
      { label: "القيمة المضافة", value: "توفير يصل إلى 20% على المجموعة" },
      { label: "بلد الصنع", value: "المملكة العربية السعودية (المدينة المنورة)" }
    ],
    specs_en: [
      { label: "Contents", value: "Rose Care Mist 165ml + Sugar Wax 500g" },
      { label: "Purpose", value: "Hair Removal + Deep Soothing Hydration" },
      { label: "Value", value: "20% Package Discount Included" },
      { label: "Origin", value: "Saudi Arabia (Madinah)" }
    ]
  },
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
    rating: 5,
    reviewsCount: 64,
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
  {
    id: "salon-wholesale-halawa",
    name_ar: "كرتون حلاوة جواهر الريم بزيت جوز الهند – مخصص للصالونات ومشاغل التجميل",
    name_en: "Salon Wholesale Master Carton – Jawahir Alreem Coconut Sugar Wax for Professional Salons",
    shortName_ar: "باقة المشاغل والصالونات (بالجملة)",
    shortName_en: "Professional Salon Bulk Carton",
    category: "hair-remover",
    categoryName_ar: "إزالة الشعر الطبيعية",
    categoryName_en: "Natural Hair Removal",
    price: 180.00,
    currency_ar: "ر.س",
    currency_en: "SAR",
    originalPrice: 220.00,
    image: halawaBanner,
    rating: 5,
    reviewsCount: 96,
    url: "https://store.jawahiralreem.sa/categories/1561222/natural-hair-remover-with-coconut-oil",
    badge_ar: "للصالونات والمشاغل",
    badge_en: "For Salons & Spas",
    isPopular: false,
    inStock: true,
    description_ar: "الخيار الأول والمفضل لكبرى صالونات ومشاغل التجميل في المدينة المنورة والمملكة. كرتون اقتصادي متعدد العبوات بجودة موثوقة وثابتة وتوفير مالي كبير للمشاغل المحترفة مع فواتير ضريبية معتمدة.",
    description_en: "The preferred number-one choice for elite beauty salons and spas across Saudi Arabia. Bulk carton with consistent salon-grade performance, direct factory pricing, and certified tax invoices.",
    benefits_ar: [
      "سعر جملة خاص ومباشر من المصنع للصالونات والمشاغل",
      "جودة عالية وثابتة تضمن راحة عميلاتك ورضاهن التام",
      "قوام مرن لا يلتصق بالجلد ولا يسبب التحسس",
      "توصيل سريع وتوريد دوري مستمر مع فواتير ضريبية"
    ],
    benefits_en: [
      "Direct wholesale factory pricing for salons and spas",
      "Consistent master-batch quality ensuring high client satisfaction",
      "Smooth non-sticky application that prevents irritation",
      "Reliable scheduled delivery and official tax compliance"
    ],
    howToUse_ar: "مخصصة للاستخدام الاحترافي في غرف العناية بالبشرة والمشاغل النسائية.",
    howToUse_en: "Formulated for professional beauticians and aesthetic skincare salons.",
    specs_ar: [
      { label: "الفئة المستهدفة", value: "الصالونات والمشاغل ومراكز التجميل" },
      { label: "العبوة", value: "كرتون متعدد العبوات بحجم 500 جم للعبوة" },
      { label: "الميزة", value: "أسعار جملة وتوريد دوري مستمر" },
      { label: "بلد الصنع", value: "المملكة العربية السعودية (المدينة المنورة)" }
    ],
    specs_en: [
      { label: "Target Audience", value: "Beauty salons, spas, & skin clinics" },
      { label: "Package", value: "Master carton of 500g tubs" },
      { label: "Advantage", value: "Direct wholesale rates & standing supply" },
      { label: "Origin", value: "Saudi Arabia (Madinah)" }
    ]
  }
];

export const productCategories = [
  { id: "all", name_ar: "جميع المنتجات", name_en: "All Products" },
  { id: "skin-care", name_ar: "العناية بالبشرة (روز كير)", name_en: "Skincare (Rose Care)" },
  { id: "hair-remover", name_ar: "حلاوة إزالة الشعر الطبيعية", name_en: "Natural Hair Removal" },
  { id: "bundles", name_ar: "باقات التوفير", name_en: "Value Bundles" }
];
