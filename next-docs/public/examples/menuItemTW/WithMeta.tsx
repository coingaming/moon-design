import { MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="w-56">
      <MenuItem>
        <MenuItem.Title>Your value</MenuItem.Title>
        <span className="text-moon-12 text-trunks">Meta</span>
      </MenuItem>
    </div>
    <div className="w-56">
      <MenuItem>
        <ControlsChevronRight className="text-[1.5rem]" />
        <MenuItem.Title>Your value</MenuItem.Title>
        <span className="text-moon-12 text-trunks">Meta</span>
      </MenuItem>
    </div>
  </>
);

export default Example;
