import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Customization from '../../public/examples/tag/Customization';
import Default from '../../public/examples/tag/Default';
import Icons from '../../public/examples/tag/Icons';
import LetterCases from '../../public/examples/tag/LetterCases';
import Sizes from '../../public/examples/tag/Sizes';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Tag';

const PageTag = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
        <p>Tags can be added or removed from an object.</p>
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
        title="Tag with icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Letter cases"
        preview={<LetterCases />}
        code={examples ? examples.LetterCases : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <PropsTable
        title="Tag props"
        data={[
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'iconLeft',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconRight',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Right icon',
          },
          {
            name: 'isUppercase',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Letter case',
          },
          {
            name: 'size',
            type: '2xs | xs',
            required: false,
            default: 'xs',
            description: 'Size of tag',
          },
        ]}
      />
    </>
  );
};

PageTag.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageTag;
