import { Default } from '@/app/components/server/loader/examples/Default';
import ExampleSection from '@/app/components/shared/ExampleSection';
import QuickNav from '@/app/components/shared/QuickNav';
import { getExamples } from '@/app/utils/getExamples';
import { MDX } from '@/components/MDX';

export default async function Loader() {
  const { server } = await getExamples();
  const examplesList = Object.keys(server.loader.examples);
  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14">
      <h1 className="font-medium text-moon-32">Loader</h1>
      <MDX markdown={server.loader.description} />
      <QuickNav items={examplesList} />
      <ExampleSection
        title="Default"
        component={<Default />}
        code={server.loader.examples.Default}
      />
    </div>
  );
}
