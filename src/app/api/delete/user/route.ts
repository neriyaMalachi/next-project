import { NextResponse } from "next/server";

export async function DELETE({ params }: { params: { id: string } }) {
    const { id } = params;
    console.log("Deleting task with id:", id);
  
    
    return NextResponse.json({ message: "Task deleted" });
  }