"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const users = [
  { username: "player1", password: "player1" },
  { username: "player2", password: "player2" },
];

export const login = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  /// if username exists in users, check if password matches
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    throw new Error("Invalid username or password");
  }
  const token = cookies().get("AUTH_TOKEN");

  console.log({ username, password, token });
  revalidatePath("/");
};
