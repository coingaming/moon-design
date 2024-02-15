import { Chip } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip size="sm" iconLeft={<OtherFrame className="text-moon-24" />}>
        Left Icon
      </Chip>
      <Chip size="sm" iconRight={<OtherFrame className="text-moon-24" />}>
        Right Icon
      </Chip>
      <Chip
        size="sm"
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        size="sm"
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
        aria-label="Left and right icons"
      />
      <Chip
        size="sm"
        iconOnly={<OtherFrame className="text-moon-24" />}
        aria-label="Single icon"
      />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<OtherFrame className="text-moon-24" />}>Left Icon</Chip>
      <Chip iconRight={<OtherFrame className="text-moon-24" />}>
        Right Icon
      </Chip>
      <Chip
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
        aria-label="Left and right icons"
      />
      <Chip
        iconOnly={<OtherFrame className="text-moon-24" />}
        aria-label="Single icon"
      />
    </div>
  </>
);

export default Example;
