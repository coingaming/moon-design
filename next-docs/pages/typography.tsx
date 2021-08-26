import React from 'react';
import { Text, Heading, Caption } from '@heathmont/moon-core';
import Preview from '../components/codePreview/Preview';

const InternalText: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

const TextSizesPreview = () => (
  <Preview
    title="Text sizes &amp; colors"
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Text>Text with default font size and color</Text>
        <Text size={10}>Text with font size 10</Text>
        <Text size={12}>Text with font size 12</Text>
        <Text size={14}>Text with font size 14</Text>
        <Text size={16}>Text with font size 16</Text>
        <Text size={18}>Text with font size 18</Text>
        <Text color="piccolo.100" size={20}>
          Text with font size 20 and piccolo.100 color
        </Text>
        <Text size={24}>Text with font size 24</Text>
        <Text size={32}>Text with font size 32</Text>
        <Text color="krillin.100" size={48}>
          font size 48 and krillin.100 color
        </Text>
        <Text size={56}>font size 56</Text>
        <Text color="trunks.100" size={64}>
          font size 64 and trunks.100 color
        </Text>
        <Text size={72}>font size 72</Text>
      </div>
    }
    code={`import { Text } from '@heathmont/moon-core';

<Text>Text with default font size and color</Text>
<Text size={10}>Text with font size 10</Text>
<Text size={12}>Text with font size 12</Text>
<Text size={14}>Text with font size 14</Text>
<Text size={16}>Text with font size 16</Text>
<Text size={18}>Text with font size 18</Text>
<Text color="piccolo.100" size={20}>Text with font size 20 and piccolo.100 color</Text>
<Text size={24}>Text with font size 24</Text>
<Text size={32}>Text with font size 32</Text>
<Text  color="krillin.100" size={48}>font size 48 and krillin.100 color</Text>
<Text size={56}>font size 56</Text>
<Text color="trunks.100" size={64}>font size 64 and trunks.100 color</Text>
<Text size={72}>font size 72</Text>
`}
  />
);

const HeadingPreview = () => (
  <Preview
    title="Heading sizes &amp; colors"
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Heading>Heading with default font size</Heading>
        <Heading size={18}>Text with font size 18</Heading>
        <Heading color="trunks.100" size={20}>
          Text with font size 20 and color trunks.100
        </Heading>
        <Heading size={24}>Text with font size 24</Heading>
        <Heading color="piccolo.100" size={32}>
          Text with font size 32 and color piccolo.100
        </Heading>
        <Heading size={48}>font size 48</Heading>
        <Heading color="krillin.100" size={56}>
          font size 56 and color krillin.100
        </Heading>
        <Heading size={64}>font size 64</Heading>
        <Heading size={72}>font size 72</Heading>
      </div>
    }
    code={`import { Heading } from '@heathmont/moon-core';

<Heading>Heading with default font size</Heading>
<Heading size={18}>Text with font size 18</Heading>
<Heading color="trunks.100" size={20}>
  Text with font size 20 and color trunks.100
</Heading>
<Heading size={24}>Text with font size 24</Heading>
<Heading color="piccolo.100" size={32}>
  Text with font size 32 and color piccolo.100
</Heading>
<Heading size={48}>font size 48</Heading>
<Heading color="krillin.100" size={56}>
  font size 56 and color krillin.100
</Heading>
<Heading size={64}>font size 64</Heading>
<Heading size={72}>font size 72</Heading>
`}
  />
);

const CaptionPreview = () => (
  <Preview
    title="Caption"
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Caption>Caption with default color</Caption>
        <Caption color="trunks.100">Caption with defined color</Caption>
        <Caption color="piccolo.100">Caption with defined color</Caption>
        <Caption color="krillin.100">Caption with defined color</Caption>
      </div>
    }
    code={`import { Caption } from '@heathmont/moon-core';

<Caption>Caption with default color</Caption>
<Caption color="trunks.100">Caption with defined color</Caption>
<Caption color="piccolo.100">Caption with defined color</Caption>
<Caption color="krillin.100">Caption with defined color</Caption>
`}
  />
);

