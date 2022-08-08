import { useState } from 'react';
import { Button } from '@heathmont/moon-core-tw';
import DialogBottomSheet from '@heathmont/moon-core-tw/lib/dialog/BottomSheet';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative h-[830px] w-[410px] overflow-hidden rounded-lg border-2 border-popo flex flex-col items-center"
    >
      <div className="relative z-10 m-6">
        <Button variant="primary" width={20} onClick={() => setIsOpen(true)}>
          <p className="w-[280px]">Tap</p>
        </Button>
      </div>
      <div className={`absolute top-0 left-0 w-full h-full ${isOpen ? 'z-20' : ''}`}>
        <DialogBottomSheet
          isOpen={isOpen}
          handleClick={(newValue: boolean) => setIsOpen(newValue)}
          content={
            <p className="text-piccolo font-bold py-6 px-4 bg-[#4e46b41f] rounded-xl">
              Content item placeholder. To be replaced with component
            </p>
          }
        />
      </div>
    </div>
  );
};

export default Example;
