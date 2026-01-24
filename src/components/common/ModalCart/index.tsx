import Image from 'next/image';
import iconDelete from '@/public/Delete.png';
import spiritLanter from '@/public/spirit-lantern 1.png';

import styles from './ModalCart.module.scss';
import Button from '../Button';

import { HeaderModal } from './Header';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/src/store/cart/selectors';
import CardNFTModal from './CardNFTModal';

export default function ModalCart() {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className={styles.containerModal}>
      <HeaderModal />

      <div className={styles.containerCardNFT}>
         {cartItems.length === 0 && <h2>Carrinho vazio</h2>}
        {cartItems.map(item => (
          <CardNFTModal key={item.id} item={item} />
        ))}
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
