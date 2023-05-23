import React, { useEffect, useState } from 'react'
import CheckOrNotIcon from '../CheckOrNotIcon';
import EditGrade from '../EditGrade';
import CreateGrade from '../CreateGrade';
import { Alert } from 'flowbite-react';
import { useAlert } from '../../utils/AlertUtils';
import { usePagination } from '../../utils/PaginationUtils';
import { useSearch } from '../../utils/SearchUtils';
import { useDataFetch } from '../../utils/DataFetchHook';
import { useDataFilter } from '../../utils/FilterDataHook';
import { fetchGrades } from '../../utils/ApiUtils';

interface Grade {
    _id: string;
    details: string;
    ignoreLateArrival: boolean;
    ignoreEarlyDepature: boolean;
    active: boolean;
  }
  

const Grades = () => {
    const [showItemDeletedInfo, alertItemDeletedInfo] = useAlert();
  const [showItemCreatedInfo, alertItemCreatedInfo] = useAlert();
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
  }, [setData,reloadCount]);

  const reload = (): void => {
    setReloadCount(count => count + 1);
  };
  

    return (
        <>
            {showItemDeletedInfo ? <Alert color="failure">
                <span>
                    <span className="font-medium">Info alert!</span>{' '}Item deleted.
                </span>
            </Alert> : null}

            {showItemCreatedInfo ? <Alert color="success">
                <span>
                    <span className="font-medium">Info alert!</span>{' '}Item Created.
                </span>
            </Alert> : null}

            <div className="flex justify-end mb-5">
            <CreateGrade alertItemCreatedInfo={alertItemCreatedInfo} setReload={reload} />
            </div>
            <div className="relative overflow-x-auto m-8">
                <form className='mb-5'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </form>
                {isLoading ? <div>Loading ...</div>
                    : <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Details</th>
                                <th scope="col" className="px-6 py-3">Ignore Late Arrival</th>
                                <th scope="col" className="px-6 py-3">Ignore Early Departure</th>
                                <th scope="col" className="px-6 py-3">Active</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((grade) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={grade._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {grade.details}
                                    </th>
                                    <td className="px-6 py-4"><CheckOrNotIcon value={grade.ignoreLateArrival} /></td>
                                    <td className="px-6 py-4"><CheckOrNotIcon value={grade.ignoreEarlyDepature} /></td>
                                    <td className="px-6 py-4"><CheckOrNotIcon value={grade.active} /></td>
                                    <td className="px-6 py-4 text-right">
                                    <EditGrade details={grade} alertItemDeletedInfo={alertItemDeletedInfo} setReload={reload} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                <div className='m-5'>
                    <button className='mr-5' onClick={previousPage}>Previous</button>
                    <button onClick={nextPage}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Grades;
