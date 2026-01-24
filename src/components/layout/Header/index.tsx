import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/public/logo.png';
import cart from '@/public/Bag.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItems } from '@/src/store/cart/selectors';
import { toggleCart } from '@/src/store/cart/cartSlice';

export default function Header() {
  const dispatch = useDispatch();

  function handleToggleCart() {
     dispatch(toggleCart());
  }

  const totalItems = useSelector(selectTotalItems)

  return (
    <div className={styles.header}>
      <header>
        <Image src={logo} alt="Logo" />
        <div className={styles.cart}>
          <button onClick={handleToggleCart}>
            <Image className={styles.cartIcon} src={cart} alt="Cart" />
          </button>
          <span>{totalItems}</span>
        </div>
      </header>
    </div>
  );
}
