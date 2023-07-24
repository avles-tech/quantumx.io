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
    const body = await request.json();

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

    const { searchParams } = new URL(request.url);
    const filter = searchParams.get('filter');
    const q = JSON.parse(filter || '{}').q || '';
    const query = q ? { $text: { $search: q } } : {};
    console.log(query);

    const range = searchParams.get('range');
   
    let queryBuilder = db.collection(collectionName).find(query);

    if (range !== undefined) {
      const rangeEx = JSON.parse(range || '{}');
      const limit = (rangeEx[1] - rangeEx[0] + 1);
      queryBuilder = queryBuilder.limit(limit);
      const skip = rangeEx[0] || 0;
      if(skip !== undefined){
        queryBuilder = queryBuilder.limit(limit).skip(skip);
      }
    }

    let data = await queryBuilder.toArray();


    //let data = await db.collection(collectionName).find(query).skip(skip).limit(limit).toArray();
    //let data = await db.collection(collectionName).find().toArray();

    data = data.map((item: any) => {
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
    const body = await request.json();

    const { db } = await connectToDatabase();

    const data = await db.collection(collectionName).deleteOne({ "_id": new ObjectId(body._id) });

    return NextResponse.json(data);

  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}


