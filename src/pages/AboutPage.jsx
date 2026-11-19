import { siteConfig } from '../config/site';
import { timelineData, coreValues } from '../data/timeline';
import PageHeader from '../components/common/PageHeader';
import SectionHeader from '../components/common/SectionHeader';
import AnimatedSection, { AnimatedItem } from '../components/common/AnimatedSection';
import { useCountUp } from '../hooks/useCountUp';
import { Award, Factory, Sparkles, ShieldCheck, CheckCircle2, Heart, Users, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function StatCard({ icon: Icon, value, suffix, label }) {
  const { count, ref } = useCountUp(parseInt(value) || 0, 1800);
  const display = suffix ? `${count}${suffix}` : value;

  return (
    <AnimatedItem variant="fadeUp">
      <div
        ref={ref}
        className="p-7 bg-white rounded-3xl border border-brand-primary/20 shadow-soft text-center hover:shadow-card transition-all duration-300"
      >
        <div className="w-14 h-14 mx-auto mb-3.5 rounded-2xl bg-brand-rose flex items-center justify-center text-brand-dark shadow-sm">
          <Icon className="w-7 h-7 text-brand-dark" />
        </div>
        <div className="text-3xl font-bold text-brand-dark">
          {suffix ? display : value}
        </div>
        <div className="text-xs sm:text-sm text-brand-text-muted mt-1.5 font-normal">{label}</div>
      </div>
    </AnimatedItem>
  );
}

const iconMap = { Sparkles, ShieldCheck, Heart, Users };

export default function AboutPage() {
  const { language, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="pb-28">
      {/* Page Header */}
      <PageHeader
        badge={language === 'ar' ? "قصة ريادة وأصالة منذ 1999م" : "Heritage & Excellence Since 1999"}
        title={t('sections.aboutTitle')}
        subtitle={
          language === 'ar'
            ? 'أكثر من ربع قرن من الشغف في ابتكار أرقى منتجات العناية بالبشرة والجمال الطبيعي، تنطلق بحب من طيبة الطيبة إلى كل سيدة تبحث عن الأصالة.'
            : 'Over a quarter-century of passion formulating pristine skincare and authentic natural solutions, born in holy Madinah for discerning beauty connoisseurs.'
        }
        breadcrumbs={[{ label: t('nav.about') }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16">
        
        {/* Story Section */}
        <section className="bg-white rounded-3xl border border-brand-primary/20 p-8 sm:p-12 shadow-soft mb-20 text-start">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Factory Seal & Image */}
            <AnimatedSection variant="slideRight" className="lg:col-span-5 text-center">
              <div className="relative inline-block max-w-[340px] mx-auto">
                <div className="rounded-3xl overflow-hidden border border-brand-primary/30 shadow-card bg-gradient-to-b from-brand-rose/40 to-white p-4">
                  <img
                    src={siteConfig.logos.seal}
                    alt={siteConfig.name}
                    className="w-full h-auto object-cover rounded-2xl"
                    width="320"
                    height="320"
                    loading="lazy"
                  />
                  <div className="pt-4 pb-2 border-t border-brand-primary/20 mt-4 text-center">
                    <div className="text-base font-bold text-brand-dark">
                      {language === 'ar' ? 'مصنع جواهر الريم للصناعة' : 'Jawahir Alreem Industrial Plant'}
                    </div>
                    <div className="text-xs text-brand-text-muted mt-1 font-normal flex items-center justify-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{language === 'ar' ? 'المدينة المنورة • سجل تجاري:' : 'Madinah • CR:'} {siteConfig.commercialRegistration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Content with Generous Typography Spacing */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection variant="fadeUp">
                <span className="text-xs sm:text-sm font-semibold text-brand-gold tracking-wider uppercase">
                  {language === 'ar' ? 'تاريخ متوارث ورؤية طموحة' : 'Enduring Heritage & Ambitious Vision'}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-[1.45] mt-2">
                  {language === 'ar'
                    ? 'من المدينة المنورة… نصنع الجمال بأصالة منذ عام 1999م'
                    : 'From Madinah… Crafting authentic beauty since 1999'}
                </h2>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.1}>
                <p className="text-base sm:text-lg text-brand-text-muted leading-loose font-normal">
                  {language === 'ar'
                    ? 'انطلقت مسيرة مصنع جواهر الريم للصناعة من المدينة المنورة في عام 1999م، لنكون أول مصنع وطني سعودي متخصص في صناعة وتطوير مستحضرات التجميل ومستحضرات إزالة الشعر الطبيعية والعناية الفائقة بالبشرة.'
                    : 'Jawahir Alreem Industrial Factory was founded in Madinah in 1999, becoming the very first certified Saudi industrial plant dedicated to formulating natural cosmetics, pure sugar waxes, and intensive skin care.'}
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.2}>
                <p className="text-sm sm:text-base text-brand-text-muted leading-loose font-normal">
                  {language === 'ar'
                    ? 'على مدى أكثر من 25 عاماً، رسّخنا معايير رفيعة تمزج بين نقاء المكونات الطبيعية المستوحاة من ماء الورد البلدي وخلاصة الصبار وزيت جوز الهند النقي، وبين أحدث خطوط الإنتاج والتقنيات المخبرية الخاضعة لرقابة هيئة الغذاء والدواء السعودية (SFDA).'
                    : 'For over 25 years, we established elevated benchmarks uniting botanical purity (natural rosewater, organic aloe vera, and virgin coconut oil) with advanced production lines compliant with the Saudi Food & Drug Authority (SFDA).'}
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="p-5 rounded-2xl bg-brand-rose/60 border border-brand-primary/20 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-brand-dark font-normal leading-relaxed">
                    {language === 'ar'
                      ? 'اليوم، نفتخر بأن نكون الشريك والمورد الموثوق لمئات المشاغل وصالونات التجميل النسائية والآلاف من العميلات الوفيات في مختلف مدن ومناطق المملكة.'
                      : 'Today, we take immense pride in being the trusted manufacturing partner for hundreds of professional beauty salons and thousands of dedicated clients across Saudi Arabia.'}
                  </p>
                </div>
              </AnimatedSection>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="mt-14 pt-10 border-t border-brand-primary/20">
            <AnimatedSection staggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard
                icon={Award}
                value="25"
                suffix={language === 'ar' ? "+ عاماً" : "+ Yrs"}
                label={language === 'ar' ? "أصالة منذ 1999م" : "Since 1999"}
              />
              <StatCard
                icon={Factory}
                value={language === 'ar' ? "الأول" : "1st"}
                label={language === 'ar' ? "مصنع تجميل بالمدينة" : "In Madinah"}
              />
              <StatCard
                icon={Sparkles}
                value="100"
                suffix="%"
                label={language === 'ar' ? "مكونات طبيعية نقية" : "Pure Botanical"}
              />
              <StatCard
                icon={ShieldCheck}
                value="SFDA"
                label={language === 'ar' ? "معتمد ومطابق للمواصفات" : "Certified Standards"}
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-24">
          <SectionHeader
            badge={language === 'ar' ? "مسيرة ربع قرن" : "25 Years Milestones"}
            title={language === 'ar' ? "محطات مضيئة في تاريخ جواهر الريم" : "Landmarks in Jawahir Alreem’s Journey"}
            description={
              language === 'ar'
                ? "من البدايات الأولى بالمدينة المنورة إلى التوسع الوطني الشامل والريادة الصناعية"
                : "From humble authentic beginnings in Madinah to nationwide leadership and industrial excellence"
            }
          />

          <div className={`relative border-brand-primary/40 space-y-12 ${isRTL ? 'border-r-2 mr-4 sm:mr-8 pr-6 sm:pr-10' : 'border-l-2 ml-4 sm:mr-8 pl-6 sm:pl-10'}`}>
            {timelineData.map((item, idx) => {
              const y = item['year_' + language] || item.year_ar;
              const t = item['title_' + language] || item.title_ar;
              const d = item['description_' + language] || item.description_ar;

              return (
                <AnimatedSection key={idx} variant="fadeUp" delay={idx * 0.1}>
                  <div className="relative text-start">
                    {/* Timeline Dot */}
                    <span className={`absolute top-2 w-4 h-4 rounded-full bg-brand-dark border-4 border-brand-rose shadow-soft ${isRTL ? '-right-[31px] sm:-right-[47px]' : '-left-[31px] sm:-left-[47px]'}`} />

                    <div className="bg-white rounded-3xl border border-brand-primary/20 p-6 sm:p-7 shadow-soft hover:shadow-card transition-all">
                      <span className="inline-block px-3.5 py-1.5 bg-brand-rose text-brand-dark font-bold text-xs sm:text-sm rounded-xl mb-2.5">
                        {y}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">
                        {t}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal">
                        {d}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-24">
          <SectionHeader
            badge={language === 'ar' ? "ركائز تميزنا" : "Core Values"}
            title={language === 'ar' ? "قيمنا الجوهرية" : "Our Fundamental Values"}
            description={
              language === 'ar'
                ? "المبادئ الثابتة التي تحكم كل قطرة نصنعها وكل منتج نصل به إلى عملائنا"
                : "The unwavering principles governing every formula we craft and every product delivered"
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
            {coreValues.map((val, idx) => {
              const Icon = iconMap[val.icon] || Sparkles;
              const vt = val['title_' + language] || val.title_ar;
              const vd = val['description_' + language] || val.description_ar;

              return (
                <AnimatedSection key={idx} variant="fadeUp" delay={idx * 0.1}>
                  <div className="h-full bg-white rounded-3xl border border-brand-primary/20 p-7 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-brand-rose flex items-center justify-center text-brand-dark mb-5 shadow-sm">
                        <Icon className="w-7 h-7 text-brand-dark" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-dark mb-2.5">
                        {vt}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal">
                        {vd}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Factory Standards Banner */}
        <section className="bg-gradient-to-r from-brand-dark to-brand-espresso text-white rounded-3xl p-8 sm:p-14 shadow-elevated relative overflow-hidden text-center sm:text-start">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-primary-light text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>{language === 'ar' ? 'أعلى معايير التصنيع الدوائي والتجميلي' : 'Pharmaceutical & Cosmetic GMP Standards'}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.4]">
                {language === 'ar' ? 'مصنع وطني بمعايير ترتقي لتطلعاتك' : 'National Manufacturing Meeting Global Ambition'}
              </h2>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl font-normal">
                {language === 'ar'
                  ? 'نعتمد بروتوكولات صارمة لضبط الجودة، بدءاً من اختبار المكونات الخام الطبيعية وانتهاءً بالتغليف الآلي المحكم لضمان نقاء وفاعلية كل عبوة تصل إليك.'
                  : 'We enforce stringent quality control protocols, from rigorous raw botanical testing to hermetic sterile packaging, guaranteeing absolute freshness in every bottle.'}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <Link
                to="/products"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-white text-brand-dark py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-rose transition-colors shadow-md"
              >
                <span>{t('hero.exploreCatalog')}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <span>{t('nav.contact')}</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
