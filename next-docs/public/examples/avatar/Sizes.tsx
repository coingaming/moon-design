import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col w-full">
    <div className="flex justify-around items-center w-full mb-4">
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='xsmall'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='small'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='medium'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='large'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='xlarge'/>
      <Avatar color="gohan.100" backgroundColor="piccolo.100" size='xxlarge'/>
    </div>
    <div className="flex justify-around items-center w-full">
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='xsmall'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='small'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='medium'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='large'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='xlarge'/>
      <Avatar name="JS" color="gohan.100" backgroundColor="piccolo.100" size='xxlarge'/>
    </div>
  </div>
);

export default Example;
