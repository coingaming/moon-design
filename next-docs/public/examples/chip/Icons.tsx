import { Chip } from '@heathmont/moon-core';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip size="small" iconLeft={<MediaMusic />}>
        Left Icon
      </Chip>
      <Chip size="small" iconRight={<SoftwareDownload />}>
        Right Icon
      </Chip>
      <Chip
        size="small"
        iconRight={<SoftwareDownload />}
        iconLeft={<MediaMusic />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        size="small"
        iconRight={<SoftwareDownload />}
        iconLeft={<MediaMusic />}
      />
      <Chip size="small" iconOnly={<SoftwareDownload />} />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<MediaMusic />}>Left Icon</Chip>
      <Chip iconRight={<SoftwareDownload />}>Right Icon</Chip>
      <Chip iconRight={<SoftwareDownload />} iconLeft={<MediaMusic />}>
        Left/Right Icons
      </Chip>
      <Chip iconRight={<SoftwareDownload />} iconLeft={<MediaMusic />} />
      <Chip iconOnly={<SoftwareDownload />} />
    </div>
  </>
);

export default Example;
