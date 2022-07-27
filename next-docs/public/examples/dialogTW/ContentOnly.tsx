import { Button } from '@heathmont/moon-core-tw';
import { RadioButton } from '@heathmont/moon-core-tw';
import { Dialog } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';
import { useState } from 'react';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative h-[300px] flex flex-col items-center">
      <div className="mb-5">
        <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>
          <p className="w-[280px] ">Tap</p>
        </Button>
      </div>
      <Dialog
        isOpen={isOpen}
        handleClick={(newValue: boolean) => setIsOpen(newValue)}
        content={
          <>
            <div className="mx-4 mb-4 mt-3 flex justify-between items-center">
              <div className="flex items-center">
                <OtherFrame width={19} height={19} />
                <p className="top-11">Single line item</p>
              </div>
              <RadioButton />
            </div>
            <div className="mx-4 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <OtherFrame width={19} height={19} />
                <p className="top-11">Single line item</p>
              </div>
              <RadioButton />
            </div>
            <div className="mx-4 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <OtherFrame width={19} height={19} />
                <p className="top-11">Single line item</p>
              </div>
              <RadioButton />
            </div>
            <div className="mx-4 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <OtherFrame width={19} height={19} />
                <p className="top-11">Single line item</p>
              </div>
              <RadioButton />
            </div>
          </>
        }
      ></Dialog>
    </div>
  );
};

export default Example;
