import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Collapsed from '../../public/examples/breadcrumbs/Collapsed';
import CustomDivider from '../../public/examples/breadcrumbs/CustomDivider';
import FourItems from '../../public/examples/breadcrumbs/FourItems';
import OneItem from '../../public/examples/breadcrumbs/OneItem';
import TwoItems from '../../public/examples/breadcrumbs/TwoItems';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('breadcrumbs');
  const { name, text, image } = getComponent('Breadcrumb');
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isRtlSupport
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

export default Example;
