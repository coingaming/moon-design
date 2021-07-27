// @ts-nocheck
import React from 'react';

import { Accordion } from '@heathmont/moon-accordion';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

const Example = () => {
  return (
    <Accordion
      title="Test"
      headerContent={
        <div onClick={() => console.log('Clicked')}>Additional content</div>
      }
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </Accordion>
  );
};

export default function PageAccordion() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Accordion</h1>
        <p className="text-lg mt-4">
          Like the accordion instrument, our accordion component reveals or
          hides associated sections of content. This is done through the use of
          a vertically stacked list of headers.
        </p>
        <p className="text-lg mt-4">
          Users can decide which sections to toggle, read and close as the
          header titles will give them a high-level overview of the content
          that’s in the space.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Accordion"
          preview={<Example />}
          code={`import { Accordion } from '@heathmont/moon-accordion';

<Accordion
  title="Test"
  headerContent={
    <div onClick={() => console.log('Clicked')}>Additional content</div>
  }
>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
  </div>
</Accordion>
`}
        />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'title',
              type: 'string',
              required: true,
              default: '-',
              description: 'Title of accordion',
            },
            {
              name: 'openByDefault',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Expanded/collapsed accordion by default',
            },
            {
              name: 'withArrow',
              type: 'boolean',
              required: false,
              default: 'true',
              description: 'Show expand/collapse chevron',
            },
            {
              name: 'disableOpen',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Disable expand/collapse accordion',
            },
            {
              name: 'headerContent',
              type: 'React.ReactNode',
              required: false,
              default: '-',
              description: 'Additional content to render in accordion header',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              default: '-',
              description: 'Content to show inside of accordion',
            },
          ]}
        />
      </section>
    </>
  );
}
