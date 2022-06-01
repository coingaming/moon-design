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
          preview={<Variants />}
          code={examples ? examples.Variants : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Icons"
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Full width"
          preview={<FullWidth />}
          code={examples ? examples.FullWidth : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Animations"
          preview={<Animations />}
          code={examples ? examples.Animations : 'Loading'}
        />
      </section>
    </div>
  );
};

export default PageButton;
