import { ReactNode } from 'react';
import Link from 'next/link';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/group/Default';
import Direction from '../../public/examples/group/Direction';
import Sizes from '../../public/examples/group/Sizes';
import States from '../../public/examples/group/States';
import Variant from '../../public/examples/group/Variant';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Group';

const PageGroup = () => {
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
        title="Direction"
        preview={<Direction />}
        code={examples ? examples.Direction : 'Loading'}
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
        title="Different variant"
        preview={<Variant />}
        code={examples ? examples.Variant : 'Loading'}
      />
      <PropsTable
        title="Group"
        data={[
          {
            name: 'orientation',
            type: 'vertical | horizontal',
            required: false,
            default: 'vertical',
            description: 'Two ways you can stack your input groups.',
          },
          {
            name: 'size',
            type: 'sm | md | lg',
            required: false,
            default: 'md',
            description: 'Group size',
          },
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for both input/select',
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
      <p>
        * All the subComponents have the same props as{' '}
        <Link
          href="/components/input"
          className="transition-colors underline hover:text-piccolo"
        >
          Input
        </Link>
        ,{' '}
        <Link
          href="/components/insetInput"
          className="transition-colors underline hover:text-piccolo"
        >
          InsetInput
        </Link>
        , and Select
      </p>
    </>
  );
};

PageGroup.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageGroup;
