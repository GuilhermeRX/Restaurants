/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import AppContext from "../../context/AppContext";
import { searchRestaurant } from "../../services/searchRestaurant";
import { HeaderStyle, SvgContainer } from "./style";

export default function Header() {
  const [search, setSearch] = useState('');
  const { setRestaurants, setGoSearch, setPage, setLoading } = useContext(AppContext);

  const getSearch = async () => {
    setLoading(true);
    const response = await searchRestaurant(search, 1)
    setGoSearch(search);
    setLoading(false);
    setRestaurants(response)
    setSearch('')
    setPage(1)
  }

  return (
    <HeaderStyle>
      <span>
        <h1>Descubra novos sabores</h1>
        <p>Aqui eu converso com você sobre nossa proposta</p>
      </span>
      <section>
        <label htmlFor="search">
          <SvgContainer>
            <BsSearch />
          </SvgContainer>
          <input
            type='text'
            id='search'
            placeholder="Encontre um restaurante"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </label>
        <button onClick={() => getSearch()}>Buscar</button>
      </section>
    </HeaderStyle>
  )
}
