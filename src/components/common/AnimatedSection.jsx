import { motion } from 'framer-motion';

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  slideRight: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  slideLeft: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
  staggerChildren = false,
}) {
  const Tag = motion[as] || motion.div;
  const v = staggerChildren ? stagger : variants[variant];

  return (
    <Tag
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function AnimatedItem({ children, variant = 'fadeUp', className = '', duration = 0.5 }) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
