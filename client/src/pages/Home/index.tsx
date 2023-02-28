import React, { useEffect } from "react";
import { useProductsContext } from "../../context/Products";

const Home = () => {
  const { setProducts, setCategories } = useProductsContext();
  useEffect(() => {
    setCategories([]);
    setProducts({});
  }, []);

  return (
    <>
      <h1>hola</h1>
    </>
  );
};

export default Home;
