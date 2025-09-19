import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  duration?: number;
  once?: boolean;
}

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: "-100px 0px -100px 0px" 
  });

  const variants = {
    up: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    down: {
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    left: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    right: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.div>
  );
};

// Hook para animações mais complexas
export const useScrollAnimation = (options?: {
  amount?: number;
  once?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: options?.amount || 0.1,
    once: options?.once ?? true,
  });

  return { ref, isInView };
};
