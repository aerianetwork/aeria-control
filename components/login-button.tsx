"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Signing in…" : "Login"}
    </Button>
  );
}
