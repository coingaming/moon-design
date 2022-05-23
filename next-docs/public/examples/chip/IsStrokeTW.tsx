import {Chip} from "@heathmont/moon-core-tw";
import {MediaMusic, SoftwareDownload} from "@heathmont/moon-icons";

const Example = () => {
  return (<div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
    <div className="flex justify-around items-center w-full">
      <Chip isStroke size="sm">
        Stroke on hover
      </Chip>
      <Chip isStroke>Stroke on hover</Chip>
    </div>
  </div>);
}

export default Example;
