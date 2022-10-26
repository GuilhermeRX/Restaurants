import { useContext, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import AppContext from "../../context/AppContext";
import { searchRestaurant } from "../../services/searchRestaurant";

export default function Header() {
  const [search, setSearch] = useState('');
  const { setRestaurants, setGoSearch, setPage } = useContext(AppContext);

  const getSearch = async () => {
    const response = await searchRestaurant(search, 1)
    setGoSearch(search);
    setRestaurants(response)
    setSearch('')
    setPage(1)
  }

  return (
    <header>
      <label htmlFor="search">
        <BsSearch onClick={() => getSearch()} />
        <input
          type='text'
          id='search'
          placeholder="Encontre um restaurante"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </label>
    </header>
  )
}
