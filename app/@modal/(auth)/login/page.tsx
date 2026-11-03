"use client";

import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/login/auth-modal";
import { useState } from "react";
import { LoginTransitionLoader } from "@/components/ui/login-transition-loader";

export default function LoginModalIntercept() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClose = () => {
    if (isNavigating) return;
    setIsOpen(false);
    setTimeout(() => router.back(), 250);
  };

  const handleLogin = () => {
    setIsOpen(false);
    setIsNavigating(true);
    // Smooth transition showing branded loader before landing on dashboard
    setTimeout(() => {
      router.push("/homepage");
    }, 1200);
    return null;
  };

  return (
    <>
      <AuthModal isOpen={isOpen} onClose={handleClose} onLogin={handleLogin} />
      {isNavigating && (
        <LoginTransitionLoader/>
      )}
    </>
  );
}
