import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import CodeSnippet from '../../../components/CodeSnippet';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PageSection from '../../../components/PageSection';
import PropsTable from '../../../components/PropsTable';
import Active from '../../../public/styledExamples/charts/tableChart/Active';
import Default from '../../../public/styledExamples/charts/tableChart/Default';
import Loading from '../../../public/styledExamples/charts/tableChart/Loading';
import useExamples from '../../../utils/useExamples';

export default function PageLineChart() {
  const examples = useExamples('charts/tableChart', 'styled');

  return (
    <>
      <ComponentPageDescription title="Table">
        <p>
          Based on{' '}
          <a
            href="https://recharts.org/en-US/"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Recharts
          </a>
          .
        </p>
      </ComponentPageDescription>
      <Preview
        title="Various data"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'title',
            type: 'string',
            required: true,
            default: '-',
            description: 'Chart title text',
          },
          {
            name: 'data',
            type: 'Data[]',
            required: true,
            default: '-',
            description: 'Array of data',
          },
          {
            name: 'onUpdate',
            type: 'function',
            required: false,
            default: '-',
            description: 'Handler function when pressing the update button',
          },
          {
            name: 'onShare',
            type: 'function',
            required: false,
            default: '-',
            description: 'Handler function when pressing the share button',
          },
          {
            name: 'onExpand',
            type: 'function',
            required: false,
            default: '-',
            description: 'Handler function when pressing the expand button',
          },
          {
            name: 'isUpdating',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'If set true, the loader icon is displayed',
          },
          {
            name: 'hasUpdates',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'If set true, the dot icon is displayed',
          },
          {
            name: 'filter',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Placeholder for filter component',
          },
          {
            name: 'height',
            type: 'string, number',
            required: false,
            default: '446',
            description: 'Height of component',
          },
          {
            name: 'icon',
            type: 'React.ReactNode',
            required: false,
            default: '<ChartIcons.Line />',
            description: 'Placeholder for chart icon component',
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Enables active view',
          },
          {
            name: 'loaderText',
            type: 'string, React.ReactNode',
            required: false,
            default: 'No data',
            description: 'The text for "no data" / "loading" states',
          },
        ]}
      />

      <PageSection title="Types">
        <CodeSnippet>
          {`Data {
  label: string | React.ReactNode
  value: number | string | React.ReactNode
}`}
        </CodeSnippet>
      </PageSection>
      <Preview
        title="Loading"
        preview={<Loading />}
        code={examples ? examples.Loading : 'Loading'}
      />
      <Preview
        title="Active"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />
    </>
  );
}
