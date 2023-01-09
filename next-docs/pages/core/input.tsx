import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Bg from '../../public/examples/input/Bg';
import Default from '../../public/examples/input/Default';
import Disabled from '../../public/examples/input/Disabled';
import Error from '../../public/examples/input/Error';
import Hint from '../../public/examples/input/Hint';
import Readonly from '../../public/examples/input/Readonly';
import Sizes from '../../public/examples/input/Sizes';
import Types from '../../public/examples/input/Types';
import WithoutLabel from '../../public/examples/input/WithoutLabel';
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
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<Error />}
        code={examples ? examples.Error : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<Readonly />}
        code={examples ? examples.Readonly : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<WithoutLabel />}
        code={examples ? examples.WithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<Hint />}
        code={examples ? examples.Hint : 'Loading'}
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
        title="TextInput props"
        data={[
          {
            name: 'bgColor',
            type: 'string',
            required: false,
            default: 'transparent',
            description: 'Background colour',
          },
          {
            name: 'dir',
            type: 'ltr | rtl | auto',
            required: false,
            default: '-',
            description: 'RTL/LTR direction of label',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Informative/error message below input',
          },
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: 'Sets input id',
          },
          {
            name: 'inputSize',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'md',
            description: 'Input size',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for input',
          },
          {
            name: 'isFirst',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets input styles as the first in a group',
          },
          {
            name: 'isSharpBottomSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the bottom',
          },
          {
            name: 'isSharpLeftSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the left',
          },
          {
            name: 'isSharpRightSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the right',
          },
          {
            name: 'isSharpTopSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the top',
          },
          {
            name: 'isSideBorderHidden',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes vertical borders',
          },
          {
            name: 'isTopBottomBorderHidden',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes horizontal borders',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Label for input',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Placeholder for input',
          },
          {
            name: 'showPasswordText',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description:
              'Input type password only. Text for show/hide password',
          },
          {
            name: 'type',
            type: 'date | datetime-local | email | number | password | search | tel | text | time | url | string',
            required: false,
            default: 'text',
            description: 'Input type',
          },
        ]}
      />
    </>
  );
};

export default Example;
