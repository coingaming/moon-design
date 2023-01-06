import { Chip } from '@heathmont/moon-core-tw';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip size="sm" iconLeft={<MediaMusic className="text-moon-24" />}>
        Left Icon
      </Chip>
      <Chip size="sm" iconRight={<SoftwareDownload className="text-moon-24" />}>
        Right Icon
      </Chip>
      <Chip
        size="sm"
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        size="sm"
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
      />
      <Chip
        size="sm"
        iconOnly={<SoftwareDownload className="text-moon-24" />}
      />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Chip iconLeft={<MediaMusic className="text-moon-24" />}>Left Icon</Chip>
      <Chip iconRight={<SoftwareDownload className="text-moon-24" />}>
        Right Icon
      </Chip>
      <Chip
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload className="text-moon-24" />}
        iconLeft={<MediaMusic className="text-moon-24" />}
      />
      <Chip iconOnly={<SoftwareDownload className="text-moon-24" />} />
    </div>
  </>
);

export default Example;
