'use client';
import React, { useEffect, useState } from 'react'
import CreateGrade from './CreateGrade';
import { useAlert } from '../../utils/AlertUtils';
import { usePagination } from '../../utils/PaginationUtils';
import { useSearch } from '../../utils/SearchUtils';
import { useDataFilter } from '../../utils/FilterDataHook';
import { fetchDocuments } from '../../utils/ApiUtils';
import Pagination from '../Pagination';
import GradesTable from './GradesTable';
import Alert from '../Alert';
import SearchBar from '../SearchBar';
import LoadingIndicator from '../LoadingIndicator';

const Grades = () => {
    const [page, setPage, nextPage, previousPage, itemsPerPage] = usePagination();
    const [searchQuery, setSearchQuery] = useSearch();
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const filteredData = useDataFilter(data, searchQuery, page, itemsPerPage);
    const [reloadCount, setReloadCount] = useState(0);

    // For alert
    const [alertMessage, setAlertMessage] = useState<string | undefined>();
    const [alertColor, setAlertColor] = useState<'success' | 'failure' | 'warning' |undefined>();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await fetchDocuments('grades');
            setData(data);
            setIsLoading(false);
        };

        fetchData();
    }, [reloadCount]);

    const reload = (): void => {
        setReloadCount(count => count + 1);
    };

    const handleAlert = (message: string, color: 'success' | 'failure') => {
        setAlertMessage(message);
        setAlertColor(color);
        setShowAlert(true);
    };

    return (
        <>
            <h3> Grades</h3>
            {showAlert ? <Alert message={alertMessage} color={alertColor} show={showAlert} /> : null}

            <div className="flex justify-end mb-5">
                <CreateGrade alertItemCreatedInfo={() => handleAlert('Item created.', 'success')} setReload={reload} />
            </div>
            <div className="relative overflow-x-auto m-8">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <LoadingIndicator isLoading={isLoading} /> {/* Using LoadingIndicator */}
                {!isLoading &&
                    <GradesTable
                        data={filteredData}
                        alertItemDeletedInfo={() => handleAlert('Item deleted.', 'failure')}
                        alertItemUpdatedInfo={() => handleAlert('Item updated.', 'success')}
                        setReload={reload}
                    />
                }
                <Pagination onNext={nextPage} onPrevious={previousPage} />
            </div>
        </>
    )
}

export default Grades;
