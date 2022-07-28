import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Collapsed from '../../public/examples/breadcrumbsTW/Collapsed';
import FourItems from '../../public/examples/breadcrumbsTW/FourItems';
import OneItem from '../../public/examples/breadcrumbsTW/OneItem';
import TwoItems from '../../public/examples/breadcrumbsTW/TwoItems';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('breadcrumbsTW');
  return (
    <>
      <ComponentPageDescription title="Breadcrumb">
        <p>
          As users navigate through your website, they'll want to know where
          they are and how to get back to where they were. Use breadcrumbs to
          show their history and enable them to go up the hierarchy back to the
          start.
        </p>
        <p>
          Breadcrumbs are useful for navigation history but shouldn't be used
          for steps in a process including steps in the future. For that, use
          the planned Steps component.
        </p>
        <p className="font-medium">Clearly present position</p>
        <p>
          Users may come to a given screen through different flows (such as an
          external link or search). So it's important that they always know
          where in your structure they are.
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
    </>
  );
};

export default Example;
