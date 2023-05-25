import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CancelProjectModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    // Perform cancel action here
    console.log('Cancel project');
    setShowModal(false);
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        Cancel Project
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to cancel without posting the project?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleCancel}>
            Cancel Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CancelProjectModal;
