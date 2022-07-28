import { DialogHeader } from "@heathmont/moon-core-tw";
import { ControlsClose, DevicesPhone, FilesDraft, ControlsChevronLeft, ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Example = () => {
  return (
    <div className="w-1/2 bg-beerus rounded-lg relative flex flex-col items-center">
      <DialogHeader
        title='Header with right icons'
        rightIcons={[
          <DevicesPhone fontSize='2rem' />,
          <FilesDraft fontSize='2rem' />,
          <ControlsClose fontSize='2rem' />
        ]}
      />
      <div className="w-full mt-4">
        <DialogHeader
          title='Header with left icons'
          leftIcons={[
            <ControlsChevronLeft fontSize='2rem' />,
            <ControlsChevronRight fontSize='2rem' />,
          ]}
        />
      </div>
      <div className="w-full mt-4">
        <DialogHeader
          title='Header with left and right icons'
          leftIcons={[
            <ControlsChevronLeft fontSize='2rem' />,
            <ControlsChevronRight fontSize='2rem' />,
          ]}
          rightIcons={[
            <DevicesPhone fontSize='2rem' />,
            <FilesDraft fontSize='2rem' />,
            <ControlsClose fontSize='2rem' />
          ]}
        />
      </div>
      <div className="w-full py-4">
        <DialogHeader
          rightIcons={[
            <ControlsClose fontSize='2rem' />
          ]}
        />
      </div>
    </div>
  );
}

export default Example;
