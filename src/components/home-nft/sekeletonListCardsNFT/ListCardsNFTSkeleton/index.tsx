import CardNFTSkeleton from '../CardNFTSkeleton';
import styles from './ListCardsNFTSkeleton.module.scss';

export default function ListCardsNFTSkeleton ({ count = 8 }: { count?: number }) {
  return (
    <div className={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <CardNFTSkeleton key={index} />
      ))}
    </div>
  );
};

