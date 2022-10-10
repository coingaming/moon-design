import React, { useState, useCallback } from 'react';
import { MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronRight, SportBadminton } from '@heathmont/moon-icons-tw';

const Example = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <MenuItem width="w-56">
        <span>
          <ControlsChevronRight className="text-[1.5rem]" />
        </span>
        <MenuItem.MultiTitle
          title="Your value"
          text={
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          }
        />
        <span className="text-moon-12 text-trunks">Meta</span>
      </MenuItem>

      <MenuItem
        width="w-56"
        isActive={active}
        onClick={useCallback(() => setActive(!active), [active])}
      >
        <span className="px-2">
          <SportBadminton className="text-[1.5rem]" />
        </span>
        <MenuItem.MultiTitle
          title="Your value"
          text={
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          }
        />
        <span className="px-2">
          <MenuItem.Checkbox />
        </span>
      </MenuItem>
    </>
  );
};

export default Example;
