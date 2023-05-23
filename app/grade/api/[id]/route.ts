import {  NextResponse } from 'next/server';

import {  updateOneDocument , deleteOneDocument} from '@/lib/mongodbdataapi';

export async function PUT(request: Request,{
    params,
  }: {
    params: { id: string };
  },) {
    try {
      // Retrieve the request body from the event
      const  body  = await request.json();
      
      // Update the document with the provided data
      const updatedDocument = await updateOneDocument('grades', params.id, body );
  
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
    await deleteOneDocument('grades', id);

    // body is blank . why ?
   


    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('error', error);
    return NextResponse.error();
  }
}






