import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../../context/Products";
import SearchInput from "../../atoms/Navbar/SearchInput";
import Breadcrumb from "../Breadcrumb";
import logo from "../../../assets/images/logo-meli.png";
import "./index.scss";

const Navbar = () => {
  const { categories } = useProductsContext();
  return (
    <>
      <header>
        <nav className="navbar container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo Mercado Libre" />
          </Link>
          <SearchInput />
        </nav>
      </header>
      {categories && categories.length > 0 && (
        <Breadcrumb categories={categories} />
      )}
    </>
  );
};

export default Navbar;
