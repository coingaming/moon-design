import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col justify-around items-center w-full">
    <div className="flex justify-around items-center w-full">
      <Avatar
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        isStatusActive={true}
        statusOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      <Avatar
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        isStatusActive={true}
        statusOrigin={{ vertical: 'top', horizontal: 'left' }}
      />
      <Avatar
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        isStatusActive={true}
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        isStatusActive={true}
        statusOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      />
    </div>
  </div>
);

export default Example;
