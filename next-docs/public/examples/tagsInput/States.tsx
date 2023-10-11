import { TagsInput } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";

const Example = () => {
  const [selected0, setSelected0] = useState<string[]>(['Preset data']);
  const [selected1, setSelected1] = useState<string[]>(['Preset data']);
  const [selected2, setSelected2] = useState<string[]>(['Preset data']);

  const onEnter0 = useCallback((value: string) => {
    setSelected0([...selected0, value]);
  }, [selected0, setSelected0]);

  const onEnter1 = useCallback((value: string) => {
    setSelected1([...selected1, value]);
  }, [selected1, setSelected1]);

  const onEnter2 = useCallback((value: string) => {
    setSelected2([...selected2, value]);
  }, [selected2, setSelected2]);

  const onClear0 = useCallback((index: number) => {
    setSelected0(selected0.filter((item, id) => id !== index));
  }, [selected0, setSelected0]);

  const onClear1 = useCallback((index: number) => {
    setSelected1(selected1.filter((item, id) => id !== index));
  }, [selected1, setSelected1]);

  const onClear2 = useCallback((index: number) => {
    setSelected2(selected2.filter((item, id) => id !== index));
  }, [selected2, setSelected2]);

  return (
    <div className="flex flex-col items-center w-full h-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full gap-4">
        <div className="flex flex-col w-full max-w-xs">
          <TagsInput
            selected={selected0}
            label="Error"
            isError={true}
            onEnter={onEnter0}
            onClear={onClear0}
          >
            {selected0.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <TagsInput
            selected={selected1}
            label="Disabled"
            disabled={true}
            onEnter={onEnter1}
            onClear={onClear1}
          >
            {selected1.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <TagsInput
            selected={selected2}
            label="Placeholder"
            placeholder="Enter your data here"
            onEnter={onEnter2}
            onClear={onClear2}
          >
            {selected2.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
        </div>
      </div>
    </div>
  );
};

export default Example;
