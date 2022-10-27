import { useContext } from "react";
import { CiCircleRemove } from 'react-icons/ci';
import AppContext from "../../context/AppContext";
import { getRestaurants } from "../../services/getRestaurants";
import { searchRestaurant } from "../../services/searchRestaurant";
import Loading from "../loading";
import RestaurantCard from "../restaurantCard";
import { DivButtons, ListContainerStyle, ResultSearch } from "./style";

export default function ListContainer() {
  const {
    restaurants,
    setRestaurants,
    goSearch,
    setGoSearch,
    page,
    setPage,
    loading,
    setLoading,
  } = useContext(AppContext)

  const handleRemoveSearch = async () => {
    setGoSearch(false);
    setLoading(true);
    const response = await getRestaurants(1);
    setLoading(false);
    setRestaurants(response);
    setPage(1)
  }

  const newSearchPage = async () => {
    const newSearch = await searchRestaurant(goSearch, page + 1);
    return newSearch;
  }

  const showSearchList = async (results) => {
    setPage(page + 1)
    setRestaurants(results)
  }

  const handleNext = async () => {
    if (goSearch) {
      const newPage = restaurants.length < 8
      if (newPage) {
        setLoading(true);
        const results = await newSearchPage();
        setLoading(false);
        return results.length === 0 ? setPage(page) : showSearchList(results)
      }
    }
    const pageNumber = page <= 12 ? page + 1 : page
    setLoading(true);
    setPage(pageNumber)
    const response = await getRestaurants(pageNumber);
    setLoading(false);
    setRestaurants(response)
  }

  const handleBack = async () => {
    if (page > 1) {
      const pageNumber = page - 1
      setLoading(true);
      setPage(pageNumber)
      const response = await getRestaurants(pageNumber);
      setLoading(false);
      setRestaurants(response)
    }
  }

  const showSearchResult = (
    <ResultSearch>
      <div>
        <h2>Resultados</h2>
        <button onClick={() => handleRemoveSearch()}>Excluir Pesquisa <CiCircleRemove /></button>
      </div>
      <div>
        <p>Resultados para</p>
        <h3>{goSearch}</h3>
      </div>
    </ResultSearch>
  )

  return (
    <ListContainerStyle>
      {goSearch ? showSearchResult : <h1>Restaurantes</h1>}

      {loading
        ? <Loading />
        : <span>
          {restaurants.map((obj, i) => <RestaurantCard key={i} info={obj} />)}
        </span>}
      <DivButtons>
        <button onClick={() => handleBack()}>Voltar</button>
        <p>{`pág: ${page}`}</p>
        <button onClick={() => handleNext()}>Avançar</button>
      </DivButtons>
    </ListContainerStyle>
  )
}
