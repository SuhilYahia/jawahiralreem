/**
 * الإعدادات المركزية - جواهر الريم | Jawahir Alreem
 */

import logoDesktop from '../assets/logo/logo-desktop.png';
import logoMobile from '../assets/logo/logo-mobile.png';
import brandSeal from '../assets/logo/brand-seal.jpg';

export const siteConfig = {
  name: "جواهر الريم | Jawahir Alreem",
  storeNameArabic: "جواهر الريم",
  tagline: "من المدينة المنورة… نصنع الجمال بأصالة منذ عام 1999م",
  subTagline: "حلول إزالة الشعر ونعومة البشرة بمنتجات موثوقة ومصنعة بأعلى معايير الجودة العالمية",
  establishedYear: 1999,
  yearsOfExperience: new Date().getFullYear() - 1999,

  storeUrl: "https://store.jawahiralreem.sa/",
  whatsappNumber: "+966543321430",
  whatsappUrl: "https://wa.me/966543321430",
  phone: "+966 54 332 1430",
  phoneCallUrl: "tel:+966543321430",
  email: "jawahiralreem30@gmail.com",

  commercialRegistration: "4650027795",
  businessPlatformId: "0000332419",
  address: "المدينة المنورة، المنطقة الصناعية DRDA7902، 4568، 42521، المملكة العربية السعودية",
  googleMapsUrl: "https://maps.google.com/?q=24.4686,39.6142",
  postalCode: "42521",
  workingHours: "من الأحد إلى الخميس: 8:00 صباحاً – 5:00 مساءً",

  logos: {
    desktop: logoDesktop,
    desktopWidth: 120,
    mobile: logoMobile,
    mobileWidth: 78,
    seal: brandSeal,
  },

  social: {
    instagram: "https://instagram.com/jawahiralreem",
    tiktok: "https://tiktok.com/@jawahiralreem",
    twitter: "",
    snapchat: "",
    facebook: ""
  },

  seo: {
    title: "جواهر الريم | الموقع الرسمي لمصنع مستحضرات التجميل والعناية بالمدينة المنورة",
    description: "الموقع الرسمي لعلامة جواهر الريم - مصنع سعودي رائد متخصص في مستحضرات التجميل، مجموعة روز كير بماء الورد والصبار، وحلاوة إزالة الشعر الطبيعية بزيت جوز الهند منذ 1999م.",
    keywords: "جواهر الريم, روز كير, حلاوة إزالة الشعر, ماء الورد والصبار, زيت جوز الهند, المدينة المنورة, مصنع تجميل سعودي, عناية بالبشرة",
  },

  navigation: [
    { label: "الرئيسية", href: "/" },
    { label: "عن جواهر الريم", href: "/about" },
    { label: "المنتجات", href: "/products" },
    { label: "التصنيفات", href: "/categories" },
    { label: "لماذا نحن؟", href: "/why-us" },
    { label: "تواصل معنا", href: "/contact" },
  ],

  badges: [
    { label: "صناعة سعودية 100%", desc: "مصنع بالمدينة المنورة" },
    { label: "اعتماد SFDA", desc: "مطابق لمواصفات الغذاء والدواء" },
    { label: "شحن سريع لكافة المناطق", desc: "توصيل لجميع مدن المملكة" },
    { label: "ضمان أصالة وجودة", desc: "خبرة متوارثة منذ 1999م" }
  ]
};
