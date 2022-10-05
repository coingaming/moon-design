import React from 'react';
import Link from 'next/link';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import DateTimeBgColor from '../../../public/examples/textInput/datetime/DateTimeBgColor';
import DateTimeDisabled from '../../../public/examples/textInput/datetime/DateTimeDisabled';
import DateTimeError from '../../../public/examples/textInput/datetime/DateTimeError';
import DateTimeReadonly from '../../../public/examples/textInput/datetime/DateTimeReadonly';
import DateTimeWithHint from '../../../public/examples/textInput/datetime/DateTimeWithHint';
import DateTimeWithLabel from '../../../public/examples/textInput/datetime/DateTimeWithLabel';
import DateTimeWithLabelRtl from '../../../public/examples/textInput/datetime/DateTimeWithLabelRtl';
import DateTimeWithoutLabel from '../../../public/examples/textInput/datetime/DateTimeWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageDateInput() {
  const examples = useExamples('textInput/datetime');
  return (
    <>
      <ComponentPageDescription title="Date Time">
        <p className="font-medium">
          NB! The component is depricated. Please use our{' '}
          <Link href="/core/textInput">
            <a className="text-piccolo transition-colors duration-200 hover:text-hit visited:text-hit">
              new TextInput
            </a>
          </Link>{' '}
          built with Tailwind.
        </p>
        <p>
          The TextInput wrapper component is used when you need to let users
          enter the text of some kind, such as their name or phone number etc.
        </p>
        <p>
          All TextInput could include visible labels, placeholder, hint text.
          Also, all standard form attributes are supported e.g. required,
          disabled, readonly. Input inside TextInput wrapper component has a
          transparent background but could be configured by props.
        </p>
        <p>
          TextInput comes with three sizes: medium, large and xLarge, which are
          configured by required prop inputSize. TextInput medium and large
          sizes have an outside label view, while TextInput xLarge size has an
          inner label view.
        </p>
        <p>
          For mobile, the usage of respected keyboards is recommended, f.e. if
          it's likely that the user will need to enter a number and you want to
          bring up the numeric keypad on a mobile device.
        </p>
        <p>
          The TextInput support a range of input formats, some of which include
          automatic browser validation. These can be set by providing HTML input
          type attributte.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<DateTimeWithLabel />}
        code={examples ? examples.DateTimeWithLabel : 'Loading'}
      />
      <Preview
        title="Label RTL"
        preview={<DateTimeWithLabelRtl />}
        code={examples ? examples.DateTimeWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<DateTimeWithoutLabel />}
        code={examples ? examples.DateTimeWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<DateTimeWithHint />}
        code={examples ? examples.DateTimeWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<DateTimeDisabled />}
        code={examples ? examples.DateTimeDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<DateTimeError />}
        code={examples ? examples.DateTimeError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<DateTimeBgColor />}
        code={examples ? examples.DateTimeBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<DateTimeReadonly />}
        code={examples ? examples.DateTimeReadonly : 'Loading'}
      />
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
