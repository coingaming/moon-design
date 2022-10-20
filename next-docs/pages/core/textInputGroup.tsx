import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import AccessValues from '../../public/examples/textInputGroupTW/AccessValues';
import Default from '../../public/examples/textInputGroupTW/Default';
import Error from '../../public/examples/textInputGroupTW/Error';
import Rtl from '../../public/examples/textInputGroupTW/Rtl';
import Sizes from '../../public/examples/textInputGroupTW/Sizes';
import Types from '../../public/examples/textInputGroupTW/Types';
import Vertical from '../../public/examples/textInputGroupTW/Vertical';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('textInputGroupTW');
  return (
    <>
      <ComponentPageDescription title="TextInputGroup">
        <p>
          Indeed, forms require input from all users, including astronauts. Text
          input fields help to gather both short and long-form information. The
          size of the text field should correspond to the length of information
          that's required.
        </p>
        <p>
          Text input fields can contain various rules to ensure the right
          information is obtained from users. Users should also be given prompts
          to guide them on what's needed, or if they've made an error while
          doing so.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Vertical orientation"
        preview={<Vertical />}
        code={examples ? examples.Vertical : 'Loading'}
      />
      <Preview
        title="RTL"
        preview={<Rtl />}
        code={examples ? examples.Rtl : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<Error />}
        code={examples ? examples.Error : 'Loading'}
      />
      <Preview
        title="Text type variants"
        preview={<Types />}
        code={examples ? examples.Types : 'Loading'}
      />
      <Preview
        title="Access Values by ref"
        preview={<AccessValues />}
        code={examples ? examples.AccessValues : 'Loading'}
      />
      <PropsTable
        title="TextInputGroup props"
        data={[
          {
            name: 'inputProps',
            type: 'object { input1: TextInputTypes, input2: TextInputTypes }',
            required: true,
            default: "object { inputSize: 'md', type: 'text' }",
            description:
              'Props for the text input fields. See TextInput component',
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Text direction',
          },
          {
            name: 'orientation',
            type: 'vertical | horizontal',
            required: false,
            default: 'horizontal',
            description: 'How the fields are positioned with one another',
          },
        ]}
      />
    </>
  );
};

export default Example;
