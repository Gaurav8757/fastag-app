import { NextResponse } from "next/server";
import { sendOtp } from "@/app/services/apihelpers";

export async function POST(request: Request) {
  try {
    const { mobile, password } = await request.json();

    // Validate phone number
    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    const responseData = await sendOtp(mobile, password);

    // Ensure sendOtp returns JSON-serializable data
    return NextResponse.json({data:responseData});
  } catch (error: any) {
    console.error("Error sending OTP:", error);

    const errorMessage =
      error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
