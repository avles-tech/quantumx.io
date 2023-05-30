import { NextResponse } from 'next/server';

import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request: Request, {
    params,
  }: {
    params: { slug: string };
  },) {
    try {
  
      const collectionName = params.slug;
      const  body  = await request.json();
  
      const { db } = await connectToDatabase();
  
      const data = await db.collection(collectionName).insertOne(body);

      body.id = data.insertedId;
      
      return NextResponse.json(body);
  
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
  
      const collectionName = params.slug;
  
      const { db } = await connectToDatabase();
  
      let data = await db.collection(collectionName).find().toArray();

      data = data.map((item : any) => {
        item.id = item._id;
        return item;
      });
      
      return new Response(JSON.stringify(data), {
        headers: {
            'X-Total-Count': data.length.toString(),
            'Access-Control-Expose-Headers': 'X-Total-Count',
            'Content-Type': 'application/json',
        },
        status: 200,
        statusText: 'OK',
    });
  
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
  
      const collectionName = params.slug;
      const  body  = await request.json();
  
      const { db } = await connectToDatabase();
  
      const data = await db.collection(collectionName).deleteOne({"_id": new ObjectId(body._id)});
      
      return NextResponse.json(data);
  
    } catch (error) {
      console.log('error', error);
      return NextResponse.error();
    }
  }

  
