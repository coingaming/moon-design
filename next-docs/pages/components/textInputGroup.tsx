import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import AccessValues from '../../public/examples/textInputGroup/AccessValues';
import Default from '../../public/examples/textInputGroup/Default';
import MultiSelect from '../../public/examples/textInputGroup/MultiSelect';
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
          title="Text type variants"
          preview={<Types />}
          code={examples ? examples.Types : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Single Select variant"
          preview={<SingleSelect />}
          code={examples ? examples.SingleSelect : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Multi Select variant"
          preview={<MultiSelect />}
          code={examples ? examples.MultiSelect : 'Loading'}
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
              name: 'types',
              type: `object { 
                      input1: TextInputTypes | single-select | multi-select, 
                      input2: TextInputTypes | single-select | multi-select 
                    }`,
              required: false,
              default: 'false',
              description: 'Type of each of the input fields',
            },
            {
              name: 'inputProps',
              type: 'object { input1: TextInputTypes, input2: TextInputTypes }',
              required: true,
              default: '-',
              description:
                'Props for the text input fields. See TextInput component. (Required only if type is not specified or type is one of the text field types.)',
            },
            {
              name: 'selectProps',
              type: 'object { input1: SelectProps, input2: SelectProps }',
              required: true,
              default: '-',
              description:
                'Props for the select fields. See Single Select and Multi Select components. (Required only if type is one of the select types.)',
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
      </section>
    </>
  );
}
