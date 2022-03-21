import React from 'react';
import { Heading } from '@heathmont/moon-core';
import Preview from '../../../components/codePreview/Preview';
import InternalText from './private/InternalText';

const HeadingPreview = () => (
  <Preview
    preview={
      <div className="flex flex-col gap-4 w-full">
        <Heading>Heading with default font size, color and font-weight</Heading>
        <Heading isRegular>Heading with regular font-weight</Heading>
        <Heading size={18}>Heading with font size 18</Heading>
        <Heading color="trunks.100" size={20}>
          Heading with font size 20 and color trunks.100
        </Heading>
        <Heading size={24}>Heading with font size 24</Heading>
        <Heading color="piccolo.100" size={32}>
          Heading with font size 32 and color piccolo.100
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
<Heading>Heading with default font size, color and font-weight</Heading>
<Heading isRegular>Heading with regular font-weight</Heading>
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

const HeadingTagPreview = () => (
  <Preview
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

const PageHeading = () => (
  <>
    <section className="mt-8">
      <h1 className="text-5xl font-semibold">Heading</h1>
    </section>
    <InternalText>
      We have predefined font sizes: 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72.
    </InternalText>
    <InternalText>
      Line heights are calculated automatically based on font size.
    </InternalText>
    <InternalText>Default font size is 16.</InternalText>
    <InternalText>
      By default Heading color is bulma.100. Secondary text - trunks.100.
    </InternalText>
    <HeadingPreview />
    <h2 className="text-3xl font-semibold mt-16">Semantic</h2>
    <div className="mt-8">
      <InternalText>
        We treat semantic and visual/cosmetic decisions as two totally separate
        things.
      </InternalText>
      <InternalText>
        By default Heading renders as H3 tag. You can render it as H1, H2, H4,
        H5 and H6 tags.
      </InternalText>
      <HeadingTagPreview />
    </div>
  </>
);

export default PageHeading;
