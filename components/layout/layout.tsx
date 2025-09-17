"use client";
import { usePathname } from "next/navigation";
import AosProvider from "../aos/AosProvider";
import { Navigation } from "../navigation/navigation";
import { HelpLine } from "../helpline/HelpLine";
import Footer from "../footer/Footer";

export default function Layout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode; }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard") || pathname.startsWith("/home");

  return (
    <AosProvider>
      {!isDashboard && <Navigation />}
      {children}
      {modal}
      {!isDashboard && <HelpLine />}
      {!isDashboard && <Footer />}
    </AosProvider>
  );
}
