import Image from 'next/image';
import styles from './CardNFT.module.scss';

import Button from '@/components/common/Button';
import { NFTprops } from '@/hooks/useNFTs';

export default function CardNFT({ data }: { data: NFTprops }) {
  return (
    <div className={styles.cardNFT}>
      <Image className={styles.imageNFT} src={data.image} alt={data.name} width={216} height={195} />

      <div className={styles.containerContent}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className={styles.content}>
          <Image src="/icon_price.png" alt="Cart" width={29} height={29} />
          <span>{data.price} ETH</span>
        </div>
        <Button animation="drop" textHover="Adicionar ao carrinho">
          Comprar
        </Button>
      </div>
    </div>
  );
}
