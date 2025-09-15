import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/contexts/auth-context"
import { LoaderOne } from "@/components/ui/loader";
import "./globals.css"
import ClientLayout from "@/components/clientLayout/ClientLayout"

export const metadata: Metadata = {
  title: "ASL FastPay - FASTag Service Provider",
  description: "Seamless FASTag recharge and management services",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AuthProvider>
          <Suspense fallback={<LoaderOne/>}>
          <ClientLayout>{children}</ClientLayout>
          </Suspense>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
