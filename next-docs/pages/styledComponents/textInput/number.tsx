import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import NumberBgColor from '../../../public/styledExamples/textInput/number/NumberBgColor';
import NumberDisabled from '../../../public/styledExamples/textInput/number/NumberDisabled';
import NumberError from '../../../public/styledExamples/textInput/number/NumberError';
import NumberReadonly from '../../../public/styledExamples/textInput/number/NumberReadonly';
import NumberWithHint from '../../../public/styledExamples/textInput/number/NumberWithHint';
import NumberWithLabel from '../../../public/styledExamples/textInput/number/NumberWithLabel';
import NumberWithLabelRtl from '../../../public/styledExamples/textInput/number/NumberWithLabelRtl';
import NumberWithoutLabel from '../../../public/styledExamples/textInput/number/NumberWithoutLabel';
import useStyledExamples from '../../../utils/useStyledExamples';

export default function PageNumberInput() {
  const examples = useStyledExamples('textInput/number');
  return (
    <>
      <ComponentPageDescription title="Number" isDeprecated>
        <DeprecationWarning href="/components/input" name="Input" />
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
