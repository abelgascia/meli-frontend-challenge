import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProductsContext } from "../../context/Products";
import { getProducts } from "../../services/api";
import Products from "../../components/molecules/Products/index";
import Loader from "../../components/atoms/Loader";

const SearchResultPage = () => {
  const { products, setProducts, setCategories, loading, setLoading } =
    useProductsContext();
  const { search } = useLocation();

  const query = new URLSearchParams(search).get("search");

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (query && query !== "" && query?.length > 0) {
        const data = await getProducts(query);
        setProducts(data.items);
        setCategories(data.categories);
        setLoading(false);
      }
    })();

    return () => {
      setProducts({});
    };
  }, [query]);

  if (loading) return <Loader />;

  return (
    <section className="">
      {products && products.length > 0 && (
        <section className="container">
          <Products />
        </section>
      )}
    </section>
  );
};

export default SearchResultPage;
