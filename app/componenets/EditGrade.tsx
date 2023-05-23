'use client';
import React from 'react'
import { Alert, Button, Checkbox, Label, Modal, Spinner, TextInput, } from 'flowbite-react'
import { useState, useEffect, useRef } from 'react';


const EditGrade = (props: any) => {


    const [visible, setVisible] = useState(false);

    const [details, setDetails] = useState(props.details.details);
    const [ignoreLateArrival, setIgnoreLateArrival] = useState(props.details.ignoreLateArrival);
    const [ignoreEarlyDeparture, setIgnoreEarlyDeparture] = useState(props.details.ignoreEarlyDeparture);
    const [active, setActive] = useState(props.details.active);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [updating, setUpdating] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [details]);

    async function deleteItem() {
        setDeleteConfirmation(false);
        setDeleting(true);
        try {
            await fetch('/grade/api/' + props.details._id, {
                method: 'DELETE',
            });

            setDeleting(false);
            setDeleted(true);
            props.alertItemDeletedInfo();
            props.setReload(true);


        } catch (error) {
            console.error('An error occurred while deleting the grade:', error);
        } finally {
            // insert cleanup code here
        }

    }

    async function updateItem() {
        console.log('updateItem');
        setUpdating(true);
        await fetch('/grade/api/' + props.details._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                details: details,
                ignoreLateArrival: ignoreLateArrival,
                ignoreEarlyDeparture: ignoreEarlyDeparture,
                active: active,
            }),
        });

        setUpdating(false);
        props.alertItemUpdatedInfo();
        props.setReload(true);



    }



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {


        } catch (error) {
            console.error('An error occurred while creating the grade:', error);
        } finally {

        }
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
                            Are you sure you want to delete this Item?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={() => { deleteItem(); }}
                            >
                                Yes, I'm sure
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
                    Edit Grade
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
                                    htmlFor="details"
                                    value="Details"
                                />
                            </div>
                            <TextInput
                                ref={inputRef}
                                id="details"
                                required={true}
                                value={details}
                                onChange={e => setDetails(e.target.value)}
                                disabled={updating}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="ignoreLateArrival"
                                checked={ignoreLateArrival}
                                onChange={e => setIgnoreLateArrival(e.target.checked)}
                                disabled={updating}
                            />
                            <Label htmlFor="ignoreLateArrival">
                                Ignore Late Arrival
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="ignoreEarlyDeparture"
                                checked={ignoreEarlyDeparture}
                                onChange={e => setIgnoreEarlyDeparture(e.target.checked)}
                                disabled={updating}
                            />
                            <Label htmlFor="ignoreEarlyDeparture">
                                Ignore Early Departure
                            </Label>
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

export default EditGrade