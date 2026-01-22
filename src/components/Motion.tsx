"use client";

import { motion, type MotionProps } from "framer-motion";

type BaseProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
};

const viewport = { once: true, amount: 0.2 } as const;

/** NOVOS NOMES */
export function PageEnter({ children, className, ...rest }: BaseProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function FadeInView({ children, className, ...rest }: BaseProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.35, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerInView({ children, className, ...rest }: BaseProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...rest }: BaseProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** NOMES ANTIGOS (compatibilidade) */
export const FadeIn = PageEnter;
export const FadeInStagger = StaggerInView;
export const FadeInItem = StaggerItem;
