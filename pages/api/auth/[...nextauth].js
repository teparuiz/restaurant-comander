import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
import { API } from "../../../config/const";

const authOptions = {
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
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
              username: credentials.username,
              password: credentials.password,
            },
          });

          return {
            token: result.data.data.token,
            accessToken: result.data.data.token,
          };
        } catch (e) {
          throw new Error(JSON.stringify(e.response.data));
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },
    async session(session, token) {
      delete session.user;
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect(url, baseUrl) {
      return `${baseUrl}/`;
    },
  },
  pages: {
    signIn: "auth/login",
    error: "/account/login",
  },
  logger: {
    error(code, metadata) {},
  },
};

export default NextAuth(authOptions);
