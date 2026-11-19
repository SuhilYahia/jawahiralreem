import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function TestimonialCard({ review, index = 0 }) {
  const { language } = useLanguage();

  const reviewerName = review['name_' + language] || review.name_ar;
  const reviewerRole = review['role_' + language] || review.role_ar;
  const reviewerComment = review['comment_' + language] || review.comment_ar;

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
      className="relative bg-white rounded-3xl p-7 sm:p-8 border border-brand-primary/20 shadow-soft hover:shadow-card hover:border-brand-primary/50 transition-all duration-300 flex flex-col justify-between text-start"
    >
      <div className="space-y-4">
        {/* Stars & Quote */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="w-9 h-9 rounded-full bg-brand-rose flex items-center justify-center text-brand-dark/40 shrink-0">
            <Quote className="w-4 h-4" />
          </span>
        </div>

        {/* Comment */}
        <p className="text-xs sm:text-sm text-brand-dark/90 font-normal leading-loose pt-1">
          "{reviewerComment}"
        </p>
      </div>

      {/* Author info */}
      <div className="mt-6 pt-4 border-t border-brand-rose/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-button flex items-center justify-center text-brand-dark font-bold text-sm shadow-sm shrink-0">
            {reviewerName.charAt(0)}
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-brand-dark">{reviewerName}</div>
            <div className="text-[11px] text-brand-text-muted font-normal">{reviewerRole}</div>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>{language === 'ar' ? 'شراء مؤكد' : 'Verified'}</span>
        </span>
      </div>
    </motion.div>
  );
}
