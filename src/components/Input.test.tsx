import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Input from "@/components/Input";

describe("Input Component", () => {
  it("password input renders correctly", () => {
    render(
      <Input
        label="password"
        name="password"
        type="password"
        autoComplete="current-password"
      />,
    );
    expect(screen.getByText("password")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByAltText("eye"));
  });
});
