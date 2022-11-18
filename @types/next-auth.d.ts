import NextAuth, { User, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
  }
  interface User {
    accessToken: string;
    user?: {
      email: string;
      id: number;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
  }
}
