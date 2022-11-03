import React, { useState } from 'react';
import { Modal, Button, Select } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall } from '@heathmont/moon-icons-tw';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
  {
    value: 'Option 4',
    label: 'Option 4',
  },
];

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
          <div className="border-b-[0.063rem] border-beerus pt-5 pb-4 px-6 relative">
            <h3 className=" text-moon-18 text-bulma font-semibold">
              Modal title
            </h3>
            <span
              className="absolute top-5 right-5 cursor-pointer"
              onClick={closeModal}
            >
              <ControlsCloseSmall className="text-[1.5rem]" />
            </span>
          </div>
          <div className="px-6 py-4 flex flex-col gap-2">
            <Select
              options={options}
              label="Size"
              size="xl"
              placeholder="Choose size..."
            />
            <Select
              options={options}
              label="Color"
              size="xl"
              placeholder="Choose color..."
            />
            <Select
              options={options}
              label="Material"
              size="xl"
              placeholder="Choose material..."
            />
          </div>
          <div className="flex gap-2 p-4 justify-end">
            <Button variant="secondary" onClick={closeModal}>
              Cansel
            </Button>
            <Button onClick={closeModal}>Create</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
