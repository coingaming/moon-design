import { MenuItem } from '@heathmont/moon-core-tw';
import { SportBadminton } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="w-56">
      <MenuItem>
        <SportBadminton className="text-moon-24" />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>
    </div>
    <div className="w-56">
      <MenuItem>
        <MenuItem.Title>Your value</MenuItem.Title>
        <SportBadminton className="text-moon-24" />
      </MenuItem>
    </div>
  </>
);

export default Example;
