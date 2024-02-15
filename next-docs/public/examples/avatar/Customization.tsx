import { Avatar } from '@heathmont/moon-core-tw';
import { GenericUser } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Avatar className="text-chichi">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar className="bg-piccolo text-goten">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar className="rounded-full">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar>
      <GenericUser className="text-moon-24" />
      <Avatar.Status className="bg-chichi" />
    </Avatar>
    <Avatar>
      <GenericUser className="text-moon-24" />
      <Avatar.Status className="border-chichi" />
    </Avatar>
  </>
);

export default Example;
