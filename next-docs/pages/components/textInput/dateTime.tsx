import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import DateTimeBgColor from '../../../public/examples/styled/textInput/datetime/DateTimeBgColor';
import DateTimeDisabled from '../../../public/examples/styled/textInput/datetime/DateTimeDisabled';
import DateTimeError from '../../../public/examples/styled/textInput/datetime/DateTimeError';
import DateTimeReadonly from '../../../public/examples/styled/textInput/datetime/DateTimeReadonly';
import DateTimeWithHint from '../../../public/examples/styled/textInput/datetime/DateTimeWithHint';
import DateTimeWithLabel from '../../../public/examples/styled/textInput/datetime/DateTimeWithLabel';
import DateTimeWithLabelRtl from '../../../public/examples/styled/textInput/datetime/DateTimeWithLabelRtl';
import DateTimeWithoutLabel from '../../../public/examples/styled/textInput/datetime/DateTimeWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageDateInput() {
  const examples = useExamples('textInput/datetime', 'styled');
  return (
    <>
      <ComponentPageDescription title="Date Time">
        <DeprecationWarning href="/core/textInput" name="TextInput" />
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
