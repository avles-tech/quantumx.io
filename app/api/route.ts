import { NextRequest, NextResponse } from 'next/server';

import { findAllDocuments , insertOneDocument , updateOneDocument , deleteOneDocument} from '@/lib/mongodb';

export async function GET(request: Request) {

  try {
    const  {collectionName }  = await request.json();
    
    const response = await findAllDocuments('grades');
    
    return NextResponse.json(response.documents );

  } catch (error) {
    console.log('error', error);
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