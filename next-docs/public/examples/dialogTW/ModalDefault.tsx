import {DialogModal, Button} from "@heathmont/moon-core-tw";
import {useState} from "react";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <div className="m-5">
        <Button
          variant="primary"
          width={20}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="w-[280px]">Open</p>
        </Button>
      </div>
      <DialogModal
        isOpen={isOpen}
        handleClick={(newValue:boolean) => setIsOpen(newValue)}
        content={
          <p className="text-piccolo font-bold py-6 px-4 bg-[#4e46b41f] rounded-xl">
            Content item placeholder. To be replaced with component
          </p>
        }
      />
    </div>
  );
}

export default Example;
