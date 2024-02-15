import { Chip } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip
        iconLeft={<OtherFrame className="text-moon-24" />}
        isStroke
        size="sm"
      >
        Left Icon
      </Chip>
      <Chip
        iconRight={<OtherFrame className="text-moon-24" />}
        isStroke
        size="sm"
      >
        Right Icon
      </Chip>
      <Chip
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
        isStroke
        size="sm"
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
        isStroke
        size="sm"
        aria-label="Left and right icons"
      />
      <Chip
        iconOnly={<OtherFrame className="text-moon-24" />}
        isStroke
        size="sm"
        aria-label="Single icon"
      />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<OtherFrame className="text-moon-24" />} isStroke>
        Left Icon
      </Chip>
      <Chip iconRight={<OtherFrame className="text-moon-24" />} isStroke>
        Right Icon
      </Chip>
      <Chip
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
        isStroke
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
        isStroke
        aria-label="Left and right icons"
      />
      <Chip
        iconOnly={<OtherFrame className="text-moon-24" />}
        isStroke
        aria-label="Single icon"
      />
    </div>
  </>
);

export default Example;
