import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
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
import ExpandedWithModals from '../../public/examples/table/ExpandedWithModals';
import LongData from '../../public/examples/table/LongData';
import MiniMap from '../../public/examples/table/MiniMap';
import RowGaps from '../../public/examples/table/RowGaps';
import RowSizes from '../../public/examples/table/RowSizes';
import SelectableCheckboxes from '../../public/examples/table/SelectableCheckboxes';
import SelectableRows from '../../public/examples/table/SelectableRows';
import Sorting from '../../public/examples/table/Sorting';
import Tooltips from '../../public/examples/table/Tooltips';
import Zebra from '../../public/examples/table/Zebra';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Table';

const PageTable = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
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
        code={examples ? examples.RowSizes : 'Lofoading'}
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
        title="Expanded Rows with calls the modal windows"
        preview={<ExpandedWithModals />}
        code={examples ? examples.ExpandedWithModals : 'Loading'}
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
      <Preview
        title="Long data table (with data clipping)"
        preview={<LongData />}
        code={examples ? examples.LongData : 'Loading'}
      />
      <Preview
        title="Tooltips (with a transparent one in the second row)"
        preview={<Tooltips />}
        code={examples ? examples.Tooltips : 'Loading'}
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
            name: 'textClip',
            type: 'clip | break',
            required: false,
            default: '-',
            description: 'Sets the type of clipping of long data inside a table cell',
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

PageTable.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageTable;
