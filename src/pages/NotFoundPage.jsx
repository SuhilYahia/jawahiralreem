import { Link } from 'react-router-dom';
import { Sparkles, Home, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { language, t } = useLanguage();

  return (
    <div className="pt-44 pb-28 min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-brand-rose/40 to-white">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 mx-auto rounded-3xl bg-brand-rose border border-brand-primary/30 flex items-center justify-center text-brand-dark shadow-soft"
        >
          <Sparkles className="w-12 h-12 text-brand-gold" />
        </motion.div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-rose text-brand-dark text-xs font-medium border border-brand-primary/20">
          {language === 'ar' ? 'خطأ 404 • الصفحة غير متوفرة' : 'Error 404 • Page Not Found'}
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-[1.4]">
          {language === 'ar'
            ? 'عذراً، الصفحة التي تبحثين عنها غير موجودة'
            : 'Sorry, the page you are looking for does not exist'}
        </h1>

        <p className="text-sm text-brand-text-muted leading-loose font-normal">
          {language === 'ar'
            ? 'قد يكون الرابط الذي استخدمتِه قديماً أو تم نقله. يمكنك العودة للصفحة الرئيسية أو استكشاف تشكيلة منتجات جواهر الريم.'
            : 'The link might be outdated or moved. You can return to our homepage or explore our complete beauty collection.'}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors shadow-soft"
          >
            <Home className="w-4 h-4" />
            <span>{t('actions.backToHome')}</span>
          </Link>

          <Link
            to="/products"
            className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-rose/70 text-brand-dark border border-brand-primary/30 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-medium hover:bg-brand-rose transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t('nav.products')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
