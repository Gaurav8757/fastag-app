"use client";

import {
  BarChart2,
  Receipt,
  Building2,
  CreditCard,
  Folder,
  Wallet,
  Users2,
  Shield,
  MessagesSquare,
  Video,
  Settings,
  HelpCircle,
  Menu,
  LucideSidebarClose,
  SidebarClose,
  SidebarOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AuroraText } from "../magicui/aurora-text";
const navigation = [
  // {
  //   title: "Overview",
  //   items: [
  //     { label: "Dashboard", href: "/", icon: "Home" },
  //     { label: "Analytics", href: "/analytics", icon: "BarChart2" },
  //     { label: "Organization", href: "/organization", icon: "Building2" },
  //     { label: "Projects", href: "/projects", icon: "Folder" },
  //   ],
  // },
  {
    title: "Finance",
    items: [
      { label: "Home", href: "/dashboard", icon: "Home" },
      { label: "Transactions", href: "/transactions", icon: "Wallet" },
      { label: "Invoices", href: "/invoices", icon: "Receipt" },
      { label: "Payments", href: "/payments", icon: "CreditCard" },
    ],
  },
  // {
  //   title: "Team",
  //   items: [
  //     { label: "Members", href: "/members", icon: "Users2" },
  //     { label: "Permissions", href: "/permissions", icon: "Shield" },
  //     { label: "Chat", href: "/chat", icon: "MessagesSquare" },
  //     { label: "Meetings", href: "/meetings", icon: "Video" },
  //   ],
  // },
  {
    title: "General",
    items: [
      { label: "Settings", href: "/settings", icon: "Settings" },
      { label: "Help", href: "/help", icon: "HelpCircle" },
    ],
  },
];
const iconMap = {
  Home,
  BarChart2,
  Building2,
  Folder,
  Wallet,
  Receipt,
  CreditCard,
  Users2,
  Shield,
  MessagesSquare,
  Video,
  Settings,
  HelpCircle,
};

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  function handleNavigation() {
    setIsMobileMenuOpen(false);
  }

  function NavItem({
    href,
    icon: Icon,
    children,
    isActive,
  }: {
    href: string;
    icon: any;
    children: React.ReactNode;
    isActive: boolean;
  }) {
    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className={`relative flex items-center px-3 py-3 text-sm rounded-md transition-colors tracking-wider
          ${
            isActive
              ? "text-primary font-semibold"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
          }
        `}
      >
        {isActive && (
          <motion.span
            layoutId="nav-indicator"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute inset-0 rounded-md z-[-1] border-b-2 border-primary/50 bg-primary/5"
          />
        )}
        <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-  shadow-sm cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <nav
        className={`
                fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-600 ease-in-out
                lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      >
        <div className="h-full flex flex-col">
          <div className="flex h-16 px-4  items-center justify-between border-b border-gray-200 dark:border-[#1F1F23]">
            <Link
              href="/dashboard"
              // target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/man.png"
                  alt="ASL Fastag"
                  width={32}
                  height={32}
                  className="flex-shrink-0 md:block"
                />

                <AuroraText className="text-lg font-semibold hover:cursor-pointer text-gray-900 dark:text-white">
                  ASL Fastag
                </AuroraText>
              </div>
            </Link>
{!isMobileMenuOpen ? null :
           ( <span className="text-lg font-semibold hover:cursor-pointer text-default transition-all duration-200">
              {isMobileMenuOpen ? (
                <SidebarOpen
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              ) : (
                <SidebarClose
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              )}
            </span>) }
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">
            {navigation
              .filter((s) => s.title !== "General")
              .map((section) => (
                <div key={section.title}>
                  <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider">
                    {section.title}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      const Icon = iconMap[item.icon as keyof typeof iconMap];
                      return (
                        <NavItem
                          key={item.href}
                          href={item.href}
                          icon={Icon}
                          isActive={isActive}
                        >
                          {item.label}
                        </NavItem>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="space-y-1">
              {navigation
                .find((s) => s.title === "General")
                ?.items.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  const isActive = pathname === item.href;
                  return (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      icon={Icon}
                      isActive={isActive}
                    >
                      {" "}
                      {item.label}
                    </NavItem>
                  );
                })}
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
