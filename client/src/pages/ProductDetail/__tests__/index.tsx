import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetailPage from "../index";
import { useProductsContext } from "../../../context/Products";

jest.mock("../../../context/Products");

describe("ProductDetailPage", () => {
  const setSelectedProduct = jest.fn();
  const setLoading = jest.fn();

  beforeEach(() => {
    useProductsContext.mockReturnValue({
      selectedProduct: {
        id: "MLA928585452",
        title:
          "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Plata",
        price: {
          amount: 350.899,
          decimals: 0,
        },
      },
      loading: false,
      setSelectedProduct,
      setLoading,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render ProductDetail component with product data", () => {
    render(<ProductDetailPage />);

    expect(screen.getByTestId("product-title").textContent).toMatch(
      "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Plata"
    );

    const priceElement = screen.getByText(
      (content, element) =>
        element.tagName.toLowerCase() === "h2" && content.includes("350,899")
    );

    expect(priceElement).toBeInTheDocument();
  });
});
