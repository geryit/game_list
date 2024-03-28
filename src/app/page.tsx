import Image from "next/image";
import LoginForm from "./components/LoginForm";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-svh">
      <LoginForm />
    </div>
  );
}
