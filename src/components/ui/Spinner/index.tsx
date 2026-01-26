import { motion, Transition } from 'framer-motion';
import styles from './Spinner.module.scss';

const spinTransition: Transition = {
  repeat: Infinity,
  ease: 'linear',
  duration: 1,
};

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <motion.span
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}