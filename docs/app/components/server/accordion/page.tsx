import { ContentOutsideSizes } from '@/app/components/server/accordion/examples/ContentOutsideSizes';
import { Default } from '@/app/components/server/accordion/examples/Default';
import { Disabled } from '@/app/components/server/accordion/examples/Disabled';
import { Sizes } from '@/app/components/server/accordion/examples/Sizes';
import ExampleSection from '@/app/components/shared/exampleSection';
import PropsTable from '@/app/components/shared/propsTable';
import QuickNav from '@/app/components/shared/QuickNav';
import { getExamples } from '@/app/utils/getExamples';
import { MDX } from '@/components/MDX';

export default async function Accordion() {
  const { server } = await getExamples();
  const examplesList = Object.keys(server.accordion.examples);
  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14 px-6 md:px-0">
      <h1 className="font-medium text-moon-32">Accordion</h1>
      <MDX markdown={server.accordion.description} />
      <QuickNav items={examplesList} />
      <ExampleSection
        title="Default"
        component={<Default />}
        code={server.accordion.examples.Default}
      />
      <ExampleSection
        title="Disabled"
        component={<Disabled />}
        code={server.accordion.examples.Disabled}
      />
      <ExampleSection
        title="Sizes"
        component={<Sizes />}
        code={server.accordion.examples.Sizes}
      />
      <ExampleSection
        title="ContentOutsideSizes"
        component={<ContentOutsideSizes />}
        code={server.accordion.examples.ContentOutsideSizes}
      />
      <PropsTable
        title="Accordion props"
        data={[
          {
            name: 'itemSize',
            type: 'sm | md | lg | xl',
            defaultState: 'md',
            description: 'Size of accordeon item',
          },
          {
            name: 'singleOpen',
            type: 'boolean',
            defaultState: 'false',
            description: 'Whether only one item can be opened at a time',
          },
          {
            name: 'defaultValue',
            type: 'string',
            defaultState: '-',
            description: 'The value of the item to expand',
          },
          {
            name: 'value',
            type: 'string[]',
            defaultState: '-',
            description: 'The accordeon items value',
          },
          {
            name: 'onValueChange',
            type: '(value: string[]) => void',
            defaultState: '-',
            description:
              'Event handler called when the expanded state of an item changes and prop singleOpen in false state',
          },
        ]}
      />
      <PropsTable
        title="Accordion.Item props"
        data={[
          {
            name: 'value',
            type: 'string',
            defaultState: '-',
            description: 'The accordeon item value',
          },
          {
            name: 'disabled',
            type: 'boolean',
            defaultState: 'false',
            description: 'Set disabled/non-disabled',
          },
        ]}
      />
    </div>
  );
}
