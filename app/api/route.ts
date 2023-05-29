import { NextResponse } from 'next/server';

import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request: Request) {
    try {

        const { searchParams } = new URL(request.url);
        const collectionId = searchParams.get('collectionId');

        const { db } = await connectToDatabase();

        const data = await db.collection(collectionId).find().toArray();

        return NextResponse.json(data);
        //return NextResponse.json({ test: "test" });

    } catch (error) {
        console.log('error', error);
        return NextResponse.error();
    }
}

export async function POST(request: Request) {
    try {

        const body = await request.json();

        const { db } = await connectToDatabase();

        const data = await db.collection(body.collectionId).insertOne(body.data);

        return NextResponse.json(data);
        //return NextResponse.json({ test: "test" });
        


    } catch (error) {
        console.log('error', error);
        return NextResponse.error();
    }
}

export async function PUT(request: Request) {
    try {

        const body = await request.json();

        const { db } = await connectToDatabase();

        const data = await db.collection(body.collectionId).updateOne({ _id: body._id }, { $set: body.data });

        return NextResponse.json(data);


    } catch (error) {
        console.log('error', error);
        return NextResponse.error();
    }
}

export async function DELETE(request: Request) {
    try {


        const body = await request.json();

        const { db } = await connectToDatabase();

        const data = await db.collection(body.collectionId).deleteOne({ "_id": new ObjectId(body._id) });

        return NextResponse.json(data);

    } catch (error) {
        console.log('error', error);
        return NextResponse.error();
    }
}
