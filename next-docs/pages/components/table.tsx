import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Calendar from '../../public/examples/table/Calendar';
import ClickableRows from '../../public/examples/table/ClickableRows';
import CustomColors from '../../public/examples/table/CustomColors';
import CustomContent from '../../public/examples/table/CustomContent';
import DeepTable from '../../public/examples/table/DeepTable';
import Default from '../../public/examples/table/Default';
import ExpandedRow from '../../public/examples/table/ExpandedRow';
import MiniMap from '../../public/examples/table/MiniMap';
import SelectableCheckboxes from '../../public/examples/table/SelectableCheckboxes';
import SelectableRows from '../../public/examples/table/SelectableRows';
import Sorting from '../../public/examples/table/Sorting';
import useExamples from '../../utils/useExamples';

export default function PageTable() {
  const examples = useExamples('table');
  return (
    <>
      <ComponentPageDescription title="Table">
        <DeprecationWarning href="/core/table" name="Table" />
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
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
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Custom colors"
        preview={<CustomColors />}
        code={examples ? examples.CustomColors : 'Loading'}
      />
      <Preview
        title="Expanded Rows "
        preview={<ExpandedRow />}
        code={examples ? examples.ExpandedRow : 'Loading'}
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
      <PropsTable
        title="Props"
        data={[
          {
            name: 'width',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Width of the table',
          },
          {
            name: 'height',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Height of the table',
          },
          {
            name: 'maxWidth',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Max width of the table',
          },
          {
            name: 'maxHeight',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Max height of the table',
          },
          {
            name: 'withFooter',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Display table footer',
          },
          {
            name: 'selectable',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Allow rows to be selected',
          },
          {
            name: 'getOnRowSelect',
            type: 'function',
            required: false,
            default: '-',
            description: 'Callback on selected row',
          },
          {
            name: 'getOnRowClickHandler',
            type: 'function',
            required: false,
            default: '-',
            description: 'Callback on clicked row',
          },
        ]}
      />
    </>
  );
}
