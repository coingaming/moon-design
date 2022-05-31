import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Colors from '../../public/examples/loaderTW/Colors';
import Default from '../../public/examples/loaderTW/Default';
import Sizes from '../../public/examples/loaderTW/Sizes';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('loaderTW');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">
        <Preview
          title="Default"
          isGrayBg
          preview={<Default />}
          code={examples ? examples.DefaultTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.DefaultTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Colors"
          isGrayBg
          preview={<Colors />}
          code={examples ? examples.ColorsTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
