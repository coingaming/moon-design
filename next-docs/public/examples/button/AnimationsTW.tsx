import { Button } from '@heathmont/moon-core-tw';
import {GenericSettings} from "@heathmont/moon-icons";

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Button animation="progress">Progress</Button>
    <Button animation="success">Success</Button>
    <Button animation="error">Error</Button>
    <Button animation="pulse">Pulse</Button>
  </div>
);

export default Example;
