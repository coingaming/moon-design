import { Default } from "@/app/components/avatar/examples/Default";
import { Active } from "@/app/components/avatar/examples/Active";
import { getSourceCode } from "@/app/utils/getSourceCode";

export default async function Home() {
  // TODO too much boilerplate code
  const defaultCode = await getSourceCode('./app/components/avatar/examples/Default.tsx');
  const activeCode = await getSourceCode('./app/components/avatar/examples/Active.tsx');

  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1>Avatar</h1>

      <div className="space-y-2">
        <h2>Default</h2>
        <div className={'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku rounded-moon-s-sm'}>
          <Default />
        </div>
        <pre className="bg-goku rounded-moon-s-sm p-4">{defaultCode}</pre>
      </div>

      <div className="space-y-2">
        <h2>Active</h2>
        <div className={'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku rounded-moon-s-sm'}>
          <Active />
        </div>
        <pre className="bg-goku rounded-moon-s-sm p-4">{activeCode}</pre>
      </div>
    </div>
  )
}

