import Image from 'next/image';

import styles from './ModalCart.module.scss';
import Button from '@/components/ui/Button';

import { HeaderModal } from './Header';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '@/src/store/cart/selectors';
import CardNFTModal from './CardNFTModal';
import { CartItem } from '@/src/types/storeCart';

export default function ModalCart() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);


  return (
    <div className={styles.containerModal}>
      <HeaderModal />

      <div className={styles.containerCardNFT}>
         {cartItems.length === 0 && <h2>Carrinho vazio</h2>}
        {cartItems.map((item: CartItem) => (
          <CardNFTModal key={item.id} item={item} />
        ))}
      </div>

      <div className={styles.total}>
        <span>TOTAL</span>

        <div className={styles.totalPrice}>
          <Image src="/icon_price.png" alt="Cart" width={34} height={34} />
          <span>{totalPrice.toFixed(2)} ETH</span>
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
