/**
 * التصنيفات الرسمية لمتجر جواهر الريم - ثنائي اللغة (AR/EN)
 */

import rosecareBanner from '../assets/images/banner-rosecare.png';
import halawaBanner from '../assets/images/banner-halawa.png';
import heroBanner from '../assets/images/banner-hero.webp';

export const categoriesData = [
  {
    id: "bundles",
    title_ar: "باقات التوفير الملكية",
    title_en: "Royal Value Bundles",
    subtitle_ar: "مجموعات العناية والنعومة المتكاملة بأفضل قيمة",
    subtitle_en: "Complete skincare & smoothness sets at exceptional value",
    description_ar: "باقات صُممت خصيصاً لتمنحك روتيناً متكاملاً للإزالة والترطيب العميق بأسعار توفيرية منافسة وضمان جودة المصنع.",
    description_en: "Specially curated bundles combining hair removal and deep hydration to grant you a comprehensive routine at unbeatable savings.",
    image: heroBanner,
    url: "https://store.jawahiralreem.sa/categories/1574327/باقات-التوفير",
    badge_ar: "الأكثر توفيراً",
    badge_en: "Best Value",
    features_ar: ["توفير حتى 20%", "روتين عناية متكامل", "منتجات أصلية معتمدة"],
    features_en: ["Up to 20% Savings", "Complete 2-Step Routine", "100% Authentic Certified"]
  },
  {
    id: "skin-care",
    title_ar: "منتجات العناية بالبشرة | روز كير",
    title_en: "Skincare Line | Rose Care",
    subtitle_ar: "جمالك في أعماق بشرتك مع خلاصة الورد الطبيعي والصبار",
    subtitle_en: "Natural glow & deep nourishment with pure rosewater and aloe vera",
    description_ar: "مجموعة روز كير النقية بماء الورد البلدي وخلاصة الصبار الطبيعي تمنح بشرتك ترطيباً مهدئاً وانتعاشاً وحيوية طوال اليوم.",
    description_en: "Pure Rose Care formulation harnessing natural rosewater and botanical aloe vera to deliver profound hydration and soothing vitality.",
    image: rosecareBanner,
    url: "https://store.jawahiralreem.sa/categories/1561221/skin-care-product",
    badge_ar: "مجموعة روز كير",
    badge_en: "Rose Care Line",
    features_ar: ["ماء ورد طبيعي", "خلاصة الصبار النقي", "ترطيب وتهدئة للبشرة الحساسة"],
    features_en: ["Natural Rosewater", "Organic Aloe Vera", "Instant Soothing for Sensitive Skin"]
  },
  {
    id: "hair-remover",
    title_ar: "حلاوة إزالة الشعر الطبيعية",
    title_en: "Natural Sugar Wax Hair Remover",
    subtitle_ar: "إزالة وترطيب في خطوة واحدة بزيت جوز الهند الطبيعي",
    subtitle_en: "Effortless root removal & hydration with virgin coconut oil",
    description_ar: "التركيبة الكلاسيكية الشهيرة منذ 1999م لإزالة الشعر من الجذور حتى أقصر الشعيرات مع نعومة حريرية وترطيب مستمر دون تهيج.",
    description_en: "The legendary formula perfected since 1999, lifting hairs from the root while bathing skin in rich coconut moisture.",
    image: halawaBanner,
    url: "https://store.jawahiralreem.sa/categories/1561222/natural-hair-remover-with-coconut-oil",
    badge_ar: "الأصالة منذ 1999م",
    badge_en: "Heritage Since 1999",
    features_ar: ["بزيت جوز الهند البكر", "إزالة من الجذور", "خالية من الكيماويات الضارة"],
    features_en: ["Virgin Coconut Oil", "Root-to-Tip Removal", "Zero Harsh Chemicals"]
  }
];
