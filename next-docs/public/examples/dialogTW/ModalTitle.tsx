import {useState} from "react";
import { Button} from "@heathmont/moon-core-tw";
import {ControlsChevronLeft, ControlsClose} from "@heathmont/moon-icons-tw";
import Dialog from "@heathmont/moon-core-tw/lib/dialog/Modal";
import DialogHeader from "@heathmont/moon-core-tw/lib/dialog/Header";

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
      <Dialog
        isOpen={isOpen}
        handleClick={(newValue:boolean) => setIsOpen(newValue)}
        header={(<DialogHeader
          title='Modal header'
          isDivider={true}
          leftIcons={[
            <ControlsChevronLeft fontSize='2rem' />
          ]}
          rightIcons={[
            <ControlsClose
              fontSize='2rem'
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            />
          ]}
        />)}
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
