import React from "react";
import { render, screen } from "@testing-library/react";
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

  test("renders home title", () => {
    render(
      <ProductsProvider>
        <Home />
      </ProductsProvider>
    );

    expect(screen.getByText("Bienvenido a Mercado Libre")).toBeInTheDocument();
  });
});
