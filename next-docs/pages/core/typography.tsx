import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Caption from '../../public/examples/typographyTW/Caption';
import Heading from '../../public/examples/typographyTW/Heading';
import Text from '../../public/examples/typographyTW/Text';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('typographyTW');
  return (
    <>
      <ComponentPageDescription title="Typography">
        <p>Typography includes text, headings, and captions.</p>
      </ComponentPageDescription>
      <Preview
        title="Text"
        preview={<Text />}
        code={examples ? examples.Text : 'Loading'}
      />
      <Preview
        title="Heading"
        preview={<Heading />}
        code={examples ? examples.Heading : 'Loading'}
      />
      <Preview
        title="Caption"
        preview={<Caption />}
        code={examples ? examples.Caption : 'Loading'}
      />
    </>
  );
};

export default Example;
