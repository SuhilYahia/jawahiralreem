import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const { language } = useLanguage();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const q = item['question_' + language] || item.question_ar;
        const a = item['answer_' + language] || item.answer_ar;

        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-white border-brand-primary shadow-soft'
                : 'bg-white/80 hover:bg-white border-brand-primary/20'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="min-h-[54px] w-full py-4 sm:py-5 px-5 sm:px-6 text-start flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-brand-primary text-white' : 'bg-brand-rose text-brand-dark'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                </span>
                <span className="text-sm sm:text-base font-bold text-brand-dark">
                  {q}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-brand-dark shrink-0 ml-2 mr-2"
              >
                <ChevronDown className="w-5 h-5 text-brand-primary-dark" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-brand-rose text-xs sm:text-sm text-brand-text-muted leading-loose font-normal">
                    <p className="pr-11 pl-11">{a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
