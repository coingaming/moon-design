import React from 'react';
import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Colors from '../../../public/examples/caption/Colors';
import FontWeight from '../../../public/examples/caption/FontWeight';
import SemanticTags from '../../../public/examples/caption/SemanticTags';
import Sizes from '../../../public/examples/caption/Sizes';
import TextAlign from '../../../public/examples/caption/TextAlign';
import useExamples from '../../../utils/useExamples';

const PageCaption = () => {
  const examples = useExamples('caption');
  return (
    <>
      <section className="grid gap-4 mt-8">
        <Heading as="h1" size={48}>
          Caption
        </Heading>
        <Text>
          By default Caption renders as Span tag with Bulma color and size of
          10px.
        </Text>
        <Text>
          We treat semantics and visuals as two totally separate things.
        </Text>
      </section>
      {/* Colors */}
      <section className="mt-8">
        <Preview
          title="Colors"
          isGrayBg
          preview={<Colors />}
          code={examples ? examples.Colors : 'Loading'}
        />
      </section>
      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>
      {/* Font Weight */}
      <section className="mt-8">
        <Preview
          title="Font Weight"
          isGrayBg
          preview={<FontWeight />}
          code={examples ? examples.FontWeight : 'Loading'}
        />
      </section>
      {/* Text Align */}
      <section className="mt-8">
        <Preview
          title="Text Align"
          isGrayBg
          preview={<TextAlign />}
          code={examples ? examples.TextAlign : 'Loading'}
        />
      </section>
      {/* Semantic tags */}
      <section className="mt-8">
        <Preview
          title="Semantic tags"
          isGrayBg
          preview={<SemanticTags />}
          code={examples ? examples.SemanticTags : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: '-',
            description: 'Caption color',
          },
          {
            name: 'size',
            type: '9 | 10',
            required: false,
            default: '10',
            description: 'Caption size',
          },
          {
            name: 'isRegular',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Font weight',
          },
          {
            name: 'textAlign',
            type: 'left | center | right | justify | initial | inherit',
            required: false,
            default: '-',
            description: 'Alignment',
          },
        ]}
      />
    </>
  );
};

export default PageCaption;
