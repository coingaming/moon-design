import { Group } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col gap-6 justify-center items-center">
    <Group orientation="vertical">
      <Group.FirstInput placeholder="Username" />
      <Group.LastInput placeholder="Password" type="password" />
    </Group>

    <Group orientation="horizontal">
      <Group.FirstInput placeholder="Expiry date" />
      <Group.LastInput placeholder="Security code" />
    </Group>
  </div>
);

export default Example;
