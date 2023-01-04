import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import SingleLineItem from '../../public/styledExamples/listItem/SingleLineItem';
import SingleLineItemIcon from '../../public/styledExamples/listItem/SingleLineItemIcon';
import SingleLineItemSize from '../../public/styledExamples/listItem/SingleLineItemSize';
import TwoLineItems from '../../public/styledExamples/listItem/TwoLineItems';
import TwoLineItemsCheckbox from '../../public/styledExamples/listItem/TwoLineItemsCheckbox';
import TwoLineItemsIcon from '../../public/styledExamples/listItem/TwoLineItemsIcon';
import TwoLineItemsSize from '../../public/styledExamples/listItem/TwoLineItemsSize';
import useExamples from '../../utils/useExamples';

export default function PageListItem() {
  const examples = useExamples('listItem', 'styled');
  return (
    <>
      <ComponentPageDescription title="List item">
        <DeprecationWarning href="/core/menuItem" name="MenuItem" />
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
