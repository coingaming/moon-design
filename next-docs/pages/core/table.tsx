import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/tableTW/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('tableTW');
  return (
    <>
      <ComponentPageDescription title="Table">
        <p>Lightweight, fast and extendable table.</p>
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
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <PropsTable
        title="Table props"
        data={[
          // TODO
          {
            name: 'color',
            type: 'string',
            required: false,
            default: 'border-hit',
            description: 'Colour of loader',
          },
        ]}
      />
    </>
  );
};

export default Example;
