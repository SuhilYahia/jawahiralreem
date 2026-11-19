import { siteConfig } from '../../config/site';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, ShoppingBag, ExternalLink, ShieldCheck, FileText, Instagram, MessageCircle, Clock } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-gradient-to-b from-brand-rose/40 via-brand-sand/20 to-brand-sand/40 border-t border-brand-primary/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid with spacious gaps (8pt grid system) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none p-1 rounded-xl">
              <img
                src={siteConfig.logos.desktop}
                alt={siteConfig.name}
                style={{ width: `${siteConfig.logos.desktopWidth}px` }}
                className="h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                width={siteConfig.logos.desktopWidth}
                height="45"
              />
            </Link>

            <p className="text-sm font-bold text-brand-dark leading-relaxed">
              {t('footer.tagline')}
            </p>

            <p className="text-xs sm:text-sm text-brand-text-muted leading-loose max-w-md font-normal">
              {t('footer.desc')}
            </p>

            {/* Social & Contact Buttons (Touch Target 48px) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300 text-xs font-medium transition-colors shadow-soft"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{t('footer.whatsappSales')}</span>
              </a>

              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-brand-dark hover:bg-brand-rose border border-brand-primary/30 text-xs font-medium transition-colors shadow-soft"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>{t('footer.instagram')}</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-4 bg-brand-gold rounded-full shrink-0" />
              <span>{t('footer.quickLinks')}</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal text-brand-text-muted">
              <li>
                <Link to="/" className="hover:text-brand-dark transition-colors inline-block py-1">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-dark transition-colors inline-block py-1">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-dark transition-colors inline-block py-1">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-brand-dark transition-colors inline-block py-1">
                  {t('nav.categories')}
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-brand-dark transition-colors inline-block py-1">
                  {t('nav.whyUs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-dark transition-colors inline-block py-1">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-dark font-medium hover:underline pt-1 py-1"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-gold" />
                  <span>{t('actions.officialStore')}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Factory Info & Working Hours */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-4 bg-brand-gold rounded-full shrink-0" />
              <span>{t('footer.factoryInfo')}</span>
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-brand-text-muted font-normal">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-dark shrink-0 mt-1" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-dark shrink-0" />
                <a href={siteConfig.phoneCallUrl} className="hover:text-brand-dark font-medium py-1" dir="ltr">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-dark shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-dark font-medium py-1">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-dark shrink-0 mt-1" />
                <span>{siteConfig.workingHours}</span>
              </li>

              {/* Official Credentials */}
              <li className="pt-3 border-t border-brand-primary/20 space-y-2 text-xs font-normal text-brand-text-muted">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{t('contact.cr')} <strong className="font-semibold text-brand-dark">{siteConfig.commercialRegistration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('contact.platformId')} <strong className="font-semibold text-brand-dark">{siteConfig.businessPlatformId}</strong></span>
                </div>
              </li>
            </ul>

            <a
              href={siteConfig.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-button min-h-[48px] w-full inline-flex items-center justify-center gap-2 bg-brand-dark text-white py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-all shadow-soft"
            >
              <ShoppingBag className="w-4 h-4 text-brand-primary-light" />
              <span>{t('hero.shopNow')}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-primary/20 text-center text-xs text-brand-text-muted flex flex-col sm:flex-row items-center justify-between gap-4 font-normal">
          <div className="flex items-center gap-2">
            <span>{t('footer.rights')} &copy; {new Date().getFullYear()}</span>
            <span className="font-semibold text-brand-dark">{siteConfig.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-brand-dark font-medium">{t('footer.madeInMadinah')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
