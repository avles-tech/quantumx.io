import {  NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: Request, {
  params,
}: {
  params: { slug: string };
},) {
  try {

    const collectionName = params.slug;
    const  body  = await request.json();

    const { db } = await connectToDatabase();

    const data = await db.collection(collectionName).insertOneDocument(body);
    
    return NextResponse.json(data);
    // const response = await findAllDocuments(collectionName);

    // return NextResponse.json(response.documents);

  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}