import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import AllowedCharacters from '../../public/examples/authCode/AllowedCharacters';
import Default from '../../public/examples/authCode/Default';
import ErrorState from '../../public/examples/authCode/ErrorState';
import FourChars from '../../public/examples/authCode/FourChars';
import Gaps from '../../public/examples/authCode/Gaps';
import Hint from '../../public/examples/authCode/Hint';
import IsPassword from '../../public/examples/authCode/IsPassword';
import Placeholder from '../../public/examples/authCode/Placeholder';
import ReactHookForm from '../../public/examples/authCode/ReactHookForm';
import ReactHookFormAuto from '../../public/examples/authCode/ReactHookFormAuto';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'AuthCode';

const PageAuthCode = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isAriaSupport
        isRtlSupport
      >
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
        description="By default you can type numbers and letters in the inputs as the allowedCharacters prop is defaulted to alphanumeric but you can also choose between allowing only letters or only numbers by setting the prop to alpha or numeric respectively."
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
        title="Hint message"
        preview={<Hint />}
        code={examples ? examples.Hint : 'Loading'}
      />
      <Preview
        title="Placeholder"
        preview={<Placeholder />}
        code={examples ? examples.Placeholder : 'Loading'}
      />
      <Preview
        title="Password"
        preview={<IsPassword />}
        code={examples ? examples.IsPassword : 'Loading'}
      />
      <Preview
        title="Different gaps"
        preview={<Gaps />}
        code={examples ? examples.Gaps : 'Loading'}
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
            description: 'Specifies the type of input characters.',
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
            description: 'If true, disables whole Auth code component.',
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
        ]}
      />
    </>
  );
};

PageAuthCode.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageAuthCode;
