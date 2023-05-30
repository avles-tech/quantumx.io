export async function fetchDocuments(collectionName : string ): Promise<any[]> {
    const response = await fetch(`/api/mongodb/find/${collectionName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export async function deleteDocument(collectionName : string, documentId: string): Promise<void> {
    const response = await fetch(`/api/mongodb/deleteOne/${collectionName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: documentId }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

export async function updateDocument(collectionName: string, documentId: string, update: any): Promise<void> {
    const response = await fetch(`/api/mongodb/updateOne/${collectionName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: documentId, data : update }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

// create a new document
export async function createDocument(collectionName: string, document: any): Promise<void> {
    const response = await fetch(`/api/mongodb/insertOne/${collectionName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(document),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}
