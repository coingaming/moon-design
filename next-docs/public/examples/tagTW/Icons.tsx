import { Tag } from '@heathmont/moon-core-tw';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Tag size="2xs" iconLeft={<GenericInfo className="text-moon-12" />}>
        Twoxsmall
      </Tag>
      <Tag size="2xs" iconRight={<ControlsClose className="text-moon-12" />}>
        Twoxsmall
      </Tag>
      <Tag
        size="2xs"
        iconLeft={<GenericInfo className="text-moon-12" />}
        iconRight={<ControlsClose className="text-moon-12" />}
      >
        Twoxsmall
      </Tag>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Tag iconLeft={<GenericInfo className="text-moon-16" />}>Xsmall</Tag>
      <Tag iconRight={<ControlsClose className="text-moon-16" />}>Xsmall</Tag>
      <Tag
        iconLeft={<GenericInfo className="text-moon-16" />}
        iconRight={<ControlsClose />}
      >
        Xsmall
      </Tag>
    </div>
  </>
);

export default Example;
