import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/public/logo.png';
import cart from '@/public/Bag.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItems, selectIsCartOpen } from '@/src/store/cart/selectors';
import { toggleCart } from '@/src/store/cart/cartSlice';
import { AnimatePresence, motion } from 'framer-motion';

import { cartIconVariants, totalItemsVariants } from "@/src/animations/variants"



export default function Header() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  function handleToggleCart() {
    dispatch(toggleCart());
  }

  const totalItems = useSelector(selectTotalItems)

  return (
    <div className={styles.header}>
      <header>
        <Image src={logo} alt="Logo" />
        <div className={styles.cart}>
          <motion.button
            onClick={handleToggleCart}
          >
            <motion.img
              className={styles.cartIcon}
              src={cart.src}
              alt="Cart"
              variants={cartIconVariants}
              initial="initial"
              animate={isCartOpen ? "rotated" : "initial"}
            />
          </motion.button>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={totalItems}
              variants={totalItemsVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.totalItemsCount}
            >
              {totalItems}
            </motion.span>
          </AnimatePresence>
        </div>
      </header>
    </div>
  );
}
