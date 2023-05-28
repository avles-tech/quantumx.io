'use client';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Checkbox, Label, Modal, Spinner, TextInput } from 'flowbite-react'
import { FaPlus } from 'react-icons/fa';
import { createDocument } from '@/app/utils/ApiUtils';

interface CreateItemProps {
    itemName: string;
    itemAttributes: string[];
    alertItemCreatedInfo: () => void;
    setReload: (value: boolean) => void;
}

const CreateItem = ({ itemName, itemAttributes, alertItemCreatedInfo, setReload }: CreateItemProps) => {

    const [visible, setVisible] = useState(false);
    const [creating, setCreating] = useState(false);
    const [itemState, setItemState] = useState<{[key: string]: any}>({});

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [itemState]);

    async function createItem() {
        setVisible(false);
        setCreating(true);
        try {
            await createDocument(itemName.toLowerCase(), itemState);
            setCreating(false);
            alertItemCreatedInfo();
            setReload(true);
        } catch (error) {
            console.error(`An error occurred while creating the ${itemName}:`, error);
        } finally {
            // insert cleanup code here
        }
    }

    const handleChange = (attribute: string, value: any) => {
        setItemState(prevState => ({ ...prevState, [attribute]: value }));
    }

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
                                color="primary"
                                aria-label="Creating spinner example"
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
                    Create a New {itemName}
                </Modal.Header>
                <Modal.Body>
                    <form className="flex flex-col gap-4">
                        {itemAttributes.map(attribute => (
                            <div key={attribute}>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor={attribute}
                                        value={attribute.charAt(0).toUpperCase() + attribute.slice(1)}
                                    />
                                </div>
                                <TextInput
                                    ref={inputRef}
                                    id={attribute}
                                    required={true}
                                    value={itemState[attribute] || ''}
                                    onChange={e => handleChange(attribute, e.target.value)}
                                />
                            </div>
                        ))}
                        <div className="flex justify-between">
                            <Button onClick={createItem} >
                                Create
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default CreateItem;
