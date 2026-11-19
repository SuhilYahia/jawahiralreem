import { siteConfig } from '../config/site';
import { faqData } from '../data/faq';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/ui/ContactForm';
import FAQAccordion from '../components/ui/FAQAccordion';
import AnimatedSection from '../components/common/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { language, t, isRTL } = useLanguage();

  const directContactCards = [
    {
      icon: MessageCircle,
      title: language === 'ar' ? 'محادثة واتساب فورية' : 'Instant WhatsApp Chat',
      desc: language === 'ar' ? 'تحدثي مباشرة مع المبيعات والطلبات' : 'Chat directly with sales & support',
      actionText: language === 'ar' ? 'بدء المحادثة الآن' : 'Start Chatting',
      href: siteConfig.whatsappUrl,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconColor: 'text-emerald-600',
      badge: language === 'ar' ? 'رد فوري' : 'Fast Reply',
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'الاتصال الهاتفي المباشر' : 'Direct Phone Call',
      desc: siteConfig.phone,
      actionText: language === 'ar' ? 'اتصال الآن' : 'Call Now',
      href: siteConfig.phoneCallUrl,
      color: 'bg-amber-50 text-amber-900 border-amber-200',
      iconColor: 'text-amber-700',
      badge: language === 'ar' ? 'متاح للاتصال' : 'Available',
      dir: 'ltr',
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني الرسمي' : 'Official Email',
      desc: siteConfig.email,
      actionText: language === 'ar' ? 'إرسال إيميل' : 'Send Email',
      href: `mailto:${siteConfig.email}`,
      color: 'bg-blue-50 text-blue-900 border-blue-200',
      iconColor: 'text-blue-600',
      badge: language === 'ar' ? 'للمراسلات' : 'Inquiries',
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'مقر المصنع بالمدينة' : 'Factory in Madinah',
      desc: language === 'ar' ? 'المنطقة الصناعية، طريق الهجرة' : 'Industrial Zone, Hijrah Road, Madinah',
      actionText: language === 'ar' ? 'عرض على الخريطة' : 'View on Maps',
      href: siteConfig.googleMapsUrl,
      color: 'bg-brand-rose text-brand-dark border-brand-primary/30',
      iconColor: 'text-brand-dark',
      badge: language === 'ar' ? 'مصنع وطني' : 'Factory',
    },
  ];

  return (
    <div className="pb-28">
      {/* Page Header */}
      <PageHeader
        badge={language === 'ar' ? "نسعد بتواصلك وخدمتك دائماً" : "We Are Delighted to Assist You"}
        title={t('contact.pageTitle')}
        subtitle={t('contact.pageSubtitle')}
        breadcrumbs={[{ label: t('nav.contact') }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 space-y-20">
        
        {/* Quick Contact Cards with 48px touch targets */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directContactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={idx} variant="fadeUp" delay={idx * 0.08}>
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="h-full block p-7 rounded-3xl border transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-white border-brand-primary/20 flex flex-col justify-between text-start"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.color} shadow-sm`}>
                          <Icon className={`w-7 h-7 ${card.iconColor}`} />
                        </div>
                        <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-brand-rose text-brand-dark border border-brand-primary/20">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-brand-dark mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal" dir={card.dir}>
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-brand-rose flex items-center justify-between text-xs font-semibold text-brand-dark">
                      <span>{card.actionText}</span>
                      <ExternalLink className="w-4 h-4 text-brand-gold" />
                    </div>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Form & Factory Info Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-start">
          
          {/* Contact Form Column */}
          <AnimatedSection variant="fadeUp" className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-brand-primary/20 shadow-soft p-8 sm:p-12">
              <div className="mb-8">
                <span className="text-xs font-semibold text-brand-gold flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'ar' ? 'خدمة عميلات فورية' : 'Immediate Customer Support'}</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-[1.4]">
                  {t('contact.sendUsMessage')}
                </h2>
                <p className="text-xs sm:text-sm text-brand-text-muted mt-2 font-normal leading-relaxed">
                  {t('contact.formDesc')}
                </p>
              </div>

              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Factory Info & Working Hours Column */}
          <AnimatedSection variant="fadeUp" delay={0.15} className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-brand-primary/20 shadow-soft p-8 sm:p-10 space-y-7">
              <div>
                <span className="text-xs font-semibold text-brand-gold flex items-center gap-1.5 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{t('contact.factoryInfo')}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-[1.4]">
                  {language === 'ar' ? 'مصنع جواهر الريم للصناعة' : 'Jawahir Alreem Manufacturing Plant'}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-brand-rose/40 border border-brand-primary/20 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-brand-dark">
                    <Clock className="w-4 h-4 text-brand-dark shrink-0" />
                    <span>{t('contact.workingHours')}</span>
                  </div>
                  <p className="text-brand-text-muted leading-relaxed font-normal">
                    {t('contact.workingHoursText')}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-rose/40 border border-brand-primary/20 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-brand-dark">
                    <MapPin className="w-4 h-4 text-brand-dark shrink-0" />
                    <span>{t('contact.factoryLocation')}</span>
                  </div>
                  <p className="text-brand-text-muted leading-relaxed font-normal">
                    {siteConfig.address}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-rose/40 border border-brand-primary/20 space-y-2.5">
                  <div className="flex items-center gap-2 font-semibold text-brand-dark">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{language === 'ar' ? 'التوثيق والتراخيص الحكومية:' : 'Government Registrations:'}</span>
                  </div>
                  <ul className="text-brand-text-muted space-y-1.5 font-normal">
                    <li>{t('contact.cr')} <strong className="font-semibold text-brand-dark">{siteConfig.commercialRegistration}</strong></li>
                    <li>{t('contact.platformId')} <strong className="font-semibold text-brand-dark">{siteConfig.businessPlatformId}</strong></li>
                    <li>{t('contact.postalCode')} <strong className="font-semibold text-brand-dark">{siteConfig.postalCode}</strong></li>
                  </ul>
                </div>
              </div>

              {/* Map Preview Box (Touch Target 48px) */}
              <div className="rounded-2xl overflow-hidden border border-brand-primary/20 bg-brand-rose/30 p-5 text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-brand-dark">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{language === 'ar' ? 'المدينة المنورة - المنطقة الصناعية' : 'Madinah Industrial Area, KSA'}</span>
                </div>
                <p className="text-xs text-brand-text-muted font-normal leading-relaxed">
                  {language === 'ar'
                    ? 'نرحب بزيارة مستودعات المصنع واستلام طلبيات الجملة بالتنسيق المسبق.'
                    : 'Factory visits and wholesale pickups available upon prior arrangement.'}
                </p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 w-full bg-brand-dark text-white py-3 rounded-xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-colors shadow-soft"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t('contact.openInMaps')}</span>
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </a>
              </div>
            </div>
          </AnimatedSection>

        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl border border-brand-primary/20 p-8 sm:p-14 shadow-soft">
          <SectionHeader
            badge={t('sections.faqBadge')}
            title={language === 'ar' ? 'الأسئلة الأكثر شيوعاً قبل التواصل' : 'Common Inquiries Before Contacting Us'}
            description={
              language === 'ar'
                ? 'جمعنا لكِ أبرز الاستفسارات المتكررة حول منتجاتنا، الشحن والتوصيل، وباقات الجملة للصالونات'
                : 'Key answers regarding our natural products, shipping, and professional salon wholesale supply'
            }
          />

          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqData} />
          </div>
        </section>

      </div>
    </div>
  );
}
