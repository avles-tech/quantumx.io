import React, { useState, useRef, useEffect } from 'react'
import { Alert, Button, Checkbox, Label, Modal, TextInput, } from 'flowbite-react'
import { FaPlus } from 'react-icons/fa';


const CreateDepartment = (props : any) => {

    const [visible, setVisible] = useState(false);

    const [details, setDetails] = useState('');
    const [code, setCode] = useState('');
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
                 body: JSON.stringify({ details: details, code: code, active: active }),
               });


         
        } catch (error) {
            console.error('An error occurred while creating the department:', error);
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
                    Create New Department
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
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="code"
                                    value="Code"
                                />
                            </div>
                            <TextInput
                                ref={inputRef}
                                id="code"
                                required={true}
                                value={code}
                                onChange={e => setCode(e.target.value)}
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

export default CreateDepartment;
