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
          Select components are used for collecting user provided information
          from a list of options.
        </p>
        <p>
          Select has 3 sizes with a different views: <b>md</b> (by default),
          <b>lg</b> and <b>xl</b>.
        </p>
        <p>
          <b>md</b> and <b>lg</b> size has label outside input, <b>xl</b> has
          label inside the input.
        </p>
        <p>
          The width of select by default 100%, and should be controlled by the
          parent container width.
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
            required: false,
            default: '-',
            description:
              'Function to customize the list options (like rendering an element as JSX)',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: false,
            default: '_',
            description: 'Inform message under select',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set disabled/non-disabled select',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set valid/non-valid select',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: `Label title`,
          },
          {
            name: 'menuWidth',
            type: 'string',
            required: false,
            default: '_',
            description: 'Tailwind class for custom options container width',
          },
          {
            name: 'onChange',
            type: '(value) => void',
            required: false,
            default: '-',
            description: 'onChange event handler',
          },
          {
            name: 'options',
            type: '{ id: number, label: string, value: string | number }[]',
            required: true,
            default: '-',
            description: `List of options`,
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'size',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'md',
            description: `Size of select`,
          },
          {
            name: 'value',
            type: '{ id: number, label: string, value: string | number }',
            required: false,
            default: '-',
            description: 'Controled value',
          },
        ]}
      />
    </>
  );
};

export default Example;
