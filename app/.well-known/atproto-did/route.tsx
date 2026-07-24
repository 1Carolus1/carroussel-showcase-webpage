import { NextResponse } from "next/server";

//bsky domain verification
export async function GET() {
  return new NextResponse("did:plc:e2c6oqzphoijaa7kabsat5jx", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
