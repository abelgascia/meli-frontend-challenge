import React, { useState } from "react";
import {
  Product,
  ProductsContextProps,
  ProductsProviderProps,
} from "../types/Product";

export const ProductsContext = React.createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        selectedProduct,
        setProducts,
        setCategories,
        setSelectedProduct,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => React.useContext(ProductsContext);
