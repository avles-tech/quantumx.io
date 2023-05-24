import { NextRequest, NextResponse } from 'next/server';

import { findAllDocuments, insertOneDocument, updateOneDocument, deleteOneDocument } from '@/lib/mongodbdataapi';

import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request: Request, {
  params,
}: {
  params: { slug: string };
},) {
  try {

    const collectionName = params.slug;

    const { db } = await connectToDatabase();

    const data = await db.collection(collectionName).find().toArray();
    
    return NextResponse.json(data);
    // const response = await findAllDocuments(collectionName);

    // return NextResponse.json(response.documents);

  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const { collectionName } = await request.json();
    const response = await findAllDocuments(collectionName);

    return NextResponse.json(response.documents);


  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}