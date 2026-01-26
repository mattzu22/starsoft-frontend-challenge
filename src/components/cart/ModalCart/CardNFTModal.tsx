
import Image from "next/image"
import styles from "./ModalCart.module.scss"
import iconDelete from "@/public/icons/Delete.png"
import { NFTprops  } from "@/types/nft"
import { useDispatch } from "react-redux"
import { addItem, decreaseItem, deleteItem } from "@/src/store/cart/cartSlice"
import { AnimatePresence, motion } from "framer-motion"
import { cardModalVariants } from "@/src/animations/variants"
import { quantityVariants } from "@/src/animations/variants"

import price from "@/public/icons/icon_price.png"

export default function CardNFTModal({ item }: { item: NFTprops }) {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(decreaseItem({ id: item.id }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(addItem(item));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem({ id: item.id }));
  };

  return (
    <motion.div
      variants={cardModalVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      layout
      className={styles.cardNFT}
      key={item.id}
    >
      <div className={styles.imageNFT}>
        <Image src={item.image} alt={`NFT ${item.name}`} width={139} height={139} />
      </div>
      <div className={styles.content}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className={styles.price}>
          <Image src={price} alt="Cart" width={29} height={29} />
          <span>{Number(item.price).toFixed(2)} ETH</span>
        </div>
        <div className={styles.containerQuantity}>
          <div className={styles.quantity}>
            <motion.button
              className={styles.subtract}
              onClick={handleDecreaseQuantity}
              whileTap={{ scale: 0.8 }}
            >
              -
            </motion.button>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={item.quantity}
                variants={quantityVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {item.quantity}
              </motion.span>
            </AnimatePresence>
            <motion.button
              className={styles.add}
              onClick={handleIncreaseQuantity}
              whileTap={{ scale: 0.8 }}
            >
              +
            </motion.button>
          </div>

          <motion.button className={styles.buttonDelete} onClick={handleDeleteItem} whileHover={{ opacity: 0.7 }}>
            <Image src={iconDelete} alt="Delete" width={25} height={25} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}