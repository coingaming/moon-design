import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import TimeBgColor from '../../../public/examples/styled/textInput/time/TimeBgColor';
import TimeDisabled from '../../../public/examples/styled/textInput/time/TimeDisabled';
import TimeError from '../../../public/examples/styled/textInput/time/TimeError';
import TimeReadonly from '../../../public/examples/styled/textInput/time/TimeReadonly';
import TimeWithHint from '../../../public/examples/styled/textInput/time/TimeWithHint';
import TimeWithLabel from '../../../public/examples/styled/textInput/time/TimeWithLabel';
import TimeWithLabelRtl from '../../../public/examples/styled/textInput/time/TimeWithLabelRtl';
import TimeWithoutLabel from '../../../public/examples/styled/textInput/time/TimeWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageTimeInput() {
  const examples = useExamples('textInput/text', 'styled');
  return (
    <>
      <ComponentPageDescription title="Time">
        <DeprecationWarning href="/core/textInput" name="TextInput" />
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<TimeWithLabel />}
        code={examples ? examples.TimeWithLabel : 'Loading'}
      />
      <Preview
        title="Label RTL"
        preview={<TimeWithLabelRtl />}
        code={examples ? examples.TimeWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<TimeWithoutLabel />}
        code={examples ? examples.TimeWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<TimeWithHint />}
        code={examples ? examples.TimeWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<TimeDisabled />}
        code={examples ? examples.TimeDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<TimeError />}
        code={examples ? examples.TimeError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<TimeBgColor />}
        code={examples ? examples.TimeBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<TimeReadonly />}
        code={examples ? examples.TimeReadonly : 'Loading'}
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
