import axios from "axios"

export const searchRestaurant = async (term, page) => {
  const urlBase = 'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?'
  const url = `${urlBase}search=${term}&page=${page}&limit=8`
  const response = await axios.get(url)
  return response.data.data
}