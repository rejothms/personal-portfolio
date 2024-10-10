import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import clientPromise from '../../../../lib/mongodb';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db();

        // Check if the user exists in the database
        const user = await db.collection('users').findOne({ email: credentials?.email });

        if (user && credentials) {
          const isValid = await compare(credentials.password, user.password);
          if (isValid) {
            // Convert ObjectId to string
            return { id: user._id.toString(), name: user.name, email: user.email };
          }
        }

        // If user or password is incorrect, return null
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Ensure session.user exists before assigning
        session.user = session.user || {};
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
