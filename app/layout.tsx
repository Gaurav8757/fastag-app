import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/layout";
import QueryProvider from "./providers/QueryClientProvider";

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
        <QueryProvider>
          <Layout modal={modal}>{children}</Layout>
          <Toaster position="top-right" />
          <Analytics />
        </QueryProvider>
      </body>
    </html>
  );
}
