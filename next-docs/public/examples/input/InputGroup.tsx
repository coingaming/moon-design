import { InputGroup } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex flex-col gap-3">
        <InputGroup orientation="vertical">
          <InputGroup.FirstInput placeholder="Placeholder 1" error />
          <InputGroup.LastInput placeholder="Placeholder 2" />
        </InputGroup>

        <InputGroup orientation="horizontal">
          <InputGroup.FirstInput placeholder="Placeholder 1" />
          <InputGroup.LastInput placeholder="Placeholder 2" />
        </InputGroup>
      </div>

      <div className="flex flex-col gap-3">
        <InputGroup orientation="vertical">
          <InputGroup.FirstInsetInput placeholder="Placeholder 1">
            <InputGroup.FirstInsetInput.Label>
              Label
            </InputGroup.FirstInsetInput.Label>
          </InputGroup.FirstInsetInput>
          <InputGroup.LastInsetInput placeholder="Placeholder 2">
            <InputGroup.LastInsetInput.Label>
              Label
            </InputGroup.LastInsetInput.Label>
          </InputGroup.LastInsetInput>
        </InputGroup>

        <InputGroup orientation="horizontal">
          <InputGroup.FirstInsetInput placeholder="Placeholder 1" />
          <InputGroup.LastInsetInput placeholder="Placeholder 2" />
        </InputGroup>
      </div>

      <div className=" flex flex-col gap-3">
        <InputGroup orientation="vertical" size="sm">
          <InputGroup.Select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </InputGroup.Select>
        </InputGroup>
      </div>
    </div>
  );
};

export default Example;
