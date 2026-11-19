import { motion } from 'framer-motion';
import { Award, Factory, Sparkles, ShieldCheck, Users, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const iconMap = { Award, Factory, Sparkles, ShieldCheck, Users, Heart };

export default function FeatureCard({ feature, index = 0 }) {
  const { language } = useLanguage();
  const Icon = iconMap[feature.icon] || Sparkles;

  const featureTitle = feature['title_' + language] || feature.title_ar;
  const featureDesc = feature['description_' + language] || feature.description_ar;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-7 sm:p-8 bg-white rounded-3xl border border-brand-primary/20 shadow-soft hover:shadow-elevated hover:border-brand-primary/60 transition-all duration-500 overflow-hidden flex flex-col justify-between text-start"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <div className="w-14 h-14 bg-gradient-to-br from-brand-rose via-brand-sand to-brand-primary/30 rounded-2xl flex items-center justify-center text-brand-dark shadow-sm group-hover:scale-110 group-hover:bg-brand-primary transition-all duration-300">
          <Icon className="w-7 h-7 text-brand-dark" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-brand-dark leading-[1.4]">
          {featureTitle}
        </h3>
        <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-normal">
          {featureDesc}
        </p>
      </div>

      <div className="relative z-10 mt-6 pt-3.5 border-t border-brand-rose/60 flex items-center gap-1.5 text-xs font-medium text-brand-primary-dark group-hover:text-brand-dark transition-colors">
        <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
        <span>{language === 'ar' ? 'معايير الجودة المعتمدة' : 'Certified Quality Standards'}</span>
      </div>
    </motion.div>
  );
}
