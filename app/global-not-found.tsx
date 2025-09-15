// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Link from 'next/link'
import { cn } from "@/lib/utils";
import { AuroraText } from '@/components/magicui/aurora-text'
import { GridPattern } from '@/components/ui/grid-pattern';
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  const color = ["#FF1A1A", "#B00020", "#8B0000", "#FF4C4C"];
  return (
    <html lang="en" className={inter.className}>
      <body className='relative h-screen bg-gradient-to-tr from-red-500/10 to-red-600/10'>
       <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(h-auto_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-screen skew-y-24 [--pattern-opacity:0.1] sm:[--pattern-opacity:0.2]",
        )}
      />
       <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <AuroraText colors={color} className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">404 Page Not Found</AuroraText>
          <p className="text-red-500">Looks like you've ventured into the unknown digital realm.</p>
        </div>
        <Link
          href="/"
          className="inline-flex h-10 items-center bg-primary hover:bg-green-700 rounded-md px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-default-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Return to website
        </Link>
      </div>
    </div>
    <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(h-auto_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[48%] fixed h-screen skew-y-24 [--pattern-opacity:0.1] sm:[--pattern-opacity:0.2]",
        )}
      />
      </body>
    </html>
  )
}