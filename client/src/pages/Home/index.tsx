import React, { useEffect } from "react";
import { useProductsContext } from "../../context/Products";
import Head from "../../components/atoms/Head";
import "./index.scss";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { setProducts, setCategories } = useProductsContext();
  useEffect(() => {
    setCategories([]);
    setProducts({});
  }, []);

  return (
    <>
      <Helmet>
        <title>Inicio | Mercado Libre</title>
      </Helmet>
      <section className="container home-container">
        <h1>Bienvenido a Mercado Libre</h1>
        <p>Utiliza la barra de navegación para buscar productos.</p>
      </section>
    </>
  );
};

export default Home;
