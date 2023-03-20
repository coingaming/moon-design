import {
  MenuItem,
} from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <MenuItem isActive={true}>
    <MenuItem.Title>Test Title</MenuItem.Title>
    <span className="text-moon-12 text-trunks">
      Search Modal
    </span>
  </MenuItem>
  );
};

export default Example;
