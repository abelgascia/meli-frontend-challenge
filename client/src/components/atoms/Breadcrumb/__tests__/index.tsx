import React from "react";
import { render, screen } from "@testing-library/react";
import Crumb from "../Crumb";

describe("Crumb component", () => {
  test("renders the correct category name", () => {
    const category = "Electronics";
    render(<Crumb category={category} index={0} separator={true} />);
    const crumb = screen.getByTestId("crumb");
    expect(crumb).toHaveTextContent(category);
  });

  test("renders separator when specified", () => {
    render(<Crumb category="Electronics" index={0} separator={true} />);
    const separator = screen.getByTestId("separator");
    expect(separator).toBeInTheDocument();
  });

  test("does not render separator when not specified", () => {
    render(<Crumb category="Electronics" index={0} separator={false} />);
    const separator = screen.queryByTestId("separator");
    expect(separator).not.toBeInTheDocument();
  });
});
