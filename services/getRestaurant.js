import axios from "axios"

export const getRestaurant = async (id) => {
  const url = `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/${id}`
  const response = await axios.get(url)
  return response.data.data
}