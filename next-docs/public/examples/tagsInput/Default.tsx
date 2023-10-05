import { TagsInput } from "@heathmont/moon-core-tw";
import { useCallback, useEffect, useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const onEnter = useCallback((value: string) => {
      const items = selected;
      items.push(value);
      setSelected(items);
  }, []);

  const onClear = useCallback((index: number) => {
    const items = selected;
    items.splice(index, 1);
    setSelected(items);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full gap-4">
      <TagsInput
        selected={selected}
        className="max-w-xs"
        onEnter={onEnter}
        onClear={onClear}
      />
    </div>
  );
};

export default Example;
