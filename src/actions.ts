"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import users from "@/data/users.json";

/**
 * Logs in a user with the provided credentials.
 * @param _prevState - The previous state (unused).
 * @param formData - The form data containing the username and password.
 * @returns An object with a message property if the login is unsuccessful, otherwise it redirects to the home page.
 */
export const login = async (_prevState: any, formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  /// if username exists in users, check if password matches
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return {
      message: "Invalid credentials",
    };
  } else {
    cookies().set("username", username);

    revalidatePath("/");
    return redirect("/");
  }
};

/**
 * Logs out the current user.
 * @returns It deletes the username cookie and redirects to the home page.
 */
export const logout = async () => {
  cookies().delete("username");
  revalidatePath("/");
  return redirect("/");
};
