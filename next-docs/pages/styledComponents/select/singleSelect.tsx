import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Disabled from '../../../public/styledExamples/select/singleReactSelect/Disabled';
import Error from '../../../public/styledExamples/select/singleReactSelect/Error';
import Hint from '../../../public/styledExamples/select/singleReactSelect/Hint';
import ListWidth from '../../../public/styledExamples/select/singleReactSelect/ListWidth';
import Options from '../../../public/styledExamples/select/singleReactSelect/Options';
import OptionsContent from '../../../public/styledExamples/select/singleReactSelect/OptionsContent';
import WithLabel from '../../../public/styledExamples/select/singleReactSelect/WithLabel';
import WithoutLabel from '../../../public/styledExamples/select/singleReactSelect/WithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/singleReactSelect', 'styled');
  return (
    <>
      <ComponentPageDescription title="Single Select" isDeprecated>
        <DeprecationWarning href="/components/dropdown" name="Dropdown" />
      </ComponentPageDescription>
      <Preview
        title="With Label"
        preview={<WithLabel />}
        code={examples ? examples.WithLabel : 'Loading'}
      />
      <Preview
        title="List options"
        preview={<Options />}
        code={examples ? examples.Options : 'Loading'}
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
            default: 'true',
            description:
              'Close the select menu when the user selects an option',
          },
        ]}
      />
    </>
  );
}
