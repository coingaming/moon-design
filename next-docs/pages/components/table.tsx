import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Calendar from '../../public/examples/table/Calendar';
import CellBorder from '../../public/examples/table/CellBorder';
import ClickableRows from '../../public/examples/table/ClickableRows';
import CustomColors from '../../public/examples/table/CustomColors';
import CustomContent from '../../public/examples/table/CustomContent';
import DeepTable from '../../public/examples/table/DeepTable';
import Default from '../../public/examples/table/Default';
import Editable from '../../public/examples/table/Editable';
import ExpandedRows from '../../public/examples/table/ExpandedRows';
import MiniMap from '../../public/examples/table/MiniMap';
import RowGaps from '../../public/examples/table/RowGaps';
import RowSizes from '../../public/examples/table/RowSizes';
import SelectableCheckboxes from '../../public/examples/table/SelectableCheckboxes';
import SelectableRows from '../../public/examples/table/SelectableRows';
import Sorting from '../../public/examples/table/Sorting';
import Zebra from '../../public/examples/table/Zebra';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('table');
  const { name, text, image } = getComponent('Table');
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
        <p>
          Based on{' '}
          <a
            href="https://github.com/tannerlinsley/react-table"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            react-table
          </a>
          .
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="With cell borders"
        preview={<CellBorder />}
        code={examples ? examples.CellBorder : 'Loading'}
      />
      <Preview
        title="Different row gaps"
        preview={<RowGaps />}
        code={examples ? examples.RowGaps : 'Loading'}
      />
      <Preview
        title="Different row sizes"
        preview={<RowSizes />}
        code={examples ? examples.RowSizes : 'Loading'}
      />
      <Preview
        title="Clickable rows"
        preview={<ClickableRows />}
        code={examples ? examples.ClickableRows : 'Loading'}
      />
      <Preview
        title="Selectable rows"
        preview={<SelectableRows />}
        code={examples ? examples.SelectableRows : 'Loading'}
      />
      <Preview
        title="Selectable checkboxes"
        preview={<SelectableCheckboxes />}
        code={examples ? examples.SelectableCheckboxes : 'Loading'}
      />
      <Preview
        title="Custom colors"
        preview={<CustomColors />}
        code={examples ? examples.CustomColors : 'Loading'}
      />
      <Preview
        title="Expanded Rows"
        preview={<ExpandedRows />}
        code={examples ? examples.ExpandedRows : 'Loading'}
      />
      <Preview
        title="With Sorting"
        preview={<Sorting />}
        code={examples ? examples.Sorting : 'Loading'}
      />
      <Preview
        title="Expanded Rows with deep nesting"
        preview={<DeepTable />}
        code={examples ? examples.DeepTable : 'Loading'}
      />
      <Preview
        title="Expanded rows with custom content"
        preview={<CustomContent />}
        code={examples ? examples.CustomContent : 'Loading'}
      />
      <Preview
        title="With minimap"
        preview={<MiniMap />}
        code={examples ? examples.MiniMap : 'Loading'}
      />
      <Preview
        title="Calendar"
        preview={<Calendar />}
        code={examples ? examples.Calendar : 'Loading'}
      />
      <Preview
        title="Editable"
        preview={<Editable />}
        code={examples ? examples.Editable : 'Loading'}
      />
      <Preview
        title="Zebra style rows"
        preview={<Zebra />}
        code={examples ? examples.Zebra : 'Loading'}
      />
      <PropsTable
        title="Table props"
        data={[
          {
            name: 'getOnRowClickHandler',
            type: '(row) => (row) => void | () => void',
            required: false,
            default: '-',
            description: 'Callback on clicked row',
          },
          {
            name: 'getOnRowSelect',
            type: '(rows) => void | () => void',
            required: false,
            default: '-',
            description: 'Callback on selected row',
          },
          {
            name: 'height',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Height of the table',
          },
          {
            name: 'isCellBorder',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Divider between cells',
          },
          {
            name: 'maxHeight',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Max height of the table',
          },
          {
            name: 'maxWidth',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Max width of the table',
          },
          {
            name: 'rowGap',
            type: 'gap-0 | gap-1 | gap-2 | gap-3 | gap-4',
            required: false,
            default: 'gap-1',
            description: 'Gap between table body rows. TW class',
          },
          {
            name: 'rowSize',
            type: 'xs | sm | md | lg | xl | 2xl',
            required: false,
            default: 'md',
            description: 'Size of table rows',
          },
          {
            name: 'selectable',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Allow rows to be selected',
          },
          {
            name: 'width',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Width of the table',
          },
          {
            name: 'withFooter',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Display table footer',
          },
          {
            name: 'updateMyData',
            type: '() => void;',
            required: false,
            default: '-',
            description: 'When cell renderer calls updateMyData',
          },
        ]}
      />
    </>
  );
};

export default Example;
