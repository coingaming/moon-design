import React from 'react';

import { Loader } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';

const Example = () => {
  return (
    <Inline>
      <Loader />
      <Loader color="piccolo.100" />
    </Inline>
  );
};

const ExampleCustomization = () => {
  return (
    <Inline>
      <Loader color="dodoria.100" />
      <Loader color="trunks.100" />
      <Loader color="#663399" />
    </Inline>
  );
};

export default function PageLoader() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Loader</h1>
        <p className="text-lg mt-4">Pure CSS loading animation.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Example />}
          code={`import { Loader } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

<Inline>
  <Loader />
  <Loader color="piccolo.100" />
</Inline>
`}
        />
      </section>

      {/* Customization */}
      <section className="mt-8">
        <Preview
          title="Colours"
          preview={<ExampleCustomization />}
          code={`import { Loader } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

<Inline>
  <Loader color="dodoria.100" />
  <Loader color="trunks.100" />
  <Loader color="#663399" />
</Inline>
`}
        />
      </section>
    </>
  );
}
