import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const { db } = await connectToDatabase();

        const { name, password } = await request.json();
        // Check if fields are not empty
        if (!name || !password) {
            return NextResponse.error();
        }

        let user = await db.collection("users").findOne({ name });
        if (user) {
            // You may want to customize this rewrite URL and possibly add a message.
            return NextResponse.rewrite("/register?error=User already exists.");
        }

        user = { name, password };
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await db.collection("users").insertOne(user);

        return NextResponse.json({
            user: {
                id: user._id,
                name: user.name,
            },
        });

    } catch (error) {
        console.log('error', error);
        return NextResponse.error();
    }
}
