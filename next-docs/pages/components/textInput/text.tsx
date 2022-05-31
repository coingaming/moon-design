import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import TextBgColor from '../../../public/examples/textInput/text/TextBgColor';
import TextBgColorRtl from '../../../public/examples/textInput/text/TextBgColorRtl';
import TextDisabled from '../../../public/examples/textInput/text/TextDisabled';
import TextError from '../../../public/examples/textInput/text/TextError';
import TextErrorRtl from '../../../public/examples/textInput/text/TextErrorRtl';
import TextReadonly from '../../../public/examples/textInput/text/TextReadonly';
import TextReadonlyRtl from '../../../public/examples/textInput/text/TextReadonlyRtl';
import TextWithHint from '../../../public/examples/textInput/text/TextWithHint';
import TextWithLabel from '../../../public/examples/textInput/text/TextWithLabel';
import TextWithoutLabel from '../../../public/examples/textInput/text/TextWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageTextInput() {
  const examples = useExamples('textInput/text');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">TextInput</h1>
        <p className="text-lg mt-4">
          The TextInput wrapper component is used when you need to let users
          enter the text of some kind, such as their name or phone number etc.
        </p>

        <p className="text-lg mt-4">
          All TextInput could include visible labels, placeholder, hint text.
          Also, all standard form attributes are supported e.g. required,
          disabled, readonly. Input inside TextInput wrapper component has a
          transparent background but could be configured by props.
        </p>

        <p className="text-lg mt-4">
          TextInput comes with three sizes: medium, large and xLarge, which are
          configured by required prop inputSize. TextInput medium and large
          sizes have an outside label view, while TextInput xLarge size has an
          inner label view.
        </p>

        <p className="text-lg mt-4">
          For mobile, the usage of respected keyboards is recommended, f.e. if
          it’s likely that the user will need to enter a number and you want to
          bring up the numeric keypad on a mobile device.
        </p>

        <p className="text-lg mt-4">
          The TextInput support a range of input formats, some of which include
          automatic browser validation. These can be set by providing HTML input
          type attributte.
        </p>
      </section>

      {/* Text */}
      <section className="mt-8">
        <section className="mt-8">
          <Preview
            title="Label"
            preview={<TextWithLabel />}
            code={examples ? examples.TextWithLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Without Label"
            preview={<TextWithoutLabel />}
            code={examples ? examples.TextWithoutLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Hint message"
            preview={<TextWithHint />}
            code={examples ? examples.TextWithHint : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Disabled"
            preview={<TextDisabled />}
            code={examples ? examples.TextDisabled : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Error"
            preview={<TextError />}
            code={examples ? examples.TextError : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Error Rtl"
            preview={<TextErrorRtl />}
            code={examples ? examples.TextErrorRtl : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Input with background color"
            preview={<TextBgColor />}
            code={examples ? examples.TextBgColor : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Input with background color Rtl"
            preview={<TextBgColorRtl />}
            code={examples ? examples.TextBgColorRtl : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Readonly"
            preview={<TextReadonly />}
            code={examples ? examples.TextReadonly : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Readonly Rtl"
            preview={<TextReadonlyRtl />}
            code={examples ? examples.TextReadonlyRtl : 'Loading'}
          />
        </section>
      </section>

      <PropsTable
        title="Props for TextInput component"
        data={[
          {
            name: 'inputSize',
            type: 'medium | large | xlarge',
            required: true,
            default: 'medium',
            description: 'Input size',
          },
          {
            name: 'type',
            type: 'TextInputTypes',
            required: true,
            default: 'text',
            description: 'Different types of input',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '',
            description: 'Required for medium size',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '',
            description: 'Placeholder for input',
          },
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: 'Set input id',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: false,
            default: '',
            description: 'Informative or error message under input',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: '',
            description: 'Set error state for input',
          },
          {
            name: 'showPasswordText',
            type: 'JSX.Element | string',
            required: false,
            default: '',
            description:
              'Only for input type password. Text for toggle button: show/hide password',
          },
          {
            name: 'backgroundColor',
            type: 'ColorProps',
            required: false,
            default: 'transparent',
            description: 'Background color',
          },
        ]}
      />
    </>
  );
}
