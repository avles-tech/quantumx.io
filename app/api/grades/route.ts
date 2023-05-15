import { NextRequest, NextResponse } from 'next/server';

import { getAllDocuments , createDocument , updateDocument , deleteDocument} from '@/lib/mongodb';

export async function GET(request: Request) {

  try {
       
    const response = await getAllDocuments('grades');
    console.log('response', response);

    return NextResponse.json({ response: response });

    

  } catch (error) {
    console.log('error', error);
  }

}

export async function POST(request: Request) {
  try {
    //console.log('request', request);
    // Retrieve the request body from the event
    const  body  = await request.json();
    
    // Create a new document using the provided data
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
    await deleteDocument('grades', body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}






