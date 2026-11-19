import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, X } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const { t, isRTL } = useLanguage();

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        aria-label="Announcement"
        className="bg-brand-dark text-white text-[12px] sm:text-xs py-2 px-4 relative z-50 border-b border-brand-primary/20"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden lg:flex items-center gap-2 text-brand-primary-light font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>{t('announcement.badge')}</span>
          </div>

          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/30 text-brand-gold shrink-0">
              <Sparkles className="w-3 h-3" />
            </span>
            <span className="font-semibold text-white tracking-wide">
              {t('announcement.text')}
            </span>
            <a
              href={siteConfig.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center text-brand-primary-light underline hover:text-white font-bold ml-2 mr-2 transition-colors"
            >
              {t('announcement.cta')}
            </a>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            aria-label={isRTL ? "إغلاق شريط الإعلان" : "Close announcement"}
            className="text-white/70 hover:text-white p-1 rounded-lg transition-colors shrink-0 hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
