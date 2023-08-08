import React, { useState } from 'react';
import { BottomSheet, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeBottomSheet = () => {
    setIsOpen(false);
  };
  const openBottomSheet = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button variant="secondary" onClick={openBottomSheet}>
        Default BottomSheet
      </Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet}>
        <BottomSheet.Panel>
          <div className="flex grow items-center justify-center bg-jiren text-piccolo">
            BottomSheet content
          </div>
        </BottomSheet.Panel>
        <BottomSheet.Backdrop />
      </BottomSheet>
    </>
  );
};

export default Example;
