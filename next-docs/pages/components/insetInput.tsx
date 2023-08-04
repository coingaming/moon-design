import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Bg from '../../public/examples/insetInput/Bg';
import Default from '../../public/examples/insetInput/Default';
import States from '../../public/examples/insetInput/States';
import Types from '../../public/examples/insetInput/Types';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'InsetInput';

const PageInsetInput = () => {
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
        <p>
          These types of input fields are used on their own, or in combination
          with other inputs such as number entry, date picker, etc.
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>{`
    <InsetInput>
      <InsetInput.Label>...</InsetInput.Label>
    </InsetInput>
      `}</ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Different states"
        preview={<States />}
        code={examples ? examples.States : 'Loading'}
      />
      <Preview
        title="Custom styles"
        preview={<Bg />}
        code={examples ? examples.Bg : 'Loading'}
      />
      <Preview
        title="TextInput types"
        preview={<Types />}
        code={examples ? examples.Types : 'Loading'}
      />
      <PropsTable
        title="InsetInput"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for Input',
          },
        ]}
      />

      <PropsTable
        title="InsetInput.Label"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

PageInsetInput.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageInsetInput;
