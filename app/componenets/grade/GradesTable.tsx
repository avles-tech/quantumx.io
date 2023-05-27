import React from 'react';
import CheckOrNotIcon from '../CheckOrNotIcon';
import UpdateGrade from './UpdateGrade';
import Table from '../Table'; 

// Assuming this is the shape of your grade data
interface Grade {
    _id: string;
    details: string;
    ignoreLateArrival: boolean;
    ignoreEarlyDeparture: boolean;
    active: boolean;
}

interface GradesTableProps {
    data: Grade[];
    alertItemDeletedInfo: () => void;
    alertItemUpdatedInfo: () => void;
    setReload: () => void;
}

const GradesTable: React.FC<GradesTableProps> = ({ data, alertItemDeletedInfo, alertItemUpdatedInfo, setReload }) => {
    const columns = [
        {
            key: 'details',
            label: 'Details',
        },
        {
            key: 'ignoreLateArrival',
            label: 'Ignore Late Arrival',
            render: (value: boolean) => <CheckOrNotIcon value={value} />
        },
        {
            key: 'ignoreEarlyDeparture',
            label: 'Ignore Early Departure',
            render: (value: boolean) => <CheckOrNotIcon value={value} />
        },
        {
            key: 'active',
            label: 'Active',
            render: (value: boolean) => <CheckOrNotIcon value={value} />
        },
        {
            key: '_id',
            label: 'Edit',
            render: (_: any, item: Grade) => <UpdateGrade details={item}  alertItemDeletedInfo={alertItemDeletedInfo} alertItemUpdatedInfo={alertItemUpdatedInfo} setReload={setReload} />
        }
    ];

    return (
        <Table data={data} columns={columns} />
    );
};

export default GradesTable;
