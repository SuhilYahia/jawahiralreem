import { siteConfig } from '../../config/site';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function WhatsAppButton() {
  const { language, isRTL } = useLanguage();

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label={isRTL ? "أزرار التواصل السريع" : "Quick Contact Channels"}
      className={`fixed bottom-6 z-40 flex flex-col gap-3.5 items-center ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'}`}
    >
      {/* WhatsApp Button */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={language === 'ar' ? "تحدثي معنا عبر واتساب" : "Chat with us on WhatsApp"}
        title={language === 'ar' ? "تحدثي معنا عبر واتساب" : "Chat with us on WhatsApp"}
        className="group relative w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#E7B397] flex items-center justify-center text-white shadow-elevated hover:shadow-2xl hover:bg-[#dba183] border-2 border-white/95 ring-1 ring-brand-gold/25 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.768.461 3.493 1.338 5.013L2 22l5.105-1.338c1.47.799 3.12 1.22 4.926 1.22h.005c5.534 0 10.031-4.496 10.031-10.031 0-2.679-1.043-5.198-2.937-7.093A9.967 9.967 0 0012.031 2zm0 18.36h-.004c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.167.83.845-3.087-.2-.318a8.318 8.318 0 01-1.275-4.398c0-4.617 3.757-8.374 8.374-8.374 2.237 0 4.34.872 5.922 2.454a8.32 8.32 0 012.454 5.922c0 4.617-3.757 8.374-8.374 8.374zm4.593-6.273c-.252-.126-1.49-.735-1.72-.819-.231-.084-.399-.126-.567.126-.168.252-.651.819-.798.987-.147.168-.294.189-.546.063-.252-.126-1.064-.393-2.027-1.252-.75-.669-1.257-1.496-1.404-1.748-.147-.252-.016-.388.11-.513.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.567-1.365-.777-1.869-.204-.492-.412-.425-.567-.433-.147-.008-.315-.008-.483-.008-.168 0-.441.063-.672.315-.231.252-.882.861-.882 2.099 0 1.238.903 2.435 1.029 2.603.126.168 1.776 2.712 4.303 3.803.601.26 1.07.415 1.436.531.603.192 1.152.165 1.586.1.483-.072 1.49-.609 1.7-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.483-.294z" />
        </svg>

        {/* Pulse Dot */}
        <span className={`absolute -top-1 flex h-3.5 w-3.5 ${isRTL ? '-right-1' : '-left-1'}`}>
          <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-sm" />
        </span>
      </a>

      {/* Phone Call Button */}
      <a
        href={siteConfig.phoneCallUrl}
        aria-label={language === 'ar' ? `اتصال هاتفي مباشر ${siteConfig.phone}` : `Direct Phone Call ${siteConfig.phone}`}
        title={language === 'ar' ? `اتصال هاتفي: ${siteConfig.phone}` : `Call us: ${siteConfig.phone}`}
        className="group relative w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#E7B397] flex items-center justify-center text-white shadow-elevated hover:shadow-2xl hover:bg-[#dba183] border-2 border-white/95 ring-1 ring-brand-gold/25 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white drop-shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      </a>
    </motion.aside>
  );
}
