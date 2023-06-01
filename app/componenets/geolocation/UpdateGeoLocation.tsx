
import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, Checkbox, Label, Modal, Spinner, TextInput } from 'flowbite-react';

const UpdateGeoLocation = (props: any) => {
  const [visible, setVisible] = useState(false);
  const [latitude, setLatitude] = useState(props.geoLocation?.latitude);
  const [longitude, setLongitude] = useState(props.geoLocation?.longitude);
  const [active, setActive] = useState(props.geoLocation?.active);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [updating, setUpdating] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [latitude, longitude]);

  async function deleteItem() {
    setDeleteConfirmation(false);
    setDeleting(true);

    try {
      await fetch('/api/mongodb/deleteOne/geolocations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: props.geoLocation._id }),
      });

      setDeleting(false);
      setDeleted(true);
      props.alertItemDeletedInfo();
      props.setReload();
    } catch (error) {
      console.error('An error occurred while deleting the geolocation:', error);
    } finally {
      // insert cleanup code here
    }
  }

  async function updateItem() {
    setUpdating(true);

    await fetch('/api/mongodb/updateOne/geolocations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: props.geoLocation._id,
        data: {
          latitude: latitude,
          longitude: longitude,
          active: active,
        },
      }),
    });

    setUpdating(false);
    props.alertItemUpdatedInfo();
    props.setReload();
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // handle form submission if needed
    } catch (error) {
      console.error('An error occurred while updating the geolocation:', error);
    } finally {
      // insert cleanup code here
    }
  };

  return (
    <React.Fragment>
      <a href="#" onClick={() => setVisible(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Edit
      </a>
      {/* Modal for Deleting */}
      <Modal show={deleting} popup={true} dismissible={false} size="md">
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Deleting...</h3>
            <div className="flex justify-center gap-4">
              <Spinner color="failure" aria-label="Failure spinner example" />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal for Delete Confirmation */}
      <Modal show={deleteConfirmation} popup={true} dismissible={true} size="md" onClose={() => setDeleteConfirmation(false)}>
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this item?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => deleteItem()}>
                 Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setDeleteConfirmation(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal for Edit */}
      <Modal show={visible} dismissible={true} onClose={() => setVisible(false)}>
        <Modal.Header>
          Edit GeoLocation
          {updating ? (
            <Alert color="warning">
              <span>
                <span className="font-medium">Info alert!</span> Updating...
              </span>
            </Alert>
          ) : null}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                disabled={updating}
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
                disabled={updating}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="active" checked={active} onChange={(e) => setActive(e.target.checked)} disabled={updating} />
              <Label htmlFor="active">Active</Label>
            </div>
            <div className="flex justify-between">
              <Button disabled={updating} color="failure" onClick={() => setDeleteConfirmation(true)}>
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
  );
};

export default UpdateGeoLocation;
