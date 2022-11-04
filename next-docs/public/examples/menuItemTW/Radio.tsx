import { useState, useCallback } from 'react';
import { MenuItem } from '@heathmont/moon-core-tw';

const Example = () => {
  const [activeOpt1, setActiveOpt1] = useState(false);
  const [activeOpt2, setActiveOpt2] = useState(false);
  return (
    <>
      <div className="w-56">
        <MenuItem
          role="radio"
          isSelected={activeOpt1}
          onClick={useCallback(() => setActiveOpt1(!activeOpt1), [activeOpt1])}
        >
          <MenuItem.Radio />
          <MenuItem.Title>Your value</MenuItem.Title>
        </MenuItem>
      </div>
      <div className="w-56">
        <MenuItem
          role="radio"
          isSelected={activeOpt2}
          onClick={useCallback(() => setActiveOpt2(!activeOpt2), [activeOpt2])}
        >
          <MenuItem.Title>Your value</MenuItem.Title>
          <MenuItem.Radio />
        </MenuItem>
      </div>
    </>
  );
};

export default Example;
