import { NextRequest, NextResponse } from 'next/server';

import { findAllDocuments , insertOneDocument , updateOneDocument , deleteOneDocument} from '@/lib/mongodbdataapi';

export async function GET() {

  try {
    
    const response = await findAllDocuments('grades');
    
    return NextResponse.json(response.documents );

  } catch (error) {
    console.log('error', error);
  }

}

export async function POST(request: Request) {
  try {
    const  body  = await request.json();

    const newDocument = await insertOneDocument('grades', body);

    return NextResponse.json({ newDocument });
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}






