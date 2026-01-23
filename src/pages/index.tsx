import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';
import ListCardsNFT from '../components/nft/ListCardsNFT';

import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import useNFTs, { NFTprops } from '../hooks/useNFTs';
import { GetStaticProps } from 'next';
import api from '../services/api';
import ModalCart from '@/components/common/ModalCart';
import { useState } from 'react';

export interface initialDataProps {
  initialData: NFTprops[]
  count: number
}

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
  const [isOpen, setIsOpen] = useState(false)

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useNFTs({ rows: 8, sortBy: 'name', orderBy: 'ASC', initialData });

  const products = data?.pages.flatMap(page => page.products);

  if (isError) {
    return <div>Error ao carregar os NFTs</div>
  }

  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  function openModal(){
    setIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>Marketplace de NFTs</title>
        <meta name="description" content="Compre e venda NFTs exclusivos com segurança e performance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setIsOpen={openModal} isOpen={isOpen} />

      {isOpen && <ModalCart />}

      {isLoading && <div>Carregando...</div>}
      {data && <ListCardsNFT data={products} />}

      <div className={styles.containerLoadMore}>
        <Button
          animation="fade"
          isLoading={isFetchingNextPage}
          onClick={handleLoadMore}
          className={styles.loadMore}
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
