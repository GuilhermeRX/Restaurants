import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ data = {}, children }) {
  const [restaurants, setRestaurants] = useState(data);
  const [goSearch, setGoSearch] = useState(false);

  const contextValue = {
    restaurants,
    setRestaurants,
    goSearch,
    setGoSearch,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}