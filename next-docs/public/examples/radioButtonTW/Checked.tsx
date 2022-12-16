import { RadioButton } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [selected, setSelected] = useState('option1');
  const isSelected = (value: string | number): boolean => selected === value;
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.currentTarget.value);
  };
  return (
    <>
      <RadioButton name="option" value="option1" label="Option 1" checked />
      <RadioButton name="option" value="option2" label="Option 2" />
    </>
  );
};

export default Example;
