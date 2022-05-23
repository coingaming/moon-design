import React from 'react';
import Preview from "../../components/codePreview/Preview";
import ColorsTW from "../../public/examples/loader/ColorsTW";
import DefaultTW from "../../public/examples/loader/DefaultTW";
import SizesTW from "../../public/examples/loader/SizesTW";
import useExamples from "../../utils/useExamples";

const Example = () => {
  const examples = useExamples('loader');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">
        <Preview
          title="Default"
          isGrayBg
          preview={<DefaultTW />}
          code={examples ? examples.DefaultTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<SizesTW />}
          code={examples ? examples.DefaultTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Colors"
          isGrayBg
          preview={<ColorsTW />}
          code={examples ? examples.ColorsTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
