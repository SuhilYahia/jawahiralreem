import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, ShoppingBag, ExternalLink, MessageCircle, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.categories'), href: '/categories' },
    { label: t('nav.whyUs'), href: '/why-us' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-brand-dark text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-brand-primary/20 relative z-50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
              <div className="hidden lg:flex items-center gap-1.5 text-brand-primary-light font-normal shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                <span>{t('announcement.badge')}</span>
              </div>

              <div className="flex-1 text-center flex items-center justify-center gap-2 px-1 sm:px-2 min-w-0">
                <span className="hidden sm:inline-flex items-center justify-center w-4 h-4 rounded-full bg-brand-gold/30 text-brand-gold shrink-0">
                  <Sparkles className="w-2.5 h-2.5" />
                </span>
                <span className="font-normal text-white text-center leading-snug">
                  <span className="hidden sm:inline">
                    {t('announcement.text')}
                  </span>
                  <span className="sm:hidden">
                    {t('announcement.textShort')}
                  </span>
                </span>
                <a
                  href={siteConfig.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center text-brand-primary-light underline hover:text-white font-medium shrink-0 ml-1 mr-1"
                >
                  {t('announcement.cta')}
                </a>
              </div>

              <button
                onClick={() => setShowAnnouncement(false)}
                aria-label={isRTL ? "إغلاق الإعلان" : "Close announcement"}
                className="text-white/70 hover:text-white p-1 rounded-lg transition-colors shrink-0 hover:bg-white/10"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-brand-primary/20 py-2.5'
            : 'bg-white/90 backdrop-blur-md border-b border-brand-primary/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0 group focus:outline-none p-1 rounded-xl"
              aria-label={isRTL ? "جواهر الريم - الصفحة الرئيسية" : "Jawahir Alreem - Home"}
            >
              <img
                src={siteConfig.logos.desktop}
                alt={siteConfig.name}
                style={{ width: `${siteConfig.logos.desktopWidth}px` }}
                className="hidden sm:block h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                width={siteConfig.logos.desktopWidth}
                height="45"
              />
              <img
                src={siteConfig.logos.mobile}
                alt={siteConfig.name}
                style={{ width: `${siteConfig.logos.mobileWidth}px` }}
                className="block sm:hidden h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                width={siteConfig.logos.mobileWidth}
                height="35"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`relative px-3 py-2 text-[13px] xl:text-[14px] rounded-xl whitespace-nowrap transition-all duration-200 ${
                      active
                        ? 'text-brand-dark bg-brand-rose font-semibold shadow-sm'
                        : 'text-brand-text-muted hover:text-brand-dark hover:bg-brand-rose/50 font-medium'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-brand-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Language Switcher + WhatsApp + Store Button */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="min-h-[42px] sm:min-h-[44px] px-2.5 sm:px-3 py-1.5 rounded-xl bg-brand-rose/70 hover:bg-brand-rose text-brand-dark font-medium text-xs sm:text-sm border border-brand-primary/30 flex items-center justify-center gap-1.5 transition-all shadow-soft active:scale-95"
                aria-label={language === 'ar' ? "Switch to English" : "التحويل إلى اللغة العربية"}
                title={language === 'ar' ? "Switch to English" : "التحويل إلى اللغة العربية"}
              >
                <Globe className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-gold shrink-0" />
                <span className="hidden xs:inline">{language === 'ar' ? 'English' : 'العربية'}</span>
                <span className="xs:hidden">{language === 'ar' ? 'EN' : 'عربي'}</span>
              </button>

              {/* WhatsApp Quick Icon */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isRTL ? "محادثة واتساب" : "Chat on WhatsApp"}
                className="hidden sm:flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200/80 shadow-soft"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Official Store Button */}
              <a
                href={siteConfig.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-button min-h-[42px] sm:min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-brand-dark text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <ShoppingBag className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-primary-light transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">{t('nav.store')}</span>
                <span className="sm:hidden">{language === 'ar' ? 'المتجر' : 'Store'}</span>
                <ExternalLink className="w-3 h-3 opacity-60 hidden md:block" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden min-h-[42px] min-w-[42px] sm:min-h-[44px] sm:min-w-[44px] p-2 text-brand-dark hover:bg-brand-rose/60 rounded-xl transition-colors flex items-center justify-center border border-brand-primary/20"
                aria-label={isOpen ? t('nav.close') : t('nav.menu')}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 top-[110px] bg-black/40 backdrop-blur-sm z-30"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-primary/30 shadow-elevated z-40 px-6 py-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="space-y-4">
                <nav className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`min-h-[44px] flex items-center justify-between py-2.5 px-4 text-sm rounded-xl transition-all ${
                          active
                            ? 'text-brand-dark bg-brand-rose border border-brand-primary/40 font-semibold shadow-sm'
                            : 'text-brand-text-muted hover:text-brand-dark hover:bg-brand-rose/40 font-normal'
                        }`}
                      >
                        <span>{item.label}</span>
                        {active && <span className="w-2 h-2 rounded-full bg-brand-gold" />}
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-3 border-t border-brand-rose space-y-2.5">
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsOpen(false);
                    }}
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-brand-rose text-brand-dark border border-brand-primary/30 py-2.5 rounded-xl text-xs font-medium hover:bg-brand-primary-light transition-colors"
                  >
                    <Globe className="w-4 h-4 text-brand-gold" />
                    <span>{language === 'ar' ? 'English Language' : 'اللغة العربية'}</span>
                  </button>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('hero.whatsapp')}</span>
                  </a>

                  <a
                    href={siteConfig.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-brand-dark text-white py-2.5 rounded-xl text-xs font-semibold hover:bg-brand-darker transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t('nav.store')}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
