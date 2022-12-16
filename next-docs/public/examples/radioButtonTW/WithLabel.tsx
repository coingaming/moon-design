import { RadioButton } from '@heathmont/moon-core-tw';
import React, { useState } from 'react';

const Example = () => {
  const [selected, setSelected] = useState('');
  const isSelected = (value: string | number): boolean => selected === value;
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.currentTarget.value);
  };
  return (
    <>
      <RadioButton
        name="withLabel"
        value="withLabel1"
        label="Option 1"
        checked={isSelected('withLabel1')}
        onChange={handleClick}
      />
      <RadioButton
        name="withLabel"
        value="withLabel2"
        label="Option 2"
        checked={isSelected('withLabel2')}
        onChange={handleClick}
      />
    </>
  );
};

export default Example;
