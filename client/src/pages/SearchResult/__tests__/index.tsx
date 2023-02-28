import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SearchResultPage from "../index";
import { ProductsProvider } from "../../../context/Products";

describe("SearchResultPage component", () => {
  test("Renders product list searching for nike dunk high kicks", async () => {
    render(
      <ProductsProvider>
        <MemoryRouter initialEntries={["/items?search=nike%20dunk%20high"]}>
          <Routes>
            <Route path="/items" element={<SearchResultPage />}></Route>
          </Routes>
        </MemoryRouter>
      </ProductsProvider>
    );

    // Wait for products to be loaded
    await screen.findByTestId("products-container");

    const productTitles = screen.getAllByTestId("product-title");

    const hasNikeDunkHigh = productTitles.some((title) =>
      title?.textContent?.includes("Nike Dunk High")
    );
    expect(hasNikeDunkHigh).toBe(true);
  });
});
