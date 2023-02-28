import { useProductsContext } from "../../../context/Products";
import Product from "../../atoms/Product/Product";

import "./index.scss";

const Products = () => {
  const { products } = useProductsContext();
  return (
    <section data-testid="products-container" className="products container">
      {products.length > 0 &&
        products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}

      {products.length === 0 && <p>No hay productos</p>}
    </section>
  );
};

export default Products;
