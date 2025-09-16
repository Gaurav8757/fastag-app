"use client";

import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";

interface OTPInputProps {
  value: string;
  onChange: (val: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ value, onChange }) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newValue = value.split("");
    newValue[index] = digit;
    const updatedValue = newValue.join("").slice(0, 6);
    onChange(updatedValue);

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setFocusedIndex(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    onChange(pastedData);

    const nextIndex = Math.min(pastedData.length, 3);
    inputRefs.current[nextIndex]?.focus();
    setFocusedIndex(nextIndex);
  };

  return (
    <div className="flex justify-center space-x-2">
      {[0, 1, 2, 3].map((index) => (
        <div key={index} className="flex items-center space-x-2">
          <Input
            ref={(el: HTMLInputElement | null) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => setFocusedIndex(index)}
            className={`w-10 h-10 md:text-2xl text-center  font-bold border-2 rounded transition-all outline-none ${
              focusedIndex === index
                ? "border-blue-600 bg-blue-50 scale-110"
                : value[index]
                ? "border-green-500 bg-green-50"
                : "border-gray-200 bg-white/80"
            }`}
          />
          {index < 3 && (
            <span
              className={`font-extrabold text-center ${
                value[index] ? "text-green-500" : "text-blue-600"
              }`}
            >
              &#8211;
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
