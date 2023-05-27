'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, Checkbox, Label, Modal, Spinner, TextInput } from 'flowbite-react';

interface LeaveType {
    _id: string;
    shortCode: string;
    details: string;
    minHours: number;
    noOfSplits: number;
    considerTimeWhenCalculatingLeave: boolean;
    countLeaveIncludingHolidays: boolean;
}

interface UpdateLeaveTypeProps {
    leaveType: LeaveType;
    alertItemDeletedInfo: () => void;
    alertItemUpdatedInfo: () => void;
    setReload: () => void;
}

const UpdateLeaveType: React.FC<UpdateLeaveTypeProps> = ({ leaveType, alertItemDeletedInfo, alertItemUpdatedInfo, setReload }) => {
    const [visible, setVisible] = useState(false);
    const [shortCode, setShortCode] = useState(leaveType.shortCode);
    const [details, setDetails] = useState(leaveType.details);
    const [minHours, setMinHours] = useState(leaveType.minHours);
    const [noOfSplits, setNoOfSplits] = useState(leaveType.noOfSplits);
    const [considerTimeWhenCalculatingLeave, setConsiderTimeWhenCalculatingLeave] = useState(leaveType.considerTimeWhenCalculatingLeave);
    const [countLeaveIncludingHolidays, setCountLeaveIncludingHolidays] = useState(leaveType.countLeaveIncludingHolidays);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [updating, setUpdating] = useState(false);

    const shortCodeRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (shortCodeRef.current) {
          shortCodeRef.current.focus();
        }
    }, [shortCode]);

    const detailsRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (detailsRef.current) {
          detailsRef.current.focus();
        }
    }, [details]);

    async function deleteItem() {
        setDeleteConfirmation(false);
        setDeleting(true);
        try {
            await fetch('/api/mongodb/deleteOne/leaveTypes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: leaveType._id }),
            });

            setDeleting(false);
            setDeleted(true);
            alertItemDeletedInfo();
            setReload();

        } catch (error) {
            console.error('An error occurred while deleting the leave type:', error);
        }
    }

    async function updateItem() {
        setUpdating(true);
        await fetch('/api/mongodb/updateOne/leaveTypes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: leaveType._id,
                data: {
                    shortCode: shortCode,
                    details: details,
                    minHours: minHours,
                    noOfSplits: noOfSplits,
                    considerTimeWhenCalculatingLeave: considerTimeWhenCalculatingLeave,
                    countLeaveIncludingHolidays: countLeaveIncludingHolidays,
                },
            }),
        });

        setUpdating(false);
        alertItemUpdatedInfo();
        setReload();
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
    <React.Fragment>
        <a href="#" onClick={() => setVisible(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        <Modal
            show={deleting}
            popup={true}
            dismissible={false}
            size="md"
        >
            <Modal.Body>
                <div className="text-center">
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        deleting...
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Spinner
                            color="failure"
                            aria-label="Failure spinner example"
                        />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </React.Fragment>
    );
};

export default UpdateLeaveType;
