import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Customization from '../../public/examples/textarea/Customization';
import Default from '../../public/examples/textarea/Default';
import States from '../../public/examples/textarea/States';
import WithBtn from '../../public/examples/textarea/WithBtn';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Textarea';

const PageTextarea = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="States"
        preview={<States />}
        code={examples ? examples.States : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />

      <Preview
        title="Text area with button"
        preview={<WithBtn />}
        code={examples ? examples.WithBtn : 'Loading'}
      />
      <PropsTable
        title="Textarea props"
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
            default: '-',
            description: 'Error state of Textarea',
          },
        ]}
      />
    </>
  );
};

PageTextarea.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageTextarea;
