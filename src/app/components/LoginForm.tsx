import Image from "next/image";
import Input from "./Input";
import { login } from "@/app/actions";

export default async function LoginForm() {
  return (
    <div className=" w-full max-w-[25.75rem]">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
      </div>

      <form className="mt-10" action={login}>
        <div>
          <Input label="Username" autoComplete="username" name="username" />
        </div>
        <div className="mt-4">
          <Input
            label="Password"
            autoComplete="current-password"
            type="password"
            name="password"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-yellow-550 hover:bg-yellow-400 w-full h-16 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
