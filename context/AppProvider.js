import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ data = {}, children }) {
  const [restaurants, setRestaurants] = useState(data);
  const [goSearch, setGoSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const contextValue = {
    restaurants,
    setRestaurants,
    goSearch,
    setGoSearch,
    setPage,
    page,
    loading,
    setLoading,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}