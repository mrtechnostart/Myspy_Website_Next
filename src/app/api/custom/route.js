import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const token = await getToken({ req: req });
    const data = await req.json();
    console.log(data);
    if (token && token.user.id) {
      const response = await prisma.persona.findFirst({
        where: {
          persona: data.persona,
        },
      });
      if (response) {
        return NextResponse.json({ value: true }, { status: 200 });
      }
      return NextResponse.json({ value: false }, { status: 200 });
    }
    return NextResponse.json({ status: 500 }, { value: "unauthorized" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
