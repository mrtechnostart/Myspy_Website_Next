import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const token = await getToken({ req: req });
    const data = await req.json();
    if (token && token.user.id) {
      const response = await prisma.persona.create({
        data: { ...data, userId: token.user.id },
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
    if (token && token.user.id) {
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

export async function PATCH(req) {
  try {
    const token = await getToken({ req: req });
    const data = await req.json();
    if (token && token.user.id) {
      const response = await prisma.persona.update({
        where: {
          id: data.id,
        },
        data: {
          persona: data.persona,
        },
      });
      return NextResponse.json({ data: response }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(request) {
  const token = await getToken({ req: request });
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    if (token && token.user.id) {
      const data = await prisma.persona.delete({
        where: {
          id: id.toString(),
        },
      });
      return NextResponse.json({ data: data }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
