import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { login, logout } from "@/actions";

// Mocking Next.js specific modules and JSON data
jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

jest.mock("next/headers", () => ({
  cookies: jest.fn(() => ({
    set: jest.fn(),
    delete: jest.fn(),
  })),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

// Mocking the users data
jest.mock(
  "@/data/users.json",
  () => [{ username: "testuser", password: "password123" }],
  { virtual: true },
);

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("successfully logs in with valid credentials", async () => {
    // Simulate form data
    const formData = new FormData();
    formData.append("username", "testuser");
    formData.append("password", "password123");

    // Call the login function
    const response = await login({}, formData);

    // Assertions
    expect(revalidatePath).toHaveBeenCalledWith("/");
    expect(redirect).toHaveBeenCalledWith("/");
    expect(response).toBeUndefined(); // redirect doesn't return a value
  });

  it("fails to log in with invalid credentials", async () => {
    // Simulate form data with incorrect password
    const formData = new FormData();
    formData.append("username", "testuser");
    formData.append("password", "wrongpassword");

    // Call the login function
    const response = await login({}, formData);

    // Assertions
    expect(response).toEqual({ message: "Invalid credentials" });
    expect(cookies().set).not.toHaveBeenCalled();
    expect(revalidatePath).not.toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });
});

describe("logout function", () => {
  it("successfully logs out", async () => {
    // Call the logout function
    await logout();

    // Assertions
    expect(revalidatePath).toHaveBeenCalledWith("/");
    expect(redirect).toHaveBeenCalledWith("/");
  });
});
