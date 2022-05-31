import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Animations from '../../public/examples/buttonTW/Animations';
import Disabled from '../../public/examples/buttonTW/Disabled';
import FullWidth from '../../public/examples/buttonTW/FullWidth';
import Icons from '../../public/examples/buttonTW/Icons';
import Sizes from '../../public/examples/buttonTW/Sizes';
import Variants from '../../public/examples/buttonTW/Variants';
import useExamples from '../../utils/useExamples';

const PageButton = () => {
  const examples = useExamples('buttonTW');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">
        <Preview
          title="Variants"
          isGrayBg
          preview={<Variants />}
          code={examples ? examples.VariantsTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.SizesTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Icons"
          isGrayBg
          preview={<Icons />}
          code={examples ? examples.IconsTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Full width"
          isGrayBg
          preview={<FullWidth />}
          code={examples ? examples.FullWidthTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Disabled"
          isGrayBg
          preview={<Disabled />}
          code={examples ? examples.DisabledTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Animations"
          isGrayBg
          preview={<Animations />}
          code={examples ? examples.AnimationsTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default PageButton;
