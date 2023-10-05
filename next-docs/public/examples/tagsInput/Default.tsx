import { TagsInput } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState<string[]>(['irgjogjoeirjgoerjg kkh wiu giwg iwn gjigew iwjng', 'cwejn', 'efoijoe iuehi hfiuhwfiueh iuehfiuwhefiwh fiecjwoiejow']);

  const onClear = useCallback((index: number) => {
    const items = selected;
    items.splice(index, 1);
    setSelected(items);
  }, [selected, setSelected]);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full gap-4">
      <TagsInput
        selected={selected}
        className="max-w-xs"
        onClear={onClear}
      />
    </div>
  );
};

export default Example;
