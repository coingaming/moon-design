import { MenuItem } from '@heathmont/moon-core-tw';
import { SportBadminton } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="w-56">
      <MenuItem>
        <SportBadminton className="text-[1.5rem]" />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>
    </div>
    <div className="w-56">
      <MenuItem>
        <MenuItem.Title>Your value</MenuItem.Title>
        <SportBadminton className="text-[1.5rem]" />
      </MenuItem>
    </div>
  </>
);

export default Example;
