import { getProduct, getProducts } from "../services/index.js";
import { getCategories } from "../utils/index.js";
import { formatItem, formatItems } from "../utils/item.js";
import { author } from "../utils/author.js";

export const getAllProducts = async (req, res) => {
  try {
    const { q } = req?.query;
    const { results, filters } = await getProducts(q);

    res.json({
      author,
      categories: getCategories(filters),
      items: formatItems(results),
    });
  } catch ({ message }) {
    res.json({ message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req?.params;
    const { product, description, sold_quantity, error } = await getProduct(id);

    if (error) {
      return res.json({
        author,
        error,
      });
    }

    res.json({
      author,
      item: {
        ...formatItem(product),
        sold_quantity,
        description,
      },
    });
  } catch ({ message }) {
    res.json({ message });
  }
};
