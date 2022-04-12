import React from 'react';
import { Heading, Text } from '@heathmont/moon-core';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Colors from '../../../public/examples/heading/Colors';
import FontWeight from '../../../public/examples/heading/FontWeight';
import LineHeight from '../../../public/examples/heading/LineHeight';
import SemanticTags from '../../../public/examples/heading/SemanticTags';
import Sizes from '../../../public/examples/heading/Sizes';
import TextAlign from '../../../public/examples/heading/TextAlign';
import Underline from '../../../public/examples/heading/Underline';
import Uppercase from '../../../public/examples/heading/Uppercase';
import useExamples from '../../../utils/useExamples';

const PageHeading = () => {
  const examples = useExamples('heading');
  return (
    <>
      <section className="grid gap-4 mt-8">
        <Heading as="h1" size={48}>
          Heading
        </Heading>
        <Text>
          By default Heading renders as H3 tag with Bulma color, bold
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
            description: 'Heading color',
          },
          {
            name: 'size',
            type: '16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72',
            required: false,
            default: '16',
            description: 'Heading size',
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
          {
            name: 'isUppercase',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Uppercase Heading',
          },
          {
            name: 'isUnderline',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Underline Heading',
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

export default PageHeading;
