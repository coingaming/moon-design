import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Calendar from '../../../public/examples/table/Calendar';
import ClickableRows from '../../../public/examples/table/ClickableRows';
import CustomColors from '../../../public/examples/table/CustomColors';
import CustomContent from '../../../public/examples/table/CustomContent';
import DeepTable from '../../../public/examples/table/DeepTable';
import Default from '../../../public/examples/table/Default';
import ExpandedRow from '../../../public/examples/table/ExpandedRow';
import MiniMap from '../../../public/examples/table/MiniMap';
import SelectableCheckboxes from '../../../public/examples/table/SelectableCheckboxes';
import SelectableRows from '../../../public/examples/table/SelectableRows';
import Sorting from '../../../public/examples/table/Sorting';
import useExamples from '../../../utils/useExamples';

export default function PageTable() {
  const examples = useExamples('table');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Table</h1>
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

      {/* Clickable rows */}
      <section className="mt-8">
        <Preview
          title="Clickable rows"
          preview={
            <div className="flex justify-around items-center w-full">
              <ClickableRows />
            </div>
          }
          code={examples ? examples.ClickableRows : 'Loading'}
        />
      </section>

      {/* Selectable rows */}
      <section className="mt-8">
        <Preview
          title="Selectable rows"
          preview={
            <div className="flex justify-around items-center w-full">
              <SelectableRows />
            </div>
          }
          code={examples ? examples.SelectableRows : 'Loading'}
        />
      </section>

      {/* Selectable checkboxes */}
      <section className="mt-8">
        <Preview
          title="Selectable checkboxes"
          preview={
            <div className="flex justify-around items-center w-full">
              <SelectableCheckboxes />
            </div>
          }
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Custom colors */}
      <section className="mt-8">
        <Preview
          title="Custom colors"
          preview={
            <div className="flex justify-around items-center w-full">
              <CustomColors />
            </div>
          }
          code={examples ? examples.CustomColors : 'Loading'}
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

      {/* Sorting */}
      <section className="mt-8">
        <Preview
          title="With Sorting"
          preview={
            <div className="flex justify-around items-center w-full">
              <Sorting />
            </div>
          }
          code={examples ? examples.Sorting : 'Loading'}
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
            {
              name: 'withFooter',
              type: 'boolean',
              required: false,
              default: '-',
              description: 'Display table footer',
            },
            {
              name: 'selectable',
              type: 'boolean',
              required: false,
              default: '-',
              description: 'Allow rows to be selected',
            },
            {
              name: 'getOnRowSelect',
              type: 'function',
              required: false,
              default: '-',
              description: 'Callback on selected row',
            },
            {
              name: 'getOnRowClickHandler',
              type: 'function',
              required: false,
              default: '-',
              description: 'Callback on clicked row',
            },
          ]}
        />
      </section>
    </>
  );
}
