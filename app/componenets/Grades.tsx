'use client';
import React, { useEffect, useState } from 'react'
import CheckOrNotIcon from './CheckOrNotIcon';
import EditGrade from './EditGrade';
import CreateGrade from './CreateGrade';
import { Alert } from 'flowbite-react';


async function fetchGrades() {
    //const response = await getAllDocuments('grades', page, searchQuery);
    var response = await fetch('/grade/api');

    const data = await response.json();
    console.log(data);

    return data;
}

const Grades = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showItemDeletedInfo, setShowItemDeletedInfo] = useState(false);
    const [showItemCreatedInfo, setShowItemCreatedInfo] = useState(false);
    const [reload, setReload] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await fetchGrades();
        setReload(false);
        setData(data);
        setIsLoading(false);
    };

    async function alertItemDeletedInfo() {
        setShowItemDeletedInfo(true);
        setTimeout(() => {
            setShowItemDeletedInfo(false);
        }
            , 5000);
    }

    async function alertItemCreatedInfo() {
        setShowItemCreatedInfo(true);
        setTimeout(() => {
            setShowItemCreatedInfo(false);
        }
            , 5000);
    }

    useEffect(() => {
        fetchData();
    }, [reload]);


    useEffect(() => {
        const itemsPerPage = 5; // Change this to the number of items you want per page

        const searchFunction = async (page = 1, searchQuery = '') => {
            const filteredData = data
                .filter((grade: any) =>
                    grade.details.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .slice((page - 1) * itemsPerPage, page * itemsPerPage);

            if (searchQuery != '') setPage(1);

            setFilteredData(filteredData);
        };

        searchFunction(page, searchQuery);
    }, [page, searchQuery, data]);




    return (
        <>
            {showItemDeletedInfo ? <Alert
                color="failure"

            >
                <span>
                    <span className="font-medium">
                        Info alert!
                    </span>
                    {' '}Item deleted.
                </span>
            </Alert> : null}
            {showItemCreatedInfo ? <Alert
                color="success"

            >
                <span>
                    <span className="font-medium">
                        Info alert!
                    </span>
                    {' '}Item Created.
                </span>
            </Alert> : null}

            <div className="flex justify-end mb-5">
                <CreateGrade alertItemCreatedInfo={alertItemCreatedInfo} setReload ={setReload} />
            </div>
            <div className="relative overflow-x-auto m-8">
                {/* <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                /> */}

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
                                <th scope="col" className="px-6 py-3">
                                    Details
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ignore Late Arrival
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ignore Early Departure
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Active
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((grade: any) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={grade._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {grade.details}
                                    </th>
                                    <td className="px-6 py-4">
                                        <CheckOrNotIcon value={grade.ignoreLateArrival} ></CheckOrNotIcon>
                                    </td>
                                    <td className="px-6 py-4">
                                        <CheckOrNotIcon value={grade.ignoreEarlyDepature} ></CheckOrNotIcon>
                                    </td>
                                    <td className="px-6 py-4">
                                        <CheckOrNotIcon value={grade.active} ></CheckOrNotIcon>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {/* <a href="/grade/edit" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                        <EditGrade details={grade} alertItemDeletedInfo={alertItemDeletedInfo} setReload ={setReload} ></EditGrade>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                }


                <div className='m-5'>
                    <button className='mr-5' onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
                    <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
                </div>

            </div>

            {/* <ul>
                {data.map((grade: any) => (
                    <li key={grade._id}>{grade.details}</li>
                ))
                }
            </ul> */}
        </>
    )
}

export default Grades