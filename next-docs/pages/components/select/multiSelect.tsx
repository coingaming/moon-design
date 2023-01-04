import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import Disabled from '../../../public/styledExamples/select/multiReactSelect/Disabled';
import Error from '../../../public/styledExamples/select/multiReactSelect/Error';
import Hint from '../../../public/styledExamples/select/multiReactSelect/Hint';
import ListWidth from '../../../public/styledExamples/select/multiReactSelect/ListWidth';
import OptionsContent from '../../../public/styledExamples/select/multiReactSelect/OptionsContent';
import WithCounter from '../../../public/styledExamples/select/multiReactSelect/WithCounter';
import WithLabel from '../../../public/styledExamples/select/multiReactSelect/WithLabel';
import WithoutLabel from '../../../public/styledExamples/select/multiReactSelect/WithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/multiReactSelect', 'styled');
  return (
    <>
      <ComponentPageDescription title="Multi Select">
        <p>This Multi Select based on react-select library.</p>
        <p>
          Unlike a normal select, multiselect allows the user to select multiple
          options at once.
        </p>
        <p>
          As well as select Multi Select has two sizes with a different views:{' '}
          <span className="font-medium">large</span> (by default) and{' '}
          <span className="font-medium">xLarge</span>. Large size has label
          outside input, xLarge has label inside the input. Also, you can set
          multi-select view with counter. Just specify the amount of visible
          options inside select with the help of{' '}
          <span className="font-medium">amountOfVisibleItems</span> prop.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Size"
        preview={<WithLabel />}
        code={examples ? examples.WithLabel : 'Loading'}
      />
      <Preview
        title="With counter"
        preview={<WithCounter />}
        code={examples ? examples.WithCounter : 'Loading'}
      />
      <Preview
        title="Options Content"
        preview={<OptionsContent />}
        code={examples ? examples.OptionsContent : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<Hint />}
        code={examples ? examples.Hint : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<Error />}
        code={examples ? examples.Error : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Without label"
        preview={<WithoutLabel />}
        code={examples ? examples.WithoutLabel : 'Loading'}
      />
      <Preview
        title="List options width"
        preview={<ListWidth />}
        code={examples ? examples.ListWidth : 'Loading'}
      />
      <PropsTable
        title="Props"
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
          {
            name: 'closeMenuOnSelect',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Close the select menu when the user selects an option',
          },
        ]}
      />
    </>
  );
}
