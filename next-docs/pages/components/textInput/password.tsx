import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

import PasswordWithLabel from '../../../public/examples/textInput/password/PasswordWithLabel';
import PasswordWithoutLabel from '../../../public/examples/textInput/password/PasswordWithoutLabel';
import PasswordWithHint from '../../../public/examples/textInput/password/PasswordWithHint';
import PasswordDisabled from '../../../public/examples/textInput/password/PasswordDisabled';
import PasswordError from '../../../public/examples/textInput/password/PasswordError';
import PasswordBgColor from '../../../public/examples/textInput/password/PasswordBgColor';
import PasswordReadonly from '../../../public/examples/textInput/password/PasswordReadonly';

import useExamples from '../../../utils/useExamples';

export default function PageTextInput() {
  const examples = useExamples('textInput/password');
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
            preview={<PasswordWithLabel />}
            code={examples ? examples.PasswordWithLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Without Label"
            preview={<PasswordWithoutLabel />}
            code={examples ? examples.PasswordWithoutLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Hint message"
            preview={<PasswordWithHint />}
            code={examples ? examples.PasswordWithHint : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Disabled"
            preview={<PasswordDisabled />}
            code={examples ? examples.PasswordDisabled : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Error"
            preview={<PasswordError />}
            code={examples ? examples.PasswordError : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Input with background color"
            preview={<PasswordBgColor />}
            code={examples ? examples.PasswordBgColor : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Readonly"
            preview={<PasswordReadonly />}
            code={examples ? examples.PasswordReadonly : 'Loading'}
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
