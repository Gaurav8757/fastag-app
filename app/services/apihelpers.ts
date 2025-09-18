import { encryptData, decryptData } from "@/lib/aes-256-cbc";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.AUTH_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface PayLoad {
  mobile: string;
  password?: string;
}

// sendOtp
export async function sendOtp(mobile: string, password?: string): Promise<any> {
  const payload: PayLoad = { mobile, password};

  // Encrypt payload object as string
  const encryptedPayload = encryptData(JSON.stringify(payload));
  console.log(JSON.stringify(payload));
  console.log(encryptedPayload);
  
  
  // Send encrypted payload to backend
  const res = await api.post("/receiveOTP.php", {
     encryptedPayload,
  });

  console.log("Raw response:", res.data);

  // If backend returns an encrypted response, decrypt it
  let result = res.data;
//   if (typeof res.data === "string") {
//     result = decryptData(res.data);
//   } else if (res.data?.res_data) {
//     result = decryptData(res.data.res_data);
//   } else {
//     result = res.data;
//   }

  return result;
}

// validateOtp
export async function validateOtp(mobile: string, otp: string) {
  try {
    const payload = encryptData(JSON.stringify({ mobile, otp }));
    const res = await api.post("/api/validateOTP.php", { req_data: payload });
    const decrypted = decryptData(res.data.res_data);
    return JSON.parse(decrypted);
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "OTP validation failed");
  }
}
