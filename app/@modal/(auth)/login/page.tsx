"use client"
import { AuthModal } from "@/components/login/auth-modal";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function LoginModalIntercept() {
  const router = useRouter();
  const {isAuthModalOpen} = useStore();
  return (

    <AuthModal
      isOpen={isAuthModalOpen}
      onClose={() => router.push("/")} // Close modal when clicking outside or X
      onLogin={() => router.push("/dashboard")} // Redirect after login
    />
  );
}
