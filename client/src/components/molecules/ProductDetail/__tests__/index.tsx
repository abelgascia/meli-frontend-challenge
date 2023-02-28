import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetail from "../index";

const mockProduct = {
  id: "MLA123",
  title: "Zapatillas Nike",
  price: {
    currency: "ARS",
    amount: 350,
    decimals: 2,
  },
  picture: "https://picsum.photos/200",
  condition: "new",
  free_shipping: true,
  description: "Estas son unas zapatillas Nike muy cómodas y duraderas.",
};

describe("ProductDetail component", () => {
  test("renders the product details and description", () => {
    render(<ProductDetail {...mockProduct} />);

    const productDetails = screen.getByTestId("product-details");
    const productDescription = screen.getByTestId("product-description");

    expect(productDetails).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });
});
