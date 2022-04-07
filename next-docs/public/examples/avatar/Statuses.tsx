import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Avatar
      color="gohan.100"
      backgroundColor="piccolo.100"
      statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    />
    <Avatar
      color="gohan.100"
      backgroundColor="piccolo.100"
      isStatusActive={true}
      statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    />
  </div>
);

export default Example;
