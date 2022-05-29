import Preview from "../../components/codePreview/Preview";
import Default from "../../public/examples/select/selectTW/Default";
import Disabled from "../../public/examples/select/selectTW/Disabled";
import Error from "../../public/examples/select/selectTW/Error";
import Hint from "../../public/examples/select/selectTW/Hint";
import Sizes from "../../public/examples/select/selectTW/Sizes";
import VisibleItems from "../../public/examples/select/selectTW/VisibleItems";
import useExamples from "../../utils/useExamples";

const Example = () => {
  const examples = useExamples('button');

  return (<div className="theme-moon-light">
    <section className="mt-8">
      <Preview
        title="Default"
        isGrayBg
        preview={<Default />}
        code={examples ? examples.Select : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Disabled"
        isGrayBg
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Hint"
        isGrayBg
        preview={<Hint />}
        code={examples ? examples.Hint : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Error"
        isGrayBg
        preview={<Error />}
        code={examples ? examples.Error : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Sizes"
        isGrayBg
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Visible items"
        isGrayBg
        preview={<VisibleItems />}
        code={examples ? examples.VisibleItems : 'Loading'}
      />
    </section>
  </div>);
};

export default Example;
