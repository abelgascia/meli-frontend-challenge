import { formatCurrency, formatDecimals } from "../../../utils/formatCurrency";

import "./ProductDetails.scss";

type Props = {
  condition: string;
  sold_quantity: number;
  title: string;
  price: {
    amount: number;
    decimals: number;
  };
};

const ProductDetails = ({ condition, sold_quantity, title, price }: Props) => {
  return (
    <div data-testid="product-details" className="product__details__pricebox">
      <span>{`${
        condition === "new" ? "Nuevo" : "Usado"
      } - ${sold_quantity} vendidos`}</span>
      <h1 data-testid="product-title">{title}</h1>
      <h2>
        $ {formatCurrency(price?.amount)}{" "}
        <small>{formatDecimals(price?.decimals)}</small>
      </h2>
      <button>Comprar</button>
    </div>
  );
};

export default ProductDetails;
