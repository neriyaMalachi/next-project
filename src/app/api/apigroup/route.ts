import PostApi from "@/app/types/PostApi";
import { NextResponse } from "next/server";

export async function GET() {
  const posts: PostApi[] = Array.from({ length: 30 }).map((_, index) => {
    return {
      id: index + 1,
      title: `Post title ${index}`,
      body: `Post body ${index}`,
    };
  });
  return NextResponse.json({ message: "api group get", data: posts });
}
export async function POST() {
  return NextResponse.json({ message: "api group delete" });
}
