import Preview from "../../components/codePreview/Preview";
import CaptionTW from "../../public/examples/text/CaptionTW";
import HeadingTW from "../../public/examples/text/HeadingTW";
import TextTW from "../../public/examples/text/TextTW";
import useExamples from "../../utils/useExamples";

const Example = () => {
  const examples = useExamples('loader');

  return (
    <div className="theme-moon-dark text-bulma">
      <section className="mt-8">
        <Preview
          title="Text"
          isGrayBg
          preview={<TextTW />}
          code={examples ? examples.TextTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Heading"
          isGrayBg
          preview={<HeadingTW />}
          code={examples ? examples.HeadingTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Caption"
          isGrayBg
          preview={<CaptionTW />}
          code={examples ? examples.CaptionTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
