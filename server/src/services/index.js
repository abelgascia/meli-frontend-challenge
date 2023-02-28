import axios from "axios";

const MELI_API_URL = process.env.MELI_API_URL;

export const getDetail = async (id) =>
  await axios.get(`${MELI_API_URL}/items/${id}`).then((res) => res.data);

export const getDescription = async (id) =>
  await axios
    .get(`${MELI_API_URL}/items/${id}/description`)
    .then((res) => res.data);

export const getProducts = async (query) =>
  await axios
    .get(`${MELI_API_URL}/sites/MLA/search?q=${query}`)
    .then((res) => res.data);

export const getProduct = async (id) => {
  try {
    const [product, description] = await Promise.all([
      getDetail(id),
      getDescription(id),
    ]);

    return {
      product,
      sold_quantity: product?.sold_quantity,
      description: description?.plain_text,
    };
  } catch ({ message }) {
    console.log(message);
  }
};
