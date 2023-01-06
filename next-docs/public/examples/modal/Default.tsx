import React, { useState } from 'react';
import { Modal, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}>Open dialog</Button>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel>
          <div className="p-4 border-b-2 border-beerus">
            <h3 className="text-moon-18 text-bulma font-semibold">
              Payment successful
            </h3>
          </div>
          <div className="p-4">
            <p className="text-moon-sm text-trunks">
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam blandit massa at lorem
              fermentum volutpat. Aliquam varius faucibus turpis, in facilisis
              dui dictum ac. Nulla ac consequat enim. Ut lobortis ultricies
              mauris eget volutpat. Aliquam aliquam nisl in nulla sagittis, eget
              viverra est ullamcorper.
            </p>
          </div>
          <div className="p-4 border-t-2 border-beerus">
            <Button onClick={closeModal}>Got it, thanks!</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
