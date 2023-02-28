import { render, screen } from "@testing-library/react";
import { useProductsContext } from "../../../../context/Products";
import Products from "../index";

jest.mock("../../../../context/Products");

describe("Products component", () => {
  test("renders 'No hay productos' message when no products are loaded", () => {
    useProductsContext.mockReturnValue({
      products: [],
    });

    render(<Products />);

    expect(screen.getByText("No hay productos")).toBeInTheDocument();
  });
});
