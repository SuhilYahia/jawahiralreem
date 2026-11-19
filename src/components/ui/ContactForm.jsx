import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

const initialState = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'general',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = language === 'ar' ? 'يرجى كتابة الاسم الكريم' : 'Name is required';
    }
    if (!data.email.trim()) {
      errs.email = language === 'ar' ? 'يرجى إدخال البريد الإلكتروني' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = language === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email address';
    }
    if (!data.phone.trim()) {
      errs.phone = language === 'ar' ? 'يرجى كتابة رقم الجوال' : 'Phone number is required';
    } else if (!/^[0-9+\s()-]{8,}$/.test(data.phone)) {
      errs.phone = language === 'ar' ? 'رقم الجوال غير صحيح' : 'Invalid phone number';
    }
    if (!data.message.trim()) {
      errs.message = language === 'ar' ? 'يرجى كتابة نص الرسالة' : 'Message is required';
    } else if (data.message.trim().length < 8) {
      errs.message = language === 'ar' ? 'الرسالة قصيرة جداً' : 'Message is too short';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] || undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] || undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (Object.keys(newErrors).length > 0) return;

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setForm(initialState);
      setTouched({});
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleSendViaWhatsApp = () => {
    const typeLabel = t(`contact.types.${form.inquiryType}`) || form.inquiryType;
    const text =
      language === 'ar'
        ? `*رسالة جديدة من موقع جواهر الريم*\n\n*الاسم:* ${form.name || 'غير محدد'}\n*نوع الاستفسار:* ${typeLabel}\n*رقم الجوال:* ${form.phone || 'غير محدد'}\n*البريد:* ${form.email || 'غير محدد'}\n*الرسالة:*\n${form.message || 'أود الاستفسار عن منتجات جواهر الريم'}`
        : `*New Website Inquiry - Jawahir Alreem*\n\n*Name:* ${form.name || 'N/A'}\n*Inquiry Type:* ${typeLabel}\n*Phone:* ${form.phone || 'N/A'}\n*Email:* ${form.email || 'N/A'}\n*Message:*\n${form.message || 'I would like to inquire about Jawahir Alreem products'}`;

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const inputClass = (name) =>
    `w-full px-4 py-3.5 bg-brand-rose/25 border rounded-2xl text-xs sm:text-sm text-brand-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary focus:bg-white placeholder-gray-400 font-normal ${
      errors[name] && touched[name]
        ? 'border-red-400 bg-red-50/50'
        : 'border-brand-primary/20 hover:border-brand-primary/40'
    }`;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 rounded-3xl bg-brand-rose/40 border border-brand-primary/30 text-center space-y-4"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-soft">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
          {t('contact.successTitle')}
        </h3>
        <p className="text-xs sm:text-sm text-brand-text-muted max-w-md mx-auto leading-relaxed font-normal">
          {t('contact.successDesc')}
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setStatus('idle')}
            className="min-h-[48px] w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-dark text-white text-xs font-semibold hover:bg-brand-darker transition-colors"
          >
            {t('contact.sendAnother')}
          </button>
          <button
            onClick={handleSendViaWhatsApp}
            className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('contact.followUpWhatsApp')}</span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-start" noValidate>
      {/* Inquiry Type Radio / Tabs */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-brand-dark mb-2.5">
          {t('contact.inquiryType')}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {['general', 'wholesale', 'product', 'support'].map((typeId) => (
            <button
              type="button"
              key={typeId}
              onClick={() => setForm((prev) => ({ ...prev, inquiryType: typeId }))}
              className={`min-h-[48px] py-2.5 px-3 text-center rounded-xl text-xs font-medium border transition-all ${
                form.inquiryType === typeId
                  ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                  : 'bg-white text-brand-dark border-brand-primary/20 hover:bg-brand-rose'
              }`}
            >
              {t(`contact.types.${typeId}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
        {/* Name */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-1.5">
            {t('contact.name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={language === 'ar' ? 'سارة الأحمد' : 'Sarah Al-Ahmad'}
            className={inputClass('name')}
          />
          <AnimatePresence>
            {errors.name && touched.name && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-normal"
              >
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-1.5">
            {t('contact.phone')} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+966 54 332 1430"
            dir="ltr"
            className={inputClass('phone')}
          />
          <AnimatePresence>
            {errors.phone && touched.phone && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-normal"
              >
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-1.5">
            {t('contact.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="example@mail.com"
            dir="ltr"
            className={inputClass('email')}
          />
          <AnimatePresence>
            {errors.email && touched.email && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-normal"
              >
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* City / Entity */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-1.5">
            {t('contact.city')}
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder={language === 'ar' ? 'المدينة المنورة / صالون لمسات' : 'Madinah / Beauty Lounge'}
            className={inputClass('subject')}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-1.5">
          {t('contact.message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'ar' ? 'اكتبي تفاصيل استفسارك أو طلبك هنا...' : 'Write your inquiry or wholesale requirements here...'}
          className={`${inputClass('message')} resize-none`}
        />
        <AnimatePresence>
          {errors.message && touched.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-normal"
            >
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Buttons (Touch Targets 52px) */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-[52px] w-full sm:flex-1 shimmer-button inline-flex items-center justify-center gap-2 bg-brand-dark text-white py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-brand-darker transition-all duration-300 shadow-soft disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t('actions.sending')}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-brand-primary-light" />
              <span>{t('actions.send')}</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleSendViaWhatsApp}
          className="min-h-[52px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-all shadow-soft"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t('contact.sendViaWhatsApp')}</span>
        </button>
      </div>
    </form>
  );
}
