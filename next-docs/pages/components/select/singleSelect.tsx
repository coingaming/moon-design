import React from 'react';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

import Default from '../../../public/examples/select/singleSelect/Default';
import Label from '../../../public/examples/select/singleSelect/Label';
import Placeholders from '../../../public/examples/select/singleSelect/Placeholders';
import Secondary from '../../../public/examples/select/singleSelect/Secondary';
import Hint from '../../../public/examples/select/singleSelect/Hint';
import OptionsAsList from '../../../public/examples/select/singleSelect/OptionsAsList';
import OptionsAsList2 from '../../../public/examples/select/singleSelect/OptionsAsList2';
import OptionsAsList3 from '../../../public/examples/select/singleSelect/OptionsAsList3';
import Disabled from '../../../public/examples/select/singleSelect/Disabled';
import InputSize from '../../../public/examples/select/singleSelect/InputSize';
import DefaultValue from '../../../public/examples/select/singleSelect/DefaultValue';
import Ssr from '../../../public/examples/select/singleSelect/Ssr';
import Slot from '../../../public/examples/select/singleSelect/Slot';

import useExamples from '../../../utils/useExamples';

export default function PageSelectSingle() {
  const examples = useExamples('select/SingleSelect');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">SingleSelect</h1>
        <p className="text-lg mt-4">
          SingleSelect presents a list of selecteble options and allows a user
          to select one of them.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Primary"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* with Label */}
      <section className="mt-8">
        <Preview
          title="Primary with Label"
          preview={<Label />}
          code={examples ? examples.Label : 'Loading'}
        />
      </section>

      {/*Placeholder*/}
      <section className="mt-8">
        <Preview
          title="Primary with placeholder"
          preview={<Placeholders />}
          code={examples ? examples.Placeholders : 'Loading'}
        />
      </section>

      {/* Secondary */}
      <section className="mt-8">
        <Preview
          title="Secondary with inner label and placeholder"
          preview={<Secondary />}
          code={examples ? examples.Secondary : 'Loading'}
        />
      </section>

      {/* with Hint */}
      <section className="mt-8">
        <Preview
          title="With Hint Text and error"
          preview={<Hint />}
          code={examples ? examples.Hint : 'Loading'}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title="A selectable option as component"
          preview={<OptionsAsList />}
          code={examples ? examples.OptionsAsList : 'Loading'}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title=""
          preview={<OptionsAsList2 />}
          code={examples ? examples.OptionsAsList2 : 'Loading'}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title=""
          preview={<OptionsAsList3 />}
          code={examples ? examples.OptionsAsList3 : 'Loading'}
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

      {/* inputSize */}
      <section className="mt-8">
        <Preview
          title="Input size (small by default)"
          preview={<InputSize />}
          code={examples ? examples.InputSize : 'Loading'}
        />
      </section>

      {/* With defaultValue */}
      <section className="mt-8">
        <Preview
          title="With default value"
          preview={<DefaultValue />}
          code={examples ? examples.DefaultValue : 'Loading'}
        />
      </section>

      {/* SSR */}
      <section className="mt-8">
        <Preview
          title="SSR"
          preview={<Ssr />}
          code={examples ? examples.Ssr : 'Loading'}
        />
      </section>

      {/* Witn Search slot*/}
      <section className="mt-8">
        <Preview
          title="Slot props"
          preview={<Slot />}
          code={examples ? examples.Slot : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for SingleSelect component</h2>
        <Table
          data={[
            {
              name: 'options',
              type: 'Option[]',
              required: true,
              default: '-',
              description: 'Option for the listbox',
            },
            {
              name: 'variant',
              type: 'primary | secondary',
              required: true,
              default: '-',
              description: 'Different variant of single select',
            },
            {
              name: 'disabled',
              type: 'boolean',
              required: false,
              default: 'false',
              description:
                'This Boolean attribute indicates that the user cannot interact with the control',
            },
            {
              name: 'inputSize',
              type: 'small | medium',
              required: false,
              default: 'small',
              description: 'Size of input',
            },
            {
              name: 'defaultValue',
              type: 'string',
              required: false,
              default: '-',
              description: 'The default value of an uncontrolled listbox',
            },
            {
              name: 'controlledValue',
              type: 'string',
              required: false,
              default: '-',
              description: 'The default value of an controlled listbox',
            },
            {
              name: 'onChange',
              type: 'func',
              required: false,
              default: '-',
              description:
                'The callback that fires when the listbox value changes.',
            },
            {
              name: 'search',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Slot for search element',
            },
            {
              name: 'topContent',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Slot for content under search element',
            },
            {
              name: 'titleOptions',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Slot for option`s title ',
            },
            {
              name: 'placeholderValue',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Placeholder element',
            },
            {
              name: 'label',
              type: 'JSX.Element | string',
              required: false,
              default: '-',
              description: 'Single select title',
            },
            {
              name: 'labelId',
              type: 'string',
              required: false,
              default: '-',
              description: 'Id for title',
            },
            {
              name: 'hintText',
              type: 'JSX.Element | string',
              required: false,
              default: '-',
              description: 'Informative message under select',
            },
            {
              name: 'isError',
              type: 'boolean',
              required: false,
              default: '-',
              description: 'Set error state for select',
            },
            {
              name: 'zIndexOptions',
              type: 'number',
              required: false,
              default: '10',
              description: 'Set custom z-index for options container',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Option</h2>
        <Table
          data={[
            {
              name: 'value',
              type: 'string',
              required: true,
              default: '-',
              description: `The option's value. This will be passed into a hidden input field for use in forms when the option is selected.`,
            },
            {
              name: 'label',
              type: 'string',
              required: false,
              default: '-',
              description: `The option's human-readable label. `,
            },
            {
              name: 'element',
              type: 'JSX.Element | string',
              required: true,
              default: '-',
              description: 'Inner content for option',
            },
          ]}
        />
      </section>
    </>
  );
}
