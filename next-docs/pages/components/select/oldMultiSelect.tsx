import React from 'react';

import Preview from '../../../components/codePreview/Preview';
import CodeSnippet from '../../../components/CodeSnippet';
import Table from '../../../components/Table';

import Default from '../../../public/examples/select/multiSelect/Default';
import Disabled from '../../../public/examples/select/multiSelect/Disabled';
import Error from '../../../public/examples/select/multiSelect/Error';

import useExamples from '../../../utils/useExamples';

export default function PageMultiSelect() {
  const examples = useExamples('select/multiSelect');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">MultiSelect</h1>

        <p className="text-lg mt-4">
          Unlike a normal select, multiselect allows the user to select multiple
          options at once.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Examples"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      {/* Error */}
      <section className="mt-8">
        <Preview
          title="Error"
          preview={<Error />}
          code={examples ? examples.Error : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'items',
              type: 'Option[]',
              required: true,
              default: '-',
              description: `The option's value.`,
            },
            {
              name: 'label',
              type: 'JSX.Element | string',
              required: true,
              default: '-',
              description: `Label title`,
            },
            {
              name: 'search',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Search element slot.',
            },
            {
              name: 'footer',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Footer element slot.',
            },
            {
              name: 'initialSelectedItems',
              type: 'Option[]',
              required: false,
              default: '[]',
              description: 'Initially selected items',
            },
            {
              name: 'isExpanded',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'is expanded',
            },
            {
              name: 'onChange',
              type: '(selectedItems: string[]) => any;',
              required: false,
              default: '-',
              description: 'onChange callback',
            },
          ]}
        />
      </section>

      <section className="mt-8">
        <CodeSnippet>
          {`Option {
value: string;
label?: string;
element: ({
  isSelected: boolean,
}) => JSX.Element | string;
}
`}
        </CodeSnippet>
      </section>
    </>
  );
}
