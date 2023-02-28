import React from "react";
import { render } from "@testing-library/react";
import { ProductsProvider } from "../../../context/Products";
import Home from "../index";

describe("Home component", () => {
  test("renders without crashing", () => {
    render(
      <ProductsProvider>
        <Home />
      </ProductsProvider>
    );
  });
});
