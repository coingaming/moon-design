import Preview from '../components/codePreview/Preview';
import ComponentPageDescription from '../components/ComponentPageDescription';
import Caption from '../public/examples/typography/Caption';
import Colors from '../public/examples/typography/Colors';
import Heading from '../public/examples/typography/Heading';
import Text from '../public/examples/typography/Text';
import useExamples from '../utils/useExamples';

const Example = () => {
  const examples = useExamples('typography');
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
      <Preview
        title="Custom Colours"
        preview={<Colors />}
        code={examples ? examples.Colors : 'Loading'}
      />
    </>
  );
};

export default Example;
