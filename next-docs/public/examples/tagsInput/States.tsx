import { Hint, TagsInput } from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';
import { useCallback, useState } from 'react';

const Example = () => {
  const [selected0, setSelected0] = useState<string[]>(['Preset data']);
  const [selected1, setSelected1] = useState<string[]>(['Preset data']);
  const [selected2, setSelected2] = useState<string[]>(['Preset data']);

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
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full gap-2">
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected1}
            label="Disabled"
            disabled
            onEnter={onEnter1}
            onClear={onClear1}
          >
            {selected1.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
          <Hint disabled>Informative message holder</Hint>
        </div>
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected0}
            label="Error"
            isError
            onEnter={onEnter0}
            onClear={onClear0}
          >
            {selected0.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
          <Hint error>
            <GenericInfo />
            Informative message holder
          </Hint>
        </div>
      </div>
    </div>
  );
};

export default Example;
