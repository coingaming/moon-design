import { MenuItem } from '@heathmont/moon-core-tw';
import { SportBadminton } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <MenuItem className="w-56">
      <SportBadminton className="text-moon-24" />
      <MenuItem.Title>Your value</MenuItem.Title>
    </MenuItem>
    <MenuItem className="w-56">
      <MenuItem.Title>Your value</MenuItem.Title>
      <SportBadminton className="text-moon-24" />
    </MenuItem>
  </>
);

export default Example;
