import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DefaultCircular from '../../public/examples/progressTw/circular/DefaultCircular';
import Default from '../../public/examples/progressTw/linear/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examplesLinear = useExamples('progressTW/linear');
  const examplesCircular = useExamples('progressTW/circular');
  return (
    <>
      <ComponentPageDescription title="Preogress">
       
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examplesLinear ? examplesLinear.Default : 'Loading'}
      />

      <Preview
        title="Default"
        preview={<DefaultCircular />}
        code={examplesCircular ? examplesCircular.DefaultCircular : 'Loading'}
      />
    </>
  );
};

export default Example;
