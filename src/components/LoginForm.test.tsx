import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm"; // Adjust the import path according to your project structure

// Mock the useFormState hook
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormState: () => [{}, ""],
  useFormStatus: () => ({ pending: false }),
}));

describe("LoginForm Component", () => {
  it("renders correctly", () => {
    render(<LoginForm />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });
});
