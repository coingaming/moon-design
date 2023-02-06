import { Group } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [selected, setSelected] = useState('');
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex flex-col gap-3">
        <Group orientation="vertical">
          <Group.FirstInput placeholder="Placeholder 1" />
          <Group.LastInput placeholder="Placeholder 2" />
        </Group>
        <Group orientation="horizontal">
          <Group.FirstInput placeholder="Placeholder 1" />
          <Group.LastInput placeholder="Placeholder 2" />
        </Group>
        <Group orientation="vertical">
          <Group.FirstInsetInput placeholder="Placeholder 1">
            <Group.FirstInsetInput.Label>Label</Group.FirstInsetInput.Label>
          </Group.FirstInsetInput>
          <Group.LastInsetInput placeholder="Placeholder 2">
            <Group.LastInsetInput.Label>Label</Group.LastInsetInput.Label>
          </Group.LastInsetInput>
        </Group>
        <Group orientation="horizontal">
          <Group.FirstInsetInput placeholder="Placeholder 1">
            <Group.FirstInsetInput.Label>Label</Group.FirstInsetInput.Label>
          </Group.FirstInsetInput>
          <Group.LastInsetInput placeholder="Placeholder 2">
            <Group.LastInsetInput.Label>Label</Group.LastInsetInput.Label>
          </Group.LastInsetInput>
        </Group>
        <Group orientation="vertical">
          <Group.FirstSelect placeholder="Placeholder 1" className="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Group.FirstSelect>
          <Group.LastInput placeholder="Placeholder 2" />
        </Group>
        <Group orientation="horizontal">
          <Group.FirstSelect placeholder="Placeholder 1">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Group.FirstSelect>
          <Group.LastInput placeholder="Placeholder 2" />
        </Group>

        <Group orientation="horizontal">
          <Group.FirstInsetSelect
            value={selected}
            label="Label"
            onChange={(e) => setSelected(e.target.value)}
            placeholder="Placeholder"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Group.FirstInsetSelect>
          <Group.LastInsetInput placeholder="Placeholder 2">
            <Group.LastInsetInput.Label>Label</Group.LastInsetInput.Label>
          </Group.LastInsetInput>
        </Group>
      </div>
    </div>
  );
};

export default Example;
