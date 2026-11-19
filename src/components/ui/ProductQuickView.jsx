import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MessageCircle, Star, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

export default function ProductQuickView({ product, isOpen, onClose }) {
  const { language, t } = useLanguage();
  if (!product) return null;

  const productName = product['name_' + language] || product.name_ar;
  const productCategory = product['categoryName_' + language] || product.categoryName_ar;
  const productBadge = product['badge_' + language] || product.badge_ar;
  const productCurrency = product['currency_' + language] || product.currency_ar;
  const productDesc = product['description_' + language] || product.description_ar;
  const productBenefits = product['benefits_' + language] || product.benefits_ar;
  const productHowToUse = product['howToUse_' + language] || product.howToUse_ar;

  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? `مرحباً مصنع جواهر الريم، أود طلب واستفسار عن:\n*${productName}*\nالسعر: ${product.price} ${productCurrency}`
      : `Hello Jawahir Alreem, I would like to inquire/order:\n*${productName}*\nPrice: ${product.price} ${productCurrency}`
  );
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-brand-primary/20 z-10 max-h-[90vh] flex flex-col"
          >
            {/* Close Button with generous touch target */}
            <button
              onClick={onClose}
              aria-label={t('nav.close')}
              className="absolute top-4 left-4 z-20 min-h-[48px] min-w-[48px] rounded-full bg-white/95 backdrop-blur-md shadow-md text-brand-dark flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-brand-primary/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Product Image Showcase */}
                <div className="relative rounded-2xl bg-gradient-to-b from-brand-rose/40 to-brand-sand/20 p-8 flex items-center justify-center border border-brand-primary/20 aspect-square overflow-hidden group">
                  <img
                    src={product.image}
                    alt={productName}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {productBadge && (
                    <span className="absolute top-4 right-4 bg-brand-dark text-white text-xs font-medium px-3.5 py-1.5 rounded-xl shadow-soft">
                      {productBadge}
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-brand-dark text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
                    {productCategory}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-5 text-start">
                  <div>
                    <div className="flex items-center gap-1.5 text-amber-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-brand-text-muted font-normal mr-2 ml-2">
                        (5.0 / 5.0)
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-[1.4]">
                      {productName}
                    </h3>
                  </div>

                  {/* Price Banner */}
                  <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-brand-rose/50 border border-brand-primary/20">
                    <span className="text-3xl font-bold text-brand-dark">
                      {product.price}
                    </span>
                    <span className="text-sm font-medium text-brand-dark">{productCurrency}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice} {productCurrency}
                      </span>
                    )}
                    <span className="text-xs text-emerald-800 bg-emerald-100 font-medium px-2.5 py-1 rounded-md ml-auto mr-auto">
                      {t('actions.taxIncluded')}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal">
                    {productDesc}
                  </p>

                  {/* Benefits */}
                  {productBenefits && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-brand-dark flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{language === 'ar' ? 'أبرز المميزات والفوائد:' : 'Key Benefits:'}</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {productBenefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-brand-text-muted font-normal leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* How to use */}
                  {productHowToUse && (
                    <div className="p-3.5 bg-gray-50 rounded-xl text-xs text-brand-text-muted font-normal leading-relaxed">
                      <strong className="text-brand-dark block mb-1 font-semibold">
                        {language === 'ar' ? 'طريقة الاستخدام:' : 'How to Use:'}
                      </strong>
                      {productHowToUse}
                    </div>
                  )}

                  {/* Actions (Touch Targets 48px+) */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] flex-1 inline-flex items-center justify-center gap-2 bg-brand-dark text-white py-3 px-5 rounded-xl text-xs font-semibold hover:bg-brand-darker transition-colors shadow-soft"
                    >
                      <ShoppingBag className="w-4 h-4 text-brand-primary-light" />
                      <span>{t('actions.orderNow')}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>

                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 px-5 rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-soft"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t('actions.inquireWhatsApp')}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
