import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import SearchBgColor from '../../../public/styledExamples/textInput/search/SearchBgColor';
import SearchDisabled from '../../../public/styledExamples/textInput/search/SearchDisabled';
import SearchError from '../../../public/styledExamples/textInput/search/SearchError';
import SearchReadonly from '../../../public/styledExamples/textInput/search/SearchReadonly';
import SearchWithHint from '../../../public/styledExamples/textInput/search/SearchWithHint';
import SearchWithLabel from '../../../public/styledExamples/textInput/search/SearchWithLabel';
import SearchWithLabelRtl from '../../../public/styledExamples/textInput/search/SearchWithLabelRtl';
import SearchWithoutLabel from '../../../public/styledExamples/textInput/search/SearchWithoutLabel';
import useStyledExamples from '../../../utils/useStyledExamples';

export default function PageSearchInput() {
  const examples = useStyledExamples('textInput/search');
  return (
    <>
      <ComponentPageDescription title="Search" isDeprecated>
        <DeprecationWarning href="/components/input" name="Input" />
      </ComponentPageDescription>
      <Preview
        title="Label"
        preview={<SearchWithLabel />}
        code={examples ? examples.SearchWithLabel : 'Loading'}
      />
      <Preview
        title="Label RTL"
        preview={<SearchWithLabelRtl />}
        code={examples ? examples.SearchWithLabelRtl : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<SearchWithoutLabel />}
        code={examples ? examples.SearchWithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<SearchWithHint />}
        code={examples ? examples.SearchWithHint : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<SearchDisabled />}
        code={examples ? examples.SearchDisabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<SearchError />}
        code={examples ? examples.SearchError : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<SearchBgColor />}
        code={examples ? examples.SearchBgColor : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<SearchReadonly />}
        code={examples ? examples.SearchReadonly : 'Loading'}
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
