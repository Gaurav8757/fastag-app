"use client"
import { AuthModal } from "@/components/login/auth-modal";
import { useRouter } from "next/navigation";

export default function LoginModalIntercept() {
  const router = useRouter();
  return (

    <AuthModal
      isOpen={true}
      onClose={() => router.back()} // Close modal when clicking outside or X
      onLogin={() => router.push("/")} // Redirect after login
    />
  );
}
