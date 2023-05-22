import React, { useState, useRef, useEffect } from 'react'
import { Alert, Button, Checkbox, Label, Modal, TextInput, } from 'flowbite-react'
import { FaPlus } from 'react-icons/fa';


const CreateGrade = () => {

    const [visible, setVisible] = useState(false);

    const [details, setDetails] = useState('');
    const [ignoreLateArrival, setIgnoreLateArrival] = useState(false);
    const [ignoreEarlyDeparture, setIgnoreEarlyDeparture] = useState(false);
    const [active, setActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

       
            try {
                await fetch('/grade/api', {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({ details: details, ignoreLateArrival: ignoreLateArrival, ignoreEarlyDepature: ignoreEarlyDeparture, active: active }),
               });


         
        } catch (error) {
            console.error('An error occurred while creating the grade:', error);
        } finally {
            // insert cleanup code here
        }
    };

    return (
        <React.Fragment>
            <button className="btn" onClick={() => setVisible(true)}>
                <FaPlus className="text-4xl"/>
            </button>
            <Modal
                show={visible}
                dismissible={true}
                onClose={() => { setVisible(false) }}
            >
                <Modal.Header>
                    Create New Grade
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
                        <div className="flex justify-end">
                            <Button type='submit'>
                                Create
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default CreateGrade;
