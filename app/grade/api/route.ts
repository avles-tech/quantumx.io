import { NextRequest, NextResponse } from 'next/server';

import { getAllDocuments , createDocument , updateDocument , deleteDocument} from '@/lib/mongodb';

export async function GET() {

  try {
    
    const response = await getAllDocuments('grades');
    
    return NextResponse.json(response.documents );

  } catch (error) {
    console.log('error', error);
  }

}

export async function POST(request: Request) {
  try {
    const  body  = await request.json();

    const newDocument = await createDocument('grades', body);

    return NextResponse.json({ newDocument });
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}

export async function PUT(request: Request) {
  try {
    // Retrieve the request body from the event
    const { body } =  request;
    
    // Update the document with the provided data
    const updatedDocument = await updateDocument('grades', body);

    return NextResponse.json({ updatedDocument });
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    // Retrieve the request body from the event
    const body = await request.text();

    // Delete the document based on the provided data
    //await deleteDocument('grades', body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}






