import React from 'react';
import NextLink from 'next/link';

import { Badge } from '@heathmont/moon-core';

import Preview from '../../components/codePreview/Preview';

export default function PageBadge() {
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
          preview={
            <div className="flex justify-around items-center w-full">
              <Badge color="goten.100" backgroundColor="piccolo.100">
                Active
              </Badge>
              <Badge color="piccolo.100" backgroundColor="trunks.100">
                Active
              </Badge>
              <Badge color="goten.100" backgroundColor="dodoria.100">
                Active
              </Badge>
            </div>
          }
          code={`import { Badge } from '@heathmont/moon-core';

<Badge color="goten.100" backgroundColor="piccolo.100">
  Active
</Badge>

<Badge color="piccolo.100" backgroundColor="trunks.100">
  Active
</Badge>

<Badge color="goten.100" backgroundColor="dodoria.100">
  Active
</Badge>
`}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={
            <div className="flex justify-around items-center w-full">
              <Badge size="small">Small</Badge>
              <Badge>Default</Badge>
            </div>
          }
          code={`import { Badge } from '@heathmont/moon-core';

<Badge size="small">Small</Badge>

<Badge>Default</Badge>
`}
        />
      </section>
    </>
  );
}
