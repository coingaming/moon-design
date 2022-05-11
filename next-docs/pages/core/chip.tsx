import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';
import { Chip } from '@moon/core';

const Example = () => (
  <div className="theme-moon-dark">
    <section className="mt-8 text-3xl font-bold">Sizes</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Chip size="small">Small</Chip>
        <Chip>Medium is Default</Chip>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Active</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <Chip isActive size="small">
        Active
      </Chip>
      <Chip isActive isStroke>
        Active
      </Chip>
    </div>

    <section className="mt-8 text-3xl font-bold">Icons</section>
    <div className="flex flex-col gap-10 items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Chip size="small" iconLeft={<MediaMusic fontSize="1.5rem" />}>
          Left Icon
        </Chip>
        <Chip size="small" iconRight={<SoftwareDownload fontSize="1.5rem" />}>
          Right Icon
        </Chip>
        <Chip
          size="small"
          iconRight={<SoftwareDownload fontSize="1.5rem" />}
          iconLeft={<MediaMusic fontSize="1.5rem" />}
        >
          Left/Right Icons
        </Chip>
        <Chip
          size="small"
          iconRight={<SoftwareDownload fontSize="1.5rem" />}
          iconLeft={<MediaMusic fontSize="1.5rem" />}
        />
        <Chip size="small" iconOnly={<SoftwareDownload fontSize="1.5rem" />} />
      </div>
      <div className="flex justify-around items-center w-full">
        <Chip iconLeft={<MediaMusic fontSize="1.5rem" />}>Left Icon</Chip>
        <Chip iconRight={<SoftwareDownload fontSize="1.5rem" />}>
          Right Icon
        </Chip>
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

    <section className="mt-8 text-3xl font-bold">IsStroke</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Chip isStroke size="small">
          Stroke on hover
        </Chip>
        <Chip isStroke>Stroke on hover</Chip>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Icons with isStroke</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex flex-col w-full gap-10">
        <div className="flex justify-around items-center w-full">
          <Chip
            iconLeft={<MediaMusic fontSize="1.5rem" />}
            isStroke
            size="small"
          >
            Left Icon
          </Chip>
          <Chip
            iconRight={<SoftwareDownload fontSize="1.5rem" />}
            isStroke
            size="small"
          >
            Right Icon
          </Chip>
          <Chip
            iconRight={<SoftwareDownload fontSize="1.5rem" />}
            iconLeft={<MediaMusic fontSize="1.5rem" />}
            isStroke
            size="small"
          >
            Left/Right Icons
          </Chip>
          <Chip
            iconRight={<SoftwareDownload fontSize="1.5rem" />}
            iconLeft={<MediaMusic fontSize="1.5rem" />}
            isStroke
            size="small"
          />
          <Chip
            iconOnly={<SoftwareDownload fontSize="1.5rem" />}
            isStroke
            size="small"
          />
        </div>
        <div className="flex justify-around items-center w-full">
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
      </div>
    </div>
  </div>
);

export default Example;
