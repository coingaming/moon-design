import Preview from '../../components/codePreview/Preview';
import Caption from '../../public/examples/typographyTW/Caption';
import Heading from '../../public/examples/typographyTW/Heading';
import Text from '../../public/examples/typographyTW/Text';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('typographyTW');

  return (
    <div className="theme-moon-dark text-bulma">
      <section className="mt-8">
        <Preview
          title="Text"
          isGrayBg
          preview={<Text />}
          code={examples ? examples.TextTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Heading"
          isGrayBg
          preview={<Heading />}
          code={examples ? examples.HeadingTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Caption"
          isGrayBg
          preview={<Caption />}
          code={examples ? examples.CaptionTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
