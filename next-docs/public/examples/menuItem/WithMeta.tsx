import { MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <MenuItem className="w-56">
      <MenuItem.Title>Your value</MenuItem.Title>
      <span className="text-moon-12 text-trunks">Meta</span>
    </MenuItem>
    <MenuItem className="w-56">
      <ControlsChevronRight className="text-moon-24" />
      <MenuItem.Title>Your value</MenuItem.Title>
      <span className="text-moon-12 text-trunks">Meta</span>
    </MenuItem>
  </>
);

export default Example;
