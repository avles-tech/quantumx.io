import React, { useEffect, useState } from 'react'
import CreateGrade from './CreateGrade';
import { useAlert } from './../utils/AlertUtils';
import { usePagination } from './../utils/PaginationUtils';
import { useSearch } from './../utils/SearchUtils';
import { useDataFetch } from './../utils/DataFetchHook';
import { useDataFilter } from './../utils/FilterDataHook';
import { fetchGrades } from './../utils/ApiUtils';
import Pagination from './Pagination';
import GradesTable from './GradesTable';
import Alert from './Alert';
import SearchBar from './SearchBar';
import LoadingIndicator from './LoadingIndicator';

const Grades = () => {
    const [showItemCreatedInfo, alertItemCreatedInfo] = useAlert();
    const [showItemDeletedInfo, alertItemDeletedInfo] = useAlert();
    const [showItemUpdatedInfo, alertItemUpdatedInfo] = useAlert();
    const [page, setPage, nextPage, previousPage, itemsPerPage] = usePagination();
    const [searchQuery, setSearchQuery] = useSearch();
    const [data, isLoading, setData] = useDataFetch(fetchGrades);
    const filteredData = useDataFilter(data, searchQuery, page, itemsPerPage);
    const [reloadCount, setReloadCount] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchGrades();
            setData(data);
        };

        fetchData();
    }, [setData, reloadCount]);

    const reload = (): void => {
        setReloadCount(count => count + 1);
    };


    return (
        <>
            <h3> Grades</h3>
            {showItemDeletedInfo ? <Alert message="Item deleted." color="failure" show={showItemDeletedInfo} /> : null}

            {showItemCreatedInfo ? <Alert message="Item created." color="success" show={showItemCreatedInfo} /> : null}

            {showItemUpdatedInfo ? <Alert message="Item updated." color="success" show={showItemUpdatedInfo} /> : null}

            <div className="flex justify-end mb-5">
                <CreateGrade alertItemCreatedInfo={alertItemCreatedInfo} setReload={reload} />
            </div>
            <div className="relative overflow-x-auto m-8">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <LoadingIndicator isLoading={isLoading} /> {/* Using LoadingIndicator */}
                {!isLoading &&
                    <GradesTable
                        data={filteredData}
                        alertItemDeletedInfo={alertItemDeletedInfo}
                        alertItemUpdatedInfo={alertItemUpdatedInfo}
                        setReload={reload}
                    />
                }
                <Pagination onNext={nextPage} onPrevious={previousPage} />
            </div>
        </>
    )
}

export default Grades;