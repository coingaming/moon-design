import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Colors from '../../../public/examples/caption/Colors';
import SemanticTags from '../../../public/examples/caption/SemanticTags';
import TextAlign from '../../../public/examples/caption/TextAlign';
import useExamples from '../../../utils/useExamples';

const PageCaption = () => {
  const examples = useExamples('caption');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Caption</h1>
        <p className="text-lg mt-4">
          By default Caption renders as Span tag with Bulma color.
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

export default PageCaption;
