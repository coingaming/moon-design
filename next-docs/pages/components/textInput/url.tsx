import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import UrlBgColor from '../../../public/styledExamples/textInput/url/UrlBgColor';
import UrlDisabled from '../../../public/styledExamples/textInput/url/UrlDisabled';
import UrlError from '../../../public/styledExamples/textInput/url/UrlError';
import UrlReadonly from '../../../public/styledExamples/textInput/url/UrlReadonly';
import UrlWithHint from '../../../public/styledExamples/textInput/url/UrlWithHint';
import UrlWithLabel from '../../../public/styledExamples/textInput/url/UrlWithLabel';
import UrlWithLabelRtl from '../../../public/styledExamples/textInput/url/UrlWithLabelRtl';
import UrlWithoutLabel from '../../../public/styledExamples/textInput/url/UrlWithoutLabel';
import useExamples from '../../../utils/useExamples';

export default function PageUrlInput() {
  const examples = useExamples('textInput/text', 'styled');
  return (
    <>
      <ComponentPageDescription title="Url" isDeprecated>
        <DeprecationWarning href="/core/input" name="Input" />
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<UrlWithLabel />}
        code={examples ? examples.UrlWithLabel : 'Loading'}
      />
      <Preview
        title="Label RTL"
        preview={<UrlWithLabelRtl />}
        code={examples ? examples.UrlWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<UrlWithoutLabel />}
        code={examples ? examples.UrlWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<UrlWithHint />}
        code={examples ? examples.UrlWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<UrlDisabled />}
        code={examples ? examples.UrlDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<UrlError />}
        code={examples ? examples.UrlError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<UrlBgColor />}
        code={examples ? examples.UrlBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<UrlReadonly />}
        code={examples ? examples.UrlReadonly : 'Loading'}
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
