import { Group, Hint } from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-2">
    <div>
      <Group error>
        <Group.FirstInput placeholder="Username" />
        <Group.LastInput placeholder="Password" type="password" />
      </Group>
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </div>
    <div>
      <Group>
        <Group.FirstInput placeholder="Username" error />
        <Group.LastInput placeholder="Password" type="password" />
      </Group>
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </div>
    <div>
      <Group disabled>
        <Group.FirstInput placeholder="Username" />
        <Group.LastInput placeholder="Password" type="password" />
      </Group>
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div>
      <Group readOnly>
        <Group.FirstInput placeholder="Username" />
        <Group.LastInput placeholder="Password" type="password" />
      </Group>
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
