import { useContext } from "react";
import { CiCircleRemove } from 'react-icons/ci';
import AppContext from "../../context/AppContext";
import { getRestaurants } from "../../services/getRestaurants";
import { searchRestaurant } from "../../services/searchRestaurant";
import RestaurantCard from "../restaurantCard";

export default function ListContainer() {
  const {
    restaurants,
    setRestaurants,
    goSearch,
    setGoSearch,
    page,
    setPage
  } = useContext(AppContext)

  const handleRemoveSearch = async () => {
    setGoSearch(false);
    const response = await getRestaurants(1);
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
      if (!newPage) {
        const results = await newSearchPage();

        return results.length === 0 ? setPage(page) : showSearchList(results)
      }
    }
    const pageNumber = page <= 12 ? page + 1 : page
    setPage(pageNumber)
    const response = await getRestaurants(pageNumber);
    setRestaurants(response)
  }

  const handleBack = async () => {
    if (page > 1) {
      const pageNumber = page - 1
      setPage(pageNumber)
      const response = await getRestaurants(pageNumber);
      setRestaurants(response)
    }
  }


  const showSearchResult = (
    <div>
      <h2>Resultados</h2>
      <p>Resultados para</p>
      <h3>{goSearch}</h3>
      <button>Excluir Pesquisa <CiCircleRemove onClick={() => handleRemoveSearch()} /></button>
    </div>
  )

  return (
    <div>
      {goSearch && showSearchResult}
      {restaurants.map((obj, i) => <RestaurantCard key={i} info={obj} />)}
      <div>
        <button onClick={() => handleBack()}>Voltar</button>
        <p>{page}</p>
        <button onClick={() => handleNext()}>Avançar</button>
      </div>
    </div>
  )
}
