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
    if (token && token.user.id) {
      const response = await prisma.project.findMany({});
      console.log(response);
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
    const { id, ...restData } = data;
    if (token && token.user.id) {
      const response = await prisma.project.update({
        where: {
          id: id,
        },
        data: restData,
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
      const data = await prisma.project.delete({
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
