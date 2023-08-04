import React, { useState } from 'react';
import { BottomSheet, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const closeSmallBottomSheet = () => {
    setIsSmallOpen(false);
  };
  const openSmallBottomSheet = () => {
    setIsSmallOpen(true);
  };
  const [isMediumOpen, setIsMediumOpen] = useState(false);
  const closeMediumBottomSheet = () => {
    setIsMediumOpen(false);
  };
  const openMediumBottomSheet = () => {
    setIsMediumOpen(true);
  };
  const [isFullOpen, setIsFullOpen] = useState(false);
  const closeFullBottomSheet = () => {
    setIsFullOpen(false);
  };
  const openFullBottomSheet = () => {
    setIsFullOpen(true);
  };
  return (
    <>
      <div>
        <Button variant="secondary" onClick={openSmallBottomSheet}>
          Default small BottomSheet
        </Button>
        <BottomSheet open={isSmallOpen} onClose={closeSmallBottomSheet}>
          <BottomSheet.Panel className="flex flex-col gap-2 items-center">
            <div className="flex grow w-full items-center justify-center bg-jiren text-piccolo">
              BottomSheet content
            </div>
            <Button onClick={closeSmallBottomSheet}>Optional close</Button>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
      <div>
        <Button variant="secondary" onClick={openMediumBottomSheet}>
          Medium BottomSheet
        </Button>
        <BottomSheet open={isMediumOpen} onClose={closeMediumBottomSheet}>
          <BottomSheet.Panel className="flex flex-col gap-2 items-center h-2/3">
            <div className="flex grow w-full items-center justify-center bg-jiren text-piccolo">
              BottomSheet content
            </div>
            <Button onClick={closeMediumBottomSheet}>Optional close</Button>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
      <div>
        <Button variant="secondary" onClick={openFullBottomSheet}>
          Fullscreen BottomSheet
        </Button>
        <BottomSheet open={isFullOpen} onClose={closeFullBottomSheet}>
          <BottomSheet.Panel className="flex flex-col gap-2 items-center h-full">
            <div className="flex grow w-full items-center justify-center bg-jiren text-piccolo">
              BottomSheet content
            </div>
            <Button onClick={closeFullBottomSheet}>Optional close</Button>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
    </>
  );
};

export default Example;
