import { categoriesData } from '../../data/categories';
import SectionHeader from '../../components/common/SectionHeader';
import CategoryCard from '../../components/ui/CategoryCard';
import AnimatedSection from '../../components/common/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CategoriesSection() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="categories" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('sections.categoriesBadge')}
          title={t('sections.categoriesTitle')}
          description={t('sections.categoriesDesc')}
        />

        <AnimatedSection staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoriesData.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </AnimatedSection>

        {/* View All Categories Link (Touch Target 48px) */}
        <div className="text-center mt-16">
          <Link
            to="/categories"
            className="min-h-[48px] inline-flex items-center gap-2 bg-brand-rose/70 text-brand-dark border border-brand-primary/40 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-rose hover:border-brand-primary transition-all duration-300 shadow-soft group"
          >
            <span>{language === 'ar' ? 'استعراض كافة التصنيفات بالتفصيل' : 'Explore All Collections in Detail'}</span>
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
