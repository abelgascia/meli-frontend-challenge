import axios from "axios";

// const API_URL = process.env.API_URL;
const API_URL = "http://localhost:4000/api/items";

export const getProductById = async (id: string) => {
  return await axios
    .get(`${API_URL}/${id.toUpperCase()}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getProducts = async (search: string) => {
  const query = new URLSearchParams({ q: search }).toString();
  return await axios
    .get(`${API_URL}?${query}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
