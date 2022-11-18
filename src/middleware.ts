import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import AxiosRequest from 'core/services';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  try {
    await AxiosRequest.get('/users?_limit=1', {
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
      },
    });
  } catch (e) {
    NextResponse.redirect(new URL('/', req.url));
  }

  if (!token) return NextResponse.redirect(new URL('/', req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
