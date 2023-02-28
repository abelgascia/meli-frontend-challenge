import React from "react";
import ProductImage from "../../atoms/ProductDetail/ProductImage";
import ProductDetails from "../../atoms/ProductDetail/ProductDetails";
import ProductDescription from "../../atoms/ProductDetail/ProductDescription";

import "./index.scss";

const ProductDetail = (product: any) => {
  return (
    <section className="container">
      <div className="product__details__container">
        <div className="product__details__info">
          <ProductImage src={product.picture} alt="" />
          <ProductDetails {...product} />
        </div>
        <ProductDescription description={product.description} />
      </div>
    </section>
  );
};

export default ProductDetail;
