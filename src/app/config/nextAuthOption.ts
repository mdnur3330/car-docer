


import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { cookies } from "next/headers";


export const nextAuthOption:NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],

  callbacks: {
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signIn({ profile, account }: any) {
      try {
        if (!profile || !account) {
          return false;
        }

        if (account.provider === "google") {
          const respons = await axios.post("/auth/login", {
            name: profile.name,
            email: profile.email,
            img: profile.picture,
          });

          if (respons.data.data.accessToken || respons.data.refreshToken) {
            cookies().set("accessToken", respons.data.data.accessToken);
            cookies().set("refreshToken", respons.data.data.refreshToken);
            return true;
          } else {
            return false;
          }
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
}