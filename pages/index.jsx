import Header from '../components/header';
import ListContainer from '../components/listContainer';
import AppProvider from '../context/AppProvider';
import { getRestaurants } from '../services/getRestaurants';

export default function Home({ restaurants }) {
  return (
    <AppProvider data={restaurants}>
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