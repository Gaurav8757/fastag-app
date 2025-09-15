"use client";

import { useStore } from "@/store/store";
import { Analytics } from "@vercel/analytics/next"
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "@/components/ui/sonner"
import { Navigation } from "@/components/navigation/navigation";
import { HelpLine } from "@/components/helpline/HelpLine";
import Footer from "@/components/footer/Footer";
import { AuthModal } from "@/components/login/auth-modal";
import { LoaderOne } from "@/components/ui/loader";
import { useState, useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const { isAuthModalOpen, setIsAuthModalOpen } = useStore();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <LoaderOne />
      </div>
    );
  }

  return (
    <>
      <Navigation onLogin={() => setIsAuthModalOpen(true)} />
      <main className=" bg-background">{children}</main>
      <HelpLine />
      <Footer />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={() => setIsAuthModalOpen(false)}
      />
      <Toaster position="top-center" />
      <Analytics />
    </>
  );
}
