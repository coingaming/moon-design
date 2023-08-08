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
        Customized BottomSheet
      </Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet}>
        <BottomSheet.Panel className="bg-raditz p-4">
          <BottomSheet.Draghandle className="after:bg-piccolo">
            <BottomSheet.Title className="pt-2 text-goten">
              BottomSheet Title
            </BottomSheet.Title>
          </BottomSheet.Draghandle>
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
