import {useState} from "react";
import {Button} from "@heathmont/moon-core-tw";
import {ControlsChevronLeft, ControlsClose} from "@heathmont/moon-icons-tw";
import DialogPopover from "@heathmont/moon-core-tw/lib/dialog/Popover";
import DialogHeader from "@heathmont/moon-core-tw/lib/dialog/Header";
import DialogFooter from "@heathmont/moon-core-tw/lib/dialog/Footer";

const Example = () => {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  return (
    <div className='flex flex-col gap-2'>
      <div className="flex items-center justify-center relative">
        <div className="m-5">
          <Button
            variant="primary"
            width={20}
            onClick={() => setIsOpenOne(!isOpenOne)}
          >
            <p className="w-[280px]">Right</p>
          </Button>
        </div>
        <DialogPopover
          isOpen={isOpenOne}
          handleClick={(newValue:boolean) => setIsOpenOne(newValue)}
          width='25vw'
          placement='right'
          header={(<DialogHeader
            title='Modal header'
            isDivider={true}
            leftIcons={[
              <ControlsChevronLeft fontSize='2rem' />
            ]}
            rightIcons={[
              <ControlsClose
                fontSize='2rem'
                onClick={() => setIsOpenOne(false)}
                className="cursor-pointer"
              />
            ]}
          />)}
          content={
            <p className="text-piccolo font-bold py-6 px-4 bg-[#4e46b41f] rounded-xl">
              Content item placeholder. To be replaced with component
            </p>
          }
          footer={(<DialogFooter
            isDivider={true}
            leftButtons={[
              <Button variant='secondary'>Label 2</Button>,
            ]}
            rightButtons={[
              <Button>Confirm</Button>
            ]}
          />)}
        />
      </div>
      <div className="flex items-center justify-center relative">
        <div className="m-5">
          <Button
            variant="primary"
            width={20}
            onClick={() => setIsOpenTwo(!isOpenTwo)}
          >
            <p className="w-[280px]">Bottom</p>
          </Button>
        </div>
        <DialogPopover
          isOpen={isOpenTwo}
          handleClick={(newValue:boolean) => setIsOpenTwo(newValue)}
          width='25vw'
          placement='bottom'
          header={(<DialogHeader
            title='Modal header'
            isDivider={true}
            leftIcons={[
              <ControlsChevronLeft fontSize='2rem' />
            ]}
            rightIcons={[
              <ControlsClose
                fontSize='2rem'
                onClick={() => setIsOpenTwo(false)}
                className="cursor-pointer"
              />
            ]}
          />)}
          content={
            <p className="text-piccolo font-bold py-6 px-4 bg-[#4e46b41f] rounded-xl">
              Content item placeholder. To be replaced with component
            </p>
          }
          footer={(<DialogFooter
            isDivider={true}
            leftButtons={[
              <Button variant='secondary'>Label 2</Button>,
            ]}
            rightButtons={[
              <Button>Confirm</Button>
            ]}
          />)}
        />
      </div>
      <div className="flex items-center justify-center relative">
        <div className="m-5">
          <Button
            variant="primary"
            width={20}
            onClick={() => setIsOpenThree(!isOpenThree)}
          >
            <p className="w-[280px]">Left</p>
          </Button>
        </div>
        <DialogPopover
          isOpen={isOpenThree}
          handleClick={(newValue:boolean) => setIsOpenThree(newValue)}
          width='25vw'
          placement='left'
          header={(<DialogHeader
            title='Modal header'
            isDivider={true}
            leftIcons={[
              <ControlsChevronLeft fontSize='2rem' />
            ]}
            rightIcons={[
              <ControlsClose
                fontSize='2rem'
                onClick={() => setIsOpenThree(false)}
                className="cursor-pointer"
              />
            ]}
          />)}
          content={
            <p className="text-piccolo font-bold py-6 px-4 bg-[#4e46b41f] rounded-xl">
              Content item placeholder. To be replaced with component
            </p>
          }
          footer={(<DialogFooter
            isDivider={true}
            leftButtons={[
              <Button variant='secondary'>Label 2</Button>,
            ]}
            rightButtons={[
              <Button>Confirm</Button>
            ]}
          />)}
        />
      </div>
    </div>
  );
}

export default Example;
