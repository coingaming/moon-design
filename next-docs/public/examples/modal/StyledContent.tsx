import React, { useState } from 'react';
import { Modal, Button } from '@heathmont/moon-core-tw';
import { ControlsClose } from '@heathmont/moon-icons-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}>Open dialog</Button>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel className="lg:max-w-md bg-roshi text-goten rounded-none">
          <span
            className="absolute top-5 right-5 cursor-pointer"
            onClick={closeModal}
          >
            <ControlsClose className="text-[1.5rem]" />
          </span>
          <div className=" p-4 pt-11">
            <div className="mt-2">
              <h3 className="text-moon-24 text-goten font-medium text-center">
                Your payment has been successfully submitted.
              </h3>
            </div>
          </div>
          <div className="p-4 flex items-center justify-center">
            <Button variant="secondary" onClick={closeModal}>
              Got it, thanks!
            </Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
