import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from "../../components/PropsTable";
import SingleLineItem from '../../public/examples/listItem/SingleLineItem';
import SingleLineItemIcon from '../../public/examples/listItem/SingleLineItemIcon';
import SingleLineItemSize from '../../public/examples/listItem/SingleLineItemSize';
import TwoLineItems from '../../public/examples/listItem/TwoLineItems';
import TwoLineItemsCheckbox from '../../public/examples/listItem/TwoLineItemsCheckbox';
import TwoLineItemsIcon from '../../public/examples/listItem/TwoLineItemsIcon';
import TwoLineItemsSize from '../../public/examples/listItem/TwoLineItemsSize';
import useExamples from '../../utils/useExamples';

export default function PageListItem() {
  const examples = useExamples('listItem');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">List Item</h1>
        <p className="text-lg mt-4">
          List item component. The List item width is determined by the width of
          the parent container.
        </p>
      </section>
      <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Single line item</h2>
      </section>
      <section className="mt-2">
        <Preview
          preview={<SingleLineItem />}
          code={examples ? examples.SingleLineItem : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Size (by default: medium)"
          preview={<SingleLineItemSize />}
          code={examples ? examples.SingleLineItemSize : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Icon and Meta"
          preview={<SingleLineItemIcon />}
          code={examples ? examples.SingleLineItemIcon : 'Loading'}
        />
      </section>
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Two lines item</h2>
      </section>
      <section className="mt-2">
        <Preview
          preview={<TwoLineItems />}
          code={examples ? examples.TwoLineItems : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Size (by default: medium)"
          preview={<TwoLineItemsSize />}
          code={examples ? examples.TwoLineItemsSize : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="Icon and Meta"
          preview={<TwoLineItemsIcon />}
          code={examples ? examples.TwoLineItemsIcon : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Checkbox"
          preview={<TwoLineItemsCheckbox />}
          code={examples ? examples.TwoLineItemsCheckbox : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'subtext',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'List item subtext',
          },
          {
            name: 'size',
            type: 'medium | large',
            required: false,
            default: 'medium',
            description: 'List item size',
          },
          {
            name: 'backgroundColor',
            type: 'ColorProps',
            required: false,
            default: '-',
            description: 'List item background color',
          },
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: '-',
            description: 'List item color',
          },
          {
            name: 'elementLeft',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Element on the left',
          },
          {
            name: 'elementRight',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Element on the right',
          },
          {
            name: 'isMeta',
            type: 'boolean',
            required: false,
            default: 'false',
            description: '-',
          },
        ]}
      />
    </>
  );
}
