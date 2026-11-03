"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { ShootingStars } from "../ui/shooting-stars";
import {
  KeyRound,
  Loader2,
  ArrowLeft,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";
import { OTPInput } from "./otp-verify/otp-form";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResendLoading, setResendIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleSendOtp = async () => {
    if (mobileNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setResendIsLoading(true);
    try {
      setIsOtpSent(true);
      toast.success("OTP sent to your mobile number!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send OTP",
      );
    } finally {
      setResendIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      toast.success("Login successful! Welcome back.");
      setMobileNumber("");
      setOtp("");
      setIsOtpSent(false);
      onLogin();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to verify OTP",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeOtpToMobile = () => {
    setOtp("");
    setIsOtpSent(false);
  };

  const handleClose = () => {
    onClose();
    setMobileNumber("");
    setOtp("");
    setIsOtpSent(false);
  };

  const renderPrevious = () => {
    
    return (
      <div>
       {isOtpSent && (
            <div className="inline-flex">
                <ArrowLeft className="w-6 h-6" onClick={handleChangeOtpToMobile} />
            </div>
          )}
          </div>
    )
  }
  return (
    <div className="relative">
      <ShootingStars
        className="absolute inset-0 z-10 pointer-events-none"
        starColor="#ea871f"
        trailColor="#0051ba"
        minSpeed={5}
        maxSpeed={10}
        minDelay={200}
        maxDelay={300}
      />
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[400px] border-border/50 bg-background/95 backdrop-blur-3xl shadow-2xl p-0 overflow-hidden rounded-2xl">
          <div className="px-5 py-5 sm:p-6">
        {renderPrevious()}

            <DialogHeader className="space-y-1.5 text-center">
              <div className="flex items-center justify-center pb-1">
                <div className="p-1.5 rounded-xl bg-muted/40  ">
                  <Image
                    src="/logo.png"
                    alt="FASTag"
                    width={isMobile ? 85 : 105}
                    height={isMobile ? 32 : 40}
                    className="object-contain"
                  />
                </div>
              </div>
              <DialogTitle className="text-lg md:text-xl font-bold text-center tracking-tight text-foreground">
                {isOtpSent ? "Enter Verification Code" : ""}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground text-center line-clamp-2">
                {isOtpSent
                  ? `Sent to mobile number: ${mobileNumber.slice(0, 2)}******${mobileNumber.slice(-2)}`
                  : ""}
              </DialogDescription>
            </DialogHeader>

            <div>
              {!isOtpSent ? (
                <div className="space-y-3.5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="mobile"
                      className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Mobile Number
                    </Label>
                    <div className="flex rounded-xl border border-border/80 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15 transition-all bg-background overflow-hidden shadow-2xs">
                      <div className="flex items-center gap-1 px-3 bg-muted/50 border-r border-border/60 text-xs font-semibold text-foreground/80 select-none">
                        <PhoneCall className="w-3 h-3 text-primary" />
                        <span>+91</span>
                      </div>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={mobileNumber}
                        onChange={(e) =>
                          setMobileNumber(
                            e.target.value.replace(/\D/g, "").slice(0, 10),
                          )
                        }
                        className="border-0 shadow-none focus-visible:ring-0 rounded-none h-10 text-sm font-medium tracking-wider"
                        maxLength={10}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-0.5">
                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>Instant & Safe</span>
                      </div>
                      <Link
                        href="/forgot"
                        className="inline-flex items-center gap-1 text-[11px] text-primary font-medium hover:underline transition-colors"
                      >
                        <KeyRound className="w-3 h-3" />
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <Button
                    onClick={handleSendOtp}
                    disabled={isLoading || mobileNumber.length !== 10}
                    className="w-full h-10 text-sm font-semibold mt-1"
                    size="default"
                  >
                    {isLoading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <span>Get OTP</span>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="py-1">
                    <OTPInput value={otp} onChange={setOtp} />
                  </div>

                  <Button
                    onClick={handleVerifyOtp}
                    className="w-full h-9 text-xs"
                    disabled={isLoading || otp.length !== 4}
                    size="sm"
                  >
                    {isLoading ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      "Login"
                    )}
                  </Button>

                  <div className="text-center pt-0.5">
                    <span className="text-[11px] text-muted-foreground mr-1">
                      Didn't get code?
                    </span>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={handleSendOtp}
                      disabled={isResendLoading}
                      className="text-[11px] font-semibold text-primary p-0 h-auto"
                    >
                      {isResendLoading ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        "Resend OTP"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
