import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductsProvider } from "../../../context/Products";
import Home from "../index";
import { HelmetProvider } from "react-helmet-async";

describe("Home component", () => {
  test("renders without crashing", () => {
    render(
      <HelmetProvider>
        <ProductsProvider>
          <Home />
        </ProductsProvider>
      </HelmetProvider>
    );
  });

  test("renders home title", () => {
    render(
      <HelmetProvider>
        <ProductsProvider>
          <Home />
        </ProductsProvider>
      </HelmetProvider>
    );

    expect(screen.getByText("Bienvenido a Mercado Libre")).toBeInTheDocument();
  });
});
