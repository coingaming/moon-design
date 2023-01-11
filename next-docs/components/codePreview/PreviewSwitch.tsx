import { IconButton, Tabs } from '@heathmont/moon-core-tw';
import { FilesCopy, ControlsEye, SoftwareCode } from '@heathmont/moon-icons-tw';

type Props = {
  isPreviewActive: boolean;
  setPreviewActive: () => void;
  setCodeActive: () => void;
  copyCode: () => void;
};

const PreviewSwitch = ({
  isPreviewActive,
  setPreviewActive,
  setCodeActive,
  copyCode,
}: Props) => {
  const selectedIndex = isPreviewActive ? 0 : 1;
  const handleClick = isPreviewActive ? setCodeActive : setPreviewActive;
  return (
    <div className="flex flex-row gap-2">
      {!isPreviewActive && (
        <IconButton
          icon={<FilesCopy className="text-moon-24" />}
          variant="secondary"
          onClick={copyCode}
          size="lg"
        />
      )}
      <Tabs selectedIndex={selectedIndex} onChange={handleClick}>
        <Tabs.Segment>
          <Tabs.Pill>
            <ControlsEye className="text-moon-24" />
            Preview
          </Tabs.Pill>
          <Tabs.Pill>
            <SoftwareCode className="text-moon-24" />
            Code
          </Tabs.Pill>
        </Tabs.Segment>
      </Tabs>
    </div>
  );
};

export default PreviewSwitch;
