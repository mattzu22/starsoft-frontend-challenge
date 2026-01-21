import Image from 'next/image';
import logo from '../../public/logo.png';
import cart from '../../public/Bag.png';
import nft_1 from '../../public/nft_1.png';
import icon_price from '../../public/icon_price.png';

import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <header>
          <Image src={logo} alt="Logo" />
          <div className={styles.cart}>
            <Image className={styles.cartIcon} src={cart} alt="Cart" />
            <span>0</span>
          </div>
        </header>
      </div>

      <section className={styles.containerNFT}>
        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>

        <div className={styles.cardNFT}>
          <div className={styles.containerImageNFT}>
            <Image className="" src={nft_1} alt="Logo" />
          </div>

          <div className={styles.containerContent}>
            <h2>Lorem inpsum</h2>
            <p>Redesigned from scratch and completely revised.</p>
            <div className={styles.content}>
              <Image src={icon_price} alt="Cart" />
              <span>32 ETH</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      <button className={styles.loadMore}>Carregar mais</button>

      <footer className={styles.footer}>
        <h2>STARSOFT © TODOS OS DIREITOS RESERVADOS</h2>
      </footer>
    </>
  );
}
