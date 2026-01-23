import Image from 'next/image';
import arrow from '@/public/Arrow - Left.png';
import iconDelete from '@/public/Delete.png';
import spiritLanter from '@/public/spirit-lantern 1.png';

import styles from './ModalCart.module.scss';
import Button from '../Button';

export default function ModalCart() {
  return (
    <div className={styles.containerModal}>
      <header className={styles.header}>
        <button>
          <Image src={arrow} alt="Cart" width={33} height={33} />
        </button>

        <h2>Mochila de Compras</h2>
      </header>

      <div className={styles.containerCardNFT}>
        <div className={styles.cardNFT}>
          <div className={styles.imageNFT}>
            <Image
              src={spiritLanter}
              alt="spiritLanter"
              width={139}
              height={139}
            />
          </div>
          <div className={styles.content}>
            <h2>ITEM 2</h2>
            <p>Redesigned from scratch and completely revised</p>
            <div className={styles.price}>
              <Image src="/icon_price.png" alt="Cart" width={29} height={29} />
              <span>12 ETH</span>
            </div>
            <div className={styles.containerQuantity}>
              <div className={styles.quantity}>
                <button className={styles.subtract}>-</button>
                <span>1</span>
                <button className={styles.add}>+</button>
              </div>

              <button className={styles.buttonDelete}>
                <Image src={iconDelete} alt="Cart" width={25} height={25} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.imageNFT}>
            <Image
              src={spiritLanter}
              alt="spiritLanter"
              width={139}
              height={139}
            />
          </div>
          <div className={styles.content}>
            <h2>ITEM 2</h2>
            <p>Redesigned from scratch and completely revised</p>
            <div className={styles.price}>
              <Image src="/icon_price.png" alt="Cart" width={29} height={29} />
              <span>12 ETH</span>
            </div>
            <div className={styles.containerQuantity}>
              <div className={styles.quantity}>
                <button className={styles.subtract}>-</button>
                <span>1</span>
                <button className={styles.add}>+</button>
              </div>

              <button className={styles.buttonDelete}>
                <Image src={iconDelete} alt="Cart" width={25} height={25} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.total}>
        <span>TOTAL</span>

        <div className={styles.totalPrice}>
          <Image src="/icon_price.png" alt="Cart" width={34} height={34} />
          <span>12 ETH</span>
        </div>
      </div>

      <Button
        animation="fade"
        textHover="COMPRA FINALIZADA!"
        className={styles.buttonBuy}
      >
        FINALIZAR COMPRA
      </Button>
    </div>
  );
}
