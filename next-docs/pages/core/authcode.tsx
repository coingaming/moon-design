import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/authCodeTW/Default';
import ErrorState from '../../public/examples/authCodeTW/ErrorState';
import FourChars from '../../public/examples/authCodeTW/FourChars';
import OnlyDigits from '../../public/examples/authCodeTW/OnlyDigits';
import Stretch from '../../public/examples/authCodeTW/Stretch';
import useExamples from '../../utils/useExamples';

const PageAuthCodeGroup = () => {
  const examples = useExamples('authCodeTW');

  return (
    <>
      <ComponentPageDescription title="AuthCode">
        <p>
          The AuthCode component consists of TextInput components with
          additional logic that supports quick and easy one-time-password
          handling.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Custom length"
        preview={<FourChars />}
        code={examples ? examples.FourChars : 'Loading'}
      />
      <Preview
        title="Only digits"
        preview={<OnlyDigits />}
        code={examples ? examples.OnlyDigits : 'Loading'}
      />
      <Preview
        title="Error state"
        preview={<ErrorState />}
        code={examples ? examples.ErrorState : 'Loading'}
      />
      <Preview
        title="Stretch"
        preview={<Stretch />}
        code={examples ? examples.Stretch : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'length',
            type: 'number',
            required: false,
            default: '6',
            description: 'Number of inputs for inserting single values.',
          },
          {
            name: 'onlyDigits',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, inputs would allow only digit values. Default is alphanumeric.',
          },
          {
            name: 'stretch',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, inputs would get streched to fill the available width',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Default placeholder for input elements.',
          },
          {
            name: 'errorMessage',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Puts element in error state and displays the message.',
          },
          {
            name: 'onChange',
            type: 'function',
            required: false,
            default: '-',
            description:
              'Callback function that gets triggered on single value change.',
          },
          {
            name: 'onSubmit',
            type: 'function',
            required: false,
            default: '-',
            description:
              'Callback function that gets triggered when all single values are entered.',
          },
        ]}
      />
    </>
  );
};

export default PageAuthCodeGroup;
