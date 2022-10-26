import axios from "axios"

export const searchRestaurant = async (term) => {
  const url = `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?search=${term}`
  const response = await axios.get(url)
  return response.data.data
}