import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import users from "@/data/users.json";
import Games from "@/components/Games";

export default function Home() {
  const username = cookies().get("username")?.value;
  if (!username) {
    redirect("/login");
  }
  const user = users.find((user) => user.username === username);
  return <Games user={user} />;
}
