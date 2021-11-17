import React from 'react';

import Default from '../../public/examples/tabs/Default';
import IsTop from '../../public/examples/tabs/IsTop';
import Small from '../../public/examples/tabs/Small';
import Variant from '../../public/examples/tabs/Variant';
import Fill from '../../public/examples/tabs/Fill';
import FillContainer from '../../public/examples/tabs/FillContainer';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

import useExamples from '../../utils/useExamples';

export default function PageTabsNew() {
  const examples = useExamples('Tabs');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tabs</h1>
        <p className="text-lg mt-4">
          Use tabs to allow users to navigate easily between views within the
          same context.
        </p>
        <p className="text-lg mt-4">
          By default, tabs will provide an accessible skip link, and overflow
          with horizontal scrolling.
        </p>
        <p className="text-lg mt-4">
          TabLink or TabLinkFill components provides the tab interaction. The
          components renders as an anchor tag, accepting the standard
          attributes. You also can wrap these components in custom Link
          component for a specific router.
        </p>
        <p className="text-lg mt-8">
          Below provides examples of different Tabs types:
        </p>
      </section>

      {/* Default */}
      <section className="mt-4">
        <Preview
          title="Underline"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Overline"
          preview={<IsTop />}
          code={examples ? examples.IsTop : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Filled"
          preview={<Fill />}
          code={examples ? examples.Fill : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Segment control"
          preview={<FillContainer />}
          code={examples ? examples.FillContainer : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Size: 'small'"
          preview={<Small />}
          code={examples ? examples.Small : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Tabs with additional elements"
          preview={<Variant />}
          code={examples ? examples.Variant : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Tabs component</h2>
        <Table
          data={[
            {
              name: 'items',
              type: 'React.ReactElement[]',
              required: true,
              default: '-',
              description:
                'TabLink/TabLinkFill or any other component provide the tab interaction',
            },
            {
              name: 'size',
              type: 'small | medium',
              required: false,
              default: 'medium',
              description: 'Small/medium size for tab items',
            },
            {
              name: 'dir',
              type: 'ltr | rtl | auto',
              required: false,
              default: 'auto',
              description: 'Support right to left languages',
            },
            {
              name: 'isTop',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Underline top view. Only for TabLink',
            },
            {
              name: 'isContainer',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Segment control view. Only for TabLinkFill',
            },
          ]}
        />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">
          Props for TabsLink/TabsLinkFill components
        </h2>
        <Table
          data={[
            {
              name: 'elementLeft',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Left icon element',
            },
            {
              name: 'count',
              type: 'string',
              required: false,
              default: '-',
              description: 'Rigth text element',
            },
            {
              name: 'href',
              type: 'string',
              required: false,
              default: '-',
              description: `The href attribute specifies the link's destination`,
            },
          ]}
        />
      </section>
    </>
  );
}
