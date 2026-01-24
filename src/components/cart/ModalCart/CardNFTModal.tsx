
import Image from "next/image"
import styles from "./ModalCart.module.scss"
import iconDelete from "@/public/Delete.png"
import { CartItem } from "@/src/types/storeCart"

export default function CardNFTModal({ item }: { item: CartItem }) {
  return (
    <div className={styles.cardNFT} key={item.id}>
      <div className={styles.imageNFT}>
        <Image src={item.image} alt="spiritLanter" width={139} height={139} />
      </div>
      <div className={styles.content}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className={styles.price}>
          <Image src="/icon_price.png" alt="Cart" width={29} height={29} />
          <span>{item.price} ETH</span>
        </div>
        <div className={styles.containerQuantity}>
          <div className={styles.quantity}>
            <button className={styles.subtract}>-</button>
            <span>{item.quantity}</span>
            <button className={styles.add}>+</button>
          </div>

          <button className={styles.buttonDelete}>
            <Image src={iconDelete} alt="Cart" width={25} height={25} />
          </button>
        </div>
      </div>
    </div>
  )
}