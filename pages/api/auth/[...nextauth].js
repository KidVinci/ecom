import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from "next-auth/providers/twitter";
import GitHubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";
import clientPromise from './lib/mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET
      }),
      Auth0Provider({
        clientId: process.env.AUTH0_ID,
        clientSecret: process.env.AUTH0_SECRET,
        issuer: process.env.AUTH0_ISSUER
      }),
  ],
  pages: {
    // signIn:"/signin",
  },
  session: {
    strategy:"jwt",
  },
  secret: process.env.JWT_SECRET,

})