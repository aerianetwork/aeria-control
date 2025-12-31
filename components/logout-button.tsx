"use client";

import { useEffect, useActionState } from "react";
import { toast } from "sonner";
import { logout, type LogoutState } from "@/app/login/action";
import { Button } from "@/components/ui/button";

const initialState: LogoutState = {};

export default function LogoutButton() {
  const [state, action, pending] = useActionState(logout, initialState);

  useEffect(() => {
    if (state?.error) toast.warning(state.error);
  }, [state]);

  return (
    <form>
      <Button type="submit" formAction={action} disabled={pending}>
        {pending ? "Logging out…" : "Log out"}
      </Button>
    </form>
  );
}
