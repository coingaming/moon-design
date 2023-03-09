import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import PasswordBgColor from '../../../public/styledExamples/textInput/password/PasswordBgColor';
import PasswordDisabled from '../../../public/styledExamples/textInput/password/PasswordDisabled';
import PasswordError from '../../../public/styledExamples/textInput/password/PasswordError';
import PasswordReadonly from '../../../public/styledExamples/textInput/password/PasswordReadonly';
import PasswordWithHint from '../../../public/styledExamples/textInput/password/PasswordWithHint';
import PasswordWithLabel from '../../../public/styledExamples/textInput/password/PasswordWithLabel';
import PasswordWithLabelRtl from '../../../public/styledExamples/textInput/password/PasswordWithLabelRtl';
import PasswordWithoutLabel from '../../../public/styledExamples/textInput/password/PasswordWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageTextInput() {
  const examples = useExamples('textInput/password', 'styled');
  return (
    <>
      <ComponentPageDescription title="Password" isDeprecated>
        <DeprecationWarning href="/core/input" name="Input" />
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<PasswordWithLabel />}
        code={examples ? examples.PasswordWithLabel : 'Loading'}
      />
      <Preview
        title="Label RTL"
        preview={<PasswordWithLabelRtl />}
        code={examples ? examples.PasswordWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<PasswordWithoutLabel />}
        code={examples ? examples.PasswordWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<PasswordWithHint />}
        code={examples ? examples.PasswordWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<PasswordDisabled />}
        code={examples ? examples.PasswordDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<PasswordError />}
        code={examples ? examples.PasswordError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<PasswordBgColor />}
        code={examples ? examples.PasswordBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<PasswordReadonly />}
        code={examples ? examples.PasswordReadonly : 'Loading'}
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
