import React from "react";
import { render, screen } from "@testing-library/react";
import AccountantsList from "./AccountantsList";

describe("AccountantsList", () => {
  it("renders the component without errors", () => {
    render(<AccountantsList />);
    expect(screen.getByTestId("accountants-list")).toBeInTheDocument();
  });
});
