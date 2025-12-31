"use client";

import { cn } from "@/lib/utils";
import { useEffect, useActionState } from "react";
import { toast } from "sonner";
import { login, type LoginState } from "@/app/login/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const initialState: LoginState = {};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const currentYear = new Date().getFullYear();

  const [state, action, pending] = useActionState(login, initialState);

  useEffect(() => {
    if (state?.error) toast.warning(state.error);
  }, [state]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Continue with your email account</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@aeria.network"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </Field>

              <Field>
                <Button type="submit" formAction={action} disabled={pending}>
                  {pending ? "Signing in…" : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        Copyright © {currentYear} Aeria. All Rights Reserved.
      </FieldDescription>
    </div>
  );
}
