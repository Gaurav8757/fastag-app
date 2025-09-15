"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth-context";
import { Sheet, SheetContent } from "../ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  onLogin: () => void;
}

export function Navigation({
  // activeSection,
  // setActiveSection,
  onLogin,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();
  const isMobile = useIsMobile();
  // 🔑 Auto-close sheet when switching to big screen
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/services", label: "Services" },
    { id: "/pricing", label: "Pricing" },
    { id: "/contact", label: "Contact" },
    { id: "/faqs", label: "FAQs" },
  ];

  const authenticatedNavItems = [
    { id: "/search", label: "Search FASTag" },
    { id: "/recharge", label: "Recharge" },
    { id: "/transactions", label: "Transactions" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                FP
              </span>
            </div>
            <span className="text-xl font-bold">FastPay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`text-base font-medium transition-colors tracking-wider px-2 py-1
          ${
            pathname === item.id
              ? "text-primary border-b-2 border-primary/50 bg-primary/5 rounded px-4"
              : "hover:text-primary"
          }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {/* Auth Section */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {user?.mobileNumber
                      ? `+91 ${user.mobileNumber}`
                      : "Account"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onLogin} size="sm" className="md:block hidden">
                Login
              </Button>
            )}
            {/* <AnimatedThemeToggler className="ml-4" /> */}
          </div>
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Sheet Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <div
                className="flex items-center gap-2 cursor-pointer"
                // onClick={() => handleNavClick("home")}
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    FP
                  </span>
                </div>
                <span className="text-xl font-bold">FastPay</span>
              </div>
            </div>

            <div className="py-4 space-y-1 px-4">
              {[
                ...navItems,
                ...(isAuthenticated ? authenticatedNavItems : []),
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`block w-full text-left px-2 py-2 rounded text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.id
                      ? "text-primary border-b-2 border-primary/50 bg-primary/5"
                      : "hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border px-4 py-4">
              {isAuthenticated ? (
                <Button
                  onClick={logout}
                  className="text-left px-8 py-4 text-sm  font-medium text-white hover:text-white w-full cursor-pointer"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={onLogin}
                  className="text-left px-8 py-4 text-sm  font-medium text-white hover:text-white w-full cursor-pointer"
                >
                  Login
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
