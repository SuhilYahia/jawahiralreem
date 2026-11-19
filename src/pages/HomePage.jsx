import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CategoriesSection from './sections/CategoriesSection';
import ProductsSection from './sections/ProductsSection';
import WhyUsSection from './sections/WhyUsSection';
import CTASection from './sections/CTASection';
import FAQAccordion from '../components/ui/FAQAccordion';
import SectionHeader from '../components/common/SectionHeader';
import { faqData } from '../data/faq';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const topFaqs = faqData.slice(0, 4);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <ProductsSection />
      <WhyUsSection />

      {/* Quick FAQ Section on Homepage */}
      <section className="py-24 md:py-32 bg-brand-rose/25 border-t border-brand-primary/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t('sections.faqBadge')}
            title={t('sections.faqTitle')}
            description={t('sections.faqDesc')}
          />

          <FAQAccordion items={topFaqs} />

          <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="min-h-[50px] inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors shadow-soft group"
            >
              <span>{language === 'ar' ? 'لديكِ سؤال آخر؟ تواصلي معنا عبر صفحة التواصل' : 'Have more questions? Reach out via Contact page'}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] inline-flex items-center gap-2 bg-emerald-600 text-white px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-soft"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('hero.whatsapp')}</span>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
