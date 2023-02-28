const ProductDescription = ({ description }: any) => {
  return (
    <div className="product__details__description">
      <h2>Descripción del producto</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
