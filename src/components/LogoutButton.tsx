"use client";

import { memo, useState } from "react";
import { logout } from "@/actions";
import Image from "next/image";

const LogoutButton = () => {
  const [pending, setPending] = useState(false);

  return (
    <button
      className="text-red-550 hover:text-red-400 flex items-center gap-1 cursor-pointer"
      disabled={pending}
      onClick={async () => {
        setPending(true);
        await logout();
      }}
    >
      <Image src="/user.svg" alt="user" width={16} height={16} priority />
      Logout
    </button>
  );
};

export default memo(LogoutButton);
