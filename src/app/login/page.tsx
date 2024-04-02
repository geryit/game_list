import { cookies } from "next/headers"; // Module to handle cookies
import LoginForm from "@/components/LoginForm"; // LoginForm component
import { redirect } from "next/navigation"; // Module to handle redirection

/**
 * Login function component.
 *
 * This function component checks if the user is already logged in by checking the 'username' cookie.
 * If the 'username' cookie exists, it redirects the user to the home page.
 * If the 'username' cookie does not exist, it renders the LoginForm component.
 *
 * @returns {JSX.Element} LoginForm component if user is not logged in, otherwise redirects to home page.
 */
export default function Login() {
  // Check if 'username' cookie exists
  if (cookies().get("username")) {
    // If 'username' cookie exists, redirect to home page
    redirect("/");
  }

  // If 'username' cookie does not exist, render the LoginForm component
  return (
    <div className="flex items-center justify-center h-svh">
      <LoginForm />
    </div>
  );
}
