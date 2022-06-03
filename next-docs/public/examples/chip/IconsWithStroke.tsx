import { Chip } from '@heathmont/moon-core';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<MediaMusic />} isStroke size="small">
        Left Icon
      </Chip>
      <Chip iconRight={<SoftwareDownload />} isStroke size="small">
        Right Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload />}
        iconLeft={<MediaMusic />}
        isStroke
        size="small"
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload />}
        iconLeft={<MediaMusic />}
        isStroke
        size="small"
      />
      <Chip iconOnly={<SoftwareDownload />} isStroke size="small" />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<MediaMusic />} isStroke>
        Left Icon
      </Chip>
      <Chip iconRight={<SoftwareDownload />} isStroke>
        Right Icon
      </Chip>
      <Chip iconRight={<SoftwareDownload />} iconLeft={<MediaMusic />} isStroke>
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload />}
        iconLeft={<MediaMusic />}
        isStroke
      />
      <Chip iconOnly={<SoftwareDownload />} isStroke />
    </div>
  </>
);

export default Example;
