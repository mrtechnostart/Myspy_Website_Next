import prisma from "@/lib/prisma";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "EmailID",
          type: "email",
          placeholder: "email@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        const user = await prisma.user.findUnique({
          where: {
            emailId: credentials.email,
          },
        });
        if (!user) {
          return null;
        }
        const correctPassword = await bcryptjs.compare(
          credentials.password,
          user.password
        );
        console.log(correctPassword);
        if (correctPassword) {
          return {
            id: user.id,
            emailId: user.emailId,
            name: user.name,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = {
        ...session,
        user: {
          id: token.user.id,
          emailId: token.user.emailId,
          ...session.user,
        },
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
