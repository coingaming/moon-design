import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

import Xs from '../../public/examples/textInput/Xs';
import XsTypes from '../../public/examples/textInput/XsTypes';
import InputS from '../../public/examples/textInput/InputS';
import InputSTypes from '../../public/examples/textInput/InputSTypes';
import InputM from '../../public/examples/textInput/InputM';
import InputMTypes from '../../public/examples/textInput/InputMTypes';

import useExamples from '../../utils/useExamples';

export default function PageTextInput() {
  const examples = useExamples('textInput');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">TextInput</h1>
        <p className="text-lg mt-4">
          The input component is used when you need to let users enter the text
          of some kind, such as their name or phone number etc.
        </p>

        <p className="text-lg mt-4">
          All text inputs must have visible labels/placeholder text.
        </p>

        <p className="text-lg mt-4">
          For mobile, the usage of respected keyboards is recommended, f.e. if
          it’s likely that the user will need to enter a number and you want to
          bring up the numeric keypad on a mobile device.
        </p>

        <p className="text-lg mt-4">
          Text inputs support a range of input formats, some of which include
          automatic browser validation. These can be set by providing HTML input
          type attributtes:
        </p>
      </section>

      {/* XS */}
      <section className="mt-8">
        <section className="mt-8">
          <Preview
            title="xsmall (Default)"
            preview={<Xs />}
            code={examples ? examples.Xs : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="xsmall (Types)"
            preview={<XsTypes />}
            code={examples ? examples.XsTypes : 'Loading'}
          />
        </section>
      </section>

      {/* S */}
      <section className="mt-8">
        <section className="mt-8">
          <Preview
            title="small (Default)"
            preview={<InputS />}
            code={examples ? examples.InputS : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="small (Types)"
            preview={<InputSTypes />}
            code={examples ? examples.InputSTypes : 'Loading'}
          />
        </section>
      </section>

      {/* M */}
      <section className="mt-8">
        <section className="mt-8">
          <Preview
            title="medium (Default)"
            preview={<InputM />}
            code={examples ? examples.InputM : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="medium (Types)"
            preview={<InputMTypes />}
            code={examples ? examples.InputM : 'Loading'}
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
