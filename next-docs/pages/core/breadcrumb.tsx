import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Collapsed from '../../public/examples/breadcrumbs/Collapsed';
import FourItems from '../../public/examples/breadcrumbs/FourItems';
import OneItem from '../../public/examples/breadcrumbs/OneItem';
import TwoItems from '../../public/examples/breadcrumbs/TwoItems';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('breadcrumbs');
  return (
    <>
      <ComponentPageDescription title="Breadcrumb" isInProgress isRtlSupport>
        <p>
          A list of links showing the location of the current page in the
          navigational hierarchy.
        </p>
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
      <PropsTable
        title="Breadcrumb props"
        data={[
          {
            name: 'breadcrumbs',
            type: 'React.ElementType[]',
            required: true,
            default: '-',
            description: 'Contents of breadcrumb',
          },
        ]}
      />
    </>
  );
};

export default Example;
