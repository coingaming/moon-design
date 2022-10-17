import { useState, useCallback } from 'react';
import { MenuItem } from '@heathmont/moon-core-tw';

const Example = () => {
  const [activeOpt1, setActiveOpt1] = useState(false);
  const [activeOpt2, setActiveOpt2] = useState(false);
  return (
    <>
      <MenuItem
        role="сheckbox"
        width="w-56"
        isActive={activeOpt1}
        onClick={useCallback(() => setActiveOpt1(!activeOpt1), [activeOpt1])}
      >
        <MenuItem.Checkbox />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>

      <MenuItem
        role="сheckbox"
        width="w-56"
        isActive={activeOpt2}
        onClick={useCallback(() => setActiveOpt2(!activeOpt2), [activeOpt2])}
      >
        <MenuItem.Title>Your value</MenuItem.Title>
        <MenuItem.Checkbox />
      </MenuItem>
    </>
  );
};

export default Example;
