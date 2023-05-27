import React from 'react';
import CheckOrNotIcon from '../CheckOrNotIcon';
import UpdateLeaveType from './UpdateLeaveType';
import Table from '../Table'; 

interface LeaveType {
    _id: string;
    shortCode: string;
    details: string;
    minHours: number;
    noOfSplits: number;
    considerTimeWhenCalculatingLeave: boolean;
    countLeaveIncludingHolidays: boolean;
}

interface LeaveTypesTableProps {
    data: LeaveType[];
    alertItemDeletedInfo: () => void;
    alertItemUpdatedInfo: () => void;
    setReload: () => void;
}

const LeaveTypesTable: React.FC<LeaveTypesTableProps> = ({ data, alertItemDeletedInfo, alertItemUpdatedInfo, setReload }) => {
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
            key: 'minHours',
            label: 'Minimum Hours',
        },
        {
            key: 'noOfSplits',
            label: 'Number of Splits',
        },
        {
            key: 'considerTimeWhenCalculatingLeave',
            label: 'Consider Time When Calculating Leave',
            render: (value: boolean) => <CheckOrNotIcon value={value} />
        },
        {
            key: 'countLeaveIncludingHolidays',
            label: 'Count Leave Including Holidays',
            render: (value: boolean) => <CheckOrNotIcon value={value} />
        },
        {
            key: '_id',
            label: 'Edit',
            render: (_: any, item: LeaveType) => <UpdateLeaveType leaveType={item} alertItemUpdatedInfo={alertItemUpdatedInfo} setReload={setReload} alertItemDeletedInfo={alertItemDeletedInfo } />
        }
    ];

    return (
        <Table data={data} columns={columns} />
    );
};

export default LeaveTypesTable;
