import Preview from '../../components/codePreview/Preview';
import Collapsed from '../../public/examples/breadcrumbsTW/Collapsed';
import Default from '../../public/examples/breadcrumbsTW/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('breadcrumbsTW');

  return (
    <>
      <Preview
        title=""
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <Preview
        title="Collapsed (more then 4 items)"
        preview={<Collapsed />}
        code={examples ? examples.Collapsed : 'Loading'}
      />
    </>
  );
};

export default Example;
