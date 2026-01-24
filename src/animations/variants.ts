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

export const cardModalVariants: Variants = {
  initial: { opacity: 0, scale: 0, transformOrigin: "center center" }, 
  visible: { opacity: 1, scale: 1, rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: {
    opacity: 0,
    scale: 0, 
    transformOrigin: "center center",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
