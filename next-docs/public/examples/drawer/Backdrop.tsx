import React, { useState } from 'react';
import { Button, Drawer } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  return (
    <>
      <Button variant="secondary" onClick={handleClick}>
        Show Drawer with Backdrop
      </Button>
      {isOpen && (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawer.Backdrop />
          <Drawer.Panel>Drawer with Backdrop</Drawer.Panel>
        </Drawer>
      )}
    </>
  );
};

export default Example;
