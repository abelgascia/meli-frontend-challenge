import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "../index";

describe("Breadcrumb component", () => {
  test("renders the correct number of crumbs with the correct category names", () => {
    const mockCategories = ["Electronics", "Smartphones", "Apple"];

    render(<Breadcrumb categories={mockCategories} />);

    const crumbs = screen.getAllByTestId("crumb");

    expect(crumbs).toHaveLength(mockCategories.length);

    crumbs.forEach((crumb, index) => {
      expect(crumb).toHaveTextContent(mockCategories[index]);
    });
  });
});
