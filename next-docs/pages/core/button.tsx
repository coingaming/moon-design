import React from 'react';
import Preview from "../../components/codePreview/Preview";
import AnimationsTW from "../../public/examples/button/AnimationsTW";
import DisabledTW from "../../public/examples/button/DisabledTW";
import FullWidthTW from "../../public/examples/button/FullWidthTW";
import IconsTW from "../../public/examples/button/IconsTW";
import SizesTW from "../../public/examples/button/SizesTW";
import VariantsTW from "../../public/examples/button/VariantsTW";
import useExamples from "../../utils/useExamples";

const PageButton = () => {
  const examples = useExamples('button');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">
        <Preview
          title="Variants"
          isGrayBg
          preview={<VariantsTW />}
          code={examples ? examples.VariantsTW : 'Loading'}
        />
      </section>

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
          title="Icons"
          isGrayBg
          preview={<IconsTW />}
          code={examples ? examples.IconsTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Full width"
          isGrayBg
          preview={<FullWidthTW />}
          code={examples ? examples.FullWidthTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Disabled"
          isGrayBg
          preview={<DisabledTW />}
          code={examples ? examples.DisabledTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Animations"
          isGrayBg
          preview={<AnimationsTW />}
          code={examples ? examples.AnimationsTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default PageButton;
