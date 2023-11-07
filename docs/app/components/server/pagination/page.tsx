import { Default } from '@/app/components/server/pagination/examples/Default';
import ExampleSection from '@/app/components/shared/ExampleSection';
import QuickNav from '@/app/components/shared/QuickNav';
import { getExamples } from '@/app/utils/getExamples';
import { MDX } from '@/components/MDX';

export default async function Pagination() {
  const { server } = await getExamples();
  const examplesList = Object.keys(server.pagination.examples);
  return (
    <div className="w-full max-w-7xl flex flex-col gap-4 text-moon-14">
      <h1 className="font-medium text-moon-32">Pagination</h1>
      <MDX markdown={server.pagination.description} />
      <QuickNav items={examplesList} />
      <ExampleSection
        title="Default"
        component={<Default />}
        code={server.pagination.examples.Default}
      />
    </div>
  );
}
