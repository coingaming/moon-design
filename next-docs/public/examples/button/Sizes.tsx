import { Button } from '@heathmont/moon-components';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Button variant="primary" size="xsmall">
      Xsmall
    </Button>
    <Button variant="primary" size="small">
      Small
    </Button>
    <Button variant="primary" size="medium">
      Medium
    </Button>
    <Button variant="primary" size="large">
      Large
    </Button>
  </div>
);

export default Example;
