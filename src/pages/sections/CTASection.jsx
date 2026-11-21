import { siteConfig } from '../../config/site';
import { ShoppingBag, ExternalLink, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function CTASection() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-r from-brand-primary via-brand-button to-brand-primary text-brand-dark">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <AnimatedSection variant="fadeUp">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-white/90 rounded-full text-brand-dark text-xs sm:text-sm font-medium shadow-soft">
            <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
            <span>{t('sections.ctaBadge')}</span>
          </span>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-[1.4] tracking-normal">
            {t('sections.ctaTitle')}
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <p className="text-base sm:text-lg text-brand-dark/85 max-w-2xl mx-auto leading-loose font-normal">
            {t('sections.ctaDesc')}
          </p>
        </AnimatedSection>

        {/* Action Buttons (Touch Targets 54px) */}
        <AnimatedSection
          variant="fadeUp"
          delay={0.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button min-h-[54px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-dark text-white px-9 py-4 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker shadow-elevated hover:shadow-2xl transition-all duration-300 group"
          >
            <ShoppingBag className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
            <span>{t('hero.shopNow')}</span>
            <ExternalLink className="w-4 h-4 opacity-75 text-white" />
          </a>

          <Link
            to="/contact"
            className="min-h-[54px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/90 text-brand-dark border border-brand-dark/20 px-8 py-4 rounded-2xl text-xs sm:text-sm font-medium hover:bg-white transition-all duration-300 shadow-soft"
          >
            <span>{language === 'ar' ? 'تواصلي معنا أو اطلبي بالجملة' : 'Contact Us or Order Wholesale'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
