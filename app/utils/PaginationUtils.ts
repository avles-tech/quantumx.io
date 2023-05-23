import { useState } from 'react';

export const usePagination = (): [number, React.Dispatch<React.SetStateAction<number>>, () => void, () => void, number] => {
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 5;

    const nextPage = (): void => {
        setPage((prev) => prev + 1);
    };

    const previousPage = (): void => {
        setPage((prev) => Math.max(prev - 1, 1));
    };

    return [page, setPage, nextPage, previousPage, itemsPerPage];
};