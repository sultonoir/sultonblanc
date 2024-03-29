import { NextResponse } from "next/server";

interface IParams {
  id: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  return NextResponse.json(`Hello, Next.js!,your id is ${params.id}`);
}
