import { Progress } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Progress value={75} className="bg-trunks" />
    <Progress value={75} className="bg-whis [&_.progress]:bg-dodoria" />
    <Progress value={75} className="[&_.progress]:bg-roshi" />
  </>
);

export default Example;
