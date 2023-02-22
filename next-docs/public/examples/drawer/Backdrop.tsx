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
          <Drawer.Panel>
            <div className="flex justify-between items-center p-3 border-b">
              <p>Drawer with Backdrop</p>
            </div>
            <div className="p-3">Drawer content</div>
          </Drawer.Panel>
          <Drawer.Backdrop />
        </Drawer>
      )}
    </>
  );
};

export default Example;
