"use client";
import Image from "next/image";
import {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  useState,
} from "react";

type Props = {
  label: string;
  autoComplete: HTMLInputAutoCompleteAttribute;
  name: string;
  type?: HTMLInputTypeAttribute;
};

export default function Input({
  label,
  type = "text",
  autoComplete,
  name,
}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const isPassword = type === "password";

  const showingPassword = isPassword && showPassword;

  return (
    <div className="p-4 bg-white rounded border border-neutral-160 h-16 flex items-center group">
      <input
        type={showingPassword ? "text" : type}
        className={`bg-transparent autofill:bg-transparent w-full outline-none ${
          inputValue ? "mt-2" : ""
        }`}
        autoComplete={autoComplete}
        onChange={handleInputChange}
        name={name}
      />
      <span
        className={`absolute pointer-events-none text-neutral-170 transition-all group-focus-within:-mt-7 group-focus-within:text-xs
          ${inputValue ? "-mt-7 text-xs" : ""}
          `}
      >
        {label}
      </span>
      {isPassword && (
        <Image
          src="/eye.svg"
          alt="eye"
          width={16}
          height={16}
          priority
          onClick={() => setShowPassword((prev) => !prev)}
          className={`cursor-pointer ${
            showingPassword ? "filter brightness-50" : ""
          }`}
        />
      )}
    </div>
  );
}
