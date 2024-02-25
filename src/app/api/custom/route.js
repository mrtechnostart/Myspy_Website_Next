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

// export async function GET() {
//   try {
//     const userId = "cls4h198u0000k2vszg60ezm0"; // Replace with the actual user ID you want to query

//     // Find the user with the specified ID
//     const user = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//       include: {
//         persona: {
//           include: {
//             project: true,
//           },
//         },
//       },
//     });

//     // Extract and format the desired information
//     const userProjectsData = user.persona.reduce((result, persona) => {
//       persona.project.forEach((project) => {
//         result.push({
//           persona: persona.persona,
//           projectName: project.projectName,
//           minDesc: project.minDesc,
//           desc: project.desc,
//           hrefto: project.hrefto,
//         });
//       });
//       return result;
//     }, []);

//     return NextResponse.json(
//       { data: JSON.parse(JSON.stringify(userProjectsData, null, 2)) },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("Error retrieving user data:", error);
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// }
