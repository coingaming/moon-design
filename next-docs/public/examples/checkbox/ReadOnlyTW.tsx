import {Checkbox} from "@heathmont/moon-core-tw";

const ReadOnlyTW = () => {
  return (<div className="flex flex-col gap-y-3">
    <Checkbox readOnly={true} label="Readonly checkbox." id="checkbox4" />
  </div>);
}

export default ReadOnlyTW;
