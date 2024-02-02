const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcryptjs = require("bcryptjs");

(async () => {
  await prisma.user.create({
    data: {
      name: "admin",
      emailId: "admin@technostart.in",
      password: bcryptjs.hashSync(
        "rambpandey238@madhusudhan",
        bcryptjs.genSaltSync(10)
      ),
    },
  });
})();
