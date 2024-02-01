const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getUserData() {
  try {
    const userId = "clrvlg2l7000011xgzxatl3o0"; // Replace with the actual user ID you want to query

    // Find the user with the specified ID
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        persona: {
          include: {
            project: true,
          },
        },
      },
    });

    // Extract and format the desired information
    const userProjectsData = user.persona.reduce((result, persona) => {
      persona.project.forEach((project) => {
        result.push({
          persona: persona.persona,
          projectName: project.projectName,
          minDesc: project.minDesc,
          desc: project.desc,
          hrefto: project.hrefto,
        });
      });
      return result;
    }, []);

    console.log(JSON.stringify(userProjectsData, null, 2));
  } catch (error) {
    console.error("Error retrieving user data:", error);
  }
}

getUserData();
