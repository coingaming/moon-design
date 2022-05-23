import {Checkbox} from "@heathmont/moon-core-tw";

const DisabledTW = () => {
  return (<div className="flex flex-col gap-y-3">
    <Checkbox
      disabled
      label="I agree to receive bonus & marketing emails."
      id="checkbox4"
    />
  </div>);
}

export default DisabledTW;
