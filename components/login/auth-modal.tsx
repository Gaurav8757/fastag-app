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
      toast("Please enter a valid 10-digit mobile number", {className: 'bg-red-500 text-white'});
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsOtpSent(true);
      setIsLoading(false);
      alert("OTP sent to your mobile number!");
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
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
        
        <DialogContent className="sm:max-w-lg text-center">
          <DialogHeader>
            <DialogTitle className="text-center tracking-widest">
              Login to FastPay
            </DialogTitle>
            <DialogDescription className="text-center text-xs md:text-base">
              Enter your mobile number to get started with FASTag services
            </DialogDescription>
          </DialogHeader>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {isOtpSent ? "Verify OTP" : "Mobile Login"}
              </CardTitle>
              <CardDescription>
                {isOtpSent
                  ? `Enter the OTP sent to +91 ${mobileNumber}`
                  : "We'll send you an OTP to verify your number"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isOtpSent ? (
                <>
                  <div className="space-y-2">
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
                    className={`w-full mt-2 ${
                      isLoading ? "cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading || mobileNumber.length !== 10}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" /> Sending OTP...
                      </>
                    ) : (
                      "Send OTP"
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                      }
                      maxLength={6}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsOtpSent(false)}
                      className="flex-1"
                    >
                      Change Number
                    </Button>
                    <Button
                      onClick={handleVerifyOtp}
                      className={`flex-1 ${
                        isLoading ? "cursor-not-allowed" : ""
                      }`}
                      disabled={isLoading || otp.length !== 6}
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
    </div></AosProvider>
  );
}
