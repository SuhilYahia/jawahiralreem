import { siteConfig } from '../../config/site';
import roseCareImg from '../../assets/images/rose-care-spray.webp';
import coconutHalawaImg from '../../assets/images/coconut-hair-remover.webp';
import { ShoppingBag, MessageCircle, CheckCircle2, Award, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } }
});

export default function HeroSection() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative pt-44 sm:pt-48 md:pt-52 lg:pt-56 pb-24 sm:pb-32 overflow-hidden bg-rose-radial">
      {/* Decorative Luxury Glow Orbs with Generous Spread */}
      <div className="absolute top-12 right-12 w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-[450px] h-[450px] bg-brand-gold/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Content Column with Direction-Aware Alignment (RTL Right, LTR Left) */}
          <div className={`lg:col-span-7 space-y-8 ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
            
            {/* Heritage Badge with breathing room */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-white/95 backdrop-blur-md border border-brand-primary/30 rounded-full text-xs sm:text-sm font-medium text-brand-dark shadow-soft"
            >
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            {/* Main Headline with Generous Vertical Space and Line Height */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-brand-dark leading-[1.4] sm:leading-[1.45] tracking-normal">
                {t('hero.titleLine1')}
                <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-brand-primary-dark mt-4 leading-normal">
                  {t('hero.titleLine2')}
                </span>
              </h1>
            </motion.div>

            {/* Explanatory Paragraph with Generous Line Height for Maximum Eye Comfort */}
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-brand-text-muted leading-[1.85] max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Call To Actions with 54px Minimum Height */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}
            >
              <a
                href={siteConfig.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-button w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 bg-brand-dark text-white px-8 py-4 rounded-2xl text-sm font-semibold shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <ShoppingBag className="w-5 h-5 text-brand-primary-light transition-transform group-hover:scale-110" />
                <span>{t('hero.shopNow')}</span>
              </a>

              <Link
                to="/products"
                className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 bg-white text-brand-dark border border-brand-primary/40 px-7 py-4 rounded-2xl text-sm font-semibold hover:bg-brand-rose transition-all duration-300 shadow-soft group"
              >
                <span>{t('hero.exploreCatalog')}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 px-6 py-4 rounded-2xl text-sm font-semibold hover:bg-emerald-100 transition-all duration-300 shadow-soft"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>{t('hero.whatsapp')}</span>
              </a>
            </motion.div>

            {/* Trust Strip with Clean Separation */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="pt-10 border-t border-brand-primary/20 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-sm font-medium text-brand-dark"
            >
              <div className={`p-4 bg-white/90 rounded-2xl border border-brand-primary/20 shadow-soft flex items-center justify-center gap-3 ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t('hero.trust1')}</span>
              </div>
              <div className={`p-4 bg-white/90 rounded-2xl border border-brand-primary/20 shadow-soft flex items-center justify-center gap-3 ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t('hero.trust2')}</span>
              </div>
              <div className={`p-4 bg-white/90 rounded-2xl border border-brand-primary/20 shadow-soft flex items-center justify-center gap-3 ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t('hero.trust3')}</span>
              </div>
            </motion.div>
          </div>

          {/* Luxury Visual Showcase: Clean 3D Product Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Presentation Stage Box */}
              <div className="rounded-3xl overflow-hidden border border-brand-primary/30 shadow-elevated bg-white p-6 sm:p-8">
                <div className="relative rounded-2xl bg-gradient-to-b from-brand-rose via-white to-brand-sand/30 aspect-[4/3] sm:aspect-square flex items-center justify-center p-6 group">
                  
                  {/* Two Signature Products */}
                  <div className="relative w-full h-full flex items-center justify-center gap-4">
                    <img
                      src={roseCareImg}
                      alt={language === 'ar' ? 'رذاذ روز كير بالصبار' : 'Rose Care Facial Mist'}
                      className="max-h-[85%] max-w-[50%] object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <img
                      src={coconutHalawaImg}
                      alt={language === 'ar' ? 'حلاوة إزالة الشعر بجوز الهند' : 'Coconut Sugar Wax'}
                      className="max-h-[85%] max-w-[50%] object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating Heritage Tag */}
                  <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-brand-dark/95 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-soft flex items-center gap-2`}>
                    <Sparkles className="w-4 h-4 text-brand-gold" />
                    <span>{t('hero.floatingBadge')}</span>
                  </div>
                </div>

                {/* Sub-Card with Verified Quality Badge */}
                <div className="mt-5 pt-4 border-t border-brand-rose flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-rose rounded-xl flex items-center justify-center text-brand-dark shrink-0">
                      <Award className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <div className="text-[11px] text-brand-text-muted font-normal">{t('hero.badgeYears')}</div>
                      <div className="text-xs font-bold text-brand-dark">{t('hero.badgeYearsText')}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-medium text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full shrink-0">
                    {language === 'ar' ? 'جودة موثقة' : 'Verified Quality'}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
