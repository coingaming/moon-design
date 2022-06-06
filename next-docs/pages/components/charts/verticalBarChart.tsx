import React from 'react';
import Link from 'next/link';
import Preview from '../../../components/codePreview/Preview';
import CodeSnippet from '../../../components/CodeSnippet';
import PageSection from '../../../components/PageSection';
import PropsTable from '../../../components/PropsTable';
import Active from '../../../public/examples/charts/verticalChart/Active';
import NoData from '../../../public/examples/charts/verticalChart/NoData';
import useExamples from '../../../utils/useExamples';

export default function PageVerticalBarChart() {
  const examples = useExamples('charts/verticalChart');
  return (
    <>
      <h1 className="text-moon-32 font-medium">Line chart</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          Based on{' '}
          <Link href="https://recharts.org/en-US/">
            <a
              className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
              target="_blank"
              rel="noreferrer"
            >
              Recharts
            </a>
          </Link>
          .
        </p>
      </div>
      <Preview
        title="Various data"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
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
            name: 'positiveColor',
            type: 'ColorProps',
            required: false,
            default: 'krillin.100',
            description: 'Highlight color for positive values',
          },
          {
            name: 'negativeColor',
            type: 'ColorProps',
            required: false,
            default: 'whis.100',
            description: 'Highlight color for negative values',
          },
          {
            name: 'icon',
            type: 'React.ReactNode',
            required: false,
            default: '<ChartIcons.Line />',
            description: 'Placeholder for chart icon component',
          },
          {
            name: 'loaderText',
            type: 'string, React.ReactNode',
            required: false,
            default: 'No data',
            description: 'The text for "no data" / "loading" states',
          },
          {
            name: 'formatFn',
            type: 'function',
            required: false,
            default: '-',
            description: 'The formatter function of data value',
          },
        ]}
      />

      <PageSection title="Types">
        <CodeSnippet>
          {`Data {
  label: string | React.ReactNode;
  code: string;
  value: number;
  dataKey: string;
}`}
        </CodeSnippet>
      </PageSection>
      <Preview
        title="No data"
        preview={<NoData />}
        code={examples ? examples.NoData : 'Loading'}
      />
    </>
  );
}
