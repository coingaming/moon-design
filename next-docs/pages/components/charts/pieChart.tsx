import React from 'react';
import { ChartIcons } from '@heathmont/moon-charts';
import Link from 'next/link';
import Preview from '../../../components/codePreview/Preview';
import CodeSnippet from '../../../components/CodeSnippet';
import PageSection from '../../../components/PageSection';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/charts/pieChart/Default';
import Loading from '../../../public/examples/charts/pieChart/Loading';
import useExamples from '../../../utils/useExamples';

export default function PageLineChart() {
  const examples = useExamples('charts/pieChart');

  return (
    <>
      <h1 className="text-moon-32 font-medium">Pie chart</h1>
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
        title="Default"
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
            default: <ChartIcons.Devices />,
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
  label: string
  value: number
  color: ColorProps
  dataKey: string
}`}
        </CodeSnippet>
      </PageSection>
      <Preview
        title="Loading"
        preview={<Loading />}
        code={examples ? examples.Loading : 'Loading'}
      />
    </>
  );
}
