import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import ClickableRows from '../../public/examples/tableTW/ClickableRows';
import CustomColors from '../../public/examples/tableTW/CustomColors';
import CustomContent from '../../public/examples/tableTW/CustomContent';
import DeepTable from '../../public/examples/tableTW/DeepTable';
import Default from '../../public/examples/tableTW/Default';
import MiniMap from '../../public/examples/tableTW/MiniMap';
import SelectableCheckboxes from '../../public/examples/tableTW/SelectableCheckboxes';
import Sorting from '../../public/examples/tableTW/Sorting';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('tableTW');
  return (
    <>
      <ComponentPageDescription title="Table">
        <p>
          Tables are great for presenting information with a clear, repeating
          structure. Our users are busy and may not want to read long sections
          of text. Breaking structured data into tables can help them scan it
          and find what they need to make informed decisions.
        </p>
        <p>
          While tables present a clear structure, they are not good for
          designing layouts. Use them only when data you are presenting calls
          for a tabular structure, for example prices for various travel dates
          or multiple options for baggage.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://github.com/tannerlinsley/react-table"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            react-table
          </a>
          .
        </p>
      </ComponentPageDescription>
      {/*<Preview
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
        title="Selectable checkboxes"
        preview={<SelectableCheckboxes />}
        code={examples ? examples.Default : 'Loading'}
      />*/}
      <Preview
        title="Custom colors"
        preview={<CustomColors />}
        code={examples ? examples.CustomColors : 'Loading'}
      />
      {/*<Preview
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
    </>
  );
};

export default Example;
