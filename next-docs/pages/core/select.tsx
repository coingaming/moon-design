import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Disabled from '../../public/examples/selectTW/single/Disabled';
import Error from '../../public/examples/selectTW/single/Error';
import Hint from '../../public/examples/selectTW/single/Hint';
import Options from '../../public/examples/selectTW/single/Options';
import OptionsWidth from '../../public/examples/selectTW/single/OptionsWidth';
import WithLabel from '../../public/examples/selectTW/single/WithLabel';
import WithoutLabel from '../../public/examples/selectTW/single/WithoutLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('selectTW/single');
  return (
    <>
      <ComponentPageDescription title="Select">
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
        title="Props"
        data={[
          {
            name: 'size',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'md',
            description: `The option's value.`,
          },
          {
            name: 'options',
            type: 'Object[]',
            required: true,
            default: '-',
            description: `List of options.`,
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: `Label title`,
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'value',
            type: 'Object',
            required: false,
            default: '-',
            description: 'Controled value',
          },
          {
            name: 'onChange',
            type: 'funct',
            required: false,
            default: '-',
            description: 'onChange event handler',
          },
          {
            name: 'menuWidth',
            type: 'string',
            required: false,
            default: '_',
            description: 'Tailwind class for custom options container width',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: false,
            default: '_',
            description: 'Inform message under select',
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
            description: 'Set disabled/not disabled select',
          },
          {
            name: 'formatOptionLabel',
            type: 'funct',
            required: false,
            default: '-',
            description:
              'Function to customize the list options (like rendering an element as JSX)',
          },
        ]}
      />
    </>
  );
};

export default Example;
