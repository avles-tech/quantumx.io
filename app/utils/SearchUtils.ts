import { useState } from 'react';

export const useSearch = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return [searchQuery, setSearchQuery];
};