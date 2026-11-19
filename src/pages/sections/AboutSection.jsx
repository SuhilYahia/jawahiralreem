import { siteConfig } from '../../config/site';
import { Award, Factory, Sparkles, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedSection, { AnimatedItem } from '../../components/common/AnimatedSection';
import { useCountUp } from '../../hooks/useCountUp';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

function StatCard({ icon: Icon, value, suffix, label }) {
  const { count, ref } = useCountUp(parseInt(value) || 0, 1800);
  const display = suffix ? `${count}${suffix}` : value;
  return (
    <AnimatedItem variant="fadeUp">
      <div ref={ref} className="p-6 bg-white rounded-2xl border border-brand-primary/20 shadow-soft text-center hover:shadow-card transition-all duration-300">
        <Icon className="w-6 h-6 text-brand-dark mx-auto mb-2.5" />
        <div className="text-2xl sm:text-3xl font-bold text-brand-dark">{suffix ? display : value}</div>
        <div className="text-xs sm:text-sm text-brand-text-muted mt-1 font-normal">{label}</div>
      </div>
    </AnimatedItem>
  );
}

export default function AboutSection() {
  const { language, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-brand-rose/30 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('sections.aboutBadge')}
          title={t('sections.aboutTitle')}
          description={t('sections.aboutDesc')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Brand Seal Showcase */}
          <AnimatedSection variant="slideRight" className="lg:col-span-5 text-center">
            <div className="relative inline-block max-w-[340px] mx-auto">
              <div className="rounded-3xl overflow-hidden border border-brand-primary/20 shadow-card bg-white p-4">
                <img
                  src={siteConfig.logos.seal}
                  alt={siteConfig.name}
                  className="w-full h-auto object-cover rounded-2xl"
                  width="320"
                  height="320"
                  loading="lazy"
                />
                <div className="pt-4 pb-2 border-t border-brand-rose mt-3 text-center">
                  <div className="text-base font-bold text-brand-dark">
                    {language === 'ar' ? 'مصنع جواهر الريم للصناعة' : 'Jawahir Alreem Industrial Plant'}
                  </div>
                  <div className="text-xs text-brand-text-muted mt-1 font-normal">
                    {language === 'ar' ? 'المدينة المنورة • سجل تجاري:' : 'Madinah, KSA • CR:'} {siteConfig.commercialRegistration}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text & Stats with wide line-height */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <AnimatedSection variant="slideLeft">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-[1.45]">
                {language === 'ar'
                  ? 'من المدينة المنورة… نصنع الجمال بأصالة منذ عام 1999م'
                  : 'From Madinah… Crafting pure beauty with heritage since 1999'}
              </h3>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1}>
              <p className="text-base sm:text-lg text-brand-text-muted leading-loose font-normal">
                {language === 'ar'
                  ? 'انطلقت مسيرة مصنع جواهر الريم للصناعة من المدينة المنورة، ليكون أول مصنع وطني متخصص في مستحضرات التجميل ومنتجات العناية الطبيعية في المنطقة، مقدماً حلولاً متوارثة أثبتت جدارتها لدى نخبة الصالونات والعميلات.'
                  : 'The journey of Jawahir Alreem Factory began in Madinah as the region’s first specialized cosmetic and natural personal care manufacturer, pioneering authentic solutions trusted by top salons and thousands of women.'}
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.2}>
              <p className="text-sm sm:text-base text-brand-text-muted leading-loose font-normal">
                {language === 'ar'
                  ? 'وعلى امتداد أكثر من ربع قرن، جمعنا بين خبرةٍ راسخة، ومكونات مستوحاة من الطبيعة (ماء الورد البلدي، الصبار النقي، وزيت جوز الهند)، وتقنيات تصنيع حديثة؛ لنقدّم منتجات عناية موثوقة بجودة تواكب المعايير العالمية وهيئة الغذاء والدواء SFDA.'
                  : 'Across more than a quarter-century, we combined time-honored expertise with pure botanical treasures (fresh rosewater, pure aloe vera, and virgin coconut oil) and advanced manufacturing technology in strict adherence to Saudi FDA standards.'}
              </p>
            </AnimatedSection>

            {/* Stats Grid */}
            <AnimatedSection staggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              <StatCard
                icon={Award}
                value="25"
                suffix={language === 'ar' ? "+ عاماً" : "+ Years"}
                label={language === 'ar' ? "منذ عام 1999م" : "Since 1999"}
              />
              <StatCard
                icon={Factory}
                value={language === 'ar' ? "أول مصنع" : "1st Factory"}
                label={language === 'ar' ? "تجميل بالمدينة" : "In Madinah"}
              />
              <StatCard
                icon={Sparkles}
                value="100%"
                label={language === 'ar' ? "مكونات طبيعية" : "Natural Botanical"}
              />
              <StatCard
                icon={ShieldCheck}
                value="SFDA"
                label={language === 'ar' ? "اعتمادات الجودة" : "Quality Certified"}
              />
            </AnimatedSection>

            {/* Read Full Story Button (Touch Target 48px) */}
            <AnimatedSection variant="fadeUp" delay={0.3} className="pt-4">
              <Link
                to="/about"
                className="min-h-[48px] inline-flex items-center gap-2 bg-brand-dark text-white px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors shadow-soft group"
              >
                <span>{t('actions.readFullStory')}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
