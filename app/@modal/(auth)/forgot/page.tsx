"use client";
// import { ForgotPasswordModal } from "@/components/forgot-modal";
import { useRouter } from "next/navigation";

export default function ForgotModalIntercept() {
  const router = useRouter();
  return (
    // <ForgotPasswordModal
    //   isOpen={true}
    //   onClose={() => router.back()}
    //   onSent={() => router.push("/login")} // Redirect back to login after reset
    // /> 
    <div>Forgot</div>
  );
}
