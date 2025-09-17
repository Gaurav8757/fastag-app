import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation/navigation";
import { HelpLine } from "@/components/helpline/HelpLine";
import Footer from "@/components/footer/Footer";
import AosProvider from "@/components/aos/AosProvider";
import { Toaster } from "@/components/ui/sonner";
import ClientWrapper from "@/components/clientRoot/ClientWrapper";

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
      <body className={`font-sans`}>
        {/* providers re-render karta hai ui */}
        <ClientWrapper modal =  {modal}>{children}</ClientWrapper>
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  );
}
