import PostApi from "@/app/types/PostApi";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type
export function GET() {
  const posts: PostApi[] = Array.from({ length: 30 }).map((_, index) => {
    return {
      id: index + 1,
      title: `Post title ${index}`,
      body: `Post body ${index}`,
    };
  });
  return NextResponse.json({ message: "api group get", data: posts });
}
export function POST() {
  return NextResponse.json({ message: "api group delete" });
}
