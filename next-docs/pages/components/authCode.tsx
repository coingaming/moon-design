import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/authCode/Default';
import ErrorState from '../../public/examples/authCode/ErrorState';
import FourChars from '../../public/examples/authCode/FourChars';
import OnlyDigits from '../../public/examples/authCode/OnlyDigits';
import useExamples from '../../utils/useExamples';

const PageAuthCodeGroup = () => {
  const examples = useExamples('authCode');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">AuthCode</h1>
        <p className="text-lg mt-4">
          <h3>
            The AuthCode component consists of TextInput components with additional logic that supports quick and easy one-time-password handling.
          </h3>
        </p>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Custom length"
          preview={<FourChars />}
          code={examples ? examples.FourChars : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Only digits"
          preview={<OnlyDigits />}
          code={examples ? examples.OnlyDigits : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Error state"
          preview={<ErrorState />}
          code={examples ? examples.ErrorState : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'length',
            type: 'number',
            required: false,
            default: '6',
            description:
              'Number of inputs for inserting single values.',
          },
          {
            name: 'onlyDigits',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'If true, inputs would allow only digit values. Default is alphanumeric.',
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
            description: 'Puts element in error state and displays the message.',
          },
          {
            name: 'onChange',
            type: 'function',
            required: false,
            default: '-',
            description: 'Callback function that gets triggered on single value change.',
          },
          {
            name: 'onSubmit',
            type: 'function',
            required: false,
            default: '-',
            description: 'Callback function that gets triggered when all single values are entered.',
          },
        ]}
      />
    </>
  );
};

export default PageAuthCodeGroup;
