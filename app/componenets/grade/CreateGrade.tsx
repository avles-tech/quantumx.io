'use client';
import React from 'react'
import { Button, Checkbox, Label, Modal, Spinner, TextInput, } from 'flowbite-react'
import { useState, useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const CreateGrade = (props: any) => {


    const [visible, setVisible] = useState(false);

    const [details, setDetails] = useState('');
    const [ignoreLateArrival, setIgnoreLateArrival] = useState(false);
    const [ignoreEarlyDeparture, setIgnoreEarlyDeparture] = useState(false);
    const [active, setActive] = useState(false);
    const [creating, setCreating] = useState(false);
    const [created, setCreated] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [details]);

    async function createItem() {
        setVisible(false);
        setCreating(true);
        try {
            await fetch('/api/mongodb/insertOne/grades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ details: details, ignoreLateArrival: ignoreLateArrival, ignoreEarlyDeparture: ignoreEarlyDeparture, active: active }),
              });

              setCreating(false);
              setCreated(true);
            props.alertItemCreatedInfo();
            props.setReload(true);


        } catch (error) {
            console.error('An error occurred while deleting the grade:', error);
        } finally {
            // insert cleanup code here
        }
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
                            creating...
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Spinner
                                color="primary"
                                aria-label="Failure spinner example"
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
                    Create a New Grade
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" id="edit">
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
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="ignoreLateArrival"
                                checked={ignoreLateArrival}
                                onChange={e => setIgnoreLateArrival(e.target.checked)}
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

export default CreateGrade