import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import AccessValues from '../../public/examples/textInputGroup/AccessValues';
import Default from '../../public/examples/textInputGroup/Default';
import Rtl from '../../public/examples/textInputGroup/Rtl';
import SingleSelect from '../../public/examples/textInputGroup/SingleSelect';
import Sizes from '../../public/examples/textInputGroup/Sizes';
import Types from '../../public/examples/textInputGroup/Types';
import Vertical from '../../public/examples/textInputGroup/Vertical';
import useExamples from '../../utils/useExamples';

export default function PageTextInputGroup() {
  const examples = useExamples('textInputGroup');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">TextInput Group</h1>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Single Select"
          preview={<SingleSelect />}
          code={examples ? examples.SingleSelect : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Vertical"
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
          title="Types"
          preview={<Types />}
          code={examples ? examples.Types : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Access Values"
          preview={<AccessValues />}
          code={examples ? examples.AccessValues : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'inputSize',
              type: 'medium | large | xlarge',
              required: true,
              default: 'medium',
              description: 'Input size',
            },
            {
              name: 'types',
              type: 'object { input1: TextInputTypes, input2: TextInputTypes }',
              required: false,
              default: '{ input1: "text", input2: "text" }',
              description: 'Different types of input',
            },
            {
              name: 'placeholder',
              type: 'object { input1: string, input2: string }',
              required: false,
              default: '-',
              description: 'Placeholder for the fields',
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
            {
              name: 'reference',
              type: 'object { input1: React.Ref, input2: React.Ref }',
              required: false,
              default: '-',
              description:
                'Pass references to obtain handles to the <input> elements',
            },
          ]}
        />
      </section>
    </>
  );
}
