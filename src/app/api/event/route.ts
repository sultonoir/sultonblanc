import { XataClient } from "@/xata";
import { NextResponse } from "next/server";

export async function GET() {
  const xata = new XataClient();
  const posts = await xata.db.Posts.filter({
    category: "project",
  }).getAll();
  return NextResponse.json(posts);
}
