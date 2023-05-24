'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, Checkbox, Label, Modal, Spinner, TextInput } from 'flowbite-react';

interface Department {
    _id: string;
    shortCode: string;
    details: string;
    active: boolean;
}

interface UpdateDepartmentProps {
    department: Department;
    alertItemDeletedInfo: () => void;
    alertItemUpdatedInfo: () => void;
    setReload: () => void;
}

const UpdateDepartment: React.FC<UpdateDepartmentProps> = ({ department, alertItemDeletedInfo, alertItemUpdatedInfo, setReload }) => {
    const [visible, setVisible] = useState(false);
    const [shortCode, setShortCode] = useState(department.shortCode);
    const [details, setDetails] = useState(department.details);
    const [active, setActive] = useState(department.active);
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
    }, [ details]);

    async function deleteItem() {
        setDeleteConfirmation(false);
        setDeleting(true);
        try {
            await fetch('/api/mongodb/deleteOne/departments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: department._id }),
            });

            setDeleting(false);
            setDeleted(true);
            alertItemDeletedInfo();
            setReload();

        } catch (error) {
            console.error('An error occurred while deleting the department:', error);
        }
    }

    async function updateItem() {
        setUpdating(true);
        await fetch('/api/mongodb/updateOne/departments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: department._id,
                data: {
                    shortCode: shortCode,
                    details: details,
                    active: active,
                },
            }),
        });

        setUpdating(false);
        alertItemUpdatedInfo();
        setReload();
    }

    const handleSubmit = async (e: any) => {
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
            <Modal
                show={deleteConfirmation}
                popup={true}
                dismissible={true}
                size="md"
                onClose={() => { setDeleteConfirmation(false) }}
            >
                <Modal.Body>
                    <div className="text-center">

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this Department?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={() => { deleteItem(); }}
                            >
                                Yes, I&apos;m sure
                            </Button>
                            <Button
                                color="gray"
                                onClick={() => { setDeleteConfirmation(false); }}
                            >
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                show={visible}
                dismissible={true}
                onClose={() => { setVisible(false) }}
            >
                <Modal.Header>
                    Edit Department
                    {updating ? <Alert color="warning">
                        <span>
                            <span className="font-medium">Info alert!</span>{' '}updating...
                        </span>
                    </Alert> : null}
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="shortCode"
                                    value="Short Code"
                                />
                            </div>
                            <TextInput
                                ref={shortCodeRef}
                                id="shortCode"
                                required={true}
                                value={shortCode}
                                onChange={e => setShortCode(e.target.value)}
                                disabled={updating}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="details"
                                    value="Details"
                                />
                            </div>
                            <TextInput
                                id="details"
                                ref={detailsRef}
                                required={true}
                                value={details}
                                onChange={e => setDetails(e.target.value)}
                                disabled={updating}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="active"
                                checked={active}
                                onChange={e => setActive(e.target.checked)}
                                disabled={updating}
                            />
                            <Label htmlFor="active">
                                Active
                            </Label>
                        </div>
                        <div className="flex justify-between">
                            <Button disabled={updating} color='failure' onClick={() => { setVisible(false); setDeleteConfirmation(true); }}>
                                Delete
                            </Button>
                            <Button disabled={updating} onClick={() => updateItem()}>
                                Update
                            </Button>

                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        

        </React.Fragment>
    )
}

export default UpdateDepartment;
