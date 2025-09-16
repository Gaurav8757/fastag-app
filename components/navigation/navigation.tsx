"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import AnimatedNav from "./AnimatedNavbar";

// interface NavigationProps {
//   onLogin: () => void;
// }

interface NavLinkProps{
  id: string;
  label: string
}

export function Navigation() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isMobile = useIsMobile();
  // 🔑 Auto-close sheet when switching to big screen
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const navItems:NavLinkProps[] = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/services", label: "Services" },
    { id: "/pricing", label: "Pricing" },
    { id: "/contact", label: "Contact" },
    { id: "/faqs", label: "FAQs" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden cursor-pointer"
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  FP
                </span>
              </div>
              <span className="text-xl font-bold">FastPay</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <AnimatedNav />
            </div>
          </div>

          <div className="flex items-center">
            {/* Auth Section */}
            <Button
              onClick={() => router.push("/login")}
              size="sm"
              className="md:block hidden"
            >
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Sheet Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} >
          <SheetTitle className="sr-only">menu</SheetTitle>

          <SheetContent side="left" className="w-64 p-0">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    FP
                  </span>
                </div>
                <span className="text-xl font-bold">FastPay</span>
              </Link>
            </div>

            <div className="py-4 space-y-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  
                  className={`block w-full text-left px-2 py-2 rounded text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.id
                      ? "text-primary border-b-2 border-primary/50 bg-primary/5"
                      : "hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border px-4 py-4">
              <Button
                onClick={() => router.push("/login")}
                className="text-left px-8 py-4 text-sm  font-medium text-white hover:text-white w-full cursor-pointer"
              >
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
