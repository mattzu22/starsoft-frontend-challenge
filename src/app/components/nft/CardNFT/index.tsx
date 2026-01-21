import Image from 'next/image';
import styles from './CardNFT.module.scss';

import Button from '@/components/common/Button';

export default function CardNFT() {
  return (
    <div className={styles.cardNFT}>
      <div className={styles.containerImageNFT}>
        <Image src="/nft_1.png" alt="Logo" width={216} height={195} />
      </div>

      <div className={styles.containerContent}>
        <h2>Lorem inpsum</h2>
        <p>Redesigned from scratch and completely revised.</p>
        <div className={styles.content}>
          <Image src="/icon_price.png" alt="Cart" width={29} height={29} />
          <span>32 ETH</span>
        </div>
        <Button animation="drop" textHover="Adicionar ao carrinho">
          Comprar
        </Button>
      </div>
    </div>
  );
}
