import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Disabled from '../../public/examples/selectTw/single/Disabled';
import Error from '../../public/examples/selectTw/single/Error';
import Hint from '../../public/examples/selectTw/single/Hint';
import Options from '../../public/examples/selectTw/single/Options';
import OptionsWidth from '../../public/examples/selectTw/single/OptionsWidth';
import WithLabel from '../../public/examples/selectTw/single/WithLabel';
import WithoutLabel from '../../public/examples/selectTw/single/WithoutLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('selectTw/single');
  return (
    <>
      <ComponentPageDescription title="Select" isInProgress>
        <p>
          A form input used for selecting a value: when collapsed it shows the
          currently selected option and when expanded, it shows a scrollable
          list of predefined options for the user to choose from.
        </p>
        <p>
          Moon.io supports two types of selects, one whichs opens browser's
          native styling option list and custom "Dropdown".
        </p>
      </ComponentPageDescription>
      <Preview
        title="With Label"
        preview={<WithLabel />}
        code={examples ? examples.WithLabel : 'Loading'}
      />

      <Preview
        title="Formatted options"
        preview={<Options />}
        code={examples ? examples.Options : 'Loading'}
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
        preview={<OptionsWidth />}
        code={examples ? examples.OptionsWidth : 'Loading'}
      />
      <PropsTable
        title="Select props"
        data={[
          {
            name: 'formatOptionLabel',
            type: '(data) => JSX.Element | string',
            required: 'false',
            default: '-',
            description:
              'Function to customize the list options (like rendering an element as JSX)',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: 'false',
            default: '_',
            description: 'Inform message under select',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: 'false',
            default: '_',
            description: 'Set disabled/non-disabled select',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: 'false',
            default: '_',
            description: 'Set valid/non-valid select',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: 'false',
            default: '-',
            description: `Label title`,
          },
          {
            name: 'menuWidth',
            type: 'string',
            required: 'false',
            default: '_',
            description: 'Tailwind class for custom options container width',
          },
          {
            name: 'onChange',
            type: '(value) => void',
            required: 'false',
            default: '-',
            description: 'onChange event handler',
          },
          {
            name: 'options',
            type: '{ id: number, label: string, value: string | number }[]',
            required: 'true',
            default: '-',
            description: `List of options`,
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: 'false',
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'size',
            type: 'sm | md | lg | xl',
            required: 'false',
            default: 'md',
            description: `Size of select`,
          },
          {
            name: 'value',
            type: '{ id: number, label: string, value: string | number }',
            required: 'false',
            default: '-',
            description: 'Controled value',
          },
        ]}
      />
    </>
  );
};

export default Example;
