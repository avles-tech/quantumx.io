import { NextRequest, NextResponse } from 'next/server';

import { getAllDocuments , createDocument , updateDocument , deleteDocument} from '@/lib/mongodb';

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

export async function DELETE(request: Request,{
    params,
  }: {
    params: { id: string };
  },) {
  try {

   
    const id = params.id;
    
    console.log('id', id);
    // Retrieve the request body from the event
    

    // Delete the document based on the provided data
    await deleteDocument('grades', id);

    // body is blank . why ?
   


    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}






