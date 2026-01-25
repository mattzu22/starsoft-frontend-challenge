import Image from 'next/image';
import styles from './CardNFT.module.scss';
import { motion, Variants } from 'framer-motion'; // Import motion and Variants

import Button from '@/components/ui/Button';
import { NFTprops } from '@/types/nft';
import { useDispatch } from 'react-redux';
import { addItem } from '@/src/store/cart/cartSlice';

const cardEntryVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, scale: 0.9 }
};

export default function CardNFT({ data }: { data: NFTprops }) {
  const dispatch = useDispatch();

    function handleAddToCart() {
    dispatch(addItem({
      id: data.id,
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      quantity: 1
    }))
  }
  return (
    <motion.div
      className={styles.cardNFT}
      variants={cardEntryVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      key={data.id}
    >
      <Image className={styles.imageNFT} src={data.image} alt={data.name} width={216} height={195} />

      <div className={styles.containerContent}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className={styles.content}>
          <Image src="/icon_price.png" alt="Cart" width={29} height={29} />
          <span>{Number(data.price).toFixed(2)} ETH</span>
        </div>
        <Button animation="drop" textHover="Adicionar ao carrinho" onClick={handleAddToCart}>
          Comprar
        </Button>
      </div>
    </motion.div>
  );
}