const CaptionTagPreview = () => (
  <Preview
    title="Caption"
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Caption>Caption renders Span tag by default</Caption>
        <Caption as="p">Caption renders Paragraph tag</Caption>
        <Caption as="label">Caption renders Label tag</Caption>
      </div>
    }
    code={`import { Caption } from '@heathmont/moon-core';

<Caption>Caption renders Span tag by default</Caption>
<Caption as="p">Caption renders Paragraph tag</Caption>
<Caption as="label">Caption renders Label tag</Caption>
`}
  />
);

const HeadingTagPreview = () => (
  <Preview
    title="Heading"
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Heading size={24}>Heading renders H3 tag by default</Heading>
        <Heading size={24} as="h2">
          Heading renders H2 tag
        </Heading>
        <Heading size={24} as="h6">
          Heading renders H6 tag
        </Heading>
      </div>
    }
    code={`import { Heading } from '@heathmont/moon-core';

<Heading size={24}>Heading renders H3 tag by default</Heading>
<Heading size={24} as="h2">
  Heading renders H2 tag
</Heading>
<Heading size={24} as="h6">
  Heading renders H6 tag
</Heading>
`}
  />
);

const TextTagPreview = () => (
  <Preview
    title="Text"
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Text>Text renders Paragraph tag by default</Text>
        <Text as="span">Text renders Span tag</Text>
        <Text as="label">Text renders Label tag</Text>
      </div>
    }
    code={`import { Text } from '@heathmont/moon-core';

<Text>Text renders Paragraph tag by default</Text>
<Text as="span">Text renders Span tag</Text>
<Text as="label">Text renders Label tag</Text>
`}
  />
);

export default function PageTypography() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Typography</h1>
        <InternalText>
          We treat semantic and visual/cosmetic decisions as two totally
          separate things.
        </InternalText>
        <InternalText>
          Our choice of p and span is a purely semantic decision, and doesn't
          impact cosmetics configured via the size prop.
        </InternalText>
      </section>

      {/* Text */}
      <h2 className="text-3xl font-semibold mt-16">Text</h2>
      <InternalText>
        We have predefined font sizes: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 |
        48 | 56 | 64 | 72.
      </InternalText>
      <InternalText>
        Line heights are calculated automatically based on font size.
      </InternalText>
      <InternalText>Default font size is 16.</InternalText>

      <InternalText>
        By default Text color is bulma.100. Secondary text - trunks.100.
      </InternalText>

      <div className="mt-4">
        <TextSizesPreview />
      </div>
      {/* End of Text */}

      {/* Heading */}
      <h2 className="text-3xl font-semibold mt-16">Heading</h2>
      <InternalText>
        We have predefined font sizes: 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 |
        72.
      </InternalText>
      <InternalText>
        Line heights are calculated automatically based on font size.
      </InternalText>
      <InternalText>Default font size is 16.</InternalText>
      <InternalText>
        By default Heading color is bulma.100. Secondary text - trunks.100.
      </InternalText>
      <div className="mt-4">
        <HeadingPreview />
      </div>

      {/* End of Heading */}

      {/* Caption */}
      <h2 className="text-3xl font-semibold mt-16">Caption</h2>
      <InternalText>
        Caption is a Span tag with predefined styles. No option available except
        of color
      </InternalText>

      <CaptionPreview />
      {/* End of Caption */}

      <h2 className="text-3xl font-semibold mt-16">Semantic</h2>
      <div className="mt-4">
        <TextTagPreview />
        <InternalText>
          By default Text renders as Paragraph tag. You can render it as Span or
          Label tags, etc.
        </InternalText>
      </div>

      <div className="mt-8">
        <HeadingTagPreview />
        <InternalText>
          By default Heading renders as H3 tag. You can render it as H1, H2, H4,
          H5 and H6 tags.
        </InternalText>
      </div>

      <div className="mt-8">
        <CaptionTagPreview />
        <InternalText>
          By default Caption renders as Span tag. You can render it as Paragraph
          or Label tags, etc.
        </InternalText>
      </div>
    </>
  );
}
