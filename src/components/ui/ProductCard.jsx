import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import ProductQuickView from './ProductQuickView';

export default function ProductCard({ product, index = 0 }) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { language, t } = useLanguage();

  const productName = product['name_' + language] || product.name_ar;
  const productCategory = product['categoryName_' + language] || product.categoryName_ar;
  const productBadge = product['badge_' + language] || product.badge_ar;
  const productCurrency = product['currency_' + language] || product.currency_ar;
  const productDesc = product['description_' + language] || product.description_ar;

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="group relative bg-white rounded-3xl border border-brand-primary/20 overflow-hidden shadow-soft hover:shadow-elevated hover:border-brand-primary/60 transition-all duration-500 flex flex-col"
      >
        {/* Product Image Area */}
        <div className="relative aspect-square bg-gradient-to-b from-brand-rose/40 to-brand-sand/15 p-6 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={productName}
            className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            width="450"
            height="450"
            loading="lazy"
          />

          {/* Badges */}
          {productBadge && (
            <span className="absolute top-3.5 right-3.5 bg-brand-dark/95 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-xl shadow-sm">
              {productBadge}
            </span>
          )}

          <span className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md text-brand-dark text-[11px] font-medium px-3 py-1 rounded-full border border-brand-primary/20 shadow-sm">
            {productCategory}
          </span>

          {/* Quick View Hover Button (Touch-Friendly 48px min) */}
          <div className="absolute inset-0 bg-brand-dark/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="min-h-[48px] inline-flex items-center gap-2 bg-white text-brand-dark px-5 py-3 rounded-xl text-xs font-semibold shadow-lg hover:bg-brand-rose transition-all transform -translate-y-2 group-hover:translate-y-0 duration-300"
            >
              <Eye className="w-4 h-4 text-brand-gold" />
              <span>{t('nav.quickView')}</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-start">
          <div>
            {/* Rating */}
            <div className="flex items-center gap-1 text-amber-500 mb-2.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs text-brand-text-muted font-normal ml-1.5 mr-1.5">
                (5.0)
              </span>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-brand-dark leading-snug line-clamp-2 group-hover:text-brand-primary-dark transition-colors">
              {productName}
            </h3>

            {/* Description */}
            <p className="mt-2.5 text-xs sm:text-sm text-brand-text-muted leading-relaxed line-clamp-2 font-normal">
              {productDesc}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-primary/15">
            {/* Price */}
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-brand-dark">{product.price}</span>
                <span className="text-xs font-medium text-brand-dark">{productCurrency}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through mr-1.5 ml-1.5">
                    {product.originalPrice} {productCurrency}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md font-medium">
                {t('actions.taxIncluded')}
              </span>
            </div>

            {/* Action Buttons (Touch Targets 48px) */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setIsQuickViewOpen(true)}
                className="min-h-[48px] w-full inline-flex items-center justify-center gap-1.5 bg-brand-rose/60 text-brand-dark border border-brand-primary/30 py-2.5 px-3 rounded-xl text-xs font-medium hover:bg-brand-rose hover:border-brand-primary transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-brand-dark" />
                <span>{t('actions.viewDetails')}</span>
              </button>

              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] w-full inline-flex items-center justify-center gap-1.5 bg-brand-dark text-white py-2.5 px-3 rounded-xl text-xs font-semibold hover:bg-brand-darker transition-all duration-200 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{t('actions.orderNow')}</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
