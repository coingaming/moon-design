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
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Colors"
          preview={<Colors />}
          code={examples ? examples.Colors : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
