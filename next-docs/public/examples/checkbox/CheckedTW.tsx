import {Checkbox} from "@heathmont/moon-core-tw";
import {useState} from "react";

const CheckedTW = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (<div className="flex flex-col gap-y-3">
    <Checkbox
      checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
      onChange={() => {
        console.log('isChecked:', isChecked);
      }}
      label="I agree to receive bonus & marketing emails."
      id="checkbox2"
    />
  </div>);
}

export default CheckedTW;
