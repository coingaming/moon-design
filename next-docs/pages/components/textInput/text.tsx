import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import TextBgColor from '../../../public/examples/styled/textInput/text/TextBgColor';
import TextBgColorRtl from '../../../public/examples/styled/textInput/text/TextBgColorRtl';
import TextDisabled from '../../../public/examples/styled/textInput/text/TextDisabled';
import TextError from '../../../public/examples/styled/textInput/text/TextError';
import TextErrorRtl from '../../../public/examples/styled/textInput/text/TextErrorRtl';
import TextReadonly from '../../../public/examples/styled/textInput/text/TextReadonly';
import TextReadonlyRtl from '../../../public/examples/styled/textInput/text/TextReadonlyRtl';
import TextWithHint from '../../../public/examples/styled/textInput/text/TextWithHint';
import TextWithLabel from '../../../public/examples/styled/textInput/text/TextWithLabel';
import TextWithoutLabel from '../../../public/examples/styled/textInput/text/TextWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageTextInput() {
  const examples = useExamples('textInput/text', 'styled');
  return (
    <>
      <ComponentPageDescription title="Text">
        <DeprecationWarning href="/core/textInput" name="TextInput" />
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<TextWithLabel />}
        code={examples ? examples.TextWithLabel : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<TextWithoutLabel />}
        code={examples ? examples.TextWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<TextWithHint />}
        code={examples ? examples.TextWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<TextDisabled />}
        code={examples ? examples.TextDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<TextError />}
        code={examples ? examples.TextError : 'Loading'}
      />
      <Preview
        title="Error Rtl"
        preview={<TextErrorRtl />}
        code={examples ? examples.TextErrorRtl : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<TextBgColor />}
        code={examples ? examples.TextBgColor : 'Loading'}
      />
      <Preview
        title="Input with background color Rtl"
        preview={<TextBgColorRtl />}
        code={examples ? examples.TextBgColorRtl : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<TextReadonly />}
        code={examples ? examples.TextReadonly : 'Loading'}
      />
      <Preview
        title="Readonly Rtl"
        preview={<TextReadonlyRtl />}
        code={examples ? examples.TextReadonlyRtl : 'Loading'}
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
