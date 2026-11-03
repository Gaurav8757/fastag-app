"use client";

import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface OTPInputProps {
  value: string;
  onChange: (val: string) => void;
  maxLength?: number;
}

export const OTPInputComponent: React.FC<OTPInputProps> = ({
  value,
  onChange,
  maxLength = 4,
}) => {
  return (
    <div className="flex justify-center items-center py-2">
      <InputOTP
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        autoFocus
      >
        <InputOTPGroup className="gap-3">
          {Array.from({ length: maxLength }).map((_, idx) => (
            <InputOTPSlot key={idx} index={idx} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export const OTPInput = OTPInputComponent;
