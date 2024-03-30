import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "./page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Login />);

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });
});
