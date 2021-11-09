import React from 'react';

import { Chip } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

import Default from '../../public/examples/chip/Default';
import Sizes from '../../public/examples/chip/Sizes';
import States from '../../public/examples/chip/States';
import Icons from '../../public/examples/chip/Icons';

import useExamples from '../../utils/useExamples';

export default function PageChip() {
  const examples = useExamples('Chip');

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

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      {/* States */}
      <section className="mt-8">
        <Preview
          title="States"
          preview={<States />}
          code={examples ? examples.States : 'Loading'}
        />
      </section>

      {/* Icons */}
      <section className="mt-8">
        <Preview
          title="Icons"
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
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
              description: 'Rigth text element',
            },
            {
              name: 'isActive',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Active state',
            },
          ]}
        />
      </section>
    </>
  );
}
