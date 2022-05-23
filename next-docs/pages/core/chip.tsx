import Preview from "../../components/codePreview/Preview";
import ActiveTW from "../../public/examples/chip/ActiveTW";
import IconsTW from "../../public/examples/chip/IconsTW";
import IsStrokeIconsTW from "../../public/examples/chip/IsStrokeIconsTW";
import IsStrokeTW from "../../public/examples/chip/IsStrokeTW";
import SizesTW from "../../public/examples/chip/SizesTW";
import useExamples from "../../utils/useExamples";

const Example = () => {
  const examples = useExamples('chip');

  return (<div className="theme-moon-dark">
    <section className="mt-8">
      <Preview
        title="Sizes"
        isGrayBg
        preview={<SizesTW />}
        code={examples ? examples.SizesTW : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Active"
        isGrayBg
        preview={<ActiveTW />}
        code={examples ? examples.ActiveTW : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Icons"
        isGrayBg
        preview={<IconsTW />}
        code={examples ? examples.IconsTW : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Is Stroke"
        isGrayBg
        preview={<IsStrokeTW />}
        code={examples ? examples.IsStrokeTW : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Is Stroke with Icons"
        isGrayBg
        preview={<IsStrokeIconsTW />}
        code={examples ? examples.IsStrokeIconsTW : 'Loading'}
      />
    </section>
  </div>);
};

export default Example;
