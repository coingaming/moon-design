import { Group } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <Group error>
      <Group.FirstInput placeholder="Username" />
      <Group.LastInput placeholder="Password" type="password" />
    </Group>

    <Group disabled>
      <Group.FirstInput placeholder="Username" />
      <Group.LastInput placeholder="Password" type="password" />
    </Group>

    <Group readOnly>
      <Group.FirstInput placeholder="Username" />
      <Group.LastInput placeholder="Password" type="password" />
    </Group>
  </div>
);

export default Example;
