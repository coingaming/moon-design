import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Bg from '../../public/examples/input/Bg';
import Controled from '../../public/examples/input/Controled';
import Default from '../../public/examples/input/Default';
import Sizes from '../../public/examples/input/Sizes';
import States from '../../public/examples/input/States';
import Types from '../../public/examples/input/Types';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Input';

const PageInput = () => {
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

      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
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
      <Preview
        title="Controlling an input with a state variable"
        preview={<Controled />}
        code={examples ? examples.Controled : 'Loading'}
      />
      <PropsTable
        title="Input props"
        data={[
          {
            name: 'size',
            type: 'sm | md | lg',
            required: false,
            default: 'md',
            description: 'Input size',
          },
          {
            name: 'type',
            type: 'date | datetime-local | email | number | password | search | tel | text | time | url | string',
            required: false,
            default: 'text',
            description: 'Input type',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Placeholder for input',
          },
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for input',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Set disabled/non-disabled',
          },
          {
            name: 'dir',
            type: 'ltr | rtl | auto',
            required: false,
            default: '-',
            description: 'RTL/LTR direction of label',
          },
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

PageInput.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageInput;
