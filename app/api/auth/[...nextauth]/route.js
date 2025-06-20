import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Alpaca API Key",
      credentials: {
        apiKey: { label: "API Key", type: "text" },
        apiSecret: { label: "API Secret", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.apiKey && credentials?.apiSecret) {
          return {
            id: credentials.apiKey,
            name: "Alpaca User",
            alpacaKey: credentials.apiKey,
            alpacaSecret: credentials.apiSecret,
            provider: "alpaca",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.provider === "alpaca") {
        session.alpacaKey = token.alpacaKey;
        session.alpacaSecret = token.alpacaSecret;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user?.alpacaKey) {
        token.alpacaKey = user.alpacaKey;
        token.alpacaSecret = user.alpacaSecret;
        token.provider = "alpaca";
      } else if (account?.provider === "google") {
        token.provider = "google";
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
