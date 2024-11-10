import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db/mongodb"; // יש להוסיף את חיבור MongoDB שלך
import User from "@/app/lib/models/User"; // יש לוודא שיש לך את המודל הזה

export async function POST(request: NextRequest) {
  try {
    await connect();

    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
      user: newUser,
      status: 201,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connect();
    const data = await User.find();
    return NextResponse.json({ message: "successfull", data });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json("Error in fetching posts: " + errorMessage)
  }
}
