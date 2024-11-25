import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

import { LOGIN_URL } from "./lib/api-auth-routes";
import Env from "./lib/env-vars";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = Env;

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        const payload = {
          email: user.email,
          name: user.name,
          oauth_id: account?.providerAccountId,
          provider: account?.provider,
          image: user.image,
        };

        const { data } = await axios.post(LOGIN_URL, payload);

        user.id = data.user.id;
        user.token = data.token;
        return true;
      } catch (error) {
        if (error instanceof AxiosError) {
          return redirect(`/auth/error?message=${error.message}`);
        }
        return redirect(
          `/auth/error?message=Something went wrong.Please try again!`
        );
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token.user as User;
      return session;
    },
  },

  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
