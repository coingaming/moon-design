import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import CodeSnippet from '../../../components/CodeSnippet';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PageSection from '../../../components/PageSection';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/charts/lineChart/Default';
import Loading from '../../../public/examples/charts/lineChart/Loading';
import useExamples from '../../../utils/useExamples';

export default function PageLineChart() {
  const examples = useExamples('charts/lineChart');

  return (
    <>
      <ComponentPageDescription title="Line">
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
            name: 'options',
            type: 'Option[]',
            required: true,
            default: '-',
            description: 'Array of available chart options',
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
            default: '526',
            description: 'Height of component',
          },
          {
            name: 'axisWidth',
            type: 'number',
            required: false,
            default: '40',
            description: 'The width of axis',
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
          {
            name: 'interval',
            type: '"preserveStart" | "preserveEnd" | "preserveStartEnd" | number',
            required: false,
            default: '-',
            description: 'If set 0, all the ticks will be shown',
          },
        ]}
      />
      <PageSection title="Types">
        <CodeSnippet>
          {`Data {
  date: string
  [key: string]: string | number
}`}
        </CodeSnippet>
        <CodeSnippet>
          {`Option {
  label: string;
  dataKey: string;
  value: number;
  color: ColorProps;
  yAxisId: string;
  isActive?: boolean;
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
