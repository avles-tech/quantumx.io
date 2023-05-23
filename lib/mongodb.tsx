import axios from 'axios';

const apiKey = process.env.DATA_API_KEY || '3CbUxRPz87FpP2gUXvnwZuZ8p9ecA9GDSe9NnW44bMHsNF3Dape8hIvqcdSR1x5W';
const db = process.env.MONGODB_DB || 'quantumxio';
const endPoint = process.env.MONGODB_URL_ENDPOINT || 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-mpxnv/endpoint/data/v1';


export async function findAllDocuments(collectionName: string) {
    try {

        var data = JSON.stringify({
            "collection": collectionName,
            "database": db,
            "dataSource": "Cluster0",

        });

        var config = {
            method: 'post',
            url: `${endPoint}/action/find`,
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            data: data
        };

        const response = await axios(config);

         console.log(response.data);

        return response.data;
    } catch (error) {
        console.error('Error retrieving documents:', error);
        throw error;
    }
}

export async function insertOneDocument(collectionName: string, document: any) {
    try {
        const data = JSON.stringify({
            collection: collectionName,
            database: db,
            dataSource: 'Cluster0',
            document: document,
        });

        const config = {
            method: 'post',
            url: `${endPoint}/action/insertOne`,
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            data: data,
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
}

export async function updateOneDocument(collectionName: string, _id : string,  document: any) {
    try {
        const data = JSON.stringify({
            collection: collectionName,
            database: db,
            dataSource: 'Cluster0',
            filter: { "_id": { "$oid": _id } },
            update: {
                "$set": document
            }
        });

        console.log(data);

        const config = {
            method: 'post',
            url: `${endPoint}/action/updateOne`,
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            data: data,
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
}

export async function deleteOneDocument(collectionName: string, documentId: string) {
    try {
        const data = JSON.stringify({
            collection: collectionName,
            database: db,
            dataSource: 'Cluster0',
            filter: { "_id": { "$oid": documentId } }
        });

        const config = {
            method: 'post',
            url: `${endPoint}/action/deleteOne`,
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            data: data,
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
}


