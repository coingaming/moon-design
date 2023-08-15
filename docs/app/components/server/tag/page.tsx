import { Default } from "@/app/components/server/tag/examples/Default";
import { getExamples } from "@/app/utils/getExamples";
import { MDX } from "@/components/MDX";

export default async function Home() {
  const { server } = await getExamples();

  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1>Tag</h1>

      <MDX markdown={server.tag.description.main} />

      <div className="space-y-2">
        <h2>Default</h2>
        <div className={'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku rounded-moon-s-sm'}>
          <Default />
        </div>
        <pre className="bg-goku rounded-moon-s-sm p-4">{server.tag.examples.Default}</pre>
      </div>
    </div>
  )
}

