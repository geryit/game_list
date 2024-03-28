"use server";

import { revalidatePath } from "next/cache";

export const login = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  console.log({ username, password });
  revalidatePath("/");
};
