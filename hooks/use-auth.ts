import { sendOtp, validateOtp } from "@/app/services/apihelpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSendOtp() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (phone: string) => sendOtp(phone),
    onSuccess: (data) => {
      if (data) {
        qc.setQueryData(["auth", "sessionId"], data);
      }
    },
  });
}

export function useValidateOtp() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ phone, otp }: { phone: string; otp: string }) =>
      validateOtp(phone, otp),
    onSuccess: (data) => {
      if (data.token) {
        document.cookie = `auth_token=${data.token}; path=/; secure`;
        qc.setQueryData(["auth", "user"], data.user);
      }
    },
  });
}
