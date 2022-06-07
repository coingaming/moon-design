import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import NumberBgColor from '../../../public/examples/textInput/number/NumberBgColor';
import NumberDisabled from '../../../public/examples/textInput/number/NumberDisabled';
import NumberError from '../../../public/examples/textInput/number/NumberError';
import NumberReadonly from '../../../public/examples/textInput/number/NumberReadonly';
import NumberWithHint from '../../../public/examples/textInput/number/NumberWithHint';
import NumberWithLabel from '../../../public/examples/textInput/number/NumberWithLabel';
import NumberWithLabelRtl from '../../../public/examples/textInput/number/NumberWithLabelRtl';
import NumberWithoutLabel from '../../../public/examples/textInput/number/NumberWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageNumberInput() {
  const examples = useExamples('textInput/number');

  return (
    <>
      <ComponentPageDescription title="Number">
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
        preview={<NumberWithLabel />}
        code={examples ? examples.NumberWithLabel : 'Loading'}
      />
      <Preview
        title="Label RTL"
        preview={<NumberWithLabelRtl />}
        code={examples ? examples.NumberWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<NumberWithoutLabel />}
        code={examples ? examples.NumberWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<NumberWithHint />}
        code={examples ? examples.NumberWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<NumberDisabled />}
        code={examples ? examples.NumberDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<NumberError />}
        code={examples ? examples.NumberError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<NumberBgColor />}
        code={examples ? examples.NumberBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<NumberReadonly />}
        code={examples ? examples.NumberReadonly : 'Loading'}
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
