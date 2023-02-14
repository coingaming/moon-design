import { Group } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col gap-4">
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
      <Group.FirstSelect placeholder="Country / Region">
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </Group.FirstSelect>
      <Group.LastInput placeholder="Phone number" />
    </Group>

    <Group orientation="horizontal">
      <Group.FirstInput placeholder="Street" />
      <Group.LastSelect placeholder="Number">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Group.LastSelect>
    </Group>

    <Group orientation="vertical">
      <Group.FirstInsetSelect label="Country / Region">
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </Group.FirstInsetSelect>
      <Group.LastInsetInput>
        <Group.LastInsetInput.Label>Phone number</Group.LastInsetInput.Label>
      </Group.LastInsetInput>
    </Group>

    <Group orientation="horizontal">
      <Group.FirstInsetInput placeholder="Put your name...">
        <Group.FirstInsetInput.Label>Name</Group.FirstInsetInput.Label>
      </Group.FirstInsetInput>
      <Group.LastInsetSelect label="Country / Region">
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </Group.LastInsetSelect>
    </Group>
  </div>
);

export default Example;
