import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchInput from "../SearchInput";

describe("SearchInput component", () => {
  it("should render without errors", () => {
    render(
      <MemoryRouter>
        <SearchInput />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");
    expect(searchInput).toBeInTheDocument();
  });

  it("should update search query when input value changes", () => {
    render(
      <MemoryRouter>
        <SearchInput />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");
    fireEvent.change(searchInput, { target: { value: "iPhone" } });
    expect(searchInput.value).toBe("iPhone");
  });
});
