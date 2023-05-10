import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/authCode/Default';
import ErrorState from '../../public/examples/authCode/ErrorState';
import FourChars from '../../public/examples/authCode/FourChars';
import OnlyDigits from '../../public/examples/authCode/OnlyDigits';
import Stretch from '../../public/examples/authCode/Stretch';
import useExamples from '../../utils/useExamples';

const PageAuthCodeGroup = () => {
  const examples = useExamples('authCode');
  const { name, text, image } = getComponent('AuthCode' as any);
  return (
    <>
      <ComponentPageDescription title={name} image={image} isInProgress>
        <p>{text}</p>
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
            name: 'allowedCharacters',
            type: 'alphanumeric | numeric | alpha',
            required: false,
            default: 'false',
            description:
              'Specifies the type of input characters. Default is alphanumeric.',
          },
          /* {
            name: 'autoFocus',
            type: 'boolean',
            required: false,
            default: 'true',
            description:
              'If true, inputs automatically accept the keyboard focus on data input.',
          }, */
          {
            name: 'stretch',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, inputs would get streched to fill the available width.',
          },
          {
            name: 'expandable',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Defines whether or not the input cells can be stretched to fill the available space between them in the stretchable Auth code component. Matters only with the "stertch" parameter is being set to true.',
          },
          {
            name: 'isPassword',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, inputs display entered values as password masking symbols.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, disables whole Auth code component.',
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
            required: true,
            default: '(value: string) => {}',
            description:
              'Callback function that gets triggered on single value change.',
          },
          {
            name: 'inputSize',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'lg',
            description:
              'Specifies the size of input characters. Default value is "lg".',
          },
          {
            name: 'inputClassName',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Specifies the extra styles for input elements.',
          },
          {
            name: 'containerClassName',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Specifies the extra styles for the container that wraps the set of input elements.',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Specifies the common of the aria phrase for input elements.',
          },
        ]}
      />
    </>
  );
};

export default PageAuthCodeGroup;
