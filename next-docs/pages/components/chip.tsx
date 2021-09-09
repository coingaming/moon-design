import React from 'react';

import { Chip } from '@heathmont/moon-components';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

export default function PageChip() {
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
          preview={
            <div className="flex justify-around items-center w-full">
              <Chip>Lion</Chip>
              <Chip>Tiger</Chip>
              <Chip>Jaguar</Chip>
            </div>
          }
          code={`import { Chip } from '@heathmont/moon-components';
  
<Chip>Lion</Chip>
<Chip>Tiger</Chip>
<Chip>Jaguar</Chip>
  `}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={
            <div className="flex justify-around items-center w-full">
              <Chip size="small">Small</Chip>
              <Chip size="medium">Medium</Chip>
              <Chip>Default</Chip>
            </div>
          }
          code={`import { Chip } from '@heathmont/moon-components';
  
<Chip size="small">Small</Chip>
<Chip size="medium">Medium</Chip>
<Chip>Default</Chip>     
  `}
        />
      </section>

      {/* States */}
      <section className="mt-8">
        <Preview
          title="States"
          preview={
            <div className="flex justify-around items-center w-full">
              <Chip isActive={true}>Active</Chip>
              <Chip>Inactive</Chip>
            </div>
          }
          code={`import { Chip } from '@heathmont/moon-components';
  
<Chip isActive={true}>Active</Chip>
<Chip>Inactive</Chip>        
  `}
        />
      </section>

      {/* Icons */}
      <section className="mt-8">
        <Preview
          title="Icons"
          preview={
            <div className="flex justify-around items-center w-full">
              <Chip iconLeft={<MediaMusic />}>Left Icon</Chip>
              <Chip iconRight={<SoftwareDownload />}>Right Icon</Chip>
              <Chip iconRight={<SoftwareDownload />} iconLeft={<MediaMusic />}>
                Left/Right Icons
              </Chip>
            </div>
          }
          code={`import { Chip } from '@heathmont/moon-components';

<Chip iconLeft={(<MediaMusic />)}>Left Icon</Chip>
<Chip iconRight={(<OtherSun />)}>Right Icon</Chip>
<Chip iconRight={<SoftwareDownload />} iconLeft={<MediaMusic />}>Left/Right Icons</Chip>          
  `}
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
