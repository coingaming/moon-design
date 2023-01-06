import { CircularProgress } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <CircularProgress value={75} bgColor="stroke-trunks" />
    <CircularProgress
      value={75}
      bgColor="stroke-whis"
      progressColor="stroke-dodoria"
    />
    <CircularProgress value={75} progressColor="stroke-roshi" />
  </>
);

export default Example;
