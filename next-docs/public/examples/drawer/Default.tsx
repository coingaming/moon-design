import React, { useState } from 'react';
import { Button, Drawer } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  return (
    <>
      <Button variant="secondary" onClick={handleClick}>
        Show default Drawer
      </Button>
      {isOpen && (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawer.Panel>Default Drawer</Drawer.Panel>
        </Drawer>
      )}
    </>
  );
};

export default Example;
