import {Chip} from "@heathmont/moon-core-tw";

const Example = () => {
  return (<div className="flex justify-around items-center w-full">
    <Chip isActive size="sm">
      Active
    </Chip>
    <Chip isActive isStroke>
      Active
    </Chip>
  </div>);
}

export default Example;
