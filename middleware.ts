import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from './lib/token';


export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api')) {
        if (!request.nextUrl.pathname.startsWith('/api/login')) {
            const authorizatioin = request.headers.get('Authorization');
            const token = authorizatioin?.replace('Bearer ', '');
            if (!token) {
                return NextResponse.redirect('/login');
            }
            else {
                try {
                    const payload = verifyJWT<{ sub: string }>(token);
                } catch (error) {
                    return NextResponse.redirect('/login');
                }


            }





        }
    }
}

