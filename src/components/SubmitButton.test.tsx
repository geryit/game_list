import { render, screen } from "@testing-library/react";
import React from "react";
import SubmitButton from "@/components/SubmitButton";
import reactDom from "react-dom";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: () => ({ pending: false }),
}));

describe("Submit button Component", () => {
  it("renders correctly", () => {
    render(<SubmitButton />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders pending state correctly", () => {
    const spy = jest.spyOn(reactDom, "useFormStatus");
    spy.mockReturnValue({
      pending: true,
    } as any);

    render(<SubmitButton />);

    expect(screen.getByAltText("Spinner")).toBeInTheDocument();
  });
});
