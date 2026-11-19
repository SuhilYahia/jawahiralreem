import { categoriesData } from '../data/categories';
import { productsData } from '../data/products';
import { siteConfig } from '../config/site';
import PageHeader from '../components/common/PageHeader';
import SectionHeader from '../components/common/SectionHeader';
import AnimatedSection from '../components/common/AnimatedSection';
import { ArrowLeft, ArrowRight, Check, Sparkles, ShoppingBag, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CategoriesPage() {
  const { language, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="pb-28">
      {/* Page Header */}
      <PageHeader
        badge={t('sections.categoriesBadge')}
        title={t('sections.categoriesTitle')}
        subtitle={t('sections.categoriesDesc')}
        breadcrumbs={[{ label: t('nav.categories') }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 space-y-20">
        {categoriesData.map((category, idx) => {
          const isEven = idx % 2 === 1;

          const catTitle = category['title_' + language] || category.title_ar;
          const catSubtitle = category['subtitle_' + language] || category.subtitle_ar;
          const catDesc = category['description_' + language] || category.description_ar;
          const catBadge = category['badge_' + language] || category.badge_ar;
          const catFeatures = category['features_' + language] || category.features_ar;

          return (
            <AnimatedSection key={category.id} variant="fadeUp" delay={idx * 0.1}>
              <div className="bg-white rounded-3xl border border-brand-primary/20 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 text-start">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Category Banner Image Box */}
                  <div className={`lg:col-span-5 relative aspect-[16/11] lg:aspect-auto lg:h-full bg-gradient-to-b from-brand-rose/40 to-brand-sand/30 overflow-hidden group ${isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src={category.image}
                      alt={catTitle}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/25 to-transparent" />
                    
                    {catBadge && (
                      <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-brand-dark px-3.5 py-1.5 text-xs font-medium rounded-xl shadow-soft">
                        {catBadge}
                      </span>
                    )}

                    <div className="absolute bottom-5 right-5 left-5 text-white">
                      <span className="text-xs font-medium text-brand-primary-light flex items-center gap-1.5 mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{language === 'ar' ? 'تصنيف معتمد' : 'Verified Collection'}</span>
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                        {catTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Category Details with generous line spacing */}
                  <div className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-[1.4]">
                        {catTitle}
                      </h3>
                      <p className="text-sm font-medium text-brand-primary-dark mt-2">
                        {catSubtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-brand-text-muted leading-loose font-normal">
                      {catDesc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold text-brand-dark tracking-wide uppercase">
                        {language === 'ar' ? 'أبرز ما يميز هذا القسم:' : 'Collection Highlights:'}
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {catFeatures.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="inline-flex items-center gap-1.5 text-xs font-medium bg-brand-rose text-brand-dark px-3.5 py-1.5 rounded-xl border border-brand-primary/20"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons (Touch Target 48px) */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
                      <Link
                        to={`/products?category=${category.id}`}
                        className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-brand-dark text-white py-3.5 px-7 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors shadow-soft group"
                      >
                        <span>{language === 'ar' ? `تصفحي منتجات ${catTitle}` : `View ${catTitle} Products`}</span>
                        <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <a
                        href={category.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-brand-rose/70 text-brand-dark border border-brand-primary/30 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-medium hover:bg-brand-rose transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>{t('actions.officialStore')}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          );
        })}

        {/* CTA Strip */}
        <div className="bg-brand-rose/40 rounded-3xl border border-brand-primary/30 p-10 sm:p-12 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark leading-[1.4]">
            {language === 'ar' ? 'هل تبحثين عن تركيبة أو باقة خاصة لصالونك؟' : 'Looking for a bespoke formula or salon bundle?'}
          </h3>
          <p className="text-xs sm:text-sm text-brand-text-muted max-w-xl mx-auto font-normal leading-loose">
            {language === 'ar'
              ? 'فريق خدمة عميلات ومصنع جواهر الريم متاح للإجابة على جميع تساؤلاتك ومساعدتك في اختيار الروتين الأنسب.'
              : 'Our technical customer service and manufacturing consultants are ready to assist you in selecting the ideal routine.'}
          </p>
          <div className="pt-3">
            <Link
              to="/contact"
              className="min-h-[48px] inline-flex items-center gap-2 bg-brand-dark text-white px-7 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors shadow-soft"
            >
              <span>{t('nav.contact')}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
