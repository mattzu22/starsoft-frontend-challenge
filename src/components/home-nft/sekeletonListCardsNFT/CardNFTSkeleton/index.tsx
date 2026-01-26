import { motion } from 'framer-motion';
import styles from './CardNFTSkeleton.module.scss';
import { cardEntryVariants, shimmerAnimationVariants } from '@/src/animations/variants';


export default function CardNFTSkeleton() {
  return (
    <motion.div 
      className={styles.cardNFT} 
      data-testid="card-nft-skeleton"
      variants={cardEntryVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <motion.div
        className={styles.imageNFT}
        variants={shimmerAnimationVariants}
        animate="shimmer"
      />
      <div className={styles.containerContent}>
        <motion.div
          className={styles.title}
          variants={shimmerAnimationVariants}
          animate="shimmer"
        />
        <motion.div
          className={styles.description}
          variants={shimmerAnimationVariants}
          animate="shimmer"
        />
        <motion.div
          className={styles.button}
          variants={shimmerAnimationVariants}
          animate="shimmer"
        />
      </div>
    </motion.div>
  );
};

