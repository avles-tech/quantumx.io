'use strict';
import React, { useState, useEffect, useRef } from 'react';
import { Button, Checkbox, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { FaPlus } from 'react-icons/fa';

interface CreateLeaveTypeProps {
    alertItemCreatedInfo: () => void;
    setReload: () => void;
}

const CreateLeaveType: React.FC<CreateLeaveTypeProps> = (props) => {
    const [visible, setVisible] = useState(false);
    const [details, setDetails] = useState('');
    const [shortCode, setShortCode] = useState('');
    const [minHours, setMinHours] = useState(0);
    const [noOfSplits, setNoOfSplits] = useState(0);
    const [considerTimeWhenCalculatingLeave, setConsiderTimeWhenCalculatingLeave] = useState(false);
    const [countLeaveIncludingHolidays, setCountLeaveIncludingHolidays] = useState(false);
    const [creating, setCreating] = useState(false);
    const [created, setCreated] = useState(false);

    // Referencing input fields for auto focusing
    const detailsRef = useRef<HTMLInputElement>(null);
    const shortCodeRef = useRef<HTMLInputElement>(null);
    const minHoursRef = useRef<HTMLInputElement>(null);
    const noOfSplitsRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.focus();
        }
    }, [details]);

    useEffect(() => {
        if (shortCodeRef.current) {
            shortCodeRef.current.focus();
        }
    }, [shortCode]);

    useEffect(() => {
        if (minHoursRef.current) {
            minHoursRef.current.focus();
        }
    }, [minHours]);

    useEffect(() => {
        if (noOfSplitsRef.current) {
            noOfSplitsRef.current.focus();
        }
    }, [noOfSplits]);

    async function createItem() {
        setVisible(false);
        setCreating(true);
        try {
            await fetch('/api/mongodb/insertOne/leavetypes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    shortCode: shortCode,
                    details: details,
                    minHours: minHours,
                    noOfSplits: noOfSplits,
                    considerTimeWhenCalculatingLeave: considerTimeWhenCalculatingLeave,
                    countLeaveIncludingHolidays: countLeaveIncludingHolidays
                }),
            });

            setCreating(false);
            setCreated(true);
            props.alertItemCreatedInfo();
            props.setReload();

        } catch (error) {
            console.error('An error occurred while creating the leave type:', error);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // handle form submit here
        } catch (error) {
            console.error('An error occurred while creating the leave type:', error);
        }
    };

    return (
        <React.Fragment>
            <button className="btn" onClick={() => setVisible(true)}>
                <FaPlus className="text-4xl" />
            </button>
            <Modal
                show={creating}
                popup={true}
                dismissible={false}
                size="md"
            >
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Creating...
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Spinner
                                color="success"
                                aria-label="Success spinner example"
                            />
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
                    Create New Leave Type
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
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="minHours"
                                    value="Minimum Hours"
                                />
                            </div>
                            <TextInput
                                id="minHours"
                                type="number"
                                required={true}
                                value={minHours}
                                onChange={e => setMinHours(parseInt(e.target.value))}
                                disabled={creating}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="noOfSplits"
                                    value="Number of Splits"
                                />
                            </div>
                            <TextInput
                                id="noOfSplits"
                                type="number"
                                required={true}
                                value={noOfSplits}
                                onChange={e => setNoOfSplits(parseInt(e.target.value))}
                                disabled={creating}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="considerTimeWhenCalculatingLeave"
                                checked={considerTimeWhenCalculatingLeave}
                                onChange={e => setConsiderTimeWhenCalculatingLeave(e.target.checked)}
                            />
                            <Label htmlFor="considerTimeWhenCalculatingLeave">
                                Consider Time When Calculating Leave
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="countLeaveIncludingHolidays"
                                checked={countLeaveIncludingHolidays}
                                onChange={e => setCountLeaveIncludingHolidays(e.target.checked)}
                            />
                            <Label htmlFor="countLeaveIncludingHolidays">
                                Count Leave Including Holidays
                            </Label>
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={() => createItem()}>
                                Create
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default CreateLeaveType;
