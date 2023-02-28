import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../../assets/images/search.svg";

import "./SearchInput.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(`items?search=${search}`);
  };

  return (
    <div className="navbar-search-input">
      <form className="navbar-search-input--form" onSubmit={handleSearch}>
        <input
          id="search"
          className="navbar-search-input--form--input"
          placeholder="Nunca dejes de buscar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="navbar-search-input--form--button">
          <img
            alt="Search button icon"
            src={searchIcon}
            className="navbar-search-button"
          ></img>
        </button>
      </form>
    </div>
  );
};

export default Navbar;
