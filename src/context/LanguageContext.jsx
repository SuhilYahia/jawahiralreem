import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'عن المصنع',
      products: 'المنتجات',
      categories: 'التصنيفات',
      whyUs: 'لماذا نحن؟',
      contact: 'تواصل معنا',
      store: 'المتجر الرسمي',
      quickView: 'معاينة سريعة',
      close: 'إغلاق',
      menu: 'القائمة',
    },
    // Announcement
    announcement: {
      badge: 'أول مصنع تجميل بالمدينة المنورة منذ 1999م',
      text: 'عروض حصرية على باقات التوفير الملكية • شحن سريع لكافة مناطق المملكة',
      textShort: 'عروض حصرية • شحن سريع لكافة مناطق المملكة',
      cta: 'تسوقي الآن ←',
    },
    // Hero
    hero: {
      badge: 'صُنع في المدينة المنورة • أصالة وخبرة منذ عام 1999م',
      titleLine1: 'جمالك في أعماق بشرتك...',
      titleLine2: 'تمتعي بنعومة فائقة ونضارة مع روز كير وحلاوة جواهر الريم',
      subtitle: 'أول مصنع تجميل وعناية طبيعية بالمدينة المنورة. نقدم لكِ حلول إزالة الشعر الطبيعية بزيت جوز الهند النقي، ومجموعة العناية والترطيب بماء الورد والصبار بأعلى معايير الجودة العالمية.',
      shopNow: 'تسوقي الآن من المتجر الرسمي',
      exploreCatalog: 'استكشفي الكتالوج',
      whatsapp: 'تواصلي عبر واتساب',
      badgeYears: 'أكثر من ربع قرن',
      badgeYearsText: 'خبرة معتمدة بالمدينة المنورة',
      floatingBadge: 'أصالة الجمال • منذ عام 1999م',
      trust1: 'صناعة سعودية 100% بالمدينة',
      trust2: 'معتمد ومسجل لدى SFDA',
      trust3: 'شحن سريع لكافة مناطق المملكة',
    },
    // Common Actions
    actions: {
      orderNow: 'اطلبي الآن',
      orderWhatsApp: 'اطلبي عبر واتساب',
      officialStore: 'المتجر الرسمي',
      viewDetails: 'التفاصيل',
      viewAllProducts: 'استعراض كافة المنتجات',
      viewCategoryProducts: 'استعراض منتجات القسم',
      readFullStory: 'اقرأي قصة التأسيس والخط الزمني كاملاً',
      learnWhyUs: 'اكتشفي جدول المقارنة وكافة أسباب تفوقنا',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      backToHome: 'العودة للرئيسية',
      taxIncluded: 'شامل الضريبة',
      inStock: 'متوفر بالمخزن',
      searchPlaceholder: 'ابحثي عن منتج، رذاذ روز كير، حلاوة إزالة شعر...',
      sort: 'الترتيب:',
      sortPopular: 'الموصى به (الأكثر طلباً)',
      sortPriceLow: 'السعر: من الأقل للأعلى',
      sortPriceHigh: 'السعر: من الأعلى للأقل',
      sortRating: 'الأعلى تقييماً',
    },
    // Sections headers
    sections: {
      aboutBadge: 'قصة ريادة وأصالة',
      aboutTitle: 'عن مصنع وعلامة جواهر الريم',
      aboutDesc: 'أول مصنع تجميل بالمدينة المنورة يجمع بين نقاء المكونات الطبيعية وتقنيات التصنيع الحديثة',
      categoriesBadge: 'مجموعات العناية المتكاملة',
      categoriesTitle: 'تصنيفات متجر جواهر الريم',
      categoriesDesc: 'تنوع مثالي وعناية فائقة تلامس جمالكِ، تناسب جميع أنواع البشرة حتى الأكثر حساسية',
      productsBadge: 'منتجات مميزة وأصلية 100%',
      productsTitle: 'أبرز منتجات جواهر الريم الأكثر طلباً',
      productsDesc: 'اختاري منتجاتك المفضلة وتسوقي مباشرة عبر المتجر الإلكتروني الرسمي أو اطلبي فوراً عبر واتساب',
      whyUsBadge: 'معايير تفوق التوقعات',
      whyUsTitle: 'لماذا تختارين جواهر الريم؟',
      whyUsDesc: 'ثقة تمتد لأكثر من ربع قرن مبنية على الجودة ونقاء المكونات الطبيعية',
      testimonialsBadge: 'تجارب حقيقية موثقة',
      testimonialsTitle: 'ماذا تقول عميلاتنا؟',
      testimonialsDesc: 'تقييمات وآراء معتمدة من سيدات ومشاغل في مختلف أنحاء المملكة',
      faqBadge: 'إجابات فورية',
      faqTitle: 'الأسئلة الأكثر تكراراً',
      faqDesc: 'إليك إجابات وافية على أكثر الأسئلة التي تطرحها عميلاتنا قبل إتمام الطلب',
      ctaBadge: 'عناية أصيلة تنطلق من المدينة المنورة إلى منزلك',
      ctaTitle: 'جاهزة لتجربة عناية فاخرة تليق بجمالك؟',
      ctaDesc: 'اختاري ما يناسب بشرتك من مجموعة روز كير وحلاوة إزالة الشعر المغذية بزيت جوز الهند، وتسوقي الآن من متجرنا الرسمي مع شحن سريع لكافة مناطق المملكة.',
    },
    // Contact
    contact: {
      pageTitle: 'تواصل مع مصنع وعلامة جواهر الريم',
      pageSubtitle: 'سواء كان لديك استفسار شخصي، طلب لصالونك أو مشغلك النسائي، أو رغبة في الشراكة والتوزيع؛ فريقنا مستعد لخدمتك بأعلى معايير الاهتمام.',
      sendUsMessage: 'أرسلي لنا رسالتك أو استفسارك',
      formDesc: 'املئي النموذج التالي وسيتواصل معكِ مسؤول خدمة العملاء في أقرب وقت.',
      inquiryType: 'نوع الطلب أو الاستفسار:',
      types: {
        general: 'استفسار عام',
        wholesale: 'طلب جملة للمشاغل',
        product: 'استفسار عن منتج',
        support: 'متابعة طلب وشحن',
      },
      name: 'الاسم الكريم',
      phone: 'رقم الجوال',
      email: 'البريد الإلكتروني',
      city: 'المدينة أو اسم المشغل (اختياري)',
      message: 'نص الرسالة أو الاستفسار',
      sendViaWhatsApp: 'إرسال فوري عبر واتساب',
      successTitle: 'تم استلام رسالتك بنجاح!',
      successDesc: 'شكراً لتواصلك مع جواهر الريم. سيقوم فريق خدمة العميلات والمبيعات بالرد عليك في أقرب وقت خلال ساعات العمل الرسمية.',
      sendAnother: 'إرسال رسالة أخرى',
      followUpWhatsApp: 'متابعة فورية بالواتساب',
      factoryInfo: 'المعلومات الرسمية للمصنع',
      workingHours: 'ساعات العمل الرسمية:',
      workingHoursText: 'من الأحد إلى الخميس: 8:00 صباحاً – 5:00 مساءً (الجمعة والسبت عطلة للمصنع، والواتساب يعمل للطلبات)',
      factoryLocation: 'موقع المصنع:',
      cr: 'السجل التجاري:',
      platformId: 'رقم منصة الأعمال:',
      postalCode: 'الرمز البريدي:',
      openInMaps: 'فتح في خرائط Google',
    },
    // Footer
    footer: {
      tagline: 'من المدينة المنورة… نصنع الجمال بأصالة منذ عام 1999م',
      desc: 'أول مصنع سعودي متخصص في مستحضرات التجميل والعناية بالبشرة بالمدينة المنورة. نبتكر حلول الجمال الطبيعية التي تثق بها الصالونات وعميلاتنا في كافة أنحاء المملكة منذ أكثر من ربع قرن.',
      quickLinks: 'صفحات الموقع',
      factoryInfo: 'بيانات المصنع والتواصل',
      rights: 'جميع الحقوق محفوظة',
      madeInMadinah: 'صُنع في المدينة المنورة • المملكة العربية السعودية',
      whatsappSales: 'واتساب المبيعات',
      instagram: 'انستغرام',
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      categories: 'Categories',
      whyUs: 'Why Us',
      contact: 'Contact',
      store: 'Store',
      quickView: 'Quick View',
      close: 'Close',
      menu: 'Menu',
    },
    // Announcement
    announcement: {
      badge: 'First Cosmetics Factory in Madinah Since 1999',
      text: 'Exclusive offers on Royal Saving Bundles • Fast shipping across all KSA regions',
      textShort: 'Exclusive Offers • Fast Shipping Across KSA',
      cta: 'Shop Now →',
    },
    // Hero
    hero: {
      badge: 'Made in Madinah • Authentic Expertise Since 1999',
      titleLine1: 'Pure Botanical Radiance,',
      titleLine2: 'Crafted for Silky Smoothness with Rose Care & Sugar Wax',
      subtitle: 'Madinah’s first licensed cosmetic and botanical care factory. Providing pure virgin coconut hair removal wax, and natural soothing care with authentic rosewater & organic aloe vera.',
      shopNow: 'Shop Now from Official Store',
      exploreCatalog: 'Explore Catalog',
      whatsapp: 'Chat on WhatsApp',
      badgeYears: 'Over 25 Years',
      badgeYearsText: 'Certified Excellence in Madinah',
      floatingBadge: 'Authentic Beauty • Since 1999',
      trust1: '100% Saudi Made in Madinah',
      trust2: 'SFDA Approved & Registered',
      trust3: 'Fast Delivery Across All KSA',
    },
    // Common Actions
    actions: {
      orderNow: 'Order Now',
      orderWhatsApp: 'Order via WhatsApp',
      officialStore: 'Official Store',
      viewDetails: 'View Details',
      viewAllProducts: 'View All Products',
      viewCategoryProducts: 'Explore Category',
      readFullStory: 'Read Our Full Heritage & Timeline',
      learnWhyUs: 'View Comparison Chart & Quality Standards',
      send: 'Send Message',
      sending: 'Sending...',
      backToHome: 'Back to Home',
      taxIncluded: 'VAT Included',
      inStock: 'In Stock',
      searchPlaceholder: 'Search products, Rose Care spray, sugar wax...',
      sort: 'Sort by:',
      sortPopular: 'Most Popular (Recommended)',
      sortPriceLow: 'Price: Low to High',
      sortPriceHigh: 'Price: High to Low',
      sortRating: 'Highest Rated',
    },
    // Sections headers
    sections: {
      aboutBadge: 'Pioneering Heritage',
      aboutTitle: 'About Jawahir Alreem Factory & Brand',
      aboutDesc: 'Madinah’s first cosmetic factory blending pure botanical ingredients with world-class production technology',
      categoriesBadge: 'Integrated Care Collections',
      categoriesTitle: 'Jawahir Alreem Store Categories',
      categoriesDesc: 'Perfect diversity and luxurious care tailored for all skin types, even the most sensitive',
      productsBadge: '100% Authentic & Original',
      productsTitle: 'Our Best-Selling Signature Products',
      productsDesc: 'Select your preferred beauty routine and shop directly from our online store or order via WhatsApp',
      whyUsBadge: 'Standards That Exceed Expectations',
      whyUsTitle: 'Why Choose Jawahir Alreem?',
      whyUsDesc: 'Over a quarter-century of trust anchored in supreme purity and natural botanical formulations',
      testimonialsBadge: 'Verified Customer Reviews',
      testimonialsTitle: 'What Our Clients Say',
      testimonialsDesc: 'Authentic feedback and praise from beauty salons and verified customers across Saudi Arabia',
      faqBadge: 'Instant Answers',
      faqTitle: 'Frequently Asked Questions',
      faqDesc: 'Comprehensive answers to common questions about products, shipping, and wholesale orders',
      ctaBadge: 'Authentic Care from Madinah to Your Doorstep',
      ctaTitle: 'Ready for a luxurious care experience you deserve?',
      ctaDesc: 'Choose what suits your skin from our Rose Care line and coconut oil hair remover, and order today with fast nationwide delivery.',
    },
    // Contact
    contact: {
      pageTitle: 'Contact Jawahir Alreem Factory',
      pageSubtitle: 'Whether you have a personal inquiry, wholesale order for your salon, or partnership interest; our dedicated team is at your service.',
      sendUsMessage: 'Send Us a Message or Inquiry',
      formDesc: 'Fill in the form below and our customer support team will get back to you promptly.',
      inquiryType: 'Inquiry or Order Type:',
      types: {
        general: 'General Inquiry',
        wholesale: 'Wholesale for Salons',
        product: 'Product Question',
        support: 'Order & Shipping Tracking',
      },
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email Address',
      city: 'City or Salon Name (Optional)',
      message: 'Message or Inquiry Details',
      sendViaWhatsApp: 'Send Directly via WhatsApp',
      successTitle: 'Message Received Successfully!',
      successDesc: 'Thank you for reaching out to Jawahir Alreem. Our sales and support team will reply during official working hours.',
      sendAnother: 'Send Another Message',
      followUpWhatsApp: 'Instant Follow-up via WhatsApp',
      factoryInfo: 'Official Factory Credentials',
      workingHours: 'Working Hours:',
      workingHoursText: 'Sunday to Thursday: 8:00 AM – 5:00 PM (Friday & Saturday factory closed, WhatsApp active for orders)',
      factoryLocation: 'Factory Location:',
      cr: 'Commercial Reg:',
      platformId: 'Business Platform ID:',
      postalCode: 'Postal Code:',
      openInMaps: 'Open in Google Maps',
    },
    // Footer
    footer: {
      tagline: 'From Madinah… Crafting authentic beauty since 1999',
      desc: 'The first Saudi factory specialized in cosmetics and skincare in Madinah. Innovating natural beauty solutions trusted by elite salons and customers across the Kingdom for over 25 years.',
      quickLinks: 'Quick Links',
      factoryInfo: 'Factory & Contact Info',
      rights: 'All Rights Reserved',
      madeInMadinah: 'Made in Madinah • Kingdom of Saudi Arabia',
      whatsappSales: 'Sales WhatsApp',
      instagram: 'Instagram',
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('jawahir_lang') || 'ar';
  });

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('jawahir_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    if (language === 'en') {
      document.body.classList.add('font-english');
      document.body.classList.remove('font-alexandria');
    } else {
      document.body.classList.add('font-alexandria');
      document.body.classList.remove('font-english');
    }
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (!current || current[key] === undefined) {
        return path;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, isRTL, dir, toggleLanguage, setLanguage, t, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
