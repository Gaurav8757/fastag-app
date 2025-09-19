"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { OTPInput } from "@/components/login/otp-verify/otp-form"; // reuse your existing OTP input
import { toast } from "sonner";
import { ArrowBigLeft, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSent: () => void;
}

export function ForgotPasswordModal({
  isOpen,
  onClose,
  onSent,
}: ForgotPasswordModalProps) {
  const [step, setStep] = useState<"number" | "otp" | "reset">("number");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  const sendOtp = async () => {
    if (mobileNumber.length !== 10) {
      toast("Please enter a valid 10-digit mobile number", {
        className: "bg-red-500 text-white",
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/send-reset-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: mobileNumber }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "OTP sending failed");

      setSessionId(data.sessionId); // if you generate session ID server-side
      setStep("otp");
      toast("OTP sent successfully", {
        className: "bg-green-500 text-white",
      });
    } catch (err: any) {
      toast(err.message || "Failed to send OTP", {
        className: "bg-red-500 text-white",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 4) {
      toast("Please enter valid 4-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/verify-reset-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: mobileNumber, otp, sessionId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "OTP verification failed");

      setStep("reset");
      toast("OTP verified", { className: "bg-green-500 text-white" });
    } catch (err: any) {
      toast(err.message || "OTP verification failed", {
        className: "bg-red-500 text-white",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async () => {
    if (password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: mobileNumber,
          password,
          sessionId,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Password reset failed");

      toast("Password reset successful!", {
        className: "bg-green-500 text-white",
      });
      onSent(); // redirect to /login
    } catch (err: any) {
      toast(err.message || "Something went wrong", {
        className: "bg-red-500 text-white",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetAll = () => {
    setMobileNumber("");
    setOtp("");
    setPassword("");
    setStep("number");
    setSessionId("");
  };

  const handleClose = () => {
    resetAll();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md text-black bg-gradient-to-bl from-orange-50 to-green-50">
        <div className="flex items-center justify-between">
          {" "}
          <Button
            onClick={() => router.back()}
            variant={"ghost"}
            className=" items-center cursor-pointer text-center justify-start hover:scale-102 duration-300 transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Login</span>
          </Button>
          <Image
            src="/logo.png"
            alt="aslwallets fastag"
            width={isMobile ? 90 : 140}
            height={isMobile ? 60 : 100}
          />
          <Button className="invisible">helloe world</Button>
        </div>

        <Card className="bg-transparent">
          <DialogHeader>
            <DialogTitle className="text-center tracking-wide">
              Reset Password
            </DialogTitle>
            <DialogDescription className="text-center text-sm">
              {step === "number"
                ? "Enter your registered number to receive OTP"
                : step === "otp"
                ? "Enter the OTP sent to your mobile"
                : "Set a new password"}
            </DialogDescription>
          </DialogHeader>
          <CardContent className="space-y-2">
            {step === "number" && (
              <>
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                    +91
                  </div>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="10-digit number"
                    value={mobileNumber}
                    onChange={(e) =>
                      setMobileNumber(
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    className="rounded-l-none"
                  />
                </div>
                <Button
                  disabled={isLoading || mobileNumber.length !== 10}
                  onClick={sendOtp}
                  className="w-full mt-8"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Sending OTP...
                    </>
                  ) : (
                    "Send OTP"
                  )}
                </Button>
              </>
            )}

            {step === "otp" && (
              <>
                <Label>Enter OTP</Label>
                <OTPInput value={otp} onChange={setOtp} />
                <div className="flex gap-2 justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep("number")}
                    disabled={isLoading}
                  >
                    Change Number
                  </Button>
                  <Button
                    disabled={isLoading || otp.length !== 4}
                    onClick={verifyOtp}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Verifying...
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </Button>
                </div>
              </>
            )}

            {step === "reset" && (
              <>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  disabled={isLoading || password.length < 6}
                  onClick={resetPassword}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Resetting...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
