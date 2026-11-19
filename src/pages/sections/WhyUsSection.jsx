import { featuresData, testimonialsData, partnersData } from '../../data/features';
import SectionHeader from '../../components/common/SectionHeader';
import FeatureCard from '../../components/ui/FeatureCard';
import TestimonialCard from '../../components/ui/TestimonialCard';
import AnimatedSection from '../../components/common/AnimatedSection';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function WhyUsSection() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const featuredFeatures = featuresData.slice(0, 3);
  const featuredReviews = testimonialsData.slice(0, 3);

  const partnersTitle = partnersData['title_' + language] || partnersData.title_ar;
  const partnersSubtitle = partnersData['subtitle_' + language] || partnersData.subtitle_ar;

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Core Features */}
        <div>
          <SectionHeader
            badge={t('sections.whyUsBadge')}
            title={t('sections.whyUsTitle')}
            description={t('sections.whyUsDesc')}
          />

          <AnimatedSection staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFeatures.map((feat, i) => (
              <FeatureCard key={feat.id} feature={feat} index={i} />
            ))}
          </AnimatedSection>

          <div className="text-center mt-12">
            <Link
              to="/why-us"
              className="min-h-[48px] inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-primary-dark transition-colors group p-2"
            >
              <span>{t('actions.learnWhyUs')}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="pt-16 border-t border-brand-rose">
          <SectionHeader
            badge={t('sections.testimonialsBadge')}
            title={t('sections.testimonialsTitle')}
            description={t('sections.testimonialsDesc')}
          />

          <AnimatedSection staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review, i) => (
              <TestimonialCard key={review.id} review={review} index={i} />
            ))}
          </AnimatedSection>
        </div>

        {/* Partners Banner */}
        <div className="pt-16 border-t border-brand-rose text-center">
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
        </div>
      </div>
    </section>
  );
}
