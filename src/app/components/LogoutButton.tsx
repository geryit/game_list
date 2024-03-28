"use client";

import { memo, useState } from "react";
import { logout } from "@/app/actions";

const LogoutButton = () => {
  const [pending, setPending] = useState(false);

  return (
    <button
      disabled={pending}
      onClick={async () => {
        setPending(true);
        await logout();
      }}
    >
      Logout
    </button>
  );
};

export default memo(LogoutButton);
