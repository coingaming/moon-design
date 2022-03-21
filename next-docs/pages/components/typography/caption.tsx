import React from 'react';
import { Caption } from '@heathmont/moon-core';
import Preview from '../../../components/codePreview/Preview';
import InternalText from './private/InternalText';

const CaptionPreview = () => (
  <Preview
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

const PageCaption = () => (
  <>
    <section className="mt-8">
      <h1 className="text-5xl font-semibold">Caption</h1>
    </section>
    <InternalText>No props available except of color</InternalText>
    <CaptionPreview />
    <h2 className="text-3xl font-semibold mt-16">Semantic</h2>
    <div className="mt-8">
      <InternalText>
        We treat semantic and visual/cosmetic decisions as two totally separate
        things.
      </InternalText>
      <InternalText>
        By default Caption renders as Span tag. You can render it as Paragraph
        or Label tags, etc.
      </InternalText>
      <CaptionTagPreview />
    </div>
  </>
);

export default PageCaption;
