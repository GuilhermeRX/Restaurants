import { useContext, useEffect, useState } from "react";
import { CiCircleRemove } from 'react-icons/ci';
import AppContext from "../../context/AppContext";
import { getRestaurants } from "../../services/getRestaurants";
import RestaurantCard from "../restaurantCard";

export default function ListContainer() {
  const { restaurants, setRestaurants, goSearch, setGoSearch } = useContext(AppContext)
  const [page, setPage] = useState(1);

  const handleRemoveSearch = async () => {
    setGoSearch(false);
    const response = await getRestaurants(1);
    setRestaurants(response);
  }

  useEffect(() => {
    const nextRestaurants = async () => {
      const response = await getRestaurants(page);
      setRestaurants(response)
    }
    nextRestaurants();
  }, [page, setRestaurants])

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
        <button onClick={() => setPage(page === 1 ? 1 : page - 1)}>Voltar</button>
        <p>{page}</p>
        <button onClick={() => setPage(page <= 12 ? page + 1 : page)}>Avançar</button>
      </div>
    </div>
  )
}
