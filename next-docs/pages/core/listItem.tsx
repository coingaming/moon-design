import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import SingleLineItem from '../../public/examples/listItemTW/SingleLineItem';
import SingleLineItemIcon from '../../public/examples/listItemTW/SingleLineItemIcon';
import SingleLineItemSize from '../../public/examples/listItemTW/SingleLineItemSize';
import TwoLineItems from '../../public/examples/listItemTW/TwoLineItems';
import TwoLineItemsCheckbox from '../../public/examples/listItemTW/TwoLineItemsCheckbox';
import TwoLineItemsIcon from '../../public/examples/listItemTW/TwoLineItemsIcon';
import TwoLineItemsSize from '../../public/examples/listItemTW/TwoLineItemsSize';
import useExamples from '../../utils/useExamples';

export default function PagelistItemTW() {
  const examples = useExamples('listItemTW');
  return (
    <>
      <ComponentPageDescription title="List item">
        <p>
          List item component. The List item width is determined by the width of
          the parent container.
        </p>
      </ComponentPageDescription>
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
