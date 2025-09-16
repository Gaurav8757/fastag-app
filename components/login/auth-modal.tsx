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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { ShootingStars } from "../ui/shooting-stars";
import { Loader2 } from "lucide-react";
import { useStore } from "@/store/store";
import AosProvider from "../aos/AosProvider";
import { OTPInput } from "./otp-verify/otp-form";

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
  // const { login } = useStore();

  const handleSendOtp = async () => {
    if (mobileNumber.length !== 10) {
      toast("Please enter a valid 10-digit mobile number", {
        className: "bg-red-500 text-white",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsOtpSent(true);
      setIsLoading(false);
      toast("OTP sent to your mobile number!", {
        className: "bg-red-500 text-white",
      });
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 4) {
      toast("Please enter a valid 4-digit OTP");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // login(mobileNumber); // Use auth context login method
      onLogin();
      onClose();
      // Reset form
      setMobileNumber("");
      setOtp("");
      setIsOtpSent(false);
    }, 1000);
  };

  const handleChangeOtpToMobile = () => {
    setOtp("");
    setIsOtpSent(false);
  };

  const handleClose = () => {
    onClose();
    // Reset form
    setMobileNumber("");
    setOtp("");
    setIsOtpSent(false);
  };

  return (
    <AosProvider>
      <div className="relative">
        <ShootingStars
          className="absolute inset-0 z-10 pointer-events-none"
          starColor="#ea871f"
          trailColor="#39ac37"
          minSpeed={5}
          maxSpeed={10}
          minDelay={200}
          maxDelay={300}
        />
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogContent className="sm:max-w-md text-center text-black">
            <DialogHeader>
              <DialogTitle className="text-center tracking-widest">
                Login to FastPay
              </DialogTitle>
              <DialogDescription className="text-center text-xs md:text-base">
                Get started with FASTag services
              </DialogDescription>
            </DialogHeader>

            <Card>
              <CardHeader className="mb-4">
                <CardTitle className="text-lg">
                  {isOtpSent ? "Verify OTP" : "Login"}
                </CardTitle>
                <CardDescription>
                  {isOtpSent
                    ? `Enter the OTP sent your mobile number +91 ${"*".repeat(
                        mobileNumber.length - 4
                      )} ${mobileNumber.slice(-2)}`
                    : "We'll send you an OTP to verify your number"}
                </CardDescription>
              </CardHeader>
              <CardContent className="md:space-y-12 space-y-8">
                {!isOtpSent ? (
                  <>
                    <div className="space-y-2 tracking-wide">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <div className="flex">
                        <div className="flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                          <span className="text-sm text-muted-foreground">
                            +91
                          </span>
                        </div>
                        <Input
                          id="mobile"
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          value={mobileNumber}
                          onChange={(e) =>
                            setMobileNumber(
                              e.target.value.replace(/\D/g, "").slice(0, 10)
                            )
                          }
                          className="rounded-l-none"
                          maxLength={10}
                        />
                      </div>
                    </div>
                    <Button
                      onClick={handleSendOtp}
                      disabled={isLoading || mobileNumber.length !== 10}
                      className={`
    w-full mt-2
    disabled:bg-gray-300
    disabled:text-gray-800
    disabled:cursor-not-allowed
    cursor-pointer
    flex items-center justify-center
  `}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending OTP...
                        </>
                      ) : (
                        "Send OTP"
                      )}
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      {/* <Label htmlFor="otp">Enter OTP</Label> */}
                      <OTPInput value={otp} onChange={setOtp} />
                    </div>
                    <div className="flex justify-evenly gap-2">
                      <Button
                        variant="outline"
                        onClick={handleChangeOtpToMobile}
                        className={`flex cursor-pointer disabled:cursor-not-allowed`}
                        disabled={otp.length === 4}
                      >
                        Change Number
                      </Button>
                      <Button
                        onClick={handleVerifyOtp}
                        className={`flex disabled:cursor-not-allowed cursor-pointer`}
                        disabled={isLoading || otp.length !== 4}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          "Verify & Login"
                        )}
                      </Button>
                    </div>
                    <div className="text-center">
                      <Button
                        variant="link"
                        size="sm"
                        onClick={handleSendOtp}
                        disabled={isLoading}
                      >
                        Resend OTP
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    </AosProvider>
  );
}
