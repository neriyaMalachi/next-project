import { NextRequest, NextResponse } from "next/server";

export async function DELETE(params: NextRequest) {
 return NextResponse.json({ message: "delete", status: 201 ,data:params});
}
