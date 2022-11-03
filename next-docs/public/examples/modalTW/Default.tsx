import React, { useState } from 'react';
import { Modal, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Button onClick={openModal}>Open dialog</Button>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel>
          <div className="p-4 border-b-2 border-gray">
            <Modal.Title>Payment successful</Modal.Title>
          </div>
          <div className="p-4">
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Aliquam blandit massa at
                lorem fermentum volutpat. Aliquam varius faucibus turpis, in
                facilisis dui dictum ac. Nulla ac consequat enim. Ut lobortis
                ultricies mauris eget volutpat. Aliquam aliquam nisl in nulla
                sagittis, eget viverra est ullamcorper. Morbi vel eros sed
                mauris dignissim congue et nec ligula. Duis quis tellus a est
                facilisis finibus. Duis varius libero id arcu pretium, et
                ultrices diam tincidunt.
              </p>
            </div>
          </div>
          <div className="p-4 border-t-2 border-gray">
            <Button onClick={closeModal}>Got it, thanks!</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
