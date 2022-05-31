import { Button } from '@heathmont/moon-core-tw';
import {GenericSettings} from "@heathmont/moon-icons";

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Button iconRight={<GenericSettings fontSize="1.5rem" />} fullWidth>
      Full width
    </Button>
  </div>
);

export default Example;
