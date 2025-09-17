"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      toast("Logged out successfully", {
        className: "bg-green-500 text-white",
      });

      router.push("/login");
    } catch (error) {
      toast("Failed to logout", {
        className: "bg-red-500 text-white",
      });
    }
  };

  return { logout };
};
