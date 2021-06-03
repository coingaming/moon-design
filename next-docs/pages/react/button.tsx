import React from 'react';
import Head from 'next/head';

import { Button } from '@heathmont/moon-components';
import PreviewSwitch from '../../components/codePreview/Switch';
import Preview from '../../components/codePreview/Preview';

export default function PageBadge() {
  return (
    <>
      <section className="mt-6">
        <h1 className="text-5xl font-semibold">Button</h1>
        <p className="text-lg mt-4">
          Buttons are calls-to-action used to prompt users. They encourage users
          to interact with us in multiple ways throughout our galaxy, based on
          what the label of the button indicates.
        </p>

        <p className="text-lg mt-4">
          Buttons are clickable elements with label text that describe the
          action that will happen when the users interact with it.
        </p>
      </section>
      <section className="mt-6">
        <Preview
          title="Primary"
          preview={<Button variant="primary">Active</Button>}
          code={`import { Button } from '@heathmont/moon-components';

<Button variant="primary">Active</Button>`
}
        />
      </section>
    </>
  );
}
