import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/public/logo.png';
import cart from '@/public/Bag.png';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '@/src/store/cart/selectors';

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsOpen}: HeaderProps) {
  function openModal() {
     setIsOpen(true)
  }

  const totalItems = useSelector(selectTotalItems)

  return (
    <div className={styles.header}>
      <header>
        <Image src={logo} alt="Logo" />
        <div className={styles.cart}>
          <button onClick={openModal}>
            <Image className={styles.cartIcon} src={cart} alt="Cart" />
          </button>
          <span>{totalItems}</span>
        </div>
      </header>
    </div>
  );
}
