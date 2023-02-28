import { ReactNode } from "react";

export type ProductsProviderProps = {
  children: ReactNode;
};

export type ProductsContextProps = {
  products: Product[];
  setProducts: (data: any) => void;
  categories: string[];
  setCategories: (data: string[]) => void;
  selectedProduct?: Product;
  setSelectedProduct: (data?: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export type Product = {
  id: string;
  title: string;
  categories: string[];
  price: {
    amount: number;
    decimals: number;
    currency: string;
  };
  thumbnail: string;
  pictures: any[];
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  city: string;
  description: string;
};
