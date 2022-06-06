import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
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
      <h1 className="text-moon-32 font-medium">List Item</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          List item component. The List item width is determined by the width of
          the parent container.
        </p>
      </div>
      <Preview
        title="Single line item"
        preview={<SingleLineItem />}
        code={examples ? examples.SingleLineItem : 'Loading'}
      />
      <Preview
        title="Size (by default: medium)"
        preview={<SingleLineItemSize />}
        code={examples ? examples.SingleLineItemSize : 'Loading'}
      />
      <Preview
        title="Icon and Meta"
        preview={<SingleLineItemIcon />}
        code={examples ? examples.SingleLineItemIcon : 'Loading'}
      />
      <Preview
        title="Two lines item"
        preview={<TwoLineItems />}
        code={examples ? examples.TwoLineItems : 'Loading'}
      />
      <Preview
        title="Size (by default: medium)"
        preview={<TwoLineItemsSize />}
        code={examples ? examples.TwoLineItemsSize : 'Loading'}
      />
      <Preview
        title="Icon and Meta"
        preview={<TwoLineItemsIcon />}
        code={examples ? examples.TwoLineItemsIcon : 'Loading'}
      />
      <Preview
        title="Checkbox"
        preview={<TwoLineItemsCheckbox />}
        code={examples ? examples.TwoLineItemsCheckbox : 'Loading'}
      />
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
