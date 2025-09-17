// import { decrypt, encrypt } from "@/lib/aes-256-cbc";
// import { NextResponse } from "next/server";

// // Add your 3rd party API configuration
// const API_KEY = process.env.AUTH_API_KEY;
// const API_URL = process.env.AUTH_API_URL;

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
    
//       // Validate phone number
//     if (!body.data.phoneNumber || !/^[6-9]\d{9}$/.test(body.data.phoneNumber)) {
//       return NextResponse.json(
//         { error: "Invalid phone number" },
//         { status: 400 }
//       );
//     }
//     // encrypt data
//   const encryptedData = encrypt(body);

  

//     // Call 3rd party API to send OTP
//     const response = await fetch(`${API_URL}/send-otp`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//       body: encryptedData,
//     });

//     const data = await response.json();
//     // const decryptData = decrypt(data);

//     if (!response.ok) {
//       throw new Error(data.message || "Failed to send OTP");
//     }

//     return NextResponse.json({
//       success: true,
//       message: "OTP sent successfully",
//       decryptData: data, // Store this for OTP verification
//     });
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     return NextResponse.json(
//       { error: error instanceof Error ? error.message : "Failed to send OTP" },
//       { status: 500 }
//     );
//   }
// }
