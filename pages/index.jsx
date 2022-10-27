import Head from 'next/head';
import Header from '../components/header';
import ListContainer from '../components/listContainer';
import AppProvider from '../context/AppProvider';
import { getRestaurants } from '../services/getRestaurants';

export default function Home({ restaurants }) {
  return (
    <AppProvider data={restaurants}>
      <Head>
        <title>Restaurantes</title>
        <meta name='description' content='Encontrar bares e restaurantes nunca foi tão fácil!' />
        <meta property='og:title' content='Restaurantes' />
        <meta
          property='og:description'
          content='Encontrar bares e restaurantes nunca foi tão fácil!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <ListContainer />
    </AppProvider>
  )
}

export const getStaticProps = async () => {
  const request = await getRestaurants(1);
  const restaurants = request;
  return {
    props: {
      restaurants,
    },
    revalidate: 360
  };
};