'use client';
import React from 'react';
import { Button, Checkbox, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { useState, useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const CreateGeoLocation = (props: any) => {
  const [visible, setVisible] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [latitude, longitude]);

  async function createItem() {
    setVisible(false);
    setCreating(true);

    try {
      await fetch('/api/mongodb/insertOne/geolocations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude: latitude, longitude: longitude }),
      });

      setCreating(false);
      setCreated(true);
      props.alertItemCreatedInfo();
      props.setReload(true);
    } catch (error) {
      console.error('An error occurred while creating the geolocation:', error);
    } finally {
      // Insert cleanup code here
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Handle submit logic
    } catch (error) {
      console.error('An error occurred while creating the geolocation:', error);
    } finally {
      // Handle cleanup logic
    }
  };

  return (
    <React.Fragment>
      <button className="btn" onClick={() => setVisible(true)}>
        <FaPlus className="text-4xl" />
      </button>
      <Modal show={creating} popup={true} dismissible={false} size="md">
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Creating...</h3>
            <div className="flex justify-center gap-4">
              <Spinner color="primary" aria-label="Failure spinner example" />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={visible} dismissible={true} onClose={() => setVisible(false)}>
        <Modal.Header>Create a New GeoLocation</Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" id="edit">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="latitude" value="Latitude" />
              </div>
              <TextInput
                ref={inputRef}
                id="latitude"
                required={true}
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="longitude" value="Longitude" />
              </div>
              <TextInput
                id="longitude"
                required={true}
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <Button onClick={createItem}>Create</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default CreateGeoLocation;
