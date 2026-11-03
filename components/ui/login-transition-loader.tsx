"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function LoginTransitionLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/85 backdrop-blur-md transition-all">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex flex-col items-center p-8 rounded-2xl bg-card "
      >
        {/* Modern Spinner */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <Zap className="w-4 h-4 text-primary absolute" />
        </div>
      </motion.div>
    </div>
  );
}

