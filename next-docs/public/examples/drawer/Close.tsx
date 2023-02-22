import React, { useState } from 'react';
import { Button, Drawer, IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall } from '@heathmont/moon-icons-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="secondary" onClick={handleClick}>
        Show Drawer with Close button
      </Button>
      {isOpen && (
        <Drawer open={isOpen} setOpen={setIsOpen}>
          <Drawer.Panel>
            <div className="flex justify-between items-center p-3 border-b">
              <p>Header</p>
              <IconButton variant="ghost" onClick={handleClose}>
                <ControlsCloseSmall />
              </IconButton>
            </div>
            <div className="p-3">Drawer content</div>
          </Drawer.Panel>
        </Drawer>
      )}
    </>
  );
};

export default Example;
