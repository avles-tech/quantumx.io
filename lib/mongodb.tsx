import axios from 'axios';

const apiKey = process.env.DATA_API_KEY;
const db = process.env.MONGODB_DB;
const endPoint = process.env.MONGODB_URL_ENDPOINT;


export async function getAllDocuments(collectionName: string) {
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
        return response.data;
    } catch (error) {
        console.error('Error retrieving documents:', error);
        throw error;
    }
}

// write a insertOneDocument function here
export async function insertOneDocument(collectionName: string, document: any) {
    try {

        var data = JSON.stringify({
            "collection": collectionName,
            "database": db,
            "dataSource": "Cluster0",
            "document": document
        });

        var config = {
            method: 'post',
            url: `${endPoint}/action/insert`,
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            data: data
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('Error inserting document:', error);
        throw error;
    }
}

export async function createDocument(collectionName: string, document: any) {
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

export async function updateDocument(collectionName: string, document: any) {
    try {
        const data = JSON.stringify({
            collection: collectionName,
            database: db,
            dataSource: 'Cluster0',
            document: document,
        });

        const config = {
            method: 'post',
            url: `${endPoint}/action/update`,
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

export async function deleteDocument(collectionName: string, documentId: string) {
    try {
        const data = JSON.stringify({
            collection: collectionName,
            database: db,
            dataSource: 'Cluster0',
            documentId: documentId,
        });

        const config = {
            method: 'post',
            url: `${endPoint}/action/delete`,
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


