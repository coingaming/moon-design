import Preview from "../../components/codePreview/Preview";
import ContentHeaderTW from "../../public/examples/accordionNew/ContentHeaderTW";
import ContentOutsideSizesTW from "../../public/examples/accordionNew/ContentOutsideSizesTW";
import ContentOutsideTW from "../../public/examples/accordionNew/ContentOutsideTW";
import DefaultTW from "../../public/examples/accordionNew/DefaultTW";
import DisabledTW from "../../public/examples/accordionNew/DisabledTW";
import OpenDefaultTW from "../../public/examples/accordionNew/OpenDefaultTW";
import SizesTW from "../../public/examples/accordionNew/SizesTW";
import WithoutButtonTW from "../../public/examples/accordionNew/WithoutButtonTW";
import useExamples from "../../utils/useExamples";

const Example = () => {
  const examples = useExamples('core/accordion');

  return (<div className="theme-moon-dark">
    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Default"
        isGrayBg
        preview={<DefaultTW />}
        code={examples ? examples.DefaultTW : 'Loading'}
      />
    </section>

    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Open by default"
        isGrayBg
        preview={<OpenDefaultTW />}
        code={examples ? examples.OpenDefaultTW : 'Loading'}
      />
    </section>

    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Without button"
        isGrayBg
        preview={<WithoutButtonTW />}
        code={examples ? examples.WithoutButtonTW : 'Loading'}
      />
    </section>

    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Disable open"
        isGrayBg
        preview={<DisabledTW />}
        code={examples ? examples.DisabledTW : 'Loading'}
      />
    </section>

    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Content outside"
        isGrayBg
        preview={<ContentOutsideTW />}
        code={examples ? examples.ContentOutsideTW : 'Loading'}
      />
    </section>

    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Header content"
        isGrayBg
        preview={<ContentHeaderTW />}
        code={examples ? examples.ContentHeaderTW : 'Loading'}
      />
    </section>

    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Sizes"
        isGrayBg
        preview={<SizesTW />}
        code={examples ? examples.SizesTW : 'Loading'}
      />
    </section>

    <section className="mt-8 text-3xl font-bold">
      <Preview
        title="Sizes: content outside"
        isGrayBg
        preview={<ContentOutsideSizesTW />}
        code={examples ? examples.ContentOutsideSizesTW : 'Loading'}
      />
    </section>
  </div>);
};

export default Example;
