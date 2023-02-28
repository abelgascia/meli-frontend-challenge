import { useProductsContext } from "../../../context/Products";
import Product from "../../atoms/Product/Product";

import "./index.scss";

const Products = () => {
  const { products } = useProductsContext();
  return (
    <section className="products container">
      {products.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </section>
  );
};

export default Products;
