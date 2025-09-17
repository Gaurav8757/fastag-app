import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Use proper secret in production
const API_KEY = process.env.AUTH_API_KEY;
const API_URL = process.env.AUTH_API_URL;

export async function POST(request: Request) {
  try {
    const { phoneNumber, otp, sessionId } = await request.json();

    if (!phoneNumber || !otp || !sessionId) {
      return NextResponse.json(
        { error: "Phone number, OTP and sessionId are required" },
        { status: 400 }
      );
    }

    // Verify OTP with 3rd party API
    const response = await fetch(`${API_URL}/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        phone: phoneNumber,
        otp: otp,
        sessionId: sessionId,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "OTP verification failed");
    }

    // Create JWT token
    const token = await new SignJWT({
      phoneNumber,
      userId: data.userId, // If provided by 3rd party API
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .setIssuedAt()
      .sign(new TextEncoder().encode(JWT_SECRET));

    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return NextResponse.json({
      success: true,
      message: "Authentication successful",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Authentication failed",
      },
      { status: 500 }
    );
  }
}
