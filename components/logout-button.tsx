"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { IconLogout } from "@tabler/icons-react";

export default function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="flex w-full items-center gap-2"
    >
      <IconLogout className="h-4 w-4" />
      {pending ? "Logging out…" : "Log out"}
    </Button>
  );
}
