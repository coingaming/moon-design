import { MenuItem } from '@heathmont/moon-core-tw';
import { SportBadminton } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <MenuItem width="w-56">
      <SportBadminton className="text-[1.5rem]" />
      <MenuItem.Title>Your value</MenuItem.Title>
    </MenuItem>

    <MenuItem width="w-56">
      <MenuItem.Title>Your value</MenuItem.Title>
      <SportBadminton className="text-[1.5rem]" />
    </MenuItem>
  </>
);

export default Example;
