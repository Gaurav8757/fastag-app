"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { OTPInput } from "@/components/login/otp-verify/otp-form";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2, Eye, EyeOff, KeyRound, Loader2, Lock, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
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
  const [password1, setPassword1] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  const sendOtp = async () => {
    if (mobileNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    try {
      setStep("otp");
      toast.success("OTP sent successfully to your mobile");
    } catch (err: any) {
      toast.error(err.message || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 4) {
      toast.error("Please enter valid 4-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      setStep("reset");
      toast.success("OTP verified successfully");
    } catch (err: any) {
      toast.error(err.message || "Invalid OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!password || !password1) {
      toast.error("Please fill in both password fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== password1) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      toast.success("Password updated successfully!");
      handleClose();
      onSent();
      router.push("/login");
    } catch (err: any) {
      toast.error(err.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  const resetAll = () => {
    setStep("number");
    setMobileNumber("");
    setOtp("");
    setPassword("");
    setPassword1("");
    setSessionId("");
  };

  const handleClose = () => {
    resetAll();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-border/40 bg-background/95 backdrop-blur-xl shadow-2xl p-0 overflow-hidden rounded-2xl">
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-blue-500 to-amber-500" />

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between pb-4">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <div className="p-1 rounded-xl bg-muted/40 border border-border/50">
              <Image
                src="/logo.png"
                alt="FASTag"
                width={isMobile ? 80 : 100}
                height={isMobile ? 32 : 40}
                className="object-contain"
              />
            </div>
          </div>

          <DialogHeader className="space-y-1.5 text-center">
            <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              {step === "number" && "Reset Password"}
              {step === "otp" && "Verify Identity"}
              {step === "reset" && "Create New Password"}
            </DialogTitle>
            <DialogDescription className="text-xs md:text-sm text-muted-foreground">
              {step === "number" && "Enter your registered number to receive a verification code"}
              {step === "otp" && `Enter the 4-digit code sent to +91 ${mobileNumber.slice(0, 2)}******${mobileNumber.slice(-2)}`}
              {step === "reset" && "Choose a strong password with at least 6 characters"}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            {step === "number" && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Mobile Number
                  </Label>
                  <div className="flex rounded-xl border-2 border-border/70 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all bg-background/80 overflow-hidden shadow-xs">
                    <div className="flex items-center gap-1.5 px-3.5 bg-muted/60 border-r border-border/60 text-sm font-semibold text-foreground/80 select-none">
                      <PhoneCall className="w-3.5 h-3.5 text-primary" />
                      <span>+91</span>
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
                      className="border-0 shadow-none focus-visible:ring-0 rounded-none h-11 text-base font-medium tracking-wider"
                      maxLength={10}
                    />
                  </div>
                </div>

                <Button
                  disabled={isLoading || mobileNumber.length !== 10}
                  onClick={sendOtp}
                  className="w-full text-base font-semibold"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending OTP...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Verification Code</span>
                      <Sparkles className="w-4 h-4 ml-1 opacity-80" />
                    </>
                  )}
                </Button>
              </div>
            )}

            {step === "otp" && (
              <div className="space-y-6">
                <div className="py-2">
                  <OTPInput value={otp} onChange={setOtp} />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep("number")}
                    className="w-full sm:w-1/2"
                    disabled={isLoading || otp.length === 4}
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Edit Number
                  </Button>
                  <Button
                    disabled={isLoading || otp.length !== 4}
                    onClick={verifyOtp}
                    className="w-full sm:w-1/2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      "Confirm & Continue"
                    )}
                  </Button>
                </div>

                <div className="text-center pt-1">
                  <Button
                    variant="link"
                    size="sm"
                    onClick={sendOtp}
                    disabled={isLoading}
                    className="text-xs font-semibold text-primary"
                  >
                    Resend Code
                  </Button>
                </div>
              </div>
            )}

            {step === "reset" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="new-pass" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="new-pass"
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 6 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10 h-11 rounded-xl border-2"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-pass" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm-pass"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter password"
                      value={password1}
                      onChange={(e) => setPassword1(e.target.value)}
                      className="pr-10 h-11 rounded-xl border-2"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleResetPassword}
                  disabled={isLoading || !password || !password1}
                  className="w-full mt-2"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Updating Password...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Reset Password</span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
