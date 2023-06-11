import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
    try {


        const { name, password } = await request.json();
        // Check if fields are not empty
        if (!name || !password) {
            return NextResponse.error();
        }

        const { db } = await connectToDatabase();


        let user = await db.collection("users").findOne({ name });
        if (!user) {
            // You may want to customize this rewrite URL and possibly add a message.
            return NextResponse.rewrite("/register?error=User doesn't exists.");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return NextResponse.error();

        // Sign JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: 3600 });


        return NextResponse.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                fullName: user.fullName,
                avatar: user.avatar,
            },
        });

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
