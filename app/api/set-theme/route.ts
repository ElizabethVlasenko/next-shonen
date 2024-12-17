import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { theme } = await req.json();

    // Set the status *when creating* the NextResponse:
    const response = NextResponse.json({ success: true }, { status: 200 });
    console.log("api: theme set to", theme);
    response.cookies.set("theme", theme, { path: "/" });
    return response;
  } catch (error) {
    console.error("Error setting theme:", error);

    // For errors, create a *new* NextResponse with the status:
    return new NextResponse("Failed to set theme", { status: 500 });
  }
}
