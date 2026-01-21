'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CardNFT from './components/nft/CardNFT';
import Button from '@/components/common/Button';

import styles from './page.module.scss';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <>
      <Header />

      <section className={styles.containerNFT}>
        <CardNFT />
        <CardNFT />
        <CardNFT />
        <CardNFT />
        <CardNFT />
        <CardNFT />
        <CardNFT />
        <CardNFT />
      </section>

      <div className={styles.containerLoadMore}>
        <Button
          animation="fade"
          isLoading={isLoading}
          onClick={handleLoadMore}
          className={styles.loadMore}
        >
          <span>Carregar mais</span>
        </Button>
      </div>

      <Footer />
    </>
  );
}
