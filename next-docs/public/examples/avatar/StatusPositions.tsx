import { Avatar } from '@heathmont/moon-components';

const Example = () => (
  <div className="flex flex-col justify-around items-center w-full">
    <div className="flex justify-around items-center w-full">
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        statusOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        statusOrigin={{ vertical: 'top', horizontal: 'left' }}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        statusOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      />
    </div>
  </div>
);

export default Example;
