"use client";
import { useFormStatus } from "react-dom";
import Image from "next/image";

import { memo } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-yellow-550 hover:bg-yellow-400 w-full h-16 rounded flex items-center justify-center"
    >
      {pending ? (
        <Image src="/spinner.svg" alt="Logo" width={14} height={14} priority />
      ) : (
        "Login"
      )}
    </button>
  );
};

export default memo(SubmitButton);
