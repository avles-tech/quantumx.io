import { NextRequest, NextResponse } from 'next/server';

import { findAllDocuments , insertOneDocument , updateOneDocument , deleteOneDocument} from '@/lib/mongodbdataapi';

export async function GET(request: Request) {

  try {
    const { searchParams } = new URL(request.url);
  const collectionName = searchParams.get('collectionName');
      
      return NextResponse.json({test : "test"});
  } catch (error) {
      console.log('error', error);
      return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const  {collectionName }  = await request.json();
      const response = await findAllDocuments(collectionName);
  
      return NextResponse.json(response.documents );

   
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}