import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Bg from '../../public/examples/input/Bg';
import Default from '../../public/examples/input/Default';
import InputGroup from '../../public/examples/input/InputGroup';
import Sizes from '../../public/examples/input/Sizes';
import States from '../../public/examples/input/States';
import Types from '../../public/examples/input/Types';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('input');
  return (
    <>
      <ComponentPageDescription title="Input" isInProgress>
        <p>
          Text input fields allow users to enter text and can be used to collect
          user feedback or enter information in data entry forms.
        </p>
        <p>
          These types of input fields are used on their own, or in combination
          with other inputs such as number entry, date picker, etc.
        </p>
      </ComponentPageDescription>
      <Preview
        title="InputGroup"
        preview={<InputGroup />}
        code={examples ? examples.InputGroup : 'Loading'}
      />

      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Different states"
        preview={<States />}
        code={examples ? examples.States : 'Loading'}
      />
      <Preview
        title="Custom styles"
        preview={<Bg />}
        code={examples ? examples.Bg : 'Loading'}
      />
      <Preview
        title="TextInput types"
        preview={<Types />}
        code={examples ? examples.Types : 'Loading'}
      />
      <PropsTable
        title="Input props"
        data={[
          {
            name: 'size',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'md',
            description: 'Input size',
          },
          {
            name: 'type',
            type: 'date | datetime-local | email | number | password | search | tel | text | time | url | string',
            required: false,
            default: 'text',
            description: 'Input type',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Placeholder for input',
          },
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for input',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Set disabled/non-disabled',
          },
          {
            name: 'dir',
            type: 'ltr | rtl | auto',
            required: false,
            default: '-',
            description: 'RTL/LTR direction of label',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

export default Example;
