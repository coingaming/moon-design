import { Button } from '@heathmont/moon-core-tw';
import { Dialog } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';
import { useState } from 'react';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative h-[500px] flex flex-col items-center">
      <div className="mb-5 ">
        <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>
          <p className="w-[280px] ">Tap</p>
        </Button>
      </div>
      <Dialog
        isOpen={isOpen}
        handleClick={(newValue: boolean) => setIsOpen(newValue)}
        header="Title of sheet"
        content={
          <>
            <div className="m-6">
              <OtherFrame width={19} height={19} />
              <p className="top-11">
                Content item placeholder. To be replaced with component
              </p>
            </div>
          </>
        }
        footer={
          <div className="w-full h-full flex flex-col ">
            <div className="mx-6 mb-6 ">
              <Button className="w-full bg-piccolo rounded-lg ">
                <p className="my-3 text-white text-center">Label</p>
              </Button>
            </div>
            <div className="mx-6 mb-6">
              <Button className="w-full">
                <p className="w-full">Label</p>
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Example;
