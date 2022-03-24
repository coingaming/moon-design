import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import Active from '../../public/examples/chip/Active';
import Icons from '../../public/examples/chip/Icons';
import Sizes from '../../public/examples/chip/Sizes';
import Stroke from '../../public/examples/chip/Stroke';
import WithStroke from '../../public/examples/chip/WithStroke';
import useExamples from '../../utils/useExamples';

export default function PageChip() {
  const examples = useExamples('chip');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Chip</h1>
        <p className="text-lg mt-4">
          Chips are compact little units that represent actions, filters or
          choices. When shown, they allow users to prompt actions, filter
          games/content and choose options.
        </p>
        <p className="text-lg mt-4">We use three types of chips in the Moon:</p>
        <div className="text-lg mt-2">
          <h4 className="text-lg font-semibold mt-2">Action chip</h4>
          <p>Action chips prompt actions related to the game/content.</p>
          <h4 className="text-lg font-semibold mt-2">Filter chip</h4>
          <p>Filter chips let users sieve through large categories.</p>
          <h4 className="text-lg font-semibold mt-2">Selection chip</h4>
          <p>
            Selection chips allow users to select options that matter to them.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          isGrayBg
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Active State"
          preview={<Active />}
          isGrayBg
          code={examples ? examples.Active : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="IsStroke"
          preview={<Stroke />}
          isGrayBg
          code={examples ? examples.Stroke : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Icons"
          preview={<Icons />}
          isGrayBg
          code={examples ? examples.Icons : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Icons with isStroke"
          preview={<WithStroke />}
          isGrayBg
          code={examples ? examples.WithStroke : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Chip component</h2>
        <Table
          data={[
            {
              name: 'size',
              type: 'small | medium',
              required: false,
              default: 'medium',
              description: 'Small/medium size for chip',
            },
            {
              name: 'iconLeft',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Left icon element',
            },
            {
              name: 'iconRight',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Rigth icon element',
            },
            {
              name: 'iconOnly',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Icon only element',
            },
            {
              name: 'isActive',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Active state',
            },
            {
              name: 'isStroke',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Show stroke on hover/active',
            },
          ]}
        />
      </section>
    </>
  );
}
