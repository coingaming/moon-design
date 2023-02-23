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
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Drawer.Panel>Default Drawer</Drawer.Panel>
      </Drawer>
    </>
  );
};

export default Example;
