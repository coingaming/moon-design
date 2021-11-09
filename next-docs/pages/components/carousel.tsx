// @ts-nocheck
import React from 'react';

import Default from '../../public/examples/carousel/Default';
import CustomizedArrow from '../../public/examples/carousel/CustomizedArrow';
import Space from '../../public/examples/carousel/Space';
import VisibleIndex from '../../public/examples/carousel/VisibleIndex';

import Preview from '../../components/codePreview/Preview';

import useExamples from '../../utils/useExamples';

export default function PageCarousel() {
  const examples = useExamples('Carousel');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Carousel</h1>
        <p className="text-lg mt-4">
          An interactive extension of the Reel component to cycle through
          content.
        </p>
      </section>

      {/* Default Carousel */}
      <section className="mt-8">
        <Preview
          title="Carousel"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Customized Arrows Carousel */}
      <section className="mt-8">
        <Preview
          title="Customized Arrows"
          preview={<CustomizedArrow />}
          code={examples ? examples.CustomizedArrow : 'Loading'}
        />
      </section>

      {/* Space */}
      <section className="mt-8">
        <Preview
          title="Space"
          preview={<Space />}
          code={examples ? examples.Space : 'Loading'}
        />
      </section>

      {/* Visible indices */}
      <section className="mt-8">
        <Preview
          title="Visible indices"
          preview={<VisibleIndex />}
          code={examples ? examples.VisibleIndex : 'Loading'}
        />
      </section>
    </>
  );
}
