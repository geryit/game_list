"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "./Input";

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevent the form from being submitted to the server
    console.log("Submitted value:");
  };
  return (
    <div className=" w-full max-w-[25.75rem]">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
      </div>

      <form className="mt-10">
        <div>
          <Input label="Username" autoComplete="username" />
        </div>
        <div className="mt-4">
          <Input
            label="Password"
            autoComplete="current-password"
            type="password"
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
