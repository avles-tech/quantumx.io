export async function fetchGrades(): Promise<any[]> {
    const response = await fetch('/grade/api');
    const data = await response.json();
    return data;
}