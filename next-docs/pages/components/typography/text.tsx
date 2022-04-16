import React from 'react';
import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Colors from '../../../public/examples/text/Colors';
import FontWeight from '../../../public/examples/text/FontWeight';
import LineHeight from '../../../public/examples/text/LineHeight';
import SemanticTags from '../../../public/examples/text/SemanticTags';
import Sizes from '../../../public/examples/text/Sizes';
import TextAlign from '../../../public/examples/text/TextAlign';
import Underline from '../../../public/examples/text/Underline';
import Uppercase from '../../../public/examples/text/Uppercase';
import useExamples from '../../../utils/useExamples';

const PageText = () => {
  const examples = useExamples('text');
  return (
    <>
      <section className="grid gap-4 mt-8">
        <Heading as="h1" size={48}>
          Text
        </Heading>
        <Text>
          By default Text renders as Paragpaph tag with Bulma color, regular
          font-weight, and size of 16px.
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
      {/* Uppercase */}
      <section className="mt-8">
        <Preview
          title="Uppercase"
          isGrayBg
          preview={<Uppercase />}
          code={examples ? examples.Uppercase : 'Loading'}
        />
      </section>
      {/* Underline */}
      <section className="mt-8">
        <Preview
          title="Underline"
          isGrayBg
          preview={<Underline />}
          code={examples ? examples.Underline : 'Loading'}
        />
      </section>
      {/* Line height */}
      <section className="mt-8">
        <Preview
          title="Line height"
          isGrayBg
          preview={<LineHeight />}
          code={examples ? examples.LineHeight : 'Loading'}
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
            description: 'Text color',
          },
          {
            name: 'size',
            type: '9 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72',
            required: false,
            default: '16',
            description: 'Text size',
          },
          {
            name: 'isBold',
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
          {
            name: 'isUppercase',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Uppercase Text',
          },
          {
            name: 'isUnderline',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Underline Text',
          },
          {
            name: 'lineHeight',
            type: 'number',
            required: false,
            default: 'pre-calculated',
            description: 'Custom line height',
          },
        ]}
      />
    </>
  );
};

export default PageText;
