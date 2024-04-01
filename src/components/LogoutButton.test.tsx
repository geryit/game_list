import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LogoutButton from "@/components/LogoutButton";

jest.mock("next/headers", () => ({
  cookies: jest.fn(() => ({
    set: jest.fn(),
    delete: jest.fn(),
  })),
}));

// Mocking Next.js specific modules and JSON data
jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Logout button Component", () => {
  it("renders correctly", () => {
    render(<LogoutButton />);
    expect(screen.getByText("Logout")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Logout"));
  });
});
