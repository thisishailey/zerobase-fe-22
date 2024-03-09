import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value;

    if (currentUser) {
        return Response.redirect(new URL('/account'));
    } else {
        return Response.redirect(new URL('/account/login'));
    }
}

export const config = {
    matcher: ['/account'],
};
