import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function PageHeader({ badge, title, subtitle, breadcrumbs = [] }) {
  const { t, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-rose/60 via-brand-rose/25 to-white border-b border-brand-primary/10">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs with clean typography */}
        <nav aria-label="Breadcrumb Navigation" className="mb-8">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-brand-text-muted flex-wrap">
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 hover:text-brand-dark transition-colors py-1 px-2 rounded-lg hover:bg-white/60 font-normal"
              >
                <Home className="w-4 h-4 text-brand-dark" />
                <span>{t('nav.home')}</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-brand-dark transition-colors py-1 px-2 rounded-lg hover:bg-white/60 font-normal"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-dark font-medium py-1 px-2">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Header Content with generous hierarchy and spacious breathing room */}
        <div className="max-w-4xl space-y-6 sm:space-y-7">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-brand-primary/30 text-xs sm:text-sm font-medium text-brand-dark shadow-soft backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{badge}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-[1.4] sm:leading-[1.45] tracking-normal"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-text-muted leading-loose font-normal max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
