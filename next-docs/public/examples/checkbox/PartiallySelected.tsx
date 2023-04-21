import React from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <div>
      <Checkbox
        checked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        label="Parent "
      />
      <div className="flex flex-coll gap-4 pl-4">
        <Checkbox
          checked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          label="Checked"
        />
        <Checkbox
          checked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          label="Checked"
        />
      </div>
    </div>
  );
};

export default Example;
