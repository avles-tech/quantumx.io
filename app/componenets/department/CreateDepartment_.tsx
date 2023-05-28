'use strict';
import React, { useState, useEffect, useRef } from 'react';
import { Button, Checkbox, Label, Modal, Spinner, TextInput, } from 'flowbite-react';
import { FaPlus } from 'react-icons/fa';

const CreateDepartment = (props: any) => {
    const [visible, setVisible] = useState(false);
    const [details, setDetails] = useState('');
    const [shortCode, setShortCode] = useState('');
    const [active, setActive] = useState(false);
    const [creating, setCreating] = useState(false);
    const [created, setCreated] = useState(false);
    const detailsRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.focus();
        }
    }, [details]);

    const shortCodeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (shortCodeRef.current) {
            shortCodeRef.current.focus();
        }
    }, [shortCode]);

    async function createItem() {
        setVisible(false);
        setCreating(true);
        try {
            await fetch('/api/mongodb/insertOne/departments', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ details: details, shortCode: shortCode, active: active }),
              });

            setCreating(false);
            setCreated(true);
            props.alertItemCreatedInfo();
            props.setReload(true);

        } catch (error) {
            console.error('An error occurred while creating the department:', error);
        } finally {
            // insert cleanup code here
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            // handle form submit here
        } catch (error) {
            console.error('An error occurred while creating the department:', error);
        }
    };

    return (
        <React.Fragment>
            <button className="btn" onClick={() => setVisible(true)}>
                <FaPlus className="text-4xl"/>
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
                                color="primary"
                                aria-label="Spinner for creating"
                            />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            
            <Modal
                show={visible}
                dismissible={true}
                onClose={() => setVisible(false)}
            >
                <Modal.Header>
                    Create a New Department
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" id="create">
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
                             ref={detailsRef}
                                id="details"
                                required={true}
                                value={details}
                                onChange={e => setDetails(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="active"
                                checked={active}
                                onChange={e => setActive(e.target.checked)}
                            />
                            <Label htmlFor="active">
                                Active
                            </Label>
                        </div>
                        <div className="flex justify-between">                        
                            <Button onClick={() => {  createItem();}} >
                                Create
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default CreateDepartment;
