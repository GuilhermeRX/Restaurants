import { useContext, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import AppContext from "../../context/AppContext";
import { searchRestaurant } from "../../services/searchRestaurant";

export default function Header() {
  const [search, setSearch] = useState('');
  const { setRestaurants, setGoSearch } = useContext(AppContext);

  const getSearch = async () => {
    const response = await searchRestaurant(search)
    setGoSearch(search);
    setRestaurants(response)
    setSearch('')
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
