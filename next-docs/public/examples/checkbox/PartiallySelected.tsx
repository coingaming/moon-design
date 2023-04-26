import React from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <div className="flex flex-col gap-2">
      <Checkbox
        checked={allChecked}
        indeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        label="Parent "
      />
      <div className="flex flex-col pl-4">
        <Checkbox
          checked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          label="Child 1"
        />
        <Checkbox
          checked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          label="Child 2"
        />
      </div>
    </div>
  );
};

export default Example;
