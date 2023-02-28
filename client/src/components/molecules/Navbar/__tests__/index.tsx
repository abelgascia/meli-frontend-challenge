import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductsProvider } from "../../../../context/Products";
import Navbar from "../index";

describe("Navbar component", () => {
  test("renders logo and search input", () => {
    render(
      <ProductsProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ProductsProvider>
    );

    const logo = screen.getByAltText("Logo Mercado Libre");
    expect(logo).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");
    expect(searchInput).toBeInTheDocument();
  });
});
