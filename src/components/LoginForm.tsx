"use client";

import Image from "next/image";
import Input from "@/components/Input";
import { login } from "@/actions";
import SubmitButton from "@/components/SubmitButton";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <div className=" w-full max-w-[25.75rem]">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
      </div>

      <form className="mt-10" action={formAction} data-testid="form">
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
        {state.message && (
          <div className="p-4 bg-red-200 text-red-600 mt-4 rounded">
            {state.message}
          </div>
        )}
        <div className="mt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
