import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import AccessValues from '../../public/examples/textInputGroup/AccessValues';
import Default from '../../public/examples/textInputGroup/Default';
import EventListenerSelect from '../../public/examples/textInputGroup/EventListenerSelect';
import MultiSelect from '../../public/examples/textInputGroup/MultiSelect';
import Rtl from '../../public/examples/textInputGroup/Rtl';
import SingleSelect from '../../public/examples/textInputGroup/SingleSelect';
import SingleSelectRtl from '../../public/examples/textInputGroup/SingleSelectRtl';
import SingleSelectVertical from '../../public/examples/textInputGroup/SingleSelectVertical';
import Sizes from '../../public/examples/textInputGroup/Sizes';
import Types from '../../public/examples/textInputGroup/Types';
import Vertical from '../../public/examples/textInputGroup/Vertical';
import useExamples from '../../utils/useExamples';

const PageTextInputGroup = () => {
  const examples = useExamples('textInputGroup');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">TextInput Group</h1>
        <p className="text-lg mt-4">
          <h3>
            The TextInputGroup component lives in <strong>two</strong> different
            packages.
          </h3>
          <ol>
            <li>
              Text type - <em>@heathmont/moon-core</em>
            </li>
            <li>
              Select type - <em>@heathmont/moon-select</em>
            </li>
          </ol>
        </p>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          isGrayBg
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Vertical orientation"
          isGrayBg
          preview={<Vertical />}
          code={examples ? examples.Vertical : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="RTL"
          isGrayBg
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Text type variants"
          isGrayBg
          preview={<Types />}
          code={examples ? examples.Types : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Single Select variant"
          isGrayBg
          preview={<SingleSelect />}
          code={examples ? examples.SingleSelect : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Multi Select variant"
          isGrayBg
          preview={<MultiSelect />}
          code={examples ? examples.MultiSelect : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Single Select variant vertical orientation"
          isGrayBg
          preview={<SingleSelectVertical />}
          code={examples ? examples.SingleSelectVertical : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Single Select variant RTL"
          isGrayBg
          preview={<SingleSelectRtl />}
          code={examples ? examples.SingleSelectRtl : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Access Values by ref"
          isGrayBg
          preview={<AccessValues />}
          code={examples ? examples.AccessValues : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Access Values (Select) by event listener"
          isGrayBg
          preview={<EventListenerSelect />}
          code={examples ? examples.EventListenerSelect : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props (Text types)"
        data={[
          {
            name: 'inputProps',
            type: 'object { input1: TextInputTypes, input2: TextInputTypes }',
            required: true,
            default: "object { inputSize: 'medium', type: 'text' }",
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

      <PropsTable
        title="Props (Select types)"
        data={[
          {
            name: 'selectProps',
            type: 'object { input1: SelectProps, input2: SelectProps }',
            required: true,
            default: 'object {}',
            description:
              'Props for the select fields. See Single Select and Multi Select components',
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

export default PageTextInputGroup;
