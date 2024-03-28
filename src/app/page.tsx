import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import users from "@/app/data/users.json";
import LogoutButton from "@/app/components/LogoutButton";

export default function Home() {
  const username = cookies().get("username")?.value;
  if (!username) {
    redirect("/login");
  }
  const user = users.find((user) => user.username === username);
  return (
    <div className="">
      <div>Game list</div>
      <div>Welcome {user?.name}</div>
      <LogoutButton />
    </div>
  );
}
