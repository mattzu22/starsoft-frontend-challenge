import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './ModalCart.module.scss';
import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';
import { HeaderModal } from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice, selectIsCartOpen } from '@/src/store/cart/selectors';
import CardNFTModal from './CardNFTModal';
import { CartItem } from '@/src/types/storeCart';
import { clearCart, closeCart } from '@/src/store/cart/cartSlice';
import { motion } from 'framer-motion';
import { modalVariants } from '@/src/animations/variants';

import cart from "@/public/Bag.png"

export default function ModalCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const isCartOpen = useSelector(selectIsCartOpen);

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [buttonText, setButtonText] = useState('FINALIZAR COMPRA');

  useEffect(() => {
    if (isCartOpen) {
      const timer = setTimeout(() => {
        setIsCheckingOut(false);
        setButtonText('FINALIZAR COMPRA');
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]);

  const handleCheckout = () => {
    if (isCheckingOut || cartItems.length === 0) return;

    setIsCheckingOut(true);
    setButtonText('PROCESSANDO...');

    setTimeout(() => {
      setIsCheckingOut(false);
      setButtonText('COMPRA FINALIZADA!');
      setTimeout(() => {
        dispatch(closeCart());
        dispatch(clearCart());
      }, 2000);

    }, 1000);
  };

  return (
    <motion.div
      className={styles.cartModal}
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeaderModal />

      <div className={styles.containerCardNFT}>
        {cartItems.length === 0 && buttonText === 'FINALIZAR COMPRA' &&
          <div className={styles.cartVoid}>
            <h2>Carrinho vazio</h2>          
            <Image src={cart} alt="Cart" width={35} height={35} />
          </div>}
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
        onClick={handleCheckout}
        disabled={isCheckingOut || cartItems.length === 0 || buttonText === 'COMPRA FINALIZADA!'}
        className={styles.buttonBuy}
      >
        {isCheckingOut ? <Spinner /> : buttonText}
      </Button>
    </motion.div>
  );
}
