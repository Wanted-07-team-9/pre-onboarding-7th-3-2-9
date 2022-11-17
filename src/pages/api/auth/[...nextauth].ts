import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import AxiosRequest from 'core/services';

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
        const { status, data } = await AxiosRequest.post('/login', {
          email: credentials.email,
          password: credentials.password,
        });
        if (status === 200 && data) {
          return data;
        }
        return null;
      },
    }),
  ],
  jwt: {
    maxAge: 60 * 60,
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user.user;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/admin/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
