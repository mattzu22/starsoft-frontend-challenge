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
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
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
      <LayoutGroup>
        <HeaderModal />

        <motion.div className={styles.containerCardNFT} layout>
          <AnimatePresence mode="popLayout">
            {cartItems.length === 0 && buttonText === 'FINALIZAR COMPRA' && (

              <motion.div
                key="empty-cart"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={styles.cartVoid}
              >
                <h2>Carrinho vazio</h2>
                <Image src={cart} alt="Cart" width={35} height={35} />
              </motion.div>
            )}
            {cartItems.map((item: CartItem) => (
              <CardNFTModal key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div className={styles.total} layout>
          <span>TOTAL</span>

          <div className={styles.totalPrice}>
            <Image src="/icon_price.png" alt="Cart" width={34} height={34} />
            <span>{totalPrice.toFixed(2)} ETH</span>
          </div>
        </motion.div>

        <motion.div layout>
          <Button
            animation="fade"
            onClick={handleCheckout}
            disabled={isCheckingOut || cartItems.length === 0 || buttonText === 'COMPRA FINALIZADA!'}
            className={styles.buttonBuy}
          >
            {isCheckingOut ? <Spinner /> : buttonText}
          </Button>
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
}
