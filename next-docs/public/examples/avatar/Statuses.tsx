import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col justify-around items-center w-full">
    <div className="flex justify-around items-center w-full">
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="xsmall"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="small"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="medium"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </div>

    <div className="flex justify-around items-center w-full mt-4">
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="xsmall"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="small"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="medium"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
      <Avatar
        name="JS"
        color="gohan.100"
        backgroundColor="piccolo.100"
        size="large"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
    </div>
    <div className="flex justify-around items-center w-full mt-4">
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="xsmall"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="small"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="medium"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="large"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </div>
    <div className="flex justify-around items-center w-full mt-4">
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="xsmall"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="small"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="medium"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
      <Avatar
        imageUrl="https://www.fillmurray.com/200/200"
        size="large"
        statusOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        isStatusActive={true}
      />
    </div>
  </div>
);

export default Example;
