"use client";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/login/auth-modal";

export default function LoginModalIntercept() {
  
  const router = useRouter();

  return (
    <AuthModal
      isOpen={true}
      onClose={() => router.back()} 
      onLogin={() => router.push("/dashboard")}
    />
  );
}
