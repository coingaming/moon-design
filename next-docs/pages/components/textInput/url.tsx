import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import UrlBgColor from '../../../public/examples/textInput/url/UrlBgColor';
import UrlDisabled from '../../../public/examples/textInput/url/UrlDisabled';
import UrlError from '../../../public/examples/textInput/url/UrlError';
import UrlReadonly from '../../../public/examples/textInput/url/UrlReadonly';
import UrlWithHint from '../../../public/examples/textInput/url/UrlWithHint';
import UrlWithLabel from '../../../public/examples/textInput/url/UrlWithLabel';
import UrlWithLabelRtl from '../../../public/examples/textInput/url/UrlWithLabelRtl';
import UrlWithoutLabel from '../../../public/examples/textInput/url/UrlWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageUrlInput() {
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
            preview={<UrlWithLabel />}
            code={examples ? examples.UrlWithLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Label RTL"
            preview={<UrlWithLabelRtl />}
            code={examples ? examples.UrlWithLabelRtl : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Without Label"
            preview={<UrlWithoutLabel />}
            code={examples ? examples.UrlWithoutLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Hint message"
            preview={<UrlWithHint />}
            code={examples ? examples.UrlWithHint : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Disabled"
            preview={<UrlDisabled />}
            code={examples ? examples.UrlDisabled : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Error"
            preview={<UrlError />}
            code={examples ? examples.UrlError : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Input with background color"
            preview={<UrlBgColor />}
            code={examples ? examples.UrlBgColor : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Readonly"
            preview={<UrlReadonly />}
            code={examples ? examples.UrlReadonly : 'Loading'}
          />
        </section>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Dialog Header component</h2>
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
