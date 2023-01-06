import { CircularProgress } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <CircularProgress size="2xs" value={75} />
    <CircularProgress size="xs" value={75} />
    <CircularProgress size="sm" value={75} />
    <CircularProgress value={75} />
    <CircularProgress size="lg" value={75} />
  </>
);

export default Example;
