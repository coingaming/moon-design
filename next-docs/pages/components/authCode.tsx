import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/authCode/Default';
import ErrorState from '../../public/examples/authCode/ErrorState';
import FourChars from '../../public/examples/authCode/FourChars';
import useExamples from '../../utils/useExamples';
import AllowedCharacters from '../../public/examples/authCode/AllowedCharacters';
import Stretch from '../../public/examples/authCode/Stretch';
import Expandable from '../../public/examples/authCode/Expandable';
import Placeholder from '../../public/examples/authCode/Placeholder';
import Sizes from '../../public/examples/authCode/Sizes';
import IsPassword from '../../public/examples/authCode/IsPassword';
import ReactHookForm from '../../public/examples/authCode/ReactHookForm';
import ReactHookFormAuto from '../../public/examples/authCode/ReactHookFormAuto';

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
        title="React Hook Form integration - Manual Submit"
        preview={<ReactHookForm />}
        code={examples ? examples.ReactHookForm : 'Loading'}
      />
      <Preview
        title="React Hook Form integration - Auto Submit"
        preview={<ReactHookFormAuto />}
        code={examples ? examples.ReactHookFormAuto : 'Loading'}
      />
      <Preview
        title="Allowed Characters"
        description='By default you can type numbers and letters in the inputs as the allowedCharacters prop is defaulted to alphanumeric but you can also choose between allowing only letters or only numbers by setting the prop to alpha or numeric respectively.'
        preview={<AllowedCharacters />}
        code={examples ? examples.AllowedCharacters : 'Loading'}
      />
      <Preview
        title="Custom length"
        preview={<FourChars />}
        code={examples ? examples.FourChars : 'Loading'}
      />
      <Preview
        title="Error state"
        preview={<ErrorState />}
        code={examples ? examples.ErrorState : 'Loading'}
      />
      <Preview
        title="Placeholder"
        preview={<Placeholder />}
        code={examples ? examples.Placeholder : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Password"
        preview={<IsPassword />}
        code={examples ? examples.IsPassword : 'Loading'}
      />
      <Preview
        title="Stretch"
        preview={<Stretch />}
        code={examples ? examples.Stretch : 'Loading'}
      />
      <Preview
        title="Expandable"
        preview={<Expandable />}
        code={examples ? examples.Expandable : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'onChange',
            type: '(value: string) => {}',
            required: true,
            default: '-',
            description:
              'Callback function that gets triggered on single value change.',
          },
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
            default: 'alphanumeric',
            description:
              'Specifies the type of input characters.',
          },
          {
            name: 'autoFocus',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, inputs automatically accept the keyboard focus on data input.',
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
            name: 'isValid',
            type: 'boolean',
            required: false,
            default: 'true',
            description:
              'Puts element in error state and displays the message.',
          },
          {
            name: 'inputSize',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'lg',
            description:
              'Specifies the size of input characters.',
          },
          {
            name: 'className',
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
            default: 'Character `${i + 1}`.',
            description:
              'Specifies the common of the aria phrase for input elements.',
          },
          {
            name: 'Deprecated props',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'stretch',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, inputs would get stretched to fill the available width.',
          },
          {
            name: 'expandable',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Defines whether or not the input cells can be stretched to fill the available space between them in the stretchable Auth code component. Matters only with the "stretch" parameter is being set to true.',
          },
        ]}
      />
    </>
  );
};

export default PageAuthCodeGroup;
