import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    "dh=ecd307ca5c387e28ca809821757958ccc28b6250",
    {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    }
  );
}