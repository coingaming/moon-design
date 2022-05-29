
import Preview from "../../components/codePreview/Preview";
import Default from "../../public/examples/select/selectTW/Default";
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
  </div>);
};

export default Example;
