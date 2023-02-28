import "./ProductImage.scss";

type Props = {
  src: string;
  alt: string;
};

const ProductImage = ({ src, alt }: Props) => {
  return (
    <div className="product__detail__image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProductImage;
