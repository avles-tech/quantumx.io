import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { signJWT } from "@/lib/token";

export async function POST(request: Request) {
    try {
        const { name, password } = await request.json();

        if (!name || !password) {
            return NextResponse.error();
        }

        const { db } = await connectToDatabase();

        let user = await db.collection("users").findOne({ name });
        if (!user) {
            return NextResponse.error();
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return NextResponse.error();

        // Sign JWT
        //const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: 3600 });

        const token = await signJWT(
            { sub: user._id },
            { exp: `60m` }
          );

        return NextResponse.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                fullName: user.fullName,
                avatar: user.avatar,
            },
        });

    } catch (error) {
        console.log('error', error);
        return NextResponse.error();
    }
}
