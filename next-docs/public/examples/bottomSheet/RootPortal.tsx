import React, { useState } from 'react';
import { BottomSheet, Button } from '@heathmont/moon-core-tw';

const addElement = () => {
  const portalRootDiv = document.createElement('div');
  portalRootDiv.id = 'headlessui-portal-root';
  const childrenDiv = document.createElement('div');
  portalRootDiv.appendChild(childrenDiv);
  const currentDiv = document.getElementById('root-element');
  currentDiv?.appendChild(portalRootDiv);
};

const deleteElement = () => {
  const portalRootDiv = document.getElementById('headlessui-portal-root');
  portalRootDiv?.remove();
};

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeBottomSheet = () => {
    setIsOpen(false);
    setTimeout(() => {
      deleteElement();
    }, 300);
  };
  const openBottomSheet = () => {
    addElement();
    setIsOpen(true);
  };
  return (
    <div id="root-element">
      <Button variant="outline" onClick={openBottomSheet}>
        BottomSheet
      </Button>
      <BottomSheet open={isOpen} rootId="__next">
        <BottomSheet.Panel>
          <div className="flex grow items-center justify-center bg-jiren text-piccolo">
            BottomSheet content
          </div>
        </BottomSheet.Panel>
        <BottomSheet.Backdrop onClose={closeBottomSheet} />
      </BottomSheet>
    </div>
  );
};

export default Example;
