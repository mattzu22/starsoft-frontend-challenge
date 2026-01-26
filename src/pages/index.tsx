import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ListCardsNFT from '@/components/home-nft/ListCardsNFT';
import ListCardsNFTSkeleton from '@/components/home-nft/sekeletonListCardsNFT/ListCardsNFTSkeleton';

import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import useNFTs from '../hooks/useNFTs';

import { GetStaticProps } from 'next';
import api from '../services/api';
import ModalCart from '@/components/cart/ModalCart';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../store/cart/selectors';
import { AnimatePresence } from 'framer-motion';
import { initialDataProps } from '../types/nft';
import { useState } from 'react';
import delayDuration from '../utils/delayDuration';

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('?page=1&rows=8&sortBy=name&orderBy=ASC');
  const data = response.data

  return {
    props: {
      initialData: data
    },
    revalidate: 60,
  }
}

export default function Home({ initialData }: { initialData: initialDataProps }) {
  const isCartOpen = useSelector(selectIsCartOpen);
  const [loadingDuration, setLoadingDuration] = useState(0);

  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useNFTs({ rows: 8, sortBy: 'name', orderBy: 'ASC', initialData });

  const products = data?.pages.flatMap(page => page.products);

  async function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      const { duration } = await delayDuration(() => fetchNextPage());

      setLoadingDuration(duration);
    }
  };

  return (
    <>
      <Head>
        <title>Marketplace de NFTs</title>
        <meta name="description" content="Compre e venda NFTs exclusivos com segurança e performance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AnimatePresence>
        {
          isCartOpen &&
          <div className={styles.containerModal}>
            <ModalCart />
          </div>
        }
      </AnimatePresence>

      <ListCardsNFT data={products} isError={isError} />
      {isFetchingNextPage && <ListCardsNFTSkeleton />}

      <div className={styles.containerLoadMore}>
        <Button
          animation="fade"
          isLoading={isFetchingNextPage}
          onClick={handleLoadMore}
          className={styles.loadMore}
          loadingDuration={loadingDuration}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          <span>
            {
              hasNextPage ? 'Carregar mais' : 'Você já viu tudo'
            }
          </span>
        </Button>
      </div>

      <Footer />
    </>
  );
}
