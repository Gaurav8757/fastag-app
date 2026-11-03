"use client";

import { Zap } from "lucide-react";

export function LoginTransitionLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/85 backdrop-blur-xl transition-all">
      <div className="flex flex-col items-center">
        {/* Dual Opposing Spinners with Zap centered */}
        <div className="relative flex items-center justify-center w-18 h-18">
          {/* Outer Ring - Clockwise */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />

          {/* Inner Ring - Counter Clockwise / Reverse */}
          <div
            className="absolute inset-4 rounded-full border-4 border-amber-500/20 border-b-amber-500 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.6s" }}
          />

          {/* Centered Zap Icon */}
          <div className="relative z-10 flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary">
            <Zap className="w-6 h-6 fill-primary/30 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
