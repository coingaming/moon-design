import React from 'react';
import Preview from '../../components/codePreview/Preview';
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
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Vertical orientation"
          preview={<Vertical />}
          code={examples ? examples.Vertical : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="RTL"
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Error"
          preview={<Error />}
          code={examples ? examples.Error : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Text type variants"
          preview={<Types />}
          code={examples ? examples.Types : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Access Values by ref"
          preview={<AccessValues />}
          code={examples ? examples.AccessValues : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props (Text types)"
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
            name: 'orientation',
            type: 'vertical | horizontal',
            required: false,
            default: 'horizontal',
            description: 'How the fields are positioned with one another',
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Text direction',
          },
        ]}
      />
    </>
  );
};

export default Example;
