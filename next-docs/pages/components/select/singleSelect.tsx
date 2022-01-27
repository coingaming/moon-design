import React from 'react';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import Disabled from '../../../public/examples/select/singleReactSelect/Disabled';
import Error from '../../../public/examples/select/singleReactSelect/Error';
import Hint from '../../../public/examples/select/singleReactSelect/Hint';
import ListWidth from '../../../public/examples/select/singleReactSelect/ListWidth';
import Options from '../../../public/examples/select/singleReactSelect/Options';
import OptionsContent from '../../../public/examples/select/singleReactSelect/OptionsContent';
import WithLabel from '../../../public/examples/select/singleReactSelect/WithLabel';
import WithoutLabel from '../../../public/examples/select/singleReactSelect/WithoutLabel';


import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/singleReactSelect');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Select</h1>
        <p className="text-lg mt-4">
          This Select based on react-select library.
        </p>
        <p className="text-lg mt-4">
          Select components are used for collecting user provided information
          from a list of options.
        </p>
        <p className="text-lg mt-4">
          Select has two sizes with a different views:
          <b> large</b> (by default) and <b>xLarge</b>. Large size has label
          outside input, xLarge has label inside the input.
        </p>
      </section>

      {/* WithLabel */}
      <section className="mt-8">
        <Preview
          title="Size"
          preview={<WithLabel />}
          code={examples ? examples.WithLabel : 'Loading'}
        />
      </section>

      {/*Options*/}
      <section className="mt-8">
        <Preview
          title="List options"
          preview={<Options />}
          code={examples ? examples.Options : 'Loading'}
        />
      </section>

      {/* OptionsContent */}
      <section className="mt-8">
        <Preview
          title="Options Content"
          preview={<OptionsContent />}
          code={examples ? examples.OptionsContent : 'Loading'}
        />
      </section>

      {/* Hint */}
      <section className="mt-8">
        <Preview
          title="Hint message"
          preview={<Hint />}
          code={examples ? examples.Hint : 'Loading'}
        />
      </section>

      {/*Error*/}
      <section className="mt-8">
        <Preview
          title="Error"
          preview={<Error />}
          code={examples ? examples.Error : 'Loading'}
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

      {/* WithoutLabel */}
      <section className="mt-8">
        <Preview
          title="Without label"
          preview={<WithoutLabel />}
          code={examples ? examples.WithoutLabel : 'Loading'}
        />
      </section>

      {/* WithoutLabel */}
      <section className="mt-8">
        <Preview
          title="List options width"
          preview={<ListWidth />}
          code={examples ? examples.ListWidth : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'size',
              type: 'large | xLarge',
              required: false,
              default: 'large',
              description: `The option's value.`,
            },
            {
              name: 'label',
              type: 'JSX.Element | string',
              required: false,
              default: '-',
              description: `Label title`,
            },
            {
              name: 'placeholderSlot',
              type: 'JSX.Element | string',
              required: false,
              default: '-',
              description: 'Placeholder',
            },
            {
              name: 'headerSlot',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Header element slot.',
            },
            {
              name: 'footerSlot',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Footer element slot.',
            },
            {
              name: 'menuWidth',
              type: 'number',
              required: false,
              default: '_',
              description: 'Options container width',
            },
            {
              name: 'leftSlot',
              type: 'JSX.Element',
              required: false,
              default: '_',
              description: 'Left content for selected option',
            },
            {
              name: 'leftSlot',
              type: 'JSX.Element',
              required: false,
              default: '_',
              description: 'Inform message under select',
            },
            {
              name: 'amountOfVisibleItems',
              type: 'number',
              required: false,
              default: '_',
              description:
                'Set amount of visible options in multi select, all other will be hide under counter',
            },
            {
              name: 'isError',
              type: 'boolean',
              required: false,
              default: '_',
              description: 'Set valid/not valid select',
            },
            {
              name: 'isDisabled',
              type: 'boolean',
              required: false,
              default: '_',
              description: 'Is the select disabled',
            },
            {
              name: 'isMulti',
              type: 'boolean',
              required: false,
              default: '_',
              description: 'Support multiple selected options',
            },
            {
              name: 'isSearchable',
              type: 'boolean',
              required: false,
              default: '_',
              description: 'Whether to enable search functionality',
            },
          ]}
        />
      </section>
    </>
  );
}
