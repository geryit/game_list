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
  type?: HTMLInputTypeAttribute;
};

export default function Input({ label, type = "text", autoComplete }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="p-4 bg-white rounded border border-neutral-160 h-16 flex items-center group">
      <input
        type={type}
        className={`w-full outline-none ${inputValue ? "mt-2" : ""}`}
        autoComplete={autoComplete}
        onChange={handleInputChange}
      />
      <span
        className={`absolute pointer-events-none text-neutral-170 transition-all
          ${inputValue ? "-mt-7 text-xs" : ""}
          `}
      >
        {label}
      </span>
    </div>
  );
}
