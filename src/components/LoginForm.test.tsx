import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

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

    fireEvent.change(screen.getByTestId("username"), {
      target: { value: "user1" },
    });
  });
});
