import { Chip } from '@heathmont/moon-core';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Chip iconLeft={<MediaMusic fontSize={rem(24)} />} isStroke>
      Left Icon
    </Chip>
    <Chip iconRight={<SoftwareDownload fontSize={rem(24)} />} isStroke>
      Right Icon
    </Chip>
    <Chip
      iconRight={<SoftwareDownload fontSize={rem(24)} />}
      iconLeft={<MediaMusic fontSize={rem(24)} />}
      isStroke
    >
      Left/Right Icons
    </Chip>
    <Chip
      iconRight={<SoftwareDownload fontSize={rem(24)} />}
      iconLeft={<MediaMusic fontSize={rem(24)} />}
      isStroke
    />
    <Chip iconRight={<SoftwareDownload fontSize={rem(24)} />} isStroke />
  </div>
);

export default Example;
