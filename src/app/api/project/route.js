import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const token = await getToken({ req: req });
    const data = await req.json();
    console.log(data);
    if (token && token.user.id) {
      const response = await prisma.project.create({
        data: data,
      });
      return NextResponse.json({ data: response }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { error: error });
  }
}

export async function GET(req) {
  try {
    const token = await getToken({ req: req });
    if (true) {
      const response = await prisma.persona.findMany({
        select: {
          persona: true,
          id: true,
        },
      });
      return NextResponse.json({ data: response }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 }, { error: error });
  }
}
