import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import TelephoneBgColor from '../../../public/examples/styled/textInput/telephone/TelephoneBgColor';
import TelephoneDisabled from '../../../public/examples/styled/textInput/telephone/TelephoneDisabled';
import TelephoneError from '../../../public/examples/styled/textInput/telephone/TelephoneError';
import TelephoneReadonly from '../../../public/examples/styled/textInput/telephone/TelephoneReadonly';
import TelephoneWithHint from '../../../public/examples/styled/textInput/telephone/TelephoneWithHint';
import TelephoneWithLabel from '../../../public/examples/styled/textInput/telephone/TelephoneWithLabel';
import TelephoneWithLabelRtl from '../../../public/examples/styled/textInput/telephone/TelephoneWithLabelRtl';
import TelephoneWithoutLabel from '../../../public/examples/styled/textInput/telephone/TelephoneWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageTelephoneInput() {
  const examples = useExamples('textInput/text', 'styled');
  return (
    <>
      <ComponentPageDescription title="Telephone">
        <DeprecationWarning href="/core/textInput" name="TextInput" />
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<TelephoneWithLabel />}
        code={examples ? examples.TelephoneWithLabel : 'Loading'}
      />
      <Preview
        title="Label Rtl"
        preview={<TelephoneWithLabelRtl />}
        code={examples ? examples.TelephoneWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<TelephoneWithoutLabel />}
        code={examples ? examples.TelephoneWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<TelephoneWithHint />}
        code={examples ? examples.TelephoneWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<TelephoneDisabled />}
        code={examples ? examples.TelephoneDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<TelephoneError />}
        code={examples ? examples.TelephoneError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<TelephoneBgColor />}
        code={examples ? examples.TelephoneBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<TelephoneReadonly />}
        code={examples ? examples.TelephoneReadonly : 'Loading'}
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
