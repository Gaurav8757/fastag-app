"use client";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/login/auth-modal";
import { useState } from "react";

export default function LoginModalIntercept() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // not useEffect, to persist state

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => router.back(), 300); // Match Dialog transition
  };

  const handleLogin = () => {
    setIsOpen(false);
    setTimeout(() => router.push("/dashboard"), 300);
    return null;

  };

  return (
    <AuthModal isOpen={isOpen} onClose={handleClose} onLogin={handleLogin} />
  );
}
