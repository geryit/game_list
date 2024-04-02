import { cookies } from "next/headers"; // Module to handle cookies
import { redirect } from "next/navigation"; // Module to handle redirection
import users from "@/data/users.json"; // User data
import Games from "@/components/Games"; // Games component

/**
 * Home function component.
 *
 * This function component checks if the user is logged in by checking the 'username' cookie.
 * If the 'username' cookie does not exist, it redirects the user to the login page.
 * If the 'username' cookie exists, it finds the user from the imported users data and passes it to the Games component.
 *
 * @returns {JSX.Element} Games component with user prop if user is logged in, otherwise redirects to login page.
 */
export default function Home() {
  // Get the 'username' cookie
  const username = cookies().get("username")?.value;

  // If 'username' cookie does not exist, redirect to login page
  if (!username) {
    redirect("/login");
  }

  // Find the user from the users data
  const user = users.find((user) => user.username === username);

  // Return the Games component with the user prop
  return <Games user={user} />;
}
