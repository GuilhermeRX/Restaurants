import axios from "axios";

export const getRestaurants = async (page) => {
  const url = `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=${page}&limit=8`;
  const response = await axios.get(url);
  return response.data.data
}
