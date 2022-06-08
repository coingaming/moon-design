import { Chip } from '@heathmont/moon-core-tw';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip
        iconLeft={<MediaMusic className="text-moon-24" />}
        isStroke
        size="sm"
      >
        Left Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload className="text-moon-24" />}
        isStroke
        size="sm"
      >
        Right Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
        isStroke
        size="sm"
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
        isStroke
        size="sm"
      />
      <Chip
        iconOnly={<SoftwareDownload className="text-moon-24" />}
        isStroke
        size="sm"
      />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<MediaMusic className="text-moon-24" />} isStroke>
        Left Icon
      </Chip>
      <Chip iconRight={<SoftwareDownload className="text-moon-24" />} isStroke>
        Right Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
        isStroke
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
        isStroke
      />
      <Chip iconOnly={<SoftwareDownload className="text-moon-24" />} isStroke />
    </div>
  </>
);

export default Example;
