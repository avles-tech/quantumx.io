import {  NextResponse } from 'next/server';

import {  updateOneDocument , deleteOneDocument, insertOneDocument, findAllDocuments} from '@/lib/mongodb';

export async function POST(request: Request,{
    params,
  }: {
    params: { collectionName: string };
  },) {
    try {
        const response = await findAllDocuments(params.collectionName);
    
        return NextResponse.json(response.documents );
  
     
    } catch (error) {
      console.log('error', error);
      return NextResponse.error();
    }
  }