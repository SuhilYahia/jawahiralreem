import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SectionHeader({ badge, title, description, align = 'center', className = '' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-14 sm:mb-20 ${isCenter ? 'text-center mx-auto' : 'text-start'} max-w-3xl ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-rose text-brand-dark border border-brand-primary/30 text-xs sm:text-sm font-medium mb-5 shadow-soft"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-[1.45] tracking-normal"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-5 text-base sm:text-lg text-brand-text-muted leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
