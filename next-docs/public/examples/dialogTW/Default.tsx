import { Button } from "@heathmont/moon-core-tw";
import { Dialog } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";
import { useState } from "react";

const Example = () =>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full relative h-[300px] flex flex-col items-center"
    >
      <div className="mb-5 ">
        <Button variant="primary" width={20} onClick={() => setIsOpen(!isOpen)}>
          <p className="w-[280px] ">Tap</p>
        </Button>
      </div>
      <Dialog
        isOpen={isOpen}
        handleClick={(newValue:boolean) => setIsOpen(newValue)}
        header="Title of sheet"
        content={
          <>
            <div className="m-6">
              <OtherFrame width={19} height={19} />
              <p className="top-11 sm:w-[248px]">
                Content item placeholder. To be replaced with component
              </p>
            </div>
          </>
        }
      ></Dialog>
    </div>
  );
} 

export default Example;
