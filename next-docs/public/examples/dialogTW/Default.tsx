import { Button } from "@heathmont/moon-core-tw";
import { Dialog } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";
import { useState } from "react";

const Example = () =>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>
          Tap
        </Button>
      </div>
      <Dialog
        isOpen={isOpen}
        header="Title of sheet"
        content={
          <>
            <div>
              <OtherFrame/>
              <p>Content item placeholder. To be replaced with component</p>
            </div>
          </>
        }
      ></Dialog>
    </div>
  );
} 

export default Example;
