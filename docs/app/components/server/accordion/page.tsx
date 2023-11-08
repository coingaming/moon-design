import { ContentOutsideSizes } from '@/app/components/server/accordion/examples/ContentOutsideSizes';
import { Default } from '@/app/components/server/accordion/examples/Default';
import { Disabled } from '@/app/components/server/accordion/examples/Disabled';
import { Sizes } from '@/app/components/server/accordion/examples/Sizes';
import ExampleSection from '@/app/components/shared/exampleSection';
import QuickNav from '@/app/components/shared/QuickNav';
import { getExamples } from '@/app/utils/getExamples';
import { MDX } from '@/components/MDX';

export default async function Accordion() {
  const { server } = await getExamples();
  const examplesList = Object.keys(server.accordion.examples);
  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14">
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
    </div>
  );
}
