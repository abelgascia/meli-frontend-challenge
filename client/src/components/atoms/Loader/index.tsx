import React from "react";
import "./index.scss";

const Loader = () => {
  return (
    <div className="container loader-container" data-testid="loader">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
