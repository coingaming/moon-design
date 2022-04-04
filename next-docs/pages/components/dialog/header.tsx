import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Example1 from '../../../public/examples/dialog/header/Example1';
import Example2 from '../../../public/examples/dialog/header/Example2';
import Example3 from '../../../public/examples/dialog/header/Example3';
import Example4 from '../../../public/examples/dialog/header/Example4';
import Example5 from '../../../public/examples/dialog/header/Example5';
import useExamples from '../../../utils/useExamples';

export default function PageDialogHeader() {
  const examples = useExamples('dialog/header');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Dialog Header</h1>
        <p className="text-lg mt-4">
          Header module variants to be used in Modal dialogs and popovers.
        </p>
        <p className="text-lg mt-4 font-bold">About RTL and icon mirroring</p>
        <p className="text-lg">
          The icons are slots passed to the component. It is the developer's
          responsibility to pass a mirrored icon for RTL views, (ie, pass left
          or right arrows depending on the direction).
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title=""
          preview={<Example1 />}
          code={examples ? examples.Example1 : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title=""
          preview={<Example2 />}
          code={examples ? examples.Example2 : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title=""
          preview={<Example3 />}
          code={examples ? examples.Example3 : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title=""
          preview={<Example4 />}
          code={examples ? examples.Example4 : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title=""
          preview={<Example5 />}
          code={examples ? examples.Example5 : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props for Dialog Header component"
        data={[
          {
            name: 'backButton',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Back button icon or element',
          },
          {
            name: 'closeButton',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Close icon or element',
          },
          {
            name: 'icons',
            type: 'JSX.Element[]',
            required: false,
            default: '-',
            description: 'Array of icons',
          },
          {
            name: 'isDivider',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Add border bottom and paddings for header',
          },
        ]}
      />
    </>
  );
}
