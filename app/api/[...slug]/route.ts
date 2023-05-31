import { NextResponse } from 'next/server';


import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/lib/mongodb';

export async function PUT(request: Request, {
  params,
}: {
  params: { slug: string };
},) {
  try {

    const collectionName = params.slug[0];
    const _id = params.slug[1];
    const body = await request.json();

    const { db } = await connectToDatabase();

    let bodyData = body;

    delete bodyData._id;
    delete bodyData.id;

    const data = await db.collection(collectionName).updateOne({ "_id": new ObjectId(_id) }, { $set: bodyData },);

    data.id = _id;

    return NextResponse.json(data);

    //return NextResponse.json({"message": params.slug[0]});

  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}

export async function GET(request: Request, {
  params,
}: {
  params: { slug: string };
},) {
  try {

    const collectionName = params.slug[0];
    const _id = params.slug[1];
    

    const { db } = await connectToDatabase();

    let data = await db.collection(collectionName).findOne({ "_id": new ObjectId(_id) });

    data.id = data._id;

    return NextResponse.json(data);

    //return NextResponse.json({"message": params.slug[0]});

  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request, {
  params,
}: {
  params: { slug: string };
},) {
  try {

    const collectionName = params.slug[0];
    const _id = params.slug[1];

    const { db } = await connectToDatabase();

    const data = await db.collection(collectionName).deleteOne({ "_id": new ObjectId(_id) });

    return NextResponse.json(data);

  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}