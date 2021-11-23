import React from 'react';

import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/Table';

import Default from '../../../public/examples/table/Default';
import ExpandedRow from '../../../public/examples/table/ExpandedRow';
import DeepTable from '../../../public/examples/table/DeepTable';
import CustomContent from '../../../public/examples/table/CustomContent';
import Calendar from '../../../public/examples/table/Calendar';
import MiniMap from '../../../public/examples/table/MiniMap';

import useExamples from '../../../utils/useExamples';

export default function PageTable() {
  const examples = useExamples('table');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Table</h1>
        <p className="text-lg mt-4">Lightweight, fast and extendable table.</p>
        <p className="text-lg mt-4">
          Based on{' '}
          <a
            className="underline"
            href="https://github.com/tannerlinsley/react-table"
          >
            react-table
          </a>
          .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={
            <div className="flex justify-around items-center w-full">
              <Default />
            </div>
          }
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Expanded Rows */}
      <section className="mt-8">
        <Preview
          title="Expanded Rows "
          preview={
            <div className="flex justify-around items-center w-full">
              <ExpandedRow />
            </div>
          }
          code={examples ? examples.ExpandedRow : 'Loading'}
        />
      </section>

      {/* Expanded Rows with deep nesting */}
      <section className="mt-8">
        <Preview
          title="Expanded Rows with deep nesting"
          preview={
            <div className="flex justify-around items-center w-full">
              <DeepTable />
            </div>
          }
          code={examples ? examples.DeepTable : 'Loading'}
        />
      </section>

      {/* Expanded rows with custom content */}
      <section className="mt-8">
        <Preview
          title="Expanded rows with custom content"
          preview={
            <div className="flex justify-around items-center w-full">
              <CustomContent />
            </div>
          }
          code={examples ? examples.CustomContent : 'Loading'}
        />
      </section>

      {/* With minimap */}
      <section className="mt-8">
        <Preview
          title="With minimap"
          preview={
            <div className="flex justify-around items-center w-full">
              <MiniMap />
            </div>
          }
          code={examples ? examples.MiniMap : 'Loading'}
        />
      </section>

      {/* Calendar */}
      <section className="mt-8">
        <Preview
          title="Calendar"
          preview={
            <div className="flex justify-around items-center w-full">
              <Calendar />
            </div>
          }
          code={examples ? examples.Calendar : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <PropsTable
          data={[
            {
              name: 'width',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Width of the table',
            },
            {
              name: 'height',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Height of the table',
            },
            {
              name: 'maxWidth',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Max width of the table',
            },
            {
              name: 'maxHeight',
              type: 'string | number',
              required: false,
              default: '-',
              description: 'Max height of the table',
            },
          ]}
        />
      </section>
    </>
  );
}
