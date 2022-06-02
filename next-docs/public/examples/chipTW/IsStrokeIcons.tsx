import { Chip } from '@heathmont/moon-core-tw';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<MediaMusic fontSize="1.5rem" />} isStroke size="sm">
        Left Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        isStroke
        size="sm"
      >
        Right Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
        isStroke
        size="sm"
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
        isStroke
        size="sm"
      />
      <Chip
        iconOnly={<SoftwareDownload fontSize="1.5rem" />}
        isStroke
        size="sm"
      />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<MediaMusic fontSize="1.5rem" />} isStroke>
        Left Icon
      </Chip>
      <Chip iconRight={<SoftwareDownload fontSize="1.5rem" />} isStroke>
        Right Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
        isStroke
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
        isStroke
      />
      <Chip iconOnly={<SoftwareDownload fontSize="1.5rem" />} isStroke />
    </div>
  </>
);

export default Example;
