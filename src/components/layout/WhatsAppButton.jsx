import { siteConfig } from '../../config/site';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function WhatsAppButton() {
  const { language, isRTL } = useLanguage();

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label="WhatsApp Support"
      className={`fixed bottom-6 z-40 ${isRTL ? 'left-6' : 'right-6'}`}
    >
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={language === 'ar' ? "تحدثي معنا عبر واتساب" : "Chat with us on WhatsApp"}
        className="group relative min-h-[48px] flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-elevated hover:shadow-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 border border-white/30"
      >
        <MessageCircle className="w-6 h-6 shrink-0 fill-white" />
        <div className="hidden sm:flex flex-col text-start">
          <span className="text-[10px] text-emerald-100 font-medium leading-none">
            {language === 'ar' ? 'نسعد بخدمتك' : 'Customer Care'}
          </span>
          <span className="text-xs font-bold leading-tight mt-0.5">
            {language === 'ar' ? 'تحدثي معنا' : 'Chat Online'}
          </span>
        </div>

        {/* Pulse Dot */}
        <span className={`absolute -top-1 flex h-3.5 w-3.5 ${isRTL ? '-right-1' : '-left-1'}`}>
          <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white" />
        </span>
      </a>
    </motion.aside>
  );
}
