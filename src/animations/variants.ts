import { Variants } from 'framer-motion';

export const modalVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
    transformOrigin: "100% 0%",
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
