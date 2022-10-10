import { MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <MenuItem width="w-56">
      <MenuItem.Title>Your value</MenuItem.Title>
      <span className="text-moon-12 text-trunks">Meta</span>
    </MenuItem>

    <MenuItem width="w-56">
      <ControlsChevronRight className="text-[1.5rem]" />
      <MenuItem.Title>Your value</MenuItem.Title>
      <span className="text-moon-12 text-trunks">Meta</span>
    </MenuItem>
  </>
);

export default Example;
