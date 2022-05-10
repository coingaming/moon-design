import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Avatar
      isStatusActive
      statusOrigin={{ vertical: 'top', horizontal: 'right' }}
    />
    <Avatar
      isStatusActive
      statusOrigin={{ vertical: 'top', horizontal: 'left' }}
    />
    <Avatar isStatusActive />
    <Avatar
      isStatusActive
      statusOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    />
  </div>
);

export default Example;
