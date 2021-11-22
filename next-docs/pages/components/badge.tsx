import React from 'react';
import NextLink from 'next/link';

import Colours from '../../public/examples/badge/Colours';
import Sizes from '../../public/examples/badge/Sizes';

import Preview from '../../components/codePreview/Preview';
import useExamples from '../../utils/useExamples';

export default function PageBadge() {
  const examples = useExamples('badge');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Badge (Deprecated)</h1>
        <p className="text-lg mt-4">Small count and labeling component.</p>
        <p className="text-lg mt-4">
          ! Please use new{' '}
          <NextLink href={'/components/label'}>
            <a className="text-active">Label</a>
          </NextLink>{' '}
          component instead of Badge
        </p>
      </section>

      {/* Colours */}
      <section className="mt-8">
        <Preview
          title="Colours"
          preview={<Colours />}
          code={examples ? examples.Colours : 'Loading'}
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
    </>
  );
}
