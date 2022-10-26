import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ data = {}, children }) {
  const [restaurants, setRestaurants] = useState(data);

  const contextValue = {
    restaurants,
    setRestaurants,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}