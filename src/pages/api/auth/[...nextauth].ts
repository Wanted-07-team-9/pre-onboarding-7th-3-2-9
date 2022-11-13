import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Axios from 'core/apis/axiosInstance';
// import { NextApiRequest } from "next";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'user-credential',
      name: 'Credential',
      type: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: '이메일 주소' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials: Record<string, string>) {
        const response = await Axios.post('/login', {
          email: credentials.email,
          password: credentials.password
        });
        const user = response.data;
        if(response.status === 200 && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    // maxAge: 10,
    // updateAge: 20,
    maxAge: 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60,
  },
  callbacks: {
    jwt: async({token, user}) => {
      if(user) {
        token.email = user.user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session: async({session, token}) => {
      session.user.email = token.email;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/admin/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
