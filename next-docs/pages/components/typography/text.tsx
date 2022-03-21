import React from 'react';
import { Text } from '@heathmont/moon-core';
import Preview from '../../../components/codePreview/Preview';

const InternalText: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

const TextPreview = () => (
  <Preview
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Text>Text with default font size, color and font-weight</Text>
        <Text isBold>Text with bold font-weight</Text>
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
<Text>Text with default font size, color and font-weight</Text>
<Text isBold>Text with bold font-weight</Text>
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

const TextTagPreview = () => (
  <Preview
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

const PageText = () => (
  <>
    <section className="mt-8">
      <h1 className="text-5xl font-semibold">Text</h1>
    </section>
    <InternalText>
      We have predefined font sizes: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48
      | 56 | 64 | 72.
    </InternalText>
    <InternalText>
      Line heights are calculated automatically based on font size.
    </InternalText>
    <InternalText>Default font size is 16.</InternalText>
    <InternalText>
      By default Text color is bulma.100. Secondary text - trunks.100.
    </InternalText>
    <TextPreview />
    <h2 className="text-3xl font-semibold mt-16">Semantic</h2>
    <div className="mt-8">
      <InternalText>
        We treat semantic and visual/cosmetic decisions as two totally separate
        things.
      </InternalText>
      <InternalText>
        By default Text renders as Paragraph tag. You can render it as Span or
        Label tags, etc.
      </InternalText>
      <TextTagPreview />
    </div>
  </>
);

export default PageText;
