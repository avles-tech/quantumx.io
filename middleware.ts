import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from './lib/token';


export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api')) {

        if (!request.nextUrl.pathname.startsWith('/api/login')) {
            const authorizatioin = request.headers.get('Authorization');
            const token = authorizatioin?.replace('Bearer ', '');
            if (!token) {
                return new NextResponse(
                    JSON.stringify({ success: false, message: 'authentication failed' }),
                    { status: 401, headers: { 'content-type': 'application/json' } }
                  )
            }
            else {
                try {
                    const payload = await verifyJWT<{ sub: string }>(token);
                } catch (error) {
                    return new NextResponse(
                        JSON.stringify({ success: false, message: 'authentication failed' }),
                        { status: 401, headers: { 'content-type': 'application/json' } }
                      )
                }
            }
        }
    }
}

