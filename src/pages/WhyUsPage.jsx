import { featuresData, testimonialsData, partnersData } from '../data/features';
import PageHeader from '../components/common/PageHeader';
import SectionHeader from '../components/common/SectionHeader';
import FeatureCard from '../components/ui/FeatureCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import AnimatedSection from '../components/common/AnimatedSection';
import { Sparkles, CheckCircle2, XCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const comparisonData = [
  {
    feature_ar: "المكونات الأساسية",
    feature_en: "Core Ingredients",
    us_ar: "مكونات طبيعية 100% (سكر نقي، ماء ورد بلدي، صبار، زيت جوز هند)",
    us_en: "100% Natural botanicals (pure cane sugar, rose distillate, organic aloe, virgin coconut oil)",
    them_ar: "مركبات كيميائية ومواد حافظة صناعية وكحول قاسي",
    them_en: "Synthetic chemicals, mineral oils, harsh preservatives, and industrial alcohol",
  },
  {
    feature_ar: "التأثير على البشرة الحساسة",
    feature_en: "Effect on Sensitive Skin",
    us_ar: "مهدئة ولا تسبب حكة أو تهيجاً أو احمراراً بعد الاستخدام",
    us_en: "Hypoallergenic, deeply calming, and prevents post-wax redness or itchiness",
    them_ar: "تسبب تحسساً واحمراراً متكرراً وجفافاً شديداً لمسام البشرة",
    them_en: "Frequently causes severe irritation, allergic reactions, and stripped barrier dryness",
  },
  {
    feature_ar: "إزالة الشعر والترطيب",
    feature_en: "Hair Removal & Hydration",
    us_ar: "إزالة كاملة من الجذور مع ترطيب متزامن ونعومة تدوم لأسابيع",
    us_en: "Root-to-tip extraction with simultaneous deep moisturization lasting weeks",
    them_ar: "تقصف للشعر وجفاف للبشرة بعد الاستخدام مباشرة",
    them_en: "Hair snapping at surface level, followed by immediate flakiness and roughness",
  },
  {
    feature_ar: "الاعتمادات والمصدر",
    feature_en: "Certifications & Origin",
    us_ar: "صُنع في السعودية (المدينة المنورة) ومعتمد رسمياً من SFDA",
    us_en: "Proudly manufactured in Madinah, KSA, fully approved and tested by Saudi FDA (SFDA)",
    them_ar: "منتجات مجهولة المصدر أو غير مطابقة للمواصفات الوطنية القياسية",
    them_en: "Unverified origins, dubious imports, or non-compliant with national safety criteria",
  },
  {
    feature_ar: "الخبرة والريادة",
    feature_en: "Heritage & Salon Trust",
    us_ar: "أكثر من 25 عاماً من الخبرة المستمرة واعتماد كبرى الصالونات منذ 1999م",
    us_en: "Over 25 continuous years of master formulation trusted by leading beauty salons since 1999",
    them_ar: "منتجات تجارية سريعة تفتقر للاختبار الميداني والخبرة المهنية",
    them_en: "Fad commercial products lacking professional salon testing and safety records",
  }
];

export default function WhyUsPage() {
  const { language, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const partnersTitle = partnersData['title_' + language] || partnersData.title_ar;
  const partnersSubtitle = partnersData['subtitle_' + language] || partnersData.subtitle_ar;

  return (
    <div className="pb-28">
      {/* Page Header */}
      <PageHeader
        badge={language === 'ar' ? "أصالة وجودة لا تضاهى" : "Unrivaled Purity & Quality"}
        title={t('sections.whyUsTitle')}
        subtitle={
          language === 'ar'
            ? 'لأن جمالك يستحق الأفضل، نضع بين يديكِ خلاصة خبرة ربع قرن في تصنيع منتجات عناية طبيعية نقية وموثوقة تحترم بشرتك وتمنحها دلالاً لا ينتهي.'
            : 'Because your skin deserves the finest care, we present a quarter-century of expertise producing botanical formulations that respect, nourish, and indulge your natural beauty.'
        }
        breadcrumbs={[{ label: t('nav.whyUs') }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 space-y-24">
        
        {/* Features Grid */}
        <section>
          <SectionHeader
            badge={t('sections.whyUsBadge')}
            title={language === 'ar' ? "6 أسباب تجعلنا خيارك الدائم" : "6 Reasons That Make Us Your Trusted Choice"}
            description={
              language === 'ar'
                ? "التميز ليس صدفة، بل هو التزام يومي بأعلى درجات الدقة والمهنية في مصنعنا بالمدينة المنورة"
                : "Excellence is never an accident; it is our daily commitment to uncompromising precision in Madinah"
            }
          />

          <AnimatedSection staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feat, i) => (
              <FeatureCard key={feat.id} feature={feat} index={i} />
            ))}
          </AnimatedSection>
        </section>

        {/* Comparison Table Section */}
        <section className="bg-white rounded-3xl border border-brand-primary/20 p-8 sm:p-12 shadow-soft text-start">
          <SectionHeader
            badge={language === 'ar' ? "الفرق الحقيقي" : "The Tangible Difference"}
            title={language === 'ar' ? "جواهر الريم مقابل المنتجات التجارية الأخرى" : "Jawahir Alreem vs Conventional Commercial Brands"}
            description={
              language === 'ar'
                ? "تعرفي على الفارق الذي تصنعه المكونات الطبيعية النقية والخبرة المعتمدة لبشرتك"
                : "Discover the visible difference pure botanicals and certified pharmaceutical standards bring to your skin"
            }
          />

          <div className="overflow-x-auto mt-8">
            <table className="w-full text-start border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b-2 border-brand-primary/30">
                  <th className="py-4 px-5 text-xs sm:text-sm font-medium text-brand-text-muted">
                    {language === 'ar' ? 'وجه المقارنة' : 'Criteria'}
                  </th>
                  <th className="py-4 px-5 text-sm sm:text-base font-bold text-brand-dark bg-brand-rose/70 rounded-t-2xl">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{language === 'ar' ? 'منتجات جواهر الريم الأصلية' : 'Authentic Jawahir Alreem'}</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-xs sm:text-sm font-normal text-gray-400">
                    {language === 'ar' ? 'المنتجات الكيميائية الشائعة' : 'Conventional Chemical Brands'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-rose/25 transition-colors">
                    <td className="py-5 px-5 font-semibold text-brand-dark">
                      {row['feature_' + language] || row.feature_ar}
                    </td>
                    <td className="py-5 px-5 font-normal text-brand-dark bg-brand-rose/30">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row['us_' + language] || row.us_ar}</span>
                      </div>
                    </td>
                    <td className="py-5 px-5 text-brand-text-muted font-normal">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row['them_' + language] || row.them_ar}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Natural Ingredients Secret */}
        <section className="bg-gradient-to-b from-brand-rose/50 to-white rounded-3xl border border-brand-primary/20 p-8 sm:p-14 shadow-soft text-start">
          <SectionHeader
            badge={language === 'ar' ? "أسرار الطبيعة النقية" : "Pure Botanical Secrets"}
            title={language === 'ar' ? "المكونات الطبيعية الثلاثة في قلب منتجاتنا" : "The 3 Signature Botanical Actives"}
            description={
              language === 'ar'
                ? "ننتقي أنقى المكونات التي تغذي خلايا البشرة وتعيد إليها نضارتها الطبيعية"
                : "Carefully sourced natural essences that nourish skin cells and restore genuine radiance"
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="p-7 rounded-2xl bg-white border border-brand-primary/20 shadow-soft space-y-3.5">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-700 flex items-center justify-center font-bold text-xl shadow-sm">
                🌸
              </div>
              <h3 className="text-lg font-semibold text-brand-dark">
                {language === 'ar' ? 'ماء الورد الطبيعي' : 'Natural Rose Distillate'}
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal">
                {language === 'ar'
                  ? 'مستخلص نقي بخصائص مضادة للأكسدة، يشد المسام، ينعش ملمس الجلد، ويضفي رائحة أنثوية رقيقة وطبيعية تدوم طويلاً.'
                  : 'Rich in antioxidants and bio-actives, tightens enlarged pores, refreshes complexion, and imparts a delicate lasting natural rose scent.'}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-brand-primary/20 shadow-soft space-y-3.5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xl shadow-sm">
                🌿
              </div>
              <h3 className="text-lg font-semibold text-brand-dark">
                {language === 'ar' ? 'خلاصة الصبار النقي' : 'Organic Aloe Vera'}
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal">
                {language === 'ar'
                  ? 'المهدئ المعجزة للبشرة المتهيجة؛ يرطب بعمق، يخفف الاحمرار بعد إزالة الشعر، ويسرّع تجدد أنسجة الجلد الحساسة.'
                  : 'The holy grail for post-wax soothing; quenches skin thirst, eliminates redness within minutes, and speeds skin repair.'}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-brand-primary/20 shadow-soft space-y-3.5">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xl shadow-sm">
                🥥
              </div>
              <h3 className="text-lg font-semibold text-brand-dark">
                {language === 'ar' ? 'زيت جوز الهند البكر' : 'Virgin Coconut Oil'}
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal">
                {language === 'ar'
                  ? 'غني بالأحماض الدهنية المرطبة، يمنح حلاوة إزالة الشعر انسيابية ومرونة ويغلف البشرة بحاجز حماية حريري.'
                  : 'Abundant in lauric acid and emollients, guarantees wax pliability, zero skin tearing, and coats skin in a protective silk shield.'}
              </p>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section>
          <SectionHeader
            badge={t('sections.testimonialsBadge')}
            title={t('sections.testimonialsTitle')}
            description={t('sections.testimonialsDesc')}
          />

          <AnimatedSection staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((review, i) => (
              <TestimonialCard key={review.id} review={review} index={i} />
            ))}
          </AnimatedSection>
        </section>

        {/* Partners & Distribution */}
        <section className="bg-white rounded-3xl border border-brand-primary/20 p-8 sm:p-14 shadow-soft text-center">
          <SectionHeader
            title={partnersTitle}
            description={partnersSubtitle}
          />
          <div className="max-w-4xl mx-auto mt-8">
            <img
              src={partnersData.bannerImage}
              alt={partnersTitle}
              className="w-full h-auto object-contain mx-auto"
              width="900"
              height="200"
              loading="lazy"
            />
          </div>
        </section>

        {/* CTA Button (Touch Target 54px) */}
        <div className="text-center pt-6">
          <Link
            to="/products"
            className="min-h-[54px] inline-flex items-center gap-2.5 bg-brand-dark text-white px-9 py-4 rounded-2xl text-sm font-semibold hover:bg-brand-darker transition-colors shadow-elevated"
          >
            <span>{language === 'ar' ? 'ابدئي تجربتك مع جواهر الريم الآن' : 'Begin Your Jawahir Alreem Experience'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
