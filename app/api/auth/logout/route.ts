import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();

  // Delete the auth token cookie
  cookieStore.delete("auth-token");

  return NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });
}
