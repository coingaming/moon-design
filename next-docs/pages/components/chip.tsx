import React from 'react';

import { Chip } from '@heathmont/moon-components';
import { MediaMusic, SoftwareDownload } from '@heathmont/moon-icons';

import Preview from '../../components/codePreview/Preview';

export default function PageChip() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Chip</h1>
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
          code={`import { Chip } from '@heathmont/moon-core';
  
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
          code={`import { Chip } from '@heathmont/moon-core';
  
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
              <Chip isActive={false}>Inactive</Chip>
                           
            </div>
          }
          code={`import { Chip } from '@heathmont/moon-core';
  
<Chip isActive={true}>Active</Chip>
<Chip isActive={false}>Inactive</Chip>        
  `}
        />
      </section>

      {/* Icons */}
      <section className="mt-8">
        <Preview
          title="Icons"
          preview={
            <div className="flex justify-around items-center w-full">
              <Chip iconLeft={(<MediaMusic />)}>Left Icon</Chip>
              <Chip iconRight={(<SoftwareDownload />)}>Right Icon</Chip>                 
            </div>
          }
          code={`import { Chip } from '@heathmont/moon-core';

<Chip iconLeft={(<MediaMusic />)}>Left Icon</Chip>
<Chip iconRight={(<OtherSun />)}>Right Icon</Chip>             
  `}
        />
      </section>
    </>
  );
}
