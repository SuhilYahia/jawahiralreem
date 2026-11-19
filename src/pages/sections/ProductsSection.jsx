import { productsData } from '../../data/products';
import { siteConfig } from '../../config/site';
import SectionHeader from '../../components/common/SectionHeader';
import ProductCard from '../../components/ui/ProductCard';
import AnimatedSection from '../../components/common/AnimatedSection';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function ProductsSection() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const featuredProducts = productsData.slice(0, 3);

  return (
    <section id="products" className="py-24 md:py-32 bg-brand-rose/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('sections.productsBadge')}
          title={t('sections.productsTitle')}
          description={t('sections.productsDesc')}
        />

        <AnimatedSection staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </AnimatedSection>

        {/* Action Buttons (Touch Targets 50px) */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="text-center mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="min-h-[50px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-all duration-300 shadow-soft group"
          >
            <span>
              {language === 'ar'
                ? `استعراض كافة منتجات الكتالوج (${productsData.length} منتجات)`
                : `View Full Product Catalog (${productsData.length} items)`}
            </span>
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-dark border border-brand-primary/40 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-medium hover:bg-brand-rose hover:border-brand-primary transition-all duration-300 shadow-soft"
          >
            <span>{t('actions.officialStore')}</span>
            <ExternalLink className="w-4 h-4 text-brand-gold" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
