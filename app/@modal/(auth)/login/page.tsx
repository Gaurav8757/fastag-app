"use client"
import { AuthModal } from "@/components/login/auth-modal";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function LoginModalIntercept() {
  const router = useRouter();
  const {isAuthModalOpen, setIsAuthModalOpen } = useStore();

  
  const handleClose = () => {
    setIsAuthModalOpen(false); // Close state
    router.push("/");          // Navigate back to home
  };

  const handleLogin = () => {
    setIsAuthModalOpen(false);
    router.push("/dashboard");
  };

  return (

    <AuthModal
      isOpen={isAuthModalOpen}
      onClose={handleClose} // Close modal when clicking outside or X
      onLogin={handleLogin} // Redirect after login
    />
  );
}
