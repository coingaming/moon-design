import { Chip } from '@heathmont/moon-core';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Chip size="small" iconLeft={<MediaMusic fontSize={rem(24)} />}>
      Left Icon
    </Chip>
    <Chip size="small" iconRight={<SoftwareDownload fontSize={rem(24)} />}>
      Right Icon
    </Chip>
    <Chip
      size="small"
      iconRight={<SoftwareDownload fontSize={rem(24)} />}
      iconLeft={<MediaMusic fontSize={rem(24)} />}
    >
      Left/Right Icons
    </Chip>
    <Chip
      size="small"
      iconRight={<SoftwareDownload fontSize={rem(24)} />}
      iconLeft={<MediaMusic fontSize={rem(24)} />}
    />
    <Chip size="small" iconRight={<SoftwareDownload fontSize={rem(24)} />} />
  </div>
);

export default Example;
