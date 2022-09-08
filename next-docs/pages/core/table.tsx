import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Default from '../../public/examples/tableTW/Default';
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
      <Preview
        title="Table"
        preview={<Default />}
        code={examples ? examples.Virtualized : 'Loading'}
      />
    </>
  );
};

export default Example;
