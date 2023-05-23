export async function fetchGrades(): Promise<any[]> {
    const response = await fetch('/api' 
    , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({collectionName: 'grades'}),
    }
    );
    const data = await response.json();
    return data;
}