import { Link } from "react-router-dom";
import { formatCurrency, formatDecimals } from "../../../utils/formatCurrency";
import shipping from "../../../assets/images/shipping.png";

import "./Product.scss";

const Product = ({ product }: any) => {
  return (
    <article tabIndex={0} className="product__card">
      <Link to={`/items/${product.id}`}>
        <div className="product__card__image">
          <img src={product.picture} alt="Imagen del producto" />
        </div>
        <div className="product__card__info">
          <div className="product__price">
            <h3>
              <span>
                $ {formatCurrency(product.price?.amount)}
                <small>{formatDecimals(product.price?.decimals)}</small>
              </span>
              {product.free_shipping && (
                <span className="product__card__shipping">
                  <img src={shipping} alt="" />
                </span>
              )}
            </h3>

            <span>Capital Federal</span>
          </div>
          <div className="product__title">
            <h2>{product.title}</h2>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Product;
