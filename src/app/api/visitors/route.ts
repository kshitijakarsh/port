import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { recordUniqueVisitor } from "@/lib/visitors";

export async function GET() {
  const headerStore = await headers();
  const uniqueVisitors = await recordUniqueVisitor(headerStore);

  return NextResponse.json({ uniqueVisitors });
}

