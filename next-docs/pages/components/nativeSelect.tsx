import Link from 'next/link';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Bg from '../../public/examples/nativeSelect/Bg';
import Default from '../../public/examples/nativeSelect/Default';
import Sizes from '../../public/examples/nativeSelect/Sizes';
import States from '../../public/examples/nativeSelect/States';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'NativeSelect';

const PageNativeSelect = () => {
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
          When collapsed it shows the currently selected option and when
          expanded, it shows a scrollable list of predefined options for the
          user to choose from. Moon.io supports two types of selects, one whichs
          opens browser's native styling option list and{' '}
          <Link
            href="/components/dropdown"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
          >
            Dropdown
          </Link>
          .
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

      <PropsTable
        title="Input props"
        data={[
          {
            name: 'size',
            type: 'sm | md | lg',
            required: false,
            default: 'md',
            description: 'Select size',
          },
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for select',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Set disabled/non-disabled',
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

PageNativeSelect.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageNativeSelect;
