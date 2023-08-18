// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NextAuth from "next-auth";
import axios from "axios";
import { SessionProvider } from "next-auth/react";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    {
      provider: SessionProvider.Credentials,
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const result = await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_API_LOCAL}/login`,
            data: {
              email: credentials.username,
              password: credentials.password,
            },
          });

          return {
            token: result.data.token,
            accessToken: result.data.token,
          };
        } catch (e) {
          statements;
          throw new Error(JSON.stringify(e.response.data));
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect(url, baseUrl) {
      return `${baseUrl}/`;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return "/account/login";
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
  pages: {
    error: "/account/login",
  },
  logger: {
    error(code, metadata) {},
  },
});
