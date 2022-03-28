import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Colors from '../../../public/examples/heading/Colors';
import FontWeight from '../../../public/examples/heading/FontWeight';
import SemanticTags from '../../../public/examples/heading/SemanticTags';
import Sizes from '../../../public/examples/heading/Sizes';
import TextAlign from '../../../public/examples/heading/TextAlign';
import useExamples from '../../../utils/useExamples';

const PageHeading = () => {
  const examples = useExamples('heading');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Heading</h1>
        <p className="text-lg mt-4">
          By default Heading renders as H3 tag with Bulma color, bold
          font-weight, and size of 16px.
          <br />
          We have predefined sizes: 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72.
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

export default PageHeading;
