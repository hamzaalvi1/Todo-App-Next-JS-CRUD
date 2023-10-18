import { NextResponse, NextRequest } from "next/server";
import prismaInstance from "@/libs/prisma";
export async function GET() {
  try {
    const todos = await prismaInstance.todo.findMany();
    return NextResponse.json(
      { message: "Success!", todos: todos },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "something went wrong", error: err },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title } = await request.json();
    const todoCreation = await prismaInstance.todo.create({
      data: {
        title: title,
      },
    });

    return NextResponse.json(
      { message: "Success", data: todoCreation },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: err,
      },
      { status: 500 }
    );
  }
}
