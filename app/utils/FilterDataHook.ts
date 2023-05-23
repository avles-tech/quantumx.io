import { useState, useEffect } from 'react';

export const useDataFilter = (data: any[], searchQuery: string, page: number, itemsPerPage: number): any[] => {
    const [filteredData, setFilteredData] = useState<any[]>([]);

    useEffect(() => {
        const filtered = data
            .filter((item: any) => item.details.toLowerCase().includes(searchQuery.toLowerCase()))
            .slice((page - 1) * itemsPerPage, page * itemsPerPage);

        setFilteredData(filtered);
    }, [data, searchQuery, page, itemsPerPage]);

    return filteredData;
};