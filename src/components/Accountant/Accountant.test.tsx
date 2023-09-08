import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Accountant } from "./Accountant";

const mockData = {
  cell: "123 123 123",
  name: {
    first: "John",
    last: "Doe",
  },
  email: "john.doe@example.com",
  picture: {
    thumbnail: "thumbnail-url",
    medium: "medium-url",
  },
  login: {
    uuid: "uuid-12345",
  },
};

describe("Accountant Component", () => {
  it("renders the name correctly", async () => {
    render(<Accountant {...mockData} />);
    const nameElement = screen.getByText("John Doe");
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the cell number correctly", () => {
    render(<Accountant {...mockData} />);
    const cellElement = screen.getByText("123 123 123");
    expect(cellElement).toBeInTheDocument();
  });

  it("renders the thumbnail image correctly", () => {
    render(<Accountant {...mockData} />);
    const thumbnailImage = screen.getByAltText("thumbnail-url");
    expect(thumbnailImage).toBeInTheDocument();
  });

  it("renders the 'Dowiedz sie wiecej' button correctly", () => {
    render(<Accountant {...mockData} />);
    const buttonElement = screen.getByText("Dowiedz sie wiecej");
    expect(buttonElement).toBeInTheDocument();
  });
});
