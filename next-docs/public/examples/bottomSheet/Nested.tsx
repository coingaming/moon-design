import React, { useState } from 'react';
import { BottomSheet, Button, Chip, TextInput } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const closeFirst = () => {
    setIsFirstOpen(false);
  };
  const openFirst = () => {
    setIsFirstOpen(true);
  };
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const closeSecond = () => {
    setIsSecondOpen(false);
  };
  const openSecond = () => {
    setIsSecondOpen(true);
  };

  return (
    <>
      <>
        <Button variant="outline" onClick={openFirst}>
          First BottomSheet
        </Button>
        <BottomSheet open={isFirstOpen} onClose={closeFirst}>
          <BottomSheet.Panel className="flex flex-col gap-2 items-center h-2/3">
            <div className="flex grow w-full items-center justify-start bg-jiren text-piccolo flex-col gap-2">
              First
              <div className="w-30">
                <TextInput placeholder='enter your text here' />
              </div>
              <Chip isActive isStroke>Click me</Chip>
              <Button onClick={closeFirst}>Close first</Button>

              <Button variant="outline" onClick={openSecond} className='mb-30'>
                Second BottomSheet
              </Button>
              <BottomSheet open={isSecondOpen} onClose={closeSecond}>
                <BottomSheet.Panel className="flex flex-col gap-2 items-center h-1/3">
                  <div className="flex grow w-full items-center justify-center bg-jiren text-piccolo">
                    Second
                  </div>
                  <Button onClick={closeSecond}>Close second</Button>
                </BottomSheet.Panel>
                <BottomSheet.Backdrop />
              </BottomSheet>
            </div>

          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </>
    </>
  );
};

export default Example;
