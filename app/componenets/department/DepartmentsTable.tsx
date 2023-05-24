import React from 'react';
import CheckOrNotIcon from '../CheckOrNotIcon';
import UpdateDepartment from './UpdateDepartment';
import Table from '../Table'; 

interface Department {
    _id: string;
    shortCode: string;
    details: string;
    active: boolean;
}

interface DepartmentsTableProps {
    data: Department[];
    alertItemDeletedInfo: () => void;
    alertItemUpdatedInfo: () => void;
    setReload: () => void;
}

const DepartmentsTable: React.FC<DepartmentsTableProps> = ({ data, alertItemDeletedInfo, alertItemUpdatedInfo, setReload }) => {
    const columns = [
        {
            key: 'shortCode',
            label: 'Short Code',
        },
        {
            key: 'details',
            label: 'Details',
        },
        {
            key: 'active',
            label: 'Active',
            render: (value: boolean) => <CheckOrNotIcon value={value} />
        },
        {
            key: '_id',
            label: 'Edit',
            render: (_: any, item: Department) => <UpdateDepartment department={item} alertItemUpdatedInfo={alertItemUpdatedInfo} setReload={setReload} alertItemDeletedInfo={alertItemDeletedInfo } />
        }
    ];

    return (
        <Table data={data} columns={columns} />
    );
};

export default DepartmentsTable;
