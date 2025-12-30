import Image from "next/image";
import { LoginForm } from "@/app/login/login-form";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md">
            <Image
              src="https://majiiodyguuqfdlnfkou.supabase.co/storage/v1/object/public/Assets/Logo%20Aeria.png"
              alt="Logo Aeria Media Network"
              width={24}
              height={24}
            />
          </div>
          Aeria Media Network
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
