import { TagsInput } from '@heathmont/moon-core-tw';
import { useCallback, useState } from 'react';

const Example = () => {
  const [selected0, setSelected0] = useState<string[]>([]);
  const [selected1, setSelected1] = useState<string[]>([]);
  const [selected2, setSelected2] = useState<string[]>([]);

  const onEnter0 = useCallback(
    (value: string) => {
      setSelected0([...selected0, value]);
    },
    [selected0, setSelected0]
  );

  const onEnter1 = useCallback(
    (value: string) => {
      setSelected1([...selected1, value]);
    },
    [selected1, setSelected1]
  );

  const onEnter2 = useCallback(
    (value: string) => {
      setSelected2([...selected2, value]);
    },
    [selected2, setSelected2]
  );

  const onClear0 = useCallback(
    (index: number) => {
      setSelected0(selected0.filter((item, id) => id !== index));
    },
    [selected0, setSelected0]
  );

  const onClear1 = useCallback(
    (index: number) => {
      setSelected1(selected1.filter((item, id) => id !== index));
    },
    [selected1, setSelected1]
  );

  const onClear2 = useCallback(
    (index: number) => {
      setSelected2(selected2.filter((item, id) => id !== index));
    },
    [selected2, setSelected2]
  );

  return (
    <div className="flex flex-col items-center w-full h-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-end w-full gap-2">
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected0}
            label="Small"
            onEnter={onEnter0}
            onClear={onClear0}
            size="sm"
          >
            {selected0.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
        </div>
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected1}
            label="Medium (default)"
            onEnter={onEnter1}
            onClear={onClear1}
          >
            {selected1.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
        </div>
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected2}
            label="Large"
            onEnter={onEnter2}
            onClear={onClear2}
            size="lg"
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
