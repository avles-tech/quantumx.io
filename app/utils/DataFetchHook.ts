import { useState, useEffect } from 'react';

export const useDataFetch = (fetchFunction: () => Promise<any>): [any[], boolean, React.Dispatch<React.SetStateAction<any[]>>] => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetchFunction();
            setData(response);
            setIsLoading(false);
        };

        fetchData();
    }, [fetchFunction]);

    return [data, isLoading, setData];
};