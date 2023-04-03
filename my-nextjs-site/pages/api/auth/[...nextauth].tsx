import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
    // FacebookProvider({
    //   clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
    //   clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET as string,
    // }),
    // TwitterProvider({
    //   clientId: process.env.NEXT_PUBLIC_TWITTER_ID as string,
    //   clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET as string,
    // }),
  ],
};

export default NextAuth(authOptions);
