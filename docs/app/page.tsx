import { getExamples } from "./utils/getExamples";
import { MDX } from "@/components/MDX";
import { CommandMenu } from "@/components/Search";

export default async function Home() {
  const examples = await getExamples();

  const items = [
    { label: "Aurum" },
    { label: "Argentum" },
    { label: "Zink" },
    { label: "Plumbum" },
    { label: "Test" }
  ];

  return (
    <div className="">
      Moon Design System
      <CommandMenu items={items} />
      <MDX markdown={examples.client.button.description} />
    </div>
  )
}
