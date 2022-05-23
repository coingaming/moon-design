import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import SearchBgColor from '../../../public/examples/textInput/search/SearchBgColor';
import SearchDisabled from '../../../public/examples/textInput/search/SearchDisabled';
import SearchError from '../../../public/examples/textInput/search/SearchError';
import SearchReadonly from '../../../public/examples/textInput/search/SearchReadonly';
import SearchWithHint from '../../../public/examples/textInput/search/SearchWithHint';
import SearchWithLabel from '../../../public/examples/textInput/search/SearchWithLabel';
import SearchWithLabelRtl from '../../../public/examples/textInput/search/SearchWithLabelRtl';
import SearchWithoutLabel from '../../../public/examples/textInput/search/SearchWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageSearchInput() {
  const examples = useExamples('textInput/search');
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
            preview={<SearchWithLabel />}
            code={examples ? examples.SearchWithLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Label RTL"
            preview={<SearchWithLabelRtl />}
            code={examples ? examples.SearchWithLabelRtl : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Without Label"
            preview={<SearchWithoutLabel />}
            code={examples ? examples.SearchWithoutLabel : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Hint message"
            preview={<SearchWithHint />}
            code={examples ? examples.SearchWithHint : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="DisabledTW"
            preview={<SearchDisabled />}
            code={examples ? examples.SearchDisabled : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Error"
            preview={<SearchError />}
            code={examples ? examples.SearchError : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Input with background color"
            preview={<SearchBgColor />}
            code={examples ? examples.SearchBgColor : 'Loading'}
          />
        </section>
        <section className="mt-8">
          <Preview
            title="Readonly"
            preview={<SearchReadonly />}
            code={examples ? examples.SearchReadonly : 'Loading'}
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
