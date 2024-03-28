"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import users from "@/app/data/users.json";

export const login = async (prevState: any, formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  /// if username exists in users, check if password matches
  const user = users.find(
    (user) => user.username === username && user.password === password,
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

export const logout = async () => {
  cookies().delete("username");
  revalidatePath("/");
  return redirect("/");
};
