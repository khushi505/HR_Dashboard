import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "admin@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === "admin@gmail.com" &&
          credentials.password === "123456"
        ) {
          return { id: 1, name: "Admin", email: "admin@gmail.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
