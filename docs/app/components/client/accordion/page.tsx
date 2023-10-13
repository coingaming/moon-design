import { Default } from './examples/Default';
import { getExamples } from '@/app/utils/getExamples';
import { MDX } from '@/components/MDX';

export default async function Home() {
  const { client } = await getExamples();
  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1>Accordion</h1>

      <MDX markdown={client.accordion.description} />

      <div className="space-y-2">
        <h2>Default</h2>
        <div
          className={
            'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-gohan rounded-moon-s-sm'
          }
        >
          <Default />
        </div>
        <pre className="bg-gohan rounded-moon-s-sm p-4">
          {client.accordion.examples.Default}
        </pre>
      </div>
    </div>
  );
}
