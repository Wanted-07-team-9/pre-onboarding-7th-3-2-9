import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Axios from 'core/apis/axiosInstance';

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
      async authorize(credentials: Record<'email' | 'password', string>) {
        const { status, data } = await Axios.post('/login', {
          email: credentials.email,
          password: credentials.password,
        });
        console.log(data);
        if (status === 200 && data) {
          return data;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    // maxAge: 10,
    // updateAge: 20,
    maxAge: 60 * 60,
    updateAge: 2 * 60 * 60,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user.user;
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: '/login',
    error: '/admin/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
