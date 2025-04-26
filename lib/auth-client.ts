import { createAuthClient } from "better-auth/react";
// type for auth client if incase not properly configured.
type BAClient = ReturnType<typeof createAuthClient>;
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  fetchOptions: {
    credentials: "include",
  },
});

const { useSession, signOut } = authClient;
