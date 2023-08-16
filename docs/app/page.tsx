import { CommandMenu } from "@/components/Search";
import { getExamples } from "./utils/getExamples";

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

      <p>
        {JSON.stringify(examples.client.button.description.main, null, 2)}
      </p>
    </div>
  )
}
