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
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const quantityVariants: Variants = {
  initial: { opacity: 0, scale: 0.5, y: -5 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } },
  exit: { opacity: 0, scale: 0.5, y: 5 } 
};

export const cartIconVariants: Variants = {
  initial: { rotate: 0 },
  rotated: { rotate: -100, transition: { duration: 0.4, ease: "easeOut" } },
};

export const totalItemsVariants: Variants = {
  initial: { opacity: 1, scale: 1, x: 0, y: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    x: [0, -2, 2, -1, 1, 0],
    y: 0,
    transition: {
      x: { duration: 0.3, ease: "easeInOut" },
    }
  },
  exit: { opacity: 0, scale: 0.8, y: 5, transition: { duration: 0.2, ease: "easeIn" } }
};

export const cardEntryVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, scale: 0.9 }
};
