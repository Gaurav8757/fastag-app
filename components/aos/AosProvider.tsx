"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect, memo } from "react";
import { LoaderOne } from "@/components/ui/loader";

 const AosProvider = memo(({ children }: { children: React.ReactNode })=> {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 800, once: false });

    // Simulate loading for 1 second
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <LoaderOne />
      </div>
    );
  }

  return <>{children}</>;
})

export default AosProvider;