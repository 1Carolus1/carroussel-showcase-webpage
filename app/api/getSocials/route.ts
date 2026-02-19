import { NextResponse } from "next/server";
import { socials } from "../data/socials";

//TODO: AUTOMATE THIS ROUTE
export async function GET() {
  return NextResponse.json(socials);
}