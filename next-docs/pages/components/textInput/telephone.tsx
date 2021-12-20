import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

import TelephoneWithLabel from '../../../public/examples/textInput/telephone/TelephoneWithLabel';
import TelephoneWithoutLabel from '../../../public/examples/textInput/telephone/TelephoneWithoutLabel';
import TelephoneWithHint from '../../../public/examples/textInput/telephone/TelephoneWithHint';
import TelephoneDisabled from '../../../public/examples/textInput/telephone/TelephoneDisabled';
import TelephoneError from '../../../public/examples/textInput/telephone/TelephoneError';
import TelephoneBgColor from '../../../public/examples/textInput/telephone/TelephoneBgColor';
import TelephoneReadonly from '../../../public/examples/textInput/telephone/TelephoneReadonly';

import useExamples from '../../../utils/useExamples';

export default function PageTelephoneInput() {
  const examples = useExamples('textInput/text');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">TextInput</h1>
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
          TextInput comes with three sizes: xsmall, small and medium, which are
          configured by required prop inputSize. TextInput xsmall and small
          sizes have an outside label view, while TextInput medium size has an
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
            preview={<TelephoneWithLabel />}
            code={examples ? examples.TelephoneWithLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Without Label"
            preview={<TelephoneWithoutLabel />}
            code={examples ? examples.TelephoneWithoutLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Hint message"
            preview={<TelephoneWithHint />}
            code={examples ? examples.TelephoneWithHint : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Disabled"
            preview={<TelephoneDisabled />}
            code={examples ? examples.TelephoneDisabled : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Error"
            preview={<TelephoneError />}
            code={examples ? examples.TelephoneError : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Input with background color"
            preview={<TelephoneBgColor />}
            code={examples ? examples.TelephoneBgColor : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Readonly"
            preview={<TelephoneReadonly />}
            code={examples ? examples.TelephoneReadonly : 'Loading'}
          />
        </section>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Dialog Header component</h2>
        <Table
          data={[
            {
              name: 'inputSize',
              type: 'xsmall | small | medium',
              required: true,
              default: 'xsmall',
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
      </section>
    </>
  );
}
