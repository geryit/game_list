import { cookies } from "next/headers";

import LoginForm from "@/app/components/LoginForm";
import { redirect } from "next/navigation";
export default function Login() {
  if (cookies().get("username")) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center h-svh">
      <LoginForm />
    </div>
  );
}
