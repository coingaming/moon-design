import { TagsInput } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const onEnter = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      const input = event.target as HTMLInputElement;
      if (input.value.length) {
        const items = selected;
        items.push(input.value);
        setSelected(items);
        input.value = '';
      }
    }
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
