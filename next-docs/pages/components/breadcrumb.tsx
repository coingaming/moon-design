import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Collapsed from '../../public/examples/breadcrumb/Collapsed';
import CustomDivider from '../../public/examples/breadcrumb/CustomDivider';
import FourItems from '../../public/examples/breadcrumb/FourItems';
import OneItem from '../../public/examples/breadcrumb/OneItem';
import TwoItems from '../../public/examples/breadcrumb/TwoItems';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Breadcrumb';

const PageBreadcrumb = () => {
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
        title="Five and more items"
        preview={<Collapsed />}
        code={examples ? examples.Collapsed : 'Loading'}
      />
      <Preview
        title="Four items"
        preview={<FourItems />}
        code={examples ? examples.FourItems : 'Loading'}
      />
      <Preview
        title="Two items"
        preview={<TwoItems />}
        code={examples ? examples.TwoItems : 'Loading'}
      />
      <Preview
        title="One item"
        preview={<OneItem />}
        code={examples ? examples.OneItem : 'Loading'}
      />
      <Preview
        title="Icon as starting item & custom divider"
        preview={<CustomDivider />}
        code={examples ? examples.CustomDivider : 'Loading'}
      />
      <PropsTable
        title="Breadcrumb props"
        data={[
          {
            name: 'breadcrumbs',
            type: 'React.ReactNode[]',
            required: true,
            default: '-',
            description: 'Contents of breadcrumb',
          },
          {
            name: 'divider',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Custom divider element',
          },
        ]}
      />
    </>
  );
};

PageBreadcrumb.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageBreadcrumb;
