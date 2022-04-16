import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col w-full">
    <div className="flex justify-around items-center w-full mb-4">
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='xsmall'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='small'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='medium'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='large'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='xlarge'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='2xlarge'/>
    </div>
    <div className="flex justify-around items-center w-full mb-4">
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='xsmall'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='small'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='medium'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='large'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='xlarge'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='2xlarge'/>
    </div>

    <div className="flex justify-around items-center w-full">
      <Avatar imageUrl="https://www.fillmurray.com/200/200" color="gohan.100" backgroundColor="piccolo.100" size='xsmall'/>
      <Avatar imageUrl="https://www.fillmurray.com/200/200" color="gohan.100" backgroundColor="piccolo.100" size='small'/>
      <Avatar imageUrl="https://www.fillmurray.com/200/200" color="gohan.100" backgroundColor="piccolo.100" size='medium'/>
      <Avatar imageUrl="https://www.fillmurray.com/200/200" color="gohan.100" backgroundColor="piccolo.100" size='large'/>
      <Avatar imageUrl="https://www.fillmurray.com/200/200" color="gohan.100" backgroundColor="piccolo.100" size='xlarge'/>
      <Avatar imageUrl="https://www.fillmurray.com/200/200" color="gohan.100" backgroundColor="piccolo.100" size='2xlarge'/>
    </div>
  </div>
);

export default Example;
