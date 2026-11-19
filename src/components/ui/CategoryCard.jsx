import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function CategoryCard({ category, index = 0 }) {
  const { language, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const categoryTitle = category['title_' + language] || category.title_ar;
  const categorySubtitle = category['subtitle_' + language] || category.subtitle_ar;
  const categoryDesc = category['description_' + language] || category.description_ar;
  const categoryBadge = category['badge_' + language] || category.badge_ar;
  const categoryFeatures = category['features_' + language] || category.features_ar;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-3xl border border-brand-primary/20 overflow-hidden shadow-soft hover:shadow-elevated hover:border-brand-primary/60 transition-all duration-500 flex flex-col"
    >
      {/* Category Banner Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-brand-rose/30">
        <img
          src={category.image}
          alt={categoryTitle}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          width="400"
          height="250"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-brand-dark/20 to-transparent" />
        
        {categoryBadge && (
          <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-brand-dark px-3.5 py-1.5 text-xs font-medium rounded-xl shadow-soft">
            {categoryBadge}
          </span>
        )}

        <div className="absolute bottom-4 right-4 left-4 text-white text-start">
          <span className="text-xs font-medium text-brand-primary-light flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>{language === 'ar' ? 'تصنيف معتمد ومميز' : 'Certified Collection'}</span>
          </span>
          <h3 className="text-lg sm:text-xl font-bold leading-snug drop-shadow-sm">
            {categoryTitle}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-start">
        <div>
          <p className="text-xs sm:text-sm font-semibold text-brand-dark mb-2">
            {categorySubtitle}
          </p>
          <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed mb-5 font-normal">
            {categoryDesc}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categoryFeatures.map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-brand-rose text-brand-dark px-3 py-1.5 rounded-lg border border-brand-primary/20"
              >
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons (Touch Target 48px) */}
        <div className="pt-2 grid grid-cols-2 gap-2.5">
          <Link
            to={`/products?category=${category.id}`}
            className="min-h-[48px] inline-flex items-center justify-center gap-1.5 bg-brand-rose/70 text-brand-dark border border-brand-primary/30 py-2.5 px-3 rounded-xl text-xs font-medium hover:bg-brand-rose transition-colors"
          >
            <span>{t('actions.viewCategoryProducts')}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>

          <a
            href={category.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-1.5 bg-brand-dark text-white py-2.5 px-3 rounded-xl text-xs font-semibold hover:bg-brand-darker transition-colors shadow-sm"
          >
            <span>{t('actions.officialStore')}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
