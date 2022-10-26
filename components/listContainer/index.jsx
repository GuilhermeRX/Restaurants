import { useContext } from "react";
import AppContext from "../../context/AppContext";
import RestaurantCard from "../restaurantCard";

export default function ListContainer() {
  const { restaurants } = useContext(AppContext)

  return (
    <div>
      {restaurants.map((obj, i) => <RestaurantCard key={i} info={obj} />)}
    </div>
  )
}
