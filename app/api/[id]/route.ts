import {  NextResponse } from 'next/server';

import {  updateOneDocument , deleteOneDocument, insertOneDocument, findAllDocuments} from '@/lib/mongodb';

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