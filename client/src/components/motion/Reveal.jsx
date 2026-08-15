import { motion, useReducedMotion } from 'framer-motion';


const VIEWPORT = { once: true, margin: '-80px' };

export function Reveal({ children, delay = 0, y = 32, as = 'div', ...rest }) {
  const reduced = useReducedMotion();
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: reduced ? 0.2 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}


export function ZoomIn({ children, delay = 0, scale = 1.12, ...rest }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: reduced ? 0.2 : 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: 'hidden' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}


export function Stagger({ children, stagger = 0.08, delay = 0, ...rest }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerItem({ children, as = 'div', ...rest }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp variants={itemVariants} {...rest}>
      {children}
    </Comp>
  );
}


export const hoverLift = {
  whileHover: { y: -6, scale: 1.015 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

export { motion };
