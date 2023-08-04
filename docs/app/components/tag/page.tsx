import { Default } from "@/app/components/tag/examples/Default";
import { getSourceCode } from "@/app/utils/getSourceCode";

export default async function Home() {
  const defaultCode = await getSourceCode('./app/components/tag/examples/Default.tsx');

  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1>Tag</h1>

      <div className="space-y-2">
        <h2>Default</h2>
        <div className={'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku rounded-moon-s-sm'}>
          <Default />
        </div>
        <pre className="bg-goku rounded-moon-s-sm p-4">{defaultCode}</pre>
      </div>
    </div>
  )
}

