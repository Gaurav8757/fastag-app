"use client";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/components/login/auth-modal";

import { useEffect, useState } from "react";
export default function LoginModalIntercept() {
  const router = useRouter();

  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Show modal on mount
  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Close handler
  const handleClose = () => {
    setIsOpen(false); // First hide modal

    // Wait for modal transition to finish before navigating back
    setTimeout(() => {
      router.back();
    }, 300); // Delay should match your <Dialog> transition duration
  };

  // Login success handler
  const handleLogin = () => {
    setIsOpen(false);

    // Slight delay to allow close animation before navigation
    setTimeout(() => {
      router.push("/dashboard");
    }, 300);
  };

  return (
    <AuthModal isOpen={isOpen} onClose={handleClose} onLogin={handleLogin} />
  );
}
