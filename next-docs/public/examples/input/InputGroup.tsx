import { Group } from '@heathmont/moon-core-tw';

const Example = () => {
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
          <Group.FirstInsetSelect label="label">
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

{
  /* <>

<Group orientation="vertical">
  <Input placeholder="Placeholder 1" error /> //.moon-group
  <Input placeholder="Placeholder 1" error/> //.moon-group
</Group>
  

<Group orientation="vertical">
  <Group.FirstInput placeholder="Placeholder 1" error />
  <Group.LastInput placeholder="Placeholder 2" />
</Group>
  



<Group orientation="horizontal">
  <Group.FirstDropdown size="sm">
    <Group.FirstDropdown.Options>
      <Group.FirstDropdown.Option />
      <Group.FirstDropdown.Option />
      <Group.FirstDropdown.Option />
    </Group.FirstDropdown.Options>
  </Group.FirstDropdown>
</Group>;
</> */
  //   </div>
  //   <div className="flex flex-col gap-3">
  //     <Group orientation="vertical">
  //       <Group.FirstInsetInput placeholder="Placeholder 1">
  //         <Group.FirstInsetInput.Label>Label</Group.FirstInsetInput.Label>
  //       </Group.FirstInsetInput>
  //       <Group.LastInsetInput placeholder="Placeholder 2">
  //         <Group.LastInsetInput.Label>Label</Group.LastInsetInput.Label>
  //       </Group.LastInsetInput>
  //     </Group>
  //     <Group orientation="horizontal">
  //       <Group.FirstInsetInput placeholder="Placeholder 1" />
  //       <Group.LastInsetInput placeholder="Placeholder 2" />
  //     </Group>
  //   </div>
  //   <div className=" flex flex-col gap-3">
  //     <Group orientation="horizontal">
  //       <Group.Select size="sm">
  //         <option value="volvo">Volvo</option>
  //         <option value="saab">Saab</option>
  //         <option value="mercedes">Mercedes</option>
  //         <option value="audi">Audi</option>
  //       </Group.Select>
  //     </Group>
  //     <Group orientation="horizontal">
  //       <Group.Select>
  //         <option value="volvo">Volvo</option>
  //         <option value="saab">Saab</option>
  //         <option value="mercedes">Mercedes</option>
  //         <option value="audi">Audi</option>
  //       </Group.Select>
  //     </Group>
  //     <Group orientation="horizontal">
  //       <Group.Select size="lg">
  //         <option value="volvo">Volvo</option>
  //         <option value="saab">Saab</option>
  //         <option value="mercedes">Mercedes</option>
  //         <option value="audi">Audi</option>
  //       </Group.Select>
  //       <Group.Select size="lg">
  //         <option value="volvo">Volvo</option>
  //         <option value="saab">Saab</option>
  //         <option value="mercedes">Mercedes</option>
  //         <option value="audi">Audi</option>
  //       </Group.Select>
  //     </Group>
}
