import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { LoaderOne } from "@/components/ui/loader";
import "./globals.css";
import { Navigation } from "@/components/navigation/navigation";
import { HelpLine } from "@/components/helpline/HelpLine";
import Footer from "@/components/footer/Footer";
import AosProvider from "@/components/aos/AosProvider"; // ✅ Import
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ASL FastPay - FASTag Service Provider",
  description: "Seamless FASTag recharge and management services",
  generator: "Next.js",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* providers re-render karta hai ui */}
        <AosProvider>
          <Navigation />
          {children}
          <HelpLine />
          <Footer />
        </AosProvider>
        {modal}
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
