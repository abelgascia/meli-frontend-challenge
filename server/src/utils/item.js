import { getDecimal } from "./index.js";

export const formatItem = ({
  id,
  title,
  condition,
  shipping,
  thumbnail: picture,
  price,
  currency_id: currency,
}) => ({
  id,
  title,
  price: {
    currency,
    amount: Math.trunc(price),
    decimals: getDecimal(price),
  },
  picture,
  condition,
  free_shipping: shipping?.free_shipping,
});

export const formatItems = (items = []) => items?.slice(0, 4)?.map(formatItem);
