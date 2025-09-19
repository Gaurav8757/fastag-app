"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { id: "/", label: "Home" },
  { id: "/about", label: "About" },
  { id: "/service", label: "Services" },
  { id: "/pricing", label: "Pricing" },
  { id: "/contact", label: "Contact" },
  { id: "/faqs", label: "FAQs" },
];

export default function AnimatedNav() {
  const pathname = usePathname();

  return (
    <div className="relative flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.id;
        return (
          <Link
            key={item.id}
            href={item.id}
            className="relative px-2 py-2 text-sm tracking-wider font-medium text-gray-600 hover:text-primary "
          >
            {isActive && (
              <motion.span
                layoutId="nav-indicator"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute inset-0 rounded-md z-[-1] border-b-2 border-primary/50 bg-primary/5"
              />
            )}
            <span
              className={`${
                isActive ? "text-primary font-semibold px-1" : ""
              } relative z-10`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
