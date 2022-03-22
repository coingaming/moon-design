import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Colors from '../../../public/examples/text/Colors';
import FontWeight from '../../../public/examples/text/FontWeight';
import SemanticTags from '../../../public/examples/text/SemanticTags';
import Sizes from '../../../public/examples/text/Sizes';
import TextAlign from '../../../public/examples/text/TextAlign';
import useExamples from '../../../utils/useExamples';

const PageText = () => {
  const examples = useExamples('text');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Text</h1>
        <p className="text-lg mt-4">
          By default Text renders as Paragpaph tag with Bulma color, regular
          font-weight, and size of 16px.
          <br />
          We have predefined sizes: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48 |
          56 | 64 | 72.
          <br />
          We treat semantics and visuals as two totally separate things.
        </p>
      </section>
      {/* Colors */}
      <section className="mt-8">
        <Preview
          title="Colors"
          preview={<Colors />}
          code={examples ? examples.Colors : 'Loading'}
        />
      </section>
      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>
      {/* Font Weight */}
      <section className="mt-8">
        <Preview
          title="Font Weight"
          preview={<FontWeight />}
          code={examples ? examples.FontWeight : 'Loading'}
        />
      </section>
      {/* Text Align */}
      <section className="mt-8">
        <Preview
          title="Text Align"
          preview={<TextAlign />}
          code={examples ? examples.TextAlign : 'Loading'}
        />
      </section>
      {/* Semantic tags */}
      <section className="mt-8">
        <Preview
          title="Semantic tags"
          preview={<SemanticTags />}
          code={examples ? examples.SemanticTags : 'Loading'}
        />
      </section>
    </>
  );
};

export default PageText;
