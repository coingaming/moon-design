import { Chip } from '@heathmont/moon-core-tw';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex flex-col gap-10 items-center w-full bg-slate-200 p-4 my-4 rounded">
    <div className="flex justify-around items-center w-full">
      <Chip size="sm" iconLeft={<MediaMusic fontSize="1.5rem" />}>
        Left Icon
      </Chip>
      <Chip size="sm" iconRight={<SoftwareDownload fontSize="1.5rem" />}>
        Right Icon
      </Chip>
      <Chip
        size="sm"
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        size="sm"
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
      />
      <Chip size="sm" iconOnly={<SoftwareDownload fontSize="1.5rem" />} />
    </div>
    <div className="flex justify-around items-center w-full">
      <Chip iconLeft={<MediaMusic fontSize="1.5rem" />}>Left Icon</Chip>
      <Chip iconRight={<SoftwareDownload fontSize="1.5rem" />}>Right Icon</Chip>
      <Chip
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        iconRight={<SoftwareDownload fontSize="1.5rem" />}
        iconLeft={<MediaMusic fontSize="1.5rem" />}
      />
      <Chip iconOnly={<SoftwareDownload fontSize="1.5rem" />} />
    </div>
  </div>
);

export default Example;
