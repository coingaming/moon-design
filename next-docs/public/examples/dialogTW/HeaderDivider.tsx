import DialogHeader from '@heathmont/moon-core-tw/lib/dialog/Header';
import { ControlsClose, FilesDraft, ControlsChevronLeft } from '@heathmont/moon-icons-tw';

const Example = () => {
  return (
    <div className="w-1/2 bg-goku rounded-lg relative flex flex-col items-center py-4">
      <DialogHeader
        title='Header with divider'
        isDivider={true}
        leftIcons={[
          <ControlsChevronLeft fontSize='2rem' />
        ]}
        rightIcons={[
          <FilesDraft fontSize='2rem' />,
          <ControlsClose fontSize='2rem' />
        ]}
      />
    </div>
  );
}

export default Example;
