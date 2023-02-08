import { Group } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <Group error>
      <Group.FirstInput placeholder="Username" />
      <Group.LastInput placeholder="Password" type="password" />
    </Group>

    <Group>
      <Group.FirstInput placeholder="Username" disabled />
      <Group.LastInput placeholder="Password" type="password" disabled />
    </Group>

    <Group>
      <Group.FirstInput placeholder="Username" readOnly />
      <Group.LastInput placeholder="Password" type="password" readOnly />
    </Group>
  </div>
);

export default Example;
