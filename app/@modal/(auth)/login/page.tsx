"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/login/auth-modal";

export default function LoginModalIntercept() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  // Prefetch dashboard so route chunks are ready
  useEffect(() => {
    router.prefetch("/homepage");
  }, [router]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => router.back(), 150);
  };

  const handleLogin = () => {
    setIsOpen(false);
    // Directly navigate to dashboard; Next.js route transition
    // will show the full-screen centered dual opposing loader in app/(admin)/loading.tsx
    router.push("/homepage");
  };

  return (
    <AuthModal isOpen={isOpen} onClose={handleClose} onLogin={handleLogin} />
  );
}
