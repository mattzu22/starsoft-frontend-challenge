import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/public/logo.png';
import cart from '@/public/Bag.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <header>
        <Image src={logo} alt="Logo" />
        <div className={styles.cart}>
          <Image className={styles.cartIcon} src={cart} alt="Cart" />
          <span>0</span>
        </div>
      </header>
    </div>
  );
}
