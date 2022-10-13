import { useState, useCallback } from 'react';
import { MenuItem } from '@heathmont/moon-core-tw';

const Example = () => {
  const [activeOpt1, setActiveOpt1] = useState(false);
  const [activeOpt2, setActiveOpt2] = useState(false);
  return (
    <>
      <MenuItem
        role="radio"
        width="w-56"
        isActive={activeOpt1}
        onClick={useCallback(() => setActiveOpt1(!activeOpt1), [activeOpt1])}
      >
        <MenuItem.Radio />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>

      <MenuItem
        role="radio"
        width="w-56"
        onClick={useCallback(() => setActiveOpt2(!activeOpt2), [activeOpt2])}
      >
        <MenuItem.Title>Your value</MenuItem.Title>
        <MenuItem.Radio isActive={activeOpt2} />
      </MenuItem>
    </>
  );
};

export default Example;
