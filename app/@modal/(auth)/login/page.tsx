"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/login/auth-modal";
import { LoginTransitionLoader } from "@/components/ui/login-transition-loader";

export default function LoginModalIntercept() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // Prefetch dashboard route in advance so navigation is instantaneous
  useEffect(() => {
    router.prefetch("/homepage");
  }, [router]);

  const handleClose = () => {
    if (isNavigating) return;
    setIsOpen(false);
    setTimeout(() => router.back(), 150);
  };

  const handleLogin = () => {
    setIsOpen(false);
    setIsNavigating(true);
    // Instant navigation without artificial delay
    router.push("/homepage");
  };

  return (
    <>
      <AuthModal isOpen={isOpen} onClose={handleClose} onLogin={handleLogin} />
      {isNavigating && <LoginTransitionLoader />}
    </>
  );
}
