import { APIError, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin, createAuthMiddleware } from "better-auth/plugins";
import { db } from "./db";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Db } from "mongodb";
import { Exo } from "next/font/google";
if (!db) {
  throw new Error("Database not connected");
}
export const auth = betterAuth({
  database: mongodbAdapter(db as unknown as Db),
  emailAndPassword: {
    enabled: true,
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {}),
  },
  account: {},
  plugins: [admin(), nextCookies()],
  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          console.log("session create", session);
        },
      },
    },
    user: {
      update: {
        before: async (session) => {
          console.log("session update before", session, session);
        },
        after: async (session) => {
          console.log("session update after", session);
        },
      },
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    },
  },
});
export type UserSession = typeof auth.$Infer.Session;
export type User = UserSession["user"];
export type Session = UserSession["session"];
