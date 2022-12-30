import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import DateBgColor from '../../../public/examples/textInput/date/DateBgColor';
import DateDisabled from '../../../public/examples/textInput/date/DateDisabled';
import DateError from '../../../public/examples/textInput/date/DateError';
import DateReadonly from '../../../public/examples/textInput/date/DateReadonly';
import DateWithHint from '../../../public/examples/textInput/date/DateWithHint';
import DateWithLabel from '../../../public/examples/textInput/date/DateWithLabel';
import DateWithLabelRtl from '../../../public/examples/textInput/date/DateWithLabelRtl';
import DateWithoutLabel from '../../../public/examples/textInput/date/DateWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageDateInput() {
  const examples = useExamples('textInput/date');
  return (
    <>
      <ComponentPageDescription title="Date">
        <DeprecationWarning href="/core/textInput" name="TextInput" />
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<DateWithLabel />}
        code={examples ? examples.DateWithLabel : 'Loading'}
      />
      <Preview
        title="Label RTL"
        preview={<DateWithLabelRtl />}
        code={examples ? examples.DateWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<DateWithoutLabel />}
        code={examples ? examples.DateWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<DateWithHint />}
        code={examples ? examples.DateWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<DateDisabled />}
        code={examples ? examples.DateDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<DateError />}
        code={examples ? examples.DateError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<DateBgColor />}
        code={examples ? examples.DateBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<DateReadonly />}
        code={examples ? examples.DateReadonly : 'Loading'}
      />
      <PropsTable
        title="Props for TextInput component"
        data={[
          {
            name: 'inputSize',
            type: 'medium | large | xlarge',
            required: 'true',
            default: 'medium',
            description: 'Input size',
          },
          {
            name: 'type',
            type: 'TextInputTypes',
            required: 'true',
            default: 'text',
            description: 'Different types of input',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: 'false',
            default: '',
            description: 'Required for medium size',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: 'false',
            default: '',
            description: 'Placeholder for input',
          },
          {
            name: 'id',
            type: 'string',
            required: 'false',
            default: '-',
            description: 'Set input id',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: 'false',
            default: '',
            description: 'Informative or error message under input',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: 'false',
            default: '',
            description: 'Set error state for input',
          },
          {
            name: 'showPasswordText',
            type: 'JSX.Element | string',
            required: 'false',
            default: '',
            description:
              'Only for input type password. Text for toggle button: show/hide password',
          },
          {
            name: 'backgroundColor',
            type: 'ColorProps',
            required: 'false',
            default: 'transparent',
            description: 'Background color',
          },
        ]}
      />
    </>
  );
}
