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