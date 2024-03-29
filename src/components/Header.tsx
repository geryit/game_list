import React, { useState } from "react";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";
import type { User } from "@/components/Games";

type Props = {
  user: User;
};

const Header = ({ user }: Props) => {
  return (
    <header className="shadow-custom">
      <div className="w-full max-w-[81.75rem] px-4 m-auto flex items-center gap-8	">
        <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
        <div className="flex-1" />
        <span>{user?.name}</span>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
