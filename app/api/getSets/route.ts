import { NextResponse } from "next/server";
import { sets } from "../private/sets";

//TODO: AUTOMATE THIS ROUTE
export async function GET() {
  return NextResponse.json(sets);
}